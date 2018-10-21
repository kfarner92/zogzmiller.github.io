import json
import os
import sqlite3
import time
from pprint import pprint as pprint

import pandas as pd
import sqlalchemy
from bs4 import BeautifulSoup
from flask import Flask, json, jsonify
from splinter import Browser
from sqlalchemy import (Column, Float, ForeignKey, Integer, MetaData, Numeric,
                        String, Text, create_engine)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
conn = sqlite3.connect('petfinder.db') 
c = conn.cursor()
# c.execute('''CREATE TABLE dogs
#         (id text, name text,age text, breed text, animal text, shelterId text, sex text, website text)''')
# c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")
zippers = [90001,90211,90608]
# url = "https://zogzmiller.github.io/"
for z in zippers:
    browser = Browser('chrome')
    conn = sqlite3.connect('petfinder.db') 
    c = conn.cursor()
    browser.visit('https://zogzmiller.github.io/')
    browser.fill('zip', z)
    browser.find_by_id('submitZip').click()
    time.sleep(10)
    listings = browser.find_by_tag('li')

    for i in listings:
            dogs = []
            text = i.text.split('^ ')
            for x in range(8):
                    value = text[x].split(': ')[1]
                    if '"' in value:
                            standin = 'Doug Funny'
                            dogs.append(standin)
                    else:
                            dogs.append(value)
            # c.executemany('INSERT INTO dogs VALUES (?,?,?,?,?,?,?)', dogs)
            c.execute(f'INSERT INTO dogs VALUES ("{dogs[0]}","{dogs[1]}","{dogs[2]}","{dogs[3]}","{dogs[4]}","{dogs[5]}","{dogs[6]}","{dogs[7]}")')
    # c.execute(f"INSERT INTO dogs VALUES ('{dogs}')")
# c.executemany('INSERT INTO dogs VALUES (?,?,?,?,?,?,?)', dogs)

    conn.commit()

    conn.close()

    browser.quit()
