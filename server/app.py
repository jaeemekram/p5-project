# library imports
from flask import request, session
from models import Client, Trainer, Match, Message, Specialty, TrainerSpecialty
from flask_bcrypt import Bcrypt

from config import create_app, db

app = create_app()
bcrypt = Bcrypt(app)

@app.route('/api')
def index():
    return '<h1>121123 Phase 5 Project/Product</h1>'

@app.get('/api/check_session')
def check_session():
    user_id = session.get('user_id')
    user = Client.query.where(Client.id == user_id).first()
    if user:
        return user.to_dict(), 200
    else:
        return {}, 200

@app.get('/api/clients')
def get_clients():
    all_clients = Client.query.all()
    return[client.to_dict(rules=("-matches",)) for client in all_clients], 200


@app.get('/api/clients/<int:id>')
def get_clients_by_id(id):
    found_client = Client.query.where(Client.id ==id).first()
    if found_client:
        return found_client.to_dict(rules=("-matches",)), 200
    else:
        return{'error': 'Client not found'}, 400
    
@app.post('/api/clients')
def post_clients():
    data = request.json

    try:
        new_client = Client(username=data.get('username'), first_name=data.get('firstName'), last_name=data.get('lastName'), email=data.get('email'), dob_month=data.get('dobMonth'), dob_day=data.get('dobDay'), dob_year=data.get('dobYear'), gender=data.get('gender'), weight=data.get('weight'), img1=data.get('imageOne'),img2=data.get('img2'), img3=data.get('img3'), about=data.get('about'), city=data.get('city'))
        new_client.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        db.session.add(new_client)
        db.session.commit()
        return new_client.to_dict(), 201
        
    except ValueError as e:
        return{"Error": f'{e}'}, 406
    
@app.post('/api/login')
def login():
    data = request.json
    username = data['username']
    password = data['password']
    user = Client.query.where(Client.username == username).first()
    if user and bcrypt.check_password_hash(user.password, password):
        session['user_id'] = user.id
        return user.to_dict(), 201
    else:
        return {'error': 'Invalid username or password'}, 401
    
@app.delete('/api/logout')
def logout():
    session.pop('user_id')
    return {}, 204

@app.get('/api/trainers')
def get_trainers():
    all_trainers = Trainer.query.all()
    return[trainer.to_dict(rules=("-matches",)) for trainer in all_trainers], 200

@app.get('/trainers/<int:id>')
def get_trainers_by_id(id):
    found_trainer = Trainer.query.where(Trainer.id ==id).first()
    if found_trainer:
        return found_trainer.to_dict(rules=("-matches",)), 200
    else:
        return{'error': 'Trainer not found'}, 400
    
@app.post('/api/trainers')
def post_trainers():
    data = request.json

    try:
        new_trainer = Trainer(username=data.get('username'), first_name=data.get('firstName'), last_name=data.get('lastName'), email=data.get('email'), dob_month=data.get('dobMonth'), dob_day=data.get('dobDay'), dob_year=data.get('dobYear'), gender=data.get('gender'), weight=data.get('weight'), img1=data.get('imageOne'),img2=data.get('img2'), img3=data.get('img3'), about=data.get('about'), is_certified=data.get('certified'), city=data.get('city'))
        new_trainer.password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        db.session.add(new_trainer)
        db.session.commit()
        return new_trainer.to_dict(), 201
        
    except ValueError as e:
        return{"Error": f'{e}'}, 406
    
@app.get("/messages")
def get_messages():
    all_messages = Message.query.all()
    return [message.to_dict() for message in all_messages], 200

@app.get("/api/matches")
def get_matches():
    all_matches = Match.query.all()
    return [match.to_dict() for match in all_matches], 200

@app.post('/api/matches')
def post_matches():
    data = request.json
    existing_match = Match.query.filter_by(client_id=data.get('client_id'), trainer_id=data.get('trainerId')).first()

    if existing_match:
        return {"error": "Match already exists"}, 409  
    else:

        try:
            new_match = Match(client_id=data.get('client_id'), trainer_id=data.get('trainerId') )
            db.session.add(new_match)
            db.session.commit()
            return new_match.to_dict(), 201
        
        except ValueError as e:
            return{"Error": f'{e}'}, 406



    
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
    
