# OWL Vision

## Example Workflow
**1. Enable the Conda Environment**
   a. `cd vision`
   b.  `conda env create --file conda.yml`
   c. `conda activate owl_vision`


**2. Generate the `Vision File`**

The `Vision File` stores information about how the video file should be played and an array of the game states captured

```
python fileGen.py --video ./videos/dragons.mp4 --heros ZENYATTA,LUCIO,SOMBRA,REINHARDT,ZARYA,BRIGITTE,BRIGITTE,WINSTON,ZARYA,D.VA,LUCIO,ZENYATTA --usernames luffy,coma,dding,gamsu,diem,youngjin,blase,axxiom,colourhex,note,kellex,aimgod --away DRAGONS --home UPRISING --winner AWAY --everyNFrames 60 --startFrame 0 --endFrame 1320 --dest . --name dragons_frames
```

**3. Run the player**

The player reads in the `Vision File`, writes the current game state to a `State File`, and displays the video in a window.

The `State File` should be located in `/server`. This is the file the `server` listens to and broadcasts it's data to the `client`

```
python player.py --visionFile dragons_frames.json --stateFile ../server/state-file.json
```
