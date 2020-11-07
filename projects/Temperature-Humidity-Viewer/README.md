# Temperature and Humidity Viewer

## About The Project
In this project, we use DHT22 sensor to detect the current temperature and humidity indoor. After connectiong the sensor with the raspberry pi, a Python package called "Adafruit_DHT" is used to read the temperature and humidity data from the raspberry pi. At the same time, we are using postgreSQL as the database that connected to flask. For each measure, the data will be recorded in the database as well. After there are enough data in the database, we may add a dashboard on the front end to show how the temperate and humidity change in a certain period. To have this dashboard available on the page, we are hoping user can adjust their indoor temperature and humidity to keep health.

## Prerequisites
### Hardware

* Raspberrypi
* Micro SD card
* Raspberrypi power supply
* DHT22 Temperature/Humidity Sensor

### Software
* Python
* Adafruit_DHT

### Assembly 
The DHT22 will have three pins(+, -, data) that we need to connect to the raspberry pi. We will use raspberry pi ZERO WH as example to show how to connection these three pins to pi. First, we connect the "+" pin to pin 2(the top right pin, 5V) on raspberry pi. The "-" pin we need to connect to pin 6(GND). The last pin is the data pin that used to send data from DHT22 to raspberrypi. We connect this to pin 7(GPIO4). Your connections should look like the following:
![assembly_img](./assembly.jpeg)

### Software Setup
> Install the packages to read the data
```shell
$ pip install Adafruit_DHT
```

> Read data in python
```python3
import Adafruit_DHT
sensor = Adafruit_DHT.DHT22
#4 stands for GPIO4 pin on raspberry pi
pin = 4
humidity,temperature = Adafruit_DHT.read_retry(sensor, pin)
```
