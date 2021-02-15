from flask import Flask, render_template
from flask_socketio import SocketIO, send
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

def test():
    while True:
        time.sleep(1);

@socketio.on('json')
def handle_json(json):
    send(json, json=True)
    
if __name__ == '__main__':
    socketio.run(app)

    