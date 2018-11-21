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
shelterids = []
for row in c.execute('SELECT zip from shelters where country == "US"'):
    if row not in shelterids:
        shelterids.append(row)
        realid = str(row)
        idwriter = open("shelterzips.txt", "a+")
        idwriter.write(realid+ f"\n")
