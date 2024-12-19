# IMU Visualization with three.js

Visualize **roll**, **pitch**, and **yaw** data from an **IMU** in real-time using **three.js**. This project integrates:
- **Arduino Nicla Sense ME** for IMU data.
- **Python**3 backend to process and write IMU data to JSON.
- **Vanilla JavaScript** frontend for rendering 3D models via three.js.

Perfect for robotics and control system engineers looking to analyze orientation or stability in mobile robots.

## Why IMUs?

An [Inertial Measurement Unit (IMU)](https://en.wikipedia.org/wiki/Inertial_measurement_unit) tracks orientation via accelerometer, gyroscope, and magnetometer fusion. Widely used in:
- **Robotics for stability control.**
- **Autonomous Vehicles for navigation.**
- **AI Models as sensor inputs.**

This project uses Arduino’s onboard sensor fusion. Alternatively, you can extend it for boards like the Arduino Nano BLE Sense Rev 2, with unfinished sensor fusion code included.

## Key Features
- **Customizable STL Models:** Adapt any 3D STL file for visualization.
- **Web-Based Interface:** Fast rendering with three.js (via CDN).
- **Cross-Language Integration:** C++, Python, JavaScript.

<div align="center"><img src="IMUVIZ.mov" width="800" alt="IMU Visualization Preview"></div>  

## Quick Start
1. **Install Dependencies:**
    - Python: `pip install pyserial`
    - Node.js: For serving files locally via `npx serve .`
    - Arduino IDE: Flash Nicla Sense ME with `IMU_Nicla_Sense_ME.ino`.
2. **Run the Project:**
    ```sh
    python3 -m venv my_env  
    source my_env/bin/activate  
    pip install pyserial  
    ./start.sh  
    ```

## File Structure

```
repository/  
├── IMU_Nicla_Sense_ME.ino       # Arduino sketch for Nicla Sense ME  
├── imu_process.py               # Python backend for IMU data processing  
├── main.js                      # Frontend logic with three.js  
├── index.html                   # Web interface for visualization  
├── extras/                      # Optional tools and files  
│   ├── synthetic.py             # Generate synthetic IMU data  
│   ├── mystl.stl                # 3D model example  
│   └── IMU_BLE_Sense_2.ino      # Alternate BLE-based Arduino sketch  
└── start.sh                     # Script to launch the app  
```

## Dependencies
- Python: pyserial (IMU-Arduino communication).
- JavaScript: three.js (STL rendering).
- Node.js: For lightweight local hosting.

## Hardware
- Arduino Nicla Sense ME
- USB Cable

## Optimize Your IMU Model
- Adjust STL scale and camera parameters in main.js for your custom models.
- Supports any STL file for 3D orientation visualization.

&nbsp;

<hr>

&nbsp;

<div align="center">



╭━━╮╭━━━┳━━┳━━━┳━╮╱╭╮        ╭╮╱╱╭━━━┳━━━┳╮╭━┳━━━╮
┃╭╮┃┃╭━╮┣┫┣┫╭━╮┃┃╰╮┃┃        ┃┃╱╱┃╭━━┫╭━╮┃┃┃╭┫╭━╮┃
┃╰╯╰┫╰━╯┃┃┃┃┃╱┃┃╭╮╰╯┃        ┃┃╱╱┃╰━━┫╰━━┫╰╯╯┃┃╱┃┃
┃╭━╮┃╭╮╭╯┃┃┃╰━╯┃┃╰╮┃┃        ┃┃╱╭┫╭━━┻━━╮┃╭╮┃┃┃╱┃┃
┃╰━╯┃┃┃╰┳┫┣┫╭━╮┃┃╱┃┃┃        ┃╰━╯┃╰━━┫╰━╯┃┃┃╰┫╰━╯┃
╰━━━┻╯╰━┻━━┻╯╱╰┻╯╱╰━╯        ╰━━━┻━━━┻━━━┻╯╰━┻━━━╯
  


&nbsp;


<a href="https://twitter.com/BrianJosephLeko"><img src="https://raw.githubusercontent.com/BrianLesko/BrianLesko/main/.socials/svg-grey/x.svg" width="30" alt="X Logo"></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://github.com/BrianLesko"><img src="https://github.com/BrianLesko/BrianLesko/blob/main/.socials/svg-grey/github.svg" width="30" alt="GitHub"></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://www.linkedin.com/in/brianlesko/"><img src="https://raw.githubusercontent.com/BrianLesko/BrianLesko/main/.socials/svg-grey/linkedin.svg" width="30" alt="LinkedIn"></a>

follow all of these for pizza :)

</div>


&nbsp;
