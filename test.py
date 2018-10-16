
from splinter import Browser

with Browser() as browser:
    url = "file:///Users/loganmiller/Documents/puppyproject/index.html?zip=&Animals=cat&Amount=5"
    browser.visit(url)