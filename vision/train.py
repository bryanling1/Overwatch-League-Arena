import tensorflow as tf
import matplotlib.pyplot as plt 
import numpy as np 
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os
import pdb
import math

VALIDATION_SPLIT = 0.2
base_dir = "./train"
train_dir = os.path.join(base_dir, "images")

train_0_light = os.path.join(train_dir, "0_light")
train_1_light = os.path.join(train_dir, "1_light")
train_2_light = os.path.join(train_dir, "2_light")
train_3_light = os.path.join(train_dir, "3_light")
train_4_light = os.path.join(train_dir, "4_light")
train_5_light = os.path.join(train_dir, "5_light")
train_6_light = os.path.join(train_dir, "6_light")
train_7_light = os.path.join(train_dir, "7_light")
train_8_light = os.path.join(train_dir, "8_light")
train_9_light = os.path.join(train_dir, "9_light")
train_0_dark = os.path.join(train_dir, "0_dark")
train_1_dark = os.path.join(train_dir, "1_dark")
train_2_dark = os.path.join(train_dir, "2_dark")
train_3_dark = os.path.join(train_dir, "3_dark")
train_4_dark = os.path.join(train_dir, "4_dark")
train_5_dark = os.path.join(train_dir, "5_dark")
train_6_dark = os.path.join(train_dir, "6_dark")
train_7_dark = os.path.join(train_dir, "7_dark")
train_8_dark = os.path.join(train_dir, "8_dark")
train_9_dark = os.path.join(train_dir, "9_dark")
train_none = os.path.join(train_dir, "none")

num_train_0_light = len(os.listdir(train_0_light)) 
num_train_1_light = len(os.listdir(train_1_light)) 
num_train_2_light = len(os.listdir(train_2_light)) 
num_train_3_light = len(os.listdir(train_3_light)) 
num_train_4_light = len(os.listdir(train_4_light)) 
num_train_5_light = len(os.listdir(train_5_light)) 
num_train_6_light = len(os.listdir(train_6_light)) 
num_train_7_light = len(os.listdir(train_7_light)) 
num_train_8_light = len(os.listdir(train_8_light)) 
num_train_9_light = len(os.listdir(train_9_light))
num_train_0_dark = len(os.listdir(train_0_dark)) 
num_train_1_dark = len(os.listdir(train_1_dark)) 
num_train_2_dark = len(os.listdir(train_2_dark)) 
num_train_3_dark = len(os.listdir(train_3_dark)) 
num_train_4_dark = len(os.listdir(train_4_dark)) 
num_train_5_dark = len(os.listdir(train_5_dark)) 
num_train_6_dark = len(os.listdir(train_6_dark)) 
num_train_7_dark = len(os.listdir(train_7_dark)) 
num_train_8_dark = len(os.listdir(train_8_dark)) 
num_train_9_dark = len(os.listdir(train_9_dark))
num_train_none = len(os.listdir(train_none)) 

num_validation_0_light = math.floor(num_train_0_light * VALIDATION_SPLIT)
num_validation_1_light = math.floor(num_train_1_light * VALIDATION_SPLIT)
num_validation_2_light = math.floor(num_train_2_light * VALIDATION_SPLIT)
num_validation_3_light = math.floor(num_train_3_light * VALIDATION_SPLIT)
num_validation_4_light = math.floor(num_train_4_light * VALIDATION_SPLIT)
num_validation_5_light = math.floor(num_train_5_light * VALIDATION_SPLIT)
num_validation_6_light = math.floor(num_train_6_light * VALIDATION_SPLIT)
num_validation_7_light = math.floor(num_train_7_light * VALIDATION_SPLIT)
num_validation_8_light = math.floor(num_train_8_light * VALIDATION_SPLIT)
num_validation_9_light = math.floor(num_train_9_light * VALIDATION_SPLIT)
num_validation_0_dark = math.floor(num_train_0_dark * VALIDATION_SPLIT)
num_validation_1_dark = math.floor(num_train_1_dark * VALIDATION_SPLIT)
num_validation_2_dark = math.floor(num_train_2_dark * VALIDATION_SPLIT)
num_validation_3_dark = math.floor(num_train_3_dark * VALIDATION_SPLIT)
num_validation_4_dark = math.floor(num_train_4_dark * VALIDATION_SPLIT)
num_validation_5_dark = math.floor(num_train_5_dark * VALIDATION_SPLIT)
num_validation_6_dark = math.floor(num_train_6_dark * VALIDATION_SPLIT)
num_validation_7_dark = math.floor(num_train_7_dark * VALIDATION_SPLIT)
num_validation_8_dark = math.floor(num_train_8_dark * VALIDATION_SPLIT)
num_validation_9_dark = math.floor(num_train_9_dark * VALIDATION_SPLIT)
num_validation_none = math.floor(num_train_none * VALIDATION_SPLIT)

