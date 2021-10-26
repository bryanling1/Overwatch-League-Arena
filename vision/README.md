# OWL Vision

## Example Workflow

**1. Enable the Conda Environment**
a. `cd vision`
b. `conda env create --file conda.yml`
c. `conda activate owl_vision`

**2. Generate the `Vision File`**

The `Vision File` stores information about how the video file should be played and an array of the game states captured

Dragons

```
python fileGen.py --video ./videos/dragons.mp4 --heros ZENYATTA,LUCIO,SOMBRA,REINHARDT,ZARYA,BRIGITTE,BRIGITTE,WINSTON,ZARYA,D.VA,LUCIO,ZENYATTA --usernames luffy,coma,dding,gamsu,diem,youngjin,blase,axxiom,colourhex,note,kellex,aimgod --away DRAGONS --home UPRISING --winner AWAY --everyNFrames 60 --startFrame 0 --endFrame 1320 --dest . --name dragons_frames
```

<!-- Excelsior
```
python fileGen.py --video ./videos/excel_trimmed.mp4 --heros TRACER,WINSTON,D.VA,ZENYATTA,MERCY,WIDOWMAKER,WIDOWMAKER,REINHARDT,D.VA,PHARAH,MERCY,MOIRA --usernames s
aebyeolbe,mano,meko,jjonak,anamo,pine,surefour,fissure,bischu,hydration,biggoose,shaz --away EXCELSIOR --home GLADIATORS --winner "" --everyNFrames 20 --startFrame 0 -
-endFrame 740 --dest . --name excel_frames --red 162,179,119,255,86,255
``` -->

<!-- fuel
```
python fileGen.py --video ./videos/fuel_trimmed.mp4 --heros JUNKRAT,CASSIDY,D.VA,ORISA,MERCY,ZENYATTA,TRACER,WINSTON,D.VA,PHARAH,MERCY,ZENYATTA --usernames seagull,effect,mickie,cocco,chipshajen,custa,danteh,nomy,nevix,babybay,dhak,sleepy --away FUEL --home SHOCK --winner "" --everyNFrames 20 --startFrame 0 --endFrame 900 --dest . --name fuel_frames --red 162,179,119,255,86,255
``` -->

<!-- fusion
```
python fileGen.py --video ./videos/fusion.mp4 --heros HANZO,PHARAH,ORISA,D.VA,ROADHOG,MERCY,PHARAH,WINSTON,D.VA,ZENYATTA,MERCY,TRACER --usernames carpe,eqo,sado,hotba,boombox,neptuno,libero,janus,meko,jjonak,ark,pine --away FUSION --home EXCELSIOR --winner "" --everyNFrames 20 --startFrame 0 --endFrame 800 --dest . --name fusion_frames --red 162,179,119,255,86,255
```

mayhem
```
python fileGen.py --video ./videos/mayhem_trimmed.mp4 --heros  WINSTON,WIDOWMAKER,D.VA,GENJI,ZENYATTA,MERCY,BASTION,ORISA,ROADHOG,WIDOWMAKER,D.VA,MERCY --usernames fate,soon,space,agilities,kariv,custa,tviq,awesomeguy,manneten,sayaplayer,zebbosai,zuppeh --away VALIANT --home MAYHEM --winner "" --everyNFrames 20 --startFrame 0 --endFrame 800 --dest . --name mayhem_frames --red 162,179,119,255,86,255
```

justice
```
python fileGen.py --video ./videos/justice_trimmed.mp4 --heros  CASSIDY,MEI,REINHARDT,D.VA,ANA,LUCIO,CASSIDY,MEI,REINHARDT,D.VA,ANA,LUCIO --usernames flister,schwi,jmac,clestyn,highly,sanguinar,corey,stratus,roar,ellivote,aimgod,ark --away SPITFIRE --home JUSTICE --winner "" --everyNFrames 20 --startFrame 0 --endFrame 800 --dest . --name justice_frames --red 162,179,119,255,86,255
```

