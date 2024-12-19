// Brian Lesko 
// IMU on the Arduino Nicla Sense ME

#include "Nicla_System.h"
#include "Arduino_BHY2.h"
#include <math.h>

//Raw Sensor Initialization
SensorXYZ accelerometer(SENSOR_ID_ACC);
SensorXYZ gyro(SENSOR_ID_GYRO);

//Pressure sensor Init 
Sensor pressure(SENSOR_ID_BARO);

//IMU Initialization
SensorQuaternion rotation(SENSOR_ID_RV);
SensorOrientation orientation(SENSOR_ID_ORI);  

void setup() {

  Serial.begin(31250);
  while (!Serial);
  Serial.println("Started");

  BHY2.begin();
  accelerometer.begin();
  gyro.begin();
  pressure.begin();
  rotation.begin();
  orientation.begin();

  //LED
  //nicla::begin();
  //nicla::leds.begin();
  //nicla::leds.setColor(green);

}
// Standard sea level pressure in hPa
//  float P0 = 1013.25;
//UNUSED ALTITUDE: (44330 * (1 - pow((pressure.value() / P0), 1/5.255)))


// Define the start and stop bytes
const byte START_BYTE = 1;
const byte STOP_BYTE = 3;

//define the roll pitch yaw
float roll = 0;
float pitch = 0;
float yaw =0;

// Smoothing factor for the low-pass filter (0 < alpha < 1)
const float alpha = 0.5;

// Initialize filtered values
float filtered_roll = 0;
float filtered_pitch = 0;
float filtered_yaw = 0;

void loop() {
  BHY2.update();

  float t = micros()/1.0e6; //the time in seconds since the arduino started running

  roll = orientation.roll();
  pitch = orientation.pitch();
  yaw = orientation.heading();

  // Apply low-pass filter
  filtered_roll = alpha * roll + (1 - alpha) * filtered_roll;
  filtered_pitch = alpha * pitch + (1 - alpha) * filtered_pitch;
  filtered_yaw = alpha * yaw + (1 - alpha) * filtered_yaw;


  // Send the entire byte array at once - start byte of 1 and new line char for end
  Serial.println("1,"+String(filtered_roll) + "," + String(filtered_pitch) + "," + String(filtered_yaw));
  //Pressure in hPa hectopascals, conversion to altitude in meters
  //Serial.println(String("rotation: ") + rotation.toString()); //Quaternion
  //unsigned long endTime = millis(); // End time of the loop
  delay(1);
}