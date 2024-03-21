from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Client(db.Model, SerializerMixin):
    __tablename__ = "clients_table"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    dob_month = db.Column(db.Integer, nullable=False)
    dob_day = db.Column(db.Integer, nullable=False)
    dob_year = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    img1 = db.Column(db.String)
    img2 = db.Column(db.String)
    img3 =db.Column(db.String)
    about = db.Column(db.String)

    matches = db.relationship("Match", back_populates="client")
    trainers = association_proxy("matches", "trainer")

    serialize_rules = ("-matches.client", "-trainer")

    


class Trainer(db.Model, SerializerMixin):
    __tablename__ = "trainers_table"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    city = db.Column(db.String, nullable=False)
    dob_month = db.Column(db.Integer, nullable=False)
    dob_day = db.Column(db.Integer, nullable=False)
    dob_year = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    img1 = db.Column(db.String)
    img2 = db.Column(db.String)
    img3 = db.Column(db.String)
    about = db.Column(db.String)
    is_certified = db.Column(db.String, nullable=False)

    matches = db.relationship("Match", back_populates="trainer")
    clients = association_proxy("matches", "client")
    trainer_specialties = db.relationship("TrainerSpecialty", back_populates="trainer")
    specialties = association_proxy("trainer_specialties", "specialty")

    serialize_rules = ("-matches.trainer", "-client", "-trainer_specialties.trainer", "-specialty")

class Specialty(db.Model, SerializerMixin):
    __tablename__ = "specialty_table"
     
    id = db.Column(db.Integer, primary_key=True)
    specialty = db.Column(db.String, unique=True)

    trainer_specialties = db.relationship("TrainerSpecialty", back_populates ="specialty")
    trainers = association_proxy("trainer_specialties", "trainer")

    serialize_rules = ("-trainer_specialties.specialty", "-trainers")


class TrainerSpecialty(db.Model, SerializerMixin):
    __tablename__ = "trainer_specialty_table"
    
    id = db.Column(db.Integer, primary_key=True)
    trainer_id = db.Column(db.Integer, db.ForeignKey("trainers_table.id"))
    specialty_id = db.Column(db.Integer, db.ForeignKey("specialty_table.id"))

    trainer = db.relationship("Trainer", back_populates="trainer_specialties")
    specialty = db.relationship("Specialty", back_populates="trainer_specialties")

    serialize_rules = ("-trainer.trainer_specialties", "-specialty.trainer_specialties")


class Match(db.Model, SerializerMixin):
    __tablename__ = "matches_table"

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("clients_table.id"))
    trainer_id = db.Column(db.Integer, db.ForeignKey("trainers_table.id"))
    # message_id = db.Column(db.String, db.ForeignKey("messages_table.id"))

    client = db.relationship("Client", back_populates="matches")
    trainer = db.relationship("Trainer", back_populates="matches")
    messages = db.relationship("Message", back_populates="match")

    serialize_rules = ("-client.matches", "-trainer.matches", "-message.matches")

class Message(db.Model, SerializerMixin):
    __tablename__ = "messages_table"

    id = db.Column(db.Integer, primary_key=True)

    client_id = db.Column(db.Integer, db.ForeignKey("clients_table.id"))
    trainer_id = db.Column(db.Integer, db.ForeignKey("trainers_table.id"))
    message_content = db.Column(db.String)
    match_id= db.Column(db.Integer, db.ForeignKey("matches_table.id"))

    match = db.relationship("Match", back_populates="messages")

    serialize_rules = ("-match.message",)

