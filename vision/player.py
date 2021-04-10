import cv2
import json
import argparse

def writeObjToJSON(obj, file):
    with open(file, 'w') as outfile:
        json.dump(obj, outfile)

def run(vision_file_src, state_file_src):
    video_src = None
    everyNFrames = None
    startFrame = None
    endFrame = None
    frames = None
    window_name = 'video'

    # cv2.namedWindow(window_name, cv2.WND_PROP_FULLSCREEN)
    # cv2.setWindowProperty(window_name, cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)

    with open(vision_file_src, 'r') as vision_data:
        data = json.load(vision_data)
        video_src = data['src']
        everyNFrames = data['everyNFrames']
        startFrame = data['startFrame']
        endFrame = data['endFrame'] 
        frames = data['frames']

    capture = cv2.VideoCapture(video_src)

    frame = 0;
    obj_counter = 0;
    
    while True: 
        print(frame)
        if(frame > endFrame):
            break

        success, img = capture.read()
        cv2.imshow(window_name, img)

        if(frame < startFrame):
            frame = frame + 1
            continue;

        if(frame % everyNFrames == 0):
            writeObjToJSON(frames[obj_counter], state_file_src)
            obj_counter = obj_counter + 1

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
            
        frame = frame + 1;

parser = argparse.ArgumentParser()

parser.add_argument('--visionFile', type=str, required=True)
parser.add_argument('--stateFile', type=str, required=True)

args = parser.parse_args()

run(args.visionFile, args.stateFile)