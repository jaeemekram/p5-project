from random import randint, choice as rc 

# Remote library imports
from faker import Faker
# f = open('db.json')

# data = json.load(f)

# Local imports
from app import app
from models import db, Client, Trainer, Match, Message, Specialty, TrainerSpecialty

fake = Faker()



if __name__ == '__main__':
    with app.app_context():
        
        print("Clearing db...")
        Client.query.delete()
        Trainer.query.delete()
        Match.query.delete()
        Message.query.delete()
        Specialty.query.delete()
        TrainerSpecialty.query.delete()

        ##CLIENT INSTANCES
        cities = ["Queens", "The Bronx", "Staten Island", "Brooklyn", "Manhattan"]
        c1 = Client(username="ChettGPT", password=fake.password(), first_name="Chett", last_name="Tiller", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://static.wikia.nocookie.net/nickelodeon/images/7/7d/Larry_with_Speedo.png/revision/latest?cb=20230415005534",img2="", img3="", about="", city=rc([city for city in cities]))
        c2 = Client(username="Sbob", password=fake.password(), first_name="Spongebob", last_name="Squarepants", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://i.imgflip.com/e9j3q.jpg?a475056",img2="", img3="", about="", city=rc([city for city in cities]))
        c3 = Client(username="BigCat420", password=fake.password(), first_name="Tom", last_name="Cat", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://i.pinimg.com/564x/4c/2d/5b/4c2d5baeee3c5055482ba6606391bd83.jpg",img2="", img3="", about="", city=rc([city for city in cities]))
        c4 = Client(username="BettOnMe", password=fake.password(), first_name="Betty", last_name="Boop", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article4843.jpg",img2="", img3="", about="", city=rc([city for city in cities]))
        c5 = Client(username="LOLBunz", password=fake.password(), first_name="Lola", last_name="Bunny", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://i.pinimg.com/564x/20/c3/03/20c303a867a9b0b8b0ce503504542dec.jpg",img2="", img3="", about="", city=rc([city for city in cities]))
        c6 = Client(username="CheeksOfTheSand", password=fake.password(), first_name="Sandy", last_name="Cheeks", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201),img1="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/048c8356-1a5c-4b2d-93ad-0eb6c5c77873/de2gxdo-76158f39-f6c2-46d6-9cbc-b9daac9e7b05.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0OGM4MzU2LTFhNWMtNGIyZC05M2FkLTBlYjZjNWM3Nzg3M1wvZGUyZ3hkby03NjE1OGYzOS1mNmMyLTQ2ZDYtOWNiYy1iOWRhYWM5ZTdiMDUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MppIdXaM43kotvk8t7iEEv_EWl6mAtLa12Pk99vyrzs",img2="", img3="", about="", city=rc([city for city in cities]))
        clients = [c1, c2, c3, c4, c5, c6]
        db.session.add_all(clients)
        db.session.commit()
        print("making Clients beep boop...")

        ###TRAINER INSTANCES
        t1=Trainer(username="JaeemTheDream", password=fake.password(), first_name="Jaeem", last_name="Ekram", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://resource.destinywalkthrough.com/library/2014/1410174811hunter_single_3.png",img2="", img3="", about="", is_certified="cert-pic " , city=rc([city for city in cities]))
        t2=Trainer(username="HeresJohnny", password=fake.password(), first_name="Johnny", last_name="Bravo", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://1.bp.blogspot.com/-xnWU73LIBu4/YVBmXTiR5VI/AAAAAAAAnVg/6hgKibonMjo0sts-8HbKeyOGU05cbsZ-wCLcBGAsYHQ/s720/3378021.jpg",img2="", img3="", about="", is_certified="cert-pic " , city=rc([city for city in cities]))
        t3=Trainer(username="PoppaPops", password=fake.password(), first_name="Popeye", last_name="TheSailor", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Male", weight=randint(100,201), img1="https://i.pinimg.com/originals/05/c1/ab/05c1ab65b1b2e336fe3cb321b9d4ea46.png",img2="", img3="", about="", is_certified="cert-pic " , city=rc([city for city in cities]))
        t4=Trainer(username="FlexNoBox", password=fake.password(), first_name="Helen", last_name="Parr", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Helen_Parr.png/220px-Helen_Parr.png",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t5=Trainer(username="LionQueen", password=fake.password(), first_name="Nala", last_name="Lion", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://i.pinimg.com/736x/04/ae/3e/04ae3e55bfd8d859ebf55138c56458f0.jpg",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t6=Trainer(username="DrippyBender", password=fake.password(), first_name="Katara", last_name="OfTheWaterTribe", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://m.media-amazon.com/images/I/91SpCtx31AL._AC_UF1000,1000_QL80_.jpg",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t7=Trainer(username="Sbob", password=fake.password(), first_name="Spongebob", last_name="Squarepants", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://i.imgflip.com/e9j3q.jpg?a475056",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t8=Trainer(username="BigCat420", password=fake.password(), first_name="Tom", last_name="Cat", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://i.pinimg.com/564x/4c/2d/5b/4c2d5baeee3c5055482ba6606391bd83.jpg",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t9=Trainer(username="BettOnMe", password=fake.password(), first_name="Betty", last_name="Boop", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article4843.jpg",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        t10=Trainer(username="LOLBunz", password=fake.password(), first_name="Lola", last_name="Bunny", email=fake.email(), dob_month=randint(1,13), dob_day=randint(1,31), dob_year=randint(1972,2011), gender="Female", weight=randint(100,201), img1="https://i.pinimg.com/564x/20/c3/03/20c303a867a9b0b8b0ce503504542dec.jpg",img2="", img3="", about="", is_certified="cert-pic ", city=rc([city for city in cities]) )
        trainers=[t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
        db.session.add_all(trainers)
        db.session.commit()
        print("making Trainers beep boop...")


        # ###MATCHES INSTANCES
        # m1=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m2=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m3=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers])) 
        # m4=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m5=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m6=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m7=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m8=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m9=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m10=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m11=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m12=Match(client_id=rc([client.id for client in clients]), trainer_id=rc([trainer.id for trainer in trainers]))
        # m13=Match(client_id=7, trainer_id=rc([trainer.id for trainer in trainers]))
        # m14=Match(client_id=7, trainer_id=rc([trainer.id for trainer in trainers]))
        # m15=Match(client_id=7, trainer_id=rc([trainer.id for trainer in trainers]))
        # matches=[m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15]
        # db.session.add_all(matches)
        # db.session.commit()
        # print("making Matches beep boop...")

        ###SPECIALTY INSTANCES
        special_stuff=["Nutrition", "Youth Fitness", "Senior Fitness", "Fat Loss", "Corrective exercise specialist", "Strength and Conditioning", "Powerlifting", "Bodybuilding", "Cross Fit", "Calisthenics"]
        specialties = [Specialty(specialty=spec) for spec in special_stuff]
        db.session.add_all(specialties)
        db.session.commit()

        ###TRAINER SPECIALTY INSTANCES
        ts1 = TrainerSpecialty(trainer_id=1, specialty_id=rc([specialty.id for specialty in specialties]))
        ts2 = TrainerSpecialty(trainer_id=2, specialty_id=rc([specialty.id for specialty in specialties]))
        ts3 = TrainerSpecialty(trainer_id=3, specialty_id=rc([specialty.id for specialty in specialties]))
        ts4 = TrainerSpecialty(trainer_id=4, specialty_id=rc([specialty.id for specialty in specialties]))
        ts5 = TrainerSpecialty(trainer_id=5, specialty_id=rc([specialty.id for specialty in specialties]))
        ts6 = TrainerSpecialty(trainer_id=6, specialty_id=rc([specialty.id for specialty in specialties]))
        ts7 = TrainerSpecialty(trainer_id=7, specialty_id=rc([specialty.id for specialty in specialties]))
        ts8 = TrainerSpecialty(trainer_id=8, specialty_id=rc([specialty.id for specialty in specialties]))
        ts9 = TrainerSpecialty(trainer_id=9, specialty_id=rc([specialty.id for specialty in specialties]))
        ts10 = TrainerSpecialty(trainer_id=10, specialty_id=rc([specialty.id for specialty in specialties]))
        trainer_specialties = [ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts10]
        db.session.add_all(trainer_specialties)
        db.session.commit()

        ###MESSAGE INSTANCES
        # mes1 = Message(client_id=m1.client_id, trainer_id=m1.trainer_id, message_content=fake.text())
        # mes2 = Message(client_id=m2.client_id, trainer_id=m2.trainer_id, message_content=fake.text())
        # mes3 = Message(client_id=m3.client_id, trainer_id=m3.trainer_id, message_content=fake.text())
        # mes4 = Message(client_id=m4.client_id, trainer_id=m4.trainer_id, message_content=fake.text())
        # mes5 = Message(client_id=m5.client_id, trainer_id=m5.trainer_id, message_content=fake.text())
        # mes6 = Message(client_id=m6.client_id, trainer_id=m6.trainer_id, message_content=fake.text())
        # mes7 = Message(client_id=m7.client_id, trainer_id=m7.trainer_id, message_content=fake.text())
        # mes8 = Message(client_id=m8.client_id, trainer_id=m8.trainer_id, message_content=fake.text())
        # mes9 = Message(client_id=m9.client_id, trainer_id=m9.trainer_id, message_content=fake.text())
        # mes10 = Message(client_id=m10.client_id, trainer_id=m10.trainer_id, message_content=fake.text())
        # mes11 = Message(client_id=m11.client_id, trainer_id=m11.trainer_id, message_content=fake.text())
        # mes12 = Message(client_id=m12.client_id, trainer_id=m12.trainer_id, message_content=fake.text())
        # messages=[mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10, mes11, mes12]
        # db.session.add_all(messages)
        # db.session.commit()
        # print("making Messages beep boop...")
       
     
        


