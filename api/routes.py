from flask import Flask
import pypyodbc

app = Flask(__name__)

# 73.83.21.192/32

connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=Posts; UID=admin; PWD=INFO490Capstone')

cursor = connection.cursor()
cursor.execute("CREATE TABLE test")
print(cursor.execute("SELECT * FROM test"))

# Get social feed
@app.route('/feed')
def social_feed():
    return 'Hi'

# Make a post
def new_post():
    return None

# Get user porfile
def user_profile():
    return None

# Get team profile
def team_profile():
    return None

# Get live scores
def live_scores():
    return None

# Get news updates
def news_updates():
    return None

# Get chatrooms
def chat_room():
    return None