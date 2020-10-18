from flask import Flask, Response
import Adafruit_DHT
import json

app = Flask(__name__)

# Adafruit_DHT.DHT22 sensor
sensor = Adafruit_DHT.DHT22
# connected to GPIO4.
pin = 4

@app.route('/api/gettmp',methods=["GET"])
def get_temp_humi():
    humidity,temperature = Adafruit_DHT.read_retry(sensor, pin)
    while humidity is None or temperature is None:
        humidity,temperature = Adafruit_DHT.read_retry(sensor, pin)
    humidity = round(humidity,2)
    temperature = round(temperature,2)
    data = [temperature,humidity]
    resp = Response(json.dumps(data),  mimetype='application/json')
    resp.headers['Access-Control-Allow-Origin'] = 'http://raspberrypi.design'
    return resp

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000)
