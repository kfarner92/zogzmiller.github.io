import json
from flask import Flask,jsonify,json
from splinter import Browser
from pprint import pprint as pprint
browser = Browser('chrome')
url = "https://zogzmiller.github.io/"
browser.visit(url)
button = browser.find_by_id('submitZip')
button.click()
animals = []
listings = browser.find_by_css('li')
for i in listings:
    test = i.text.split(',')
    for x in test:
        sep = x.split(': ')
        animals.append(sep)
browser.quit()
for i in range(len(animals)):

    if str(animals[i][0]) == ' id':
        pprint(animals[i][1])