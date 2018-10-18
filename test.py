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

# c.execute('''CREATE TABLE cats
#         (id text, name text,breed text, age text, animal text, shelterID text, sex text, website text)''')

# c.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")
# def scrape():
browser = Browser('chrome')
# url = "https://zogzmiller.github.io/"
browser.visit('https://zogzmiller.github.io/')
browser.find_by_id('submitZip').click()
time.sleep(10)
listings = browser.find_by_tag('li')

for i in listings:
        cats = []
        text = i.text.split('^ ')
        for x in range(8):
                value = text[x].split(': ')[1]
                if '"' in value:
                        standin = 'Doug Funny'
                        cats.append(standin)
                else:
                        cats.append(value)
                        print(value)
        # c.executemany('INSERT INTO cats VALUES (?,?,?,?,?,?,?)', cats)
        c.execute(f'INSERT INTO cats VALUES ("{cats[0]}","{cats[1]}","{cats[2]}","{cats[3]}","{cats[4]}","{cats[5]}","{cats[6]}","{cats[7]}")')
        # c.execute(f"INSERT INTO cats VALUES ('{cats}')")
# c.executemany('INSERT INTO cats VALUES (?,?,?,?,?,?,?)', cats)

conn.commit()

conn.close()

browser.quit()
