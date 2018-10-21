import pandas as pd
data = pd.read_csv("AllZipCSV.csv", dtype={'zip':str})
zips = []
for index, row in data.iterrows():
    if index % 25 == 0: 
        zips.append(row["zip"])