num_train_0_light -= num_validation_0_light
num_train_1_light -= num_validation_1_light
num_train_2_light -= num_validation_2_light
num_train_3_light -= num_validation_3_light
num_train_4_light -= num_validation_4_light
num_train_5_light -= num_validation_5_light
num_train_6_light -= num_validation_6_light
num_train_7_light -= num_validation_7_light
num_train_8_light -= num_validation_8_light
num_train_9_light -= num_validation_9_light
num_train_0_dark -= num_validation_0_dark
num_train_1_dark -= num_validation_1_dark
num_train_2_dark -= num_validation_2_dark
num_train_3_dark -= num_validation_3_dark
num_train_4_dark -= num_validation_4_dark
num_train_5_dark -= num_validation_5_dark
num_train_6_dark -= num_validation_6_dark
num_train_7_dark -= num_validation_7_dark
num_train_8_dark -= num_validation_8_dark
num_train_9_dark -= num_validation_9_dark
num_train_none -= num_validation_none

total_train = num_train_0_light
total_train += num_train_1_light
total_train += num_train_2_light
total_train += num_train_3_light
total_train += num_train_4_light
total_train += num_train_5_light
total_train += num_train_6_light
total_train += num_train_7_light
total_train += num_train_8_light
total_train += num_train_9_light
total_train += num_train_0_dark
total_train += num_train_1_dark
total_train += num_train_2_dark
total_train += num_train_3_dark
total_train += num_train_4_dark
total_train += num_train_5_dark
total_train += num_train_6_dark
total_train += num_train_7_dark
total_train += num_train_8_dark
total_train += num_train_9_dark
total_train += num_train_none

total_validation = num_validation_0_light
total_validation += num_validation_1_light
total_validation += num_validation_2_light
total_validation += num_validation_3_light
total_validation += num_validation_4_light
total_validation += num_validation_5_light
total_validation += num_validation_6_light
total_validation += num_validation_7_light
total_validation += num_validation_8_light
total_validation += num_validation_9_light
total_validation += num_validation_0_dark
total_validation += num_validation_1_dark
total_validation += num_validation_2_dark
total_validation += num_validation_3_dark
total_validation += num_validation_4_dark
total_validation += num_validation_5_dark
total_validation += num_validation_6_dark
total_validation += num_validation_7_dark
total_validation += num_validation_8_dark
total_validation += num_validation_9_dark
total_validation += num_validation_none

BATCH_SIZE = 32
IMG_SHAPE = 32

train_image_generator = ImageDataGenerator(
    rescale = 1./255,
    validation_split=VALIDATION_SPLIT,
)

validation_image_generator = ImageDataGenerator(rescale = 1./255)

train_data_gen = train_image_generator.flow_from_directory(batch_size=BATCH_SIZE, directory=train_dir, shuffle=True, target_size=(IMG_SHAPE, IMG_SHAPE), subset='training')
val_data_gen = validation_image_generator.flow_from_directory(batch_size=BATCH_SIZE, directory=train_dir, shuffle=True, target_size=(IMG_SHAPE, IMG_SHAPE), subset='validation')

model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=[IMG_SHAPE, IMG_SHAPE, 3]),
    tf.keras.layers.MaxPooling2D(2, 2),

    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'), 
    tf.keras.layers.MaxPooling2D(2, 2),

    # tf.keras.layers.Conv2D(64, (3, 3), activation='relu'), 
    # tf.keras.layers.MaxPooling2D(2, 2),

    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'), 
    tf.keras.layers.MaxPooling2D(2, 2),


    # tf.keras.layers.Conv2D(128, (3, 3), activation='relu'), 
    # tf.keras.layers.MaxPooling2D(2, 2),

    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(256, activation="relu"),
    tf.keras.layers.Dense(21, activation="softmax")
])

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=['accuracy'])

model.summary()

EPOCHS = 50

history = model.fit(
    train_data_gen, 
    steps_per_epoch= total_train//BATCH_SIZE,
    epochs = EPOCHS,
    validation_data = val_data_gen,
    validation_steps = total_validation//BATCH_SIZE
)

model.save("./models/numbersModel.h5")
