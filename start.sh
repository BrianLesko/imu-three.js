#!/bin/bash

source my_env/bin/activate
python3 imu_process.py & # updates rotation.js for a set amount of time
npx serve . -l 3001 & # serves the current directory on localhost:3000
echo "Opening localhost:3001 in browser"
sleep 3
open http://localhost:3001