valiant
```
python fileGen.py --video ./videos/valiant_trimmed.mp4 --heros REAPER,MEI,ORISA,D.VA,MOIRA,LUCIO,REAPER,MEI,ORISA,ROADHOG,ANA,LUCIO --usernames shax,ksf,fctfctn,space,kariv,custa,fits,illicit,marve1,michelle,ryujehong,jecse --away VALIANT --home DYNASTY --winner "" --everyNFrames 20 --startFrame 0 --endFrame 720 --dest . --name valiant_frames --red 162,179,119,255,86,255
```

hunters
```
python fileGen.py --video ./videos/hunters_trimmed.mp4 --heros LUCIO,ZENYATTA,ZARYA,D.VA,REINHARDT,BRIGITTE,LUCIO,ZENYATTA,D.VA,REINHARDT,BRIGITTE,ZARYA --usernames yveltal,kyo,lateyoung,elsa,ameng,jinmu,chara,shu,hotba,rio,eileen,happy --away HUNTERS --home CHARGE --winner "AWAY" --everyNFrames 20 --startFrame 0 --endFrame 1260 --dest . --name hunters_frames --red 162,179,119,255,86,255
```

titans
```
python fileGen.py --video ./videos/titans.mp4 --heros  WINSTON,D.VA,CASSIDY,BRIGITTE,ANA,LUCIO,ZENYATTA,MERCY,D.VA,PHARAH,WIDOWMAKER,WINSTON --usernames bumper,jjanu,stitch,haksal,twilight,slime,luffy,coma,geguri,dding,diem,gamsu --away TITANS --home DRAGONS --winner "AWAY" --everyNFrames 20 --startFrame 0 --endFrame 840 --dest . --name titans_frames --red 162,179,119,255,86,255
```

shock
```
python fileGen.py --video ./videos/shock.mp4 --heros MEI,BASTION,ORISA,SIGMA,ANA,BAPTISTE,REAPER,MEI,ORISA,SIGMA,ANA,MOIRA  --usernames rascal,architect,smurf,choihyobin,viol2t,moth,seominsoo,haksal,tizi,jjanu,twilight,slime --away SHOCK --home TITANS --winner "AWAY" --everyNFrames 20 --startFrame 0 --endFrame 2160 --dest . --name shock_frames --red 162,179,119,255,86,255 --deltaHealthY 7
```

gladiators
```
python fileGen.py --video ./videos/gladiators.mp4 --heros TRACER,WINSTON,D.VA,SOMBRA,LUCIO,ZENYATTA,TRACER,WINSTON,D.VA,SOMBRA,MERCY,ZENYATTA --usernames sinatraa,super,nevix,danteh,moth,sleepy,asher,fissure,bischu,surefour,biggoose,shaz --away SHOCK --home GLADIATORS --winner "HOME" --everyNFrames 20 --startFrame 0 --endFrame 2100 --dest . --name gladiator_frames --red 162,179,119,255,86,255
```

spitfire
```
python fileGen.py --video ./videos/spitfire.mp4 --heros TRACER,HANZO,ORISA,ROADHOG,D.VA,MERCY,MERCY,ZENYATTA,CASSIDY,WINSTON,TRACER,D.VA --usernames carpe,eqo,sado,hotba,poko,neptuno,nux,bdosin,birdring,gesture,profit,fury --away FUSION --home SPITFIRE --winner "HOME" --everyNFrames 20 --startFrame 0 --endFrame 1020 --dest . --name spitfire_frames --red 162,179,119,255,86,255
``` -->

**3. Run the player**

The player reads in the `Vision File`, writes the current game state to a `State File`, and displays the video in a window.

The `State File` should be located in `/server`. This is the file the `server` listens to and broadcasts it's data to the `client`

```
python player.py --visionFile dragons_frames.json --stateFile ../server/state-file.json
```
