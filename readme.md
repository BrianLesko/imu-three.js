# Visualize the orientation of your IMU

<<<<<<< HEAD
[IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) stands for inertial measurement unit.
=======
# Measure Orientation using an IMU

IMU's are necessary for robotics applications and consumer devices. IMU's are used in conjunction with GPS modules to track both position and orientation in space. 

[IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) stands for inertial measurement unit. 
>>>>>>> c99428a7dd420ff8d5ec221d704f732f346cd6ae

IMU's are used in robotics and vehicles. Written in C++ Arduino and intended for use with a mobile robot.

Use this code to visualize the orientation of your IMU using an STL File

&nbsp;

<div align="center"><img src="IMUVIZ.mov" width="800"></div>

&nbsp;

## Usage

To use the best and most recent implementation you can run
```
python3 -m venv my_env
source my_env/bin/activate # or on windows: source my_env/bin/activate
pip install pyserial
./start.sh
```

## Streamlit app

This implementation is in pure python

The .ino files are for the Arduino [BLE Sense 2](https://docs.arduino.cc/hardware/nano-33-ble-sense-rev2/)
or the [Nicla Sense ME](https://docs.arduino.cc/hardware/nicla-sense-me/) Arduino boards.

Get either board, upload the .ino file using the arduino IDE, and make sure the serial monitor is closed. The Nicla sense board is much more accurate.

Then, run the following commands in your terminal:

```
python3 -m venv my_env
source my_env/bin/activate # or on windows: source my_env/bin/activate
pip install -r requirements.txt
streamlit run https://raw.githubusercontent.com/BrianLesko/IMU-visualization/main/app.py # For the simpler version
```

to stop the app, go back to the terminal and press control C

This will start the server, and you can access the app by opening a web browser and navigating to `http://localhost:8501`.

&nbsp;

## Repository Structure

```
repository/
├── app.py # the code and UI integrated together live here
├── customize_gui # class for adding gui elements
├── requirements.txt # the python packages needed to run locally
├── .gitignore # includes the local virtual environment named my_env
├── .streamlit/
│   └── config.toml # theme info for the UI
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
