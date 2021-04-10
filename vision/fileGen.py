from vision import OwlVision
import cv2
import pdb
import os
import json
import argparse

def writeObjToJSON(obj, file):
    with open(file, 'w') as outfile:
        json.dump(obj, outfile)

def run(
        videoSource,
        heros, 
        usernames,
        homeTeam,
        awayTeam,
        winner,
        everyNFrames,
        startFrame,
        endFrame,
        dest,
        name,
        redMask=[],
        deltaHealthX=0,
        deltaHealthY=0
        ):
    vision = OwlVision(heros, usernames, homeTeam, awayTeam, "")
    if len(redMask) == 6:
        vision.setRedMask(redMask[0], redMask[1], redMask[2], redMask[3], redMask[4], redMask[5])
    if deltaHealthX:
        vision.deltaHealthStartPoints(deltaHealthX, 0)
    if deltaHealthY:
        vision.deltaHealthStartPoints(0, deltaHealthY)
    capture = cv2.VideoCapture(videoSource)
    frames = [];
    frame = 0
    frame_gen_count = 1;
    frames_to_gen = (endFrame-startFrame) // everyNFrames + 1
    while True:
        success, img = capture.read()

        if(frame > endFrame):
            break; 


        if(frame % everyNFrames != 0):
            frame += 1
            continue;
        
        frame += 1

        vision.setImage(img)
        frames.append(vision.createInputStateFromBaseImg())

        print('Generated frame '+str(frame_gen_count)+'/'+str(frames_to_gen))
        frame_gen_count += 1
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
     
    
    # write to file everyNFrames, startFrame, endFrame
    out = {}
    frames[len(frames)-1]['winner'] = winner;
    out['frames'] = frames;
    out['src'] = os.path.abspath(videoSource)
    out['everyNFrames'] = everyNFrames
    out['startFrame'] = startFrame
    out['endFrame'] = endFrame
    writeObjToJSON(out, os.path.join(dest, name+'.json'))

parser = argparse.ArgumentParser()

parser.add_argument('--video', type=str, required=True)
parser.add_argument('--heros', type=str, required=True)
parser.add_argument('--usernames', type=str, required=True)
parser.add_argument('--away', type=str, required=True)
parser.add_argument('--home', type=str, required=True)
parser.add_argument('--winner', type=str, required=True)
parser.add_argument('--everyNFrames', type=int, required=True)
parser.add_argument('--startFrame', type=int, required=True)
parser.add_argument('--endFrame', type=int, required=True)
parser.add_argument('--dest', type=str, required=True)
parser.add_argument('--name', type=str, required=True)
parser.add_argument('--red', type=str)
parser.add_argument('--deltaHealthX', type=int)
parser.add_argument('--deltaHealthY', type=int)


args = parser.parse_args()

heros = args.heros.split(',')
usernames = args.usernames.split(',')

assert(len(heros) == 12)
assert(len(usernames) == 12)
assert(args.winner == "HOME" or args.winner == "AWAY" or args.winner == "")
assert(args.endFrame > args.startFrame)
assert(args.endFrame - args.startFrame >= args.everyNFrames)
assert(not args.red or (args.red and len(args.red.split(",")) == 6))

reds = []
if(args.red is not None and len(args.red.split(",")) == 6):
    reds = args.red.split(",")
    reds = [int(x) for x in reds]

run(
    args.video,
    heros,
    usernames,
    args.home,
    args.away,
    args.winner,
    args.everyNFrames,
    args.startFrame,
    args.endFrame,
    args.dest,
    args.name,
    reds,
    args.deltaHealthX,
    args.deltaHealthY
)
