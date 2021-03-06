import cv2
import numpy as np

class OwlVision:
    frameWidth = 150
    frameHeight = 200
    frameStartPoints=[
        #team1
        [18, 32],
        [120, 32],
        [235, 32],
        [345, 32],
        [450, 32],
        [550, 32],
        #team2
        [1210, 32],
        [1320, 32],
        [1430, 32],
        [1540, 32],
        [1650, 32],
        [1740, 32],
    ]
    threshold = 0.8
    HEALTH_Y = 185
    healthStartPoitns=[
        [40, HEALTH_Y],
        [146, HEALTH_Y],
        [252, HEALTH_Y],
        [358, HEALTH_Y],
        [464, HEALTH_Y],
        [570, HEALTH_Y],
        [1248, HEALTH_Y],
        [1355, HEALTH_Y],
        [1462, HEALTH_Y],
        [1567, HEALTH_Y],
        [1675, HEALTH_Y],
        [1780, HEALTH_Y],
    ]
    TOP_ICON_CROP = 20
    BOTTOM_ICON_CROP = 10
    LEFT_ICON_CROP = 25
    RIGHT_ICON_CROP = 20
    HEALTH_HEIGHT = 2
    HEALTH_WIDTH = 100

    #healthbar masks
    WHITE_HUE_MIN = 0 
    WHITE_HUE_MAX = 179
    WHITE_SAT_MIN = 0
    WHITE_SAT_MAX = 48
    WHITE_VAL_MIN = 180
    WHITE_VAL_MAX = 255

    CYAN_HUE_MIN = 90
    CYAN_HUE_MAX = 106
    CYAN_SAT_MIN = 98
    CYAN_SAT_MAX = 221
    CYAN_VAL_MIN = 122
    CYAN_VAL_MAX = 206

    YELLOW_HUE_MIN = 19
    YELLOW_HUE_MAX = 32
    YELLOW_SAT_MIN = 89
    YELLOW_SAT_MAX = 190
    YELLOW_VAL_MIN = 156
    YELLOW_VAL_MAX = 249

    RED_HUE_MIN = 170
    RED_HUE_MAX = 179
    RED_SAT_MIN = 81
    RED_SAT_MAX = 244
    RED_VAL_MIN = 159
    RED_VAL_MAX = 255
    #death indicators
    X_WIDTH = 8
    X_HEIGHT = 8

    X_TOLERANCE = 0.9

    xStartPoints = [
        [86, 185],
        [192, 185],
        [297, 185],
        [403, 185],
        [509, 185],
        [616, 185],
        [1297, 185],
        [1403, 185],
        [1509, 185],
        [1615, 185],
        [1721, 185],
        [1827, 185],
    ]

    def __init__(self, baseImgUrl):
        self.baseImgUrl = baseImgUrl
        self.baseImg = cv2.imread(baseImgUrl);
        self.baseImgFrames = [
            self.crop2gray(
                baseImgUrl,
                point[0],
                point[1],
                point[0] + self.frameWidth,
                point[1] + self.frameHeight
            ) for point in self.frameStartPoints
        ]
        self.icons = {
            "dva": self.trim2gray("./images/icons/dva.png", 0, 0, 0, 0),
            "orisa": self.trim2gray("./images/icons/orisa.png", 0, 0, 0, 0),        
            "reinhardt": self.trim2gray("./images/icons/reinhardt.png", 0, 0, 0, 0),
            "roadhog": self.trim2gray("./images/icons/roadhog.png", 0, 0, 0, 0),    
            "sigma": self.trim2gray("./images/icons/sigma.png", 0, 0, 0, 0),        
            "winston": self.trim2gray("./images/icons/winston.png", 0, 0, 0, 0),    
            "ball": self.trim2gray("./images/icons/ball.png", 0, 0, 0, 0),
            "zarya": self.trim2gray("./images/icons/zarya.png", 0, 0, 0, 0),        
            "ashe": self.trim2gray("./images/icons/ashe.png", 0, 0, 0, 0),
            "bastion": self.trim2gray("./images/icons/bastion.png", 0, 0, 0, 0),    
            "doomfist": self.trim2gray("./images/icons/doomfist.png", 0, 0, 0, 0),  
            "echo": self.trim2gray("./images/icons/echo.png", 0, 0, 0, 0),
            "genji": self.trim2gray("./images/icons/genji.png", 0, 0, 0, 0),
            "hanzo": self.trim2gray("./images/icons/hanzo.png", 0, 0, 0, 0),
            "junkrat": self.trim2gray("./images/icons/junkrat.png", 0, 0, 0, 0),
            "mccree": self.trim2gray("./images/icons/mccree.png", 0, 0, 0, 0),
            "mei": self.trim2gray("./images/icons/mei.png", 0, 0, 0, 0),
            "pharah": self.trim2gray("./images/icons/pharah.png", 0, 0, 0, 0),
            "reaper": self.trim2gray("./images/icons/reaper.png", 0, 0, 0, 0),
            "soldier": self.trim2gray("./images/icons/soldier.png", 0, 0, 0, 0),
            "sombra": self.trim2gray("./images/icons/sombra.png", 0, 0, 0, 0),
            "symmetra": self.trim2gray("./images/icons/symmetra.png", 0, 0, 0, 0),
            "torb": self.trim2gray("./images/icons/torb.png", 0, 0, 0, 0),
            "tracer": self.trim2gray("./images/icons/tracer.png", 0, 0, 0, 0),
            "widowmaker": self.trim2gray("./images/icons/widowmaker.png", 0, 0, 0, 0),
            "ana": self.trim2gray("./images/icons/ana.png", 0, 0, 0, 0),
            "baptiste": self.trim2gray("./images/icons/baptiste.png", 0, 0, 0, 0),
            "brigitte": self.trim2gray("./images/icons/brigitte.png", 0, 0, 0, 0),
            "lucio": self.trim2gray("./images/icons/lucio.png", 0, 0, 0, 0),
            "mercy": self.trim2gray("./images/icons/mercy.png", 0, 0, 0, 0),
            "moira": self.trim2gray("./images/icons/moira.png", 0, 0, 0, 0),
            "zenyatta": self.trim2gray("./images/icons/zenyatta.png", 0, 0, 0, 0),
        }
        self.healthBars = [
            self.crop(
                baseImgUrl,
                point[0],
                point[1],
                point[0] + self.HEALTH_WIDTH,
                point[1] + self.HEALTH_HEIGHT
            ) for point in self.healthStartPoitns
        ]

        self.xIcons = [
            self.crop(
                baseImgUrl,
                point[0],
                point[1],
                point[0] + self.X_WIDTH,
                point[1] + self.X_HEIGHT
            ) for point in self.xStartPoints
        ]

    def crop2gray(self, img_src, x1, y1, x2, y2):
        img = cv2.imread(img_src, 0)
        return img[y1:y2, x1:x2]
    def crop(self, img_src, x1, y1, x2, y2):
        img = cv2.imread(img_src)
        return img[y1:y2, x1:x2]

    def trim2gray(self, img_src, top, right, bottom, left):
        img = cv2.imread(img_src, 0)
        w, h = img.shape[::-1]
        return img[top:h-bottom, left:w-right]
    
    def getMatchLocations(self, base_img, template_img):
        res = cv2.matchTemplate(base_img, template_img, cv2.TM_CCOEFF_NORMED )
        return np.where(res >= self.threshold)
    
    def drawHeroLocations(self, locations, base_img):
        w, h = self.icons["dva"].shape
        for pt in zip(*locations[::-1]):
            cv2.rectangle(base_img, pt, (pt[0]+w, pt[1]+h), (0, 255, 255), 1)

    def getScoreFromLocations(self, locations):
        return len(locations[0])
    
    def detectHero(self, img):
        hero = None
        maxScore = 0
        for key in self.icons:
            locations = self.getMatchLocations(img, self.icons[key])
            score = self.getScoreFromLocations(locations)
            if(score > maxScore):
                maxScore = score
                hero = key
        return hero
    
    def showImage(self, img):
        cv2.imshow('window', img)
        cv2.waitKey(0)

    def getHeros(self):
        out = []
        for frame in self.baseImgFrames:
            out.append(self.detectHero(frame))
        return out

    def applyHSVMask(self, img, hue_min, hue_max, sat_min, sat_max, val_min, val_max):
        #convert bgr image to hsv
        imgHSV = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        #masks
        lower = np.array([hue_min, sat_min, val_min])
        upper = np.array([hue_max, sat_max, val_max])
        mask = cv2.inRange(imgHSV, lower, upper)
        #generate result
        return mask;
    
    def applyWhiteHealthMask(self, img):
        return self.applyHSVMask(
            img,
            self.WHITE_HUE_MIN,
            self.WHITE_HUE_MAX,
            self.WHITE_SAT_MIN,
            self.WHITE_SAT_MAX,
            self.WHITE_VAL_MIN,
            self.WHITE_VAL_MAX
        )

    def applyCyanHealthMask(self, img):
        return self.applyHSVMask(
            img,
            self.CYAN_HUE_MIN,
            self.CYAN_HUE_MAX,
            self.CYAN_SAT_MIN,
            self.CYAN_SAT_MAX,
            self.CYAN_VAL_MIN,
            self.CYAN_VAL_MAX
        )
    
    def applyYellowHealthMask(self, img):
        return self.applyHSVMask(
            img,
            self.YELLOW_HUE_MIN,
            self.YELLOW_HUE_MAX,
            self.YELLOW_SAT_MIN,
            self.YELLOW_SAT_MAX,
            self.YELLOW_VAL_MIN,
            self.YELLOW_VAL_MAX
        )
    def applyRedHealthMask(self, img):
        return self.applyHSVMask(
            img,
            self.RED_HUE_MIN,
            self.RED_HUE_MAX,
            self.RED_SAT_MIN,
            self.RED_SAT_MAX,
            self.RED_VAL_MIN,
            self.RED_VAL_MAX
        )

    def getRightMostPositionFromMask(self, img_mask):
        right_most = 0
        for row in img_mask:
            for y, x in enumerate(row):
                if y > right_most and x == 255:
                    right_most = y
        
        return right_most
    
    def getHealth(self, img):
        white_mask = self.applyWhiteHealthMask(img)
        white_health = self.getRightMostPositionFromMask(white_mask)
        cyan_mask = self.applyCyanHealthMask(img)
        cyan_health = self.getRightMostPositionFromMask(cyan_mask)
        yellow_mask = self.applyYellowHealthMask(img)
        yellow_health = self.getRightMostPositionFromMask(yellow_mask)
        return max(white_health, cyan_health, yellow_health) / self.HEALTH_WIDTH
    
    def getAllHealth(self):
        return [self.getHealth(x) for x in self.healthBars]

    def getMaskPrecentage(self, mask):
        return (np.sum(mask/255)) / (mask.shape[0] * mask.shape[1])
        
    def getRedPercentage(self, img):
        return self.getMaskPrecentage(self.applyRedHealthMask(img))

    def isDead(self, img):
        if self.getRedPercentage(img) > self.X_TOLERANCE:
            return True
        return False
        
    def setTolerance(self, tolerance):
        self.X_TOLERANCE = tolerance;
    
    def areDead(self):
        return [self.isDead(x) for x in self.xIcons]
    
Arena = OwlVision('./test-images/3.png')
# Arena.showImage(Arena.applyYellowHealthMask(Arena.healthBars[3]))
# Arena.showImage(Arena.icons['winston2'])
# mask = Arena.applyYellowHealthMask(Arena.healthBars[3])
# print(Arena.getRightMostPositionFromMask(mask))
print(Arena.areDead())