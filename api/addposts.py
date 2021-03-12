from flask import Flask
import pypyodbc

app = Flask(__name__)

# 73.83.21.192/32

connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')

cursor = connection.cursor()
cursor.execute('''
    CREATE TABLE test (
        testField varchar(50)
    )
''')
connection.commit()
print(cursor.execute("SELECT * FROM test"))