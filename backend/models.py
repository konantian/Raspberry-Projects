from app import db

class Room(db.Model):
    __tablename__ = 'room'

    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)

    def __init__(self, time, temperature, humidity):
        self.time = time
        self.temperature = temperature
        self.humidity = humidity

    def __repr__(self):
        return f'<id {self.id}>'

    def serialize(self):
        return {
                'id' : self.id,
                'time' : self.time,
                'temperature' : self.temperature,
                'humidity' : self.humidity
                }

