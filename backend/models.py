from app import db

class Room(db.Model):
    __tablename__ = 'room'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    time = db.Column(db.DateTime)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)

    def __init__(self, date,time, temperature, humidity):
        self.date = date
        self.time = time
        self.temperature = temperature
        self.humidity = humidity

    def __repr__(self):
        return f'<id {self.id}>'

    def selfrialize(self):
        return {
                'id' : self.id,
                'date' : self.date,
                'time' : self.time,
                'temperature' : self.temperature,
                'humidity' : self.humidity
                }

