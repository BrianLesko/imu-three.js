# Brian Lesko 
# use generated data instead of an IMU

import serial
import serial.tools.list_ports
from stl import mesh
import numpy as np
from scipy.spatial.transform import Rotation as R
import json
import time

JSON_FILE = 'rotation.json'
WAIT = 0.05

# connection to microcontroller
ports = serial.tools.list_ports.comports()
available_ports = [port.device for port in ports]
port = available_ports[0]
baude_rate = 115200
#ser = serial.Serial(port=port, baudrate=baude_rate, timeout=1)

# generated data
max = int(60/WAIT)
rolls = np.linspace(0, 360, max)
pitches = np.linspace(0, 360, max)
yaws = np.linspace(0, 360, max)

# get an stl file
my_mesh = mesh.Mesh.from_file('mystl.stl')
vertices = np.array(my_mesh.vectors).reshape(-1, 3)
faces = np.arange(vertices.shape[0]).reshape(-1, 3)  # (M, 3) faces

i=0
while True:

  # Read an incoming message (to do)
  #ser.flushInput()
  #data = ser.readline().decode('utf-8')
  #values = data.split(':')[1].split(',')
  #print(values)
  #roll, pitch, yaw = np.array(values)

  # Generate some data
  roll = rolls[i]
  pitch = pitches[i]
  yaw = yaws[i]

  #R = R.from_euler('xyz', [roll, pitch, yaw], degrees=True)
  #rotated_vertices = R.apply(vertices)
  #rotated_faces = R.apply(faces)

  # Write to rotation.json
  with open(JSON_FILE, 'w') as f:
    json.dump({"roll": roll, "pitch": pitch, "yaw": yaw}, f)

  time.sleep(WAIT)
  i += 1