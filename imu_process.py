# Brian Lesko 

import serial
import serial.tools.list_ports
import numpy as np
import json
import time

JSON_FILE = 'rotation.json'
WAIT = 0.02

# connection to microcontroller
ports = serial.tools.list_ports.comports()
available_ports = [port.device for port in ports]
print(available_ports)
PORT = available_ports[2]
print(f"Using port: {PORT}") 
BAUD = 31250
ser = serial.Serial(port=PORT, baudrate=BAUD, timeout=1)
if not ser.isOpen():
  raise Exception("Could not open serial port: " + str(PORT))

def get_message():
  while True:
    try: data = ser.readline().decode('utf-8').strip().split(',')
    except: continue
    if len(data) == 4 and data[0] == '1':
      return data[1:4]

i=0
prev_data = [0, 0, 0]
while True:
  ser.flushInput()
  data = get_message()
  print(data)

  # Write to rotation.json
  with open(JSON_FILE, 'w') as f:
    json.dump({"roll": data[1], "pitch": data[0], "yaw": data[2]}, f)

  time.sleep(WAIT)
  i += 1
  prev_data = data

  if i > 2000:
    break

ser.close()
print("Serial connection closed.")