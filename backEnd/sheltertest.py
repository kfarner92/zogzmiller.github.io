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
data = open("backend/newstates.txt", "r")
conn = sqlite3.connect('petfinder.db') 
c = conn.cursor()
c.execute('''CREATE TABLE shelters
        (name text, id text,phone text, address text, city text, state text, country text, zip text,
        email text, latitude text, longitude text)''')
# c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

# url = "https://zogzmiller.github.io/"
for state in data:
    browser = Browser('firefox')
    conn = sqlite3.connect('petfinder.db') 
    c = conn.cursor()
    browser.visit('https://zogzmiller.github.io/')
    browser.fill('zip', state)
    browser.find_by_id('submitZip').click()
    time.sleep(10)
    listings = browser.find_by_tag('li')

    for i in listings:
            shelters = []
            text = i.text.split('^ ')
            for x in range(11):
                    value = text[x].split(': ')[1]
                    if '"' in value:
                            standin = 'Doug Funny'
                            shelters.append(standin)
                    else:
                            shelters.append(value)
            # c.executemany('INSERT INTO shelters VALUES (?,?,?,?,?,?,?)', shelters)
            c.execute(f'INSERT INTO shelters VALUES ("{shelters[0]}","{shelters[1]}","{shelters[2]}","{shelters[3]}","{shelters[4]}","{shelters[5]}","{shelters[6]}","{shelters[7]}","{shelters[8]}","{shelters[9]}","{shelters[10]}")')
    # c.execute(f"INSERT INTO shelters VALUES ('{shelters}')")
# c.executemany('INSERT INTO shelters VALUES (?,?,?,?,?,?,?)', shelters)

    conn.commit()

    conn.close()

    browser.quit()
