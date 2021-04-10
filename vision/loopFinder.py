import cv2
import pdb
from moviepy.editor import *
import numpy as np
import os
from os import listdir
from os.path import isfile, join
from matplotlib import pyplot
from matplotlib import style

def plotAccuracy(name, accuracies, frame_start, frame_end, x, y, out_dir):
    x_accuracies = np.linspace(frame_start, frame_end, frame_end - frame_start)
    pyplot.figure()
    pyplot.title(name)
    pyplot.plot(x_accuracies,accuracies)
    pyplot.plot(x, y, 'bo')
    pyplot.xlabel("Frame")
    pyplot.ylabel("Accuracies")
    pyplot.savefig(os.path.join(out_dir, name+".png"))

def run_one(
    videos_path, 
    start_frame, 
    min_frames, 
    max_frames, 
    fps, 
    output_dir, 
    file_type,
    hue_min,
    hue_max,
    sat_min,
    sat_max,
    val_min,
    val_max,
    graphs_dir
):
    """
    Parameters
    ----------
    video_path : str

    min_frames: int
        Minimum number of frames per interval

    max_frames: int
        Maximum number of frames per interval

    fps: int
        FPS of the video

    output_dir: str
        Output directory 

    start_frame: int
        Start is start_frame + frame_padding
    
    file_type: str
        file extension (mp4)

    hue_min: int
        Minimum Hue value for HSV mask (background)
    
    hue_max: int
        Maximum Hue value for HSV mask (background)
    
    sat_min: int
        Minimum Saturation value for HSV mask (background)

    sat_max: int
        Maximum Saturation value for HSV mask (background)
    
    val_min: int
        Minimum Value value for HSV mask (background)

    val_max: int
        Maximum Value value for HSV mask (background)
    """


    file_names = [f.split(".")[0] for f in listdir(videos_path) if isfile(join(videos_path, f))]
    
    start = start_frame

    for file in file_names:
        
        images = []
        path = os.path.join(videos_path, file+"."+file_type)
        capture = cv2.VideoCapture(path)
        #get all images
        while True:
            success, img = capture.read()
            if not success:
                break
            images.append(img)


        LOWER = np.array([hue_min, sat_min, val_min])
        UPPER = np.array([hue_max, sat_max, val_max])

        video = VideoFileClip(path)

        best_accuray = 0
        target_frame = 0

        target_hsv = cv2.cvtColor(images[start], cv2.COLOR_BGR2HSV)
        target_mask = cv2.inRange(target_hsv, LOWER, UPPER)
        target_mask = np.invert(target_mask)

        accuracies = []
        begin = start + min_frames
        end = min(start + max_frames, len(images))
        for i in range(begin, end):
            img = images[i]
            img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
            img_mask = cv2.inRange(img_hsv, LOWER, UPPER)
            img_mask = np.invert(img_mask)

            img_and = cv2.bitwise_and(img_mask, target_mask)
            accuracy = np.sum(img_and) / np.sum(target_mask)
            accuracies.append(accuracy)

            if accuracy > best_accuray:
                best_accuray = accuracy
                target_frame = i

        plotAccuracy(file, accuracies, begin, end, target_frame, best_accuray, graphs_dir)
        t1 = start/fps
        t2 = target_frame/fps

        #trim and output video
        origin_video = video.subclip(t1, video.end)
        trimmed_video = video.subclip(t1, t2)
        FADE_DURATION = 0.2
        combined = CompositeVideoClip([origin_video, trimmed_video.set_start(trimmed_video.end).crossfadein(FADE_DURATION)])
        final_video = combined.subclip(FADE_DURATION, t2 - t1 + FADE_DURATION)
        out_path = os.path.join(output_dir, file+"."+file_type)
        final_video.write_videofile(out_path, codec='libx264')

# run_one(
#     "./trimmed-videos/fuel", 
#     210, 200, 380,30,"./looped-videos","mp4",90,153,0,71,177,255
# )

run_one(
    "H:/owl-arena/trimmed-videos/reign", 
    210, 200, 380,30,"H:/owl-arena/looped-videos","mp4",90,153,0,71,177,255, 
    "H:/owl-arena/graphs"
)