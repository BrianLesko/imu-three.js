# IMU with three.js

This repository holds the code necessary to visualize the orientation of a project such as a robot given its roll pitch and yaw from a microcontroller such as the Arduino Nicla Sense ME. The repo holds the arduino code, a python backend for writing to a json file, and vanilla html with main.js using three.js for the frontend. This project can be reused to visualize the stability of control systems on your mobile robot. 


## Technical Background
[IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) stands for inertial measurement unit. IMU's are used in robotics and vehicles and are used for tracking orientation over time. They can also be used for positioning, especially if combined with GPS data. IMU's are used for control systems and more recently are being used as inputs to AI models. 

IMU's are usually created by fusing the sensor data generated from an accelerometer, a gyroscope, and a magnetometer. In this implementation, the Arduino used has an onboard "AI" running the sensor fusion algorithm; however, a cheaper board such as the Arduino Nano BLE Sense Rev 2 could be used with some work on the sensor fusion algorithm - I have included some unfinished work in this repo if you want to finish it.

The code works with any STL file, but you'll have to scale it, move the camera position around in main.js, or change the clipping planes to make sure your own STL is in view. 

&nbsp;

<div align="center"><img src="IMUVIZ.mov" width="800"></div>

&nbsp;

## Dependencies

Python
`pyserial`: for connecting to your arduino.

Javascript 
`three.js`: for the front end visualization of your stl model. Currently no install is needed, we use a CDN.

Node.js
for `npx serve .`: for locally serving the frontend html and main.js files to your webrowser. During testing this was much faster than python http.server

## Usage

To use the best and most recent implementation you can run
```
python3 -m venv my_env
source my_env/bin/activate 
pip install pyserial
./start.sh
```

&nbsp;

## Repository Structure

```
repository/
├── app.py # the code and UI integrated together live here
├── 
├── requirements.txt # the python packages needed to run locally
├── .gitignore # includes the local virtual environment named my_env
└── docs/
    └── preview.png # preview photo for Github
```

&nbsp;

<hr>

&nbsp;

<div align="center">

╭━━╮╭━━━┳━━┳━━━┳━╮╱╭╮ ╭╮╱╱╭━━━┳━━━┳╮╭━┳━━━╮
┃╭╮┃┃╭━╮┣┫┣┫╭━╮┃┃╰╮┃┃ ┃┃╱╱┃╭━━┫╭━╮┃┃┃╭┫╭━╮┃
┃╰╯╰┫╰━╯┃┃┃┃┃╱┃┃╭╮╰╯┃ ┃┃╱╱┃╰━━┫╰━━┫╰╯╯┃┃╱┃┃
┃╭━╮┃╭╮╭╯┃┃┃╰━╯┃┃╰╮┃┃ ┃┃╱╭┫╭━━┻━━╮┃╭╮┃┃┃╱┃┃
┃╰━╯┃┃┃╰┳┫┣┫╭━╮┃┃╱┃┃┃ ┃╰━╯┃╰━━┫╰━╯┃┃┃╰┫╰━╯┃
╰━━━┻╯╰━┻━━┻╯╱╰┻╯╱╰━╯ ╰━━━┻━━━┻━━━┻╯╰━┻━━━╯

&nbsp;

<a href="https://twitter.com/BrianJosephLeko"><img src="https://raw.githubusercontent.com/BrianLesko/BrianLesko/f7be693250033b9d28c2224c9c1042bb6859bfe9/.socials/svg-white/x-logo-white.svg" width="30" alt="X Logo"></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/BrianLesko"><img src="https://raw.githubusercontent.com/BrianLesko/BrianLesko/f7be693250033b9d28c2224c9c1042bb6859bfe9/.socials/svg-white/github-mark-white.svg" width="30" alt="GitHub"></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://www.linkedin.com/in/brianlesko/"><img src="https://raw.githubusercontent.com/BrianLesko/BrianLesko/f7be693250033b9d28c2224c9c1042bb6859bfe9/.socials/svg-white/linkedin-icon-white.svg" width="30" alt="LinkedIn"></a>

follow all of these for a cookie :)

</div>

&nbsp;
