from flask import Flask, Response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route('/api/gettmp',methods=["GET", "POST"])
def draw_stone():
    d_hum,d_temp = 34.56,20.8
    d_hum = round(d_hum,2)
    d_temp = round(d_temp,2)
    data = [d_temp,d_hum]
    return Response(json.dumps(data),  mimetype='application/json')

@app.route('/')
def staff_page():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000)
