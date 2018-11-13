import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
import os 
import sqlite3  
conn = sqlite3.connect('petfinder.db')  


c = conn.cursor()

c.execute('''CREATE TABLE stocks
             (date text, trans text, symbol text, qty real, price real)''')

c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

conn.commit()

conn.close()


# class Shelter (Base):
#     __tablename__ = 'shelters'
#         id = Column(Integer, primary_key = True)
#         name = Column(Text)
#         latitude = Column(Float)
#         longitude = Column(Float)
#         def __repr__(self):
#             return f"id={self.id}, name = {self.name}"