from flask import Flask
import pypyodbc

app = Flask(__name__)

# 73.83.21.192/32

connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=Posts; UID=admin; PWD=INFO490Capstone')

cursor = connection.cursor()
cursor.execute('''
    CREATE TABLE test (
        testField varchar(50)
    )
''')
connection.commit()
print(cursor.execute("SELECT * FROM test"))

# TODO: Put in mock data

# Get social feed
@app.route('/feed')
def social_feed():
    # TODO: Get first 10 Posts with the most likes 
    return 'Hi'

# User likes a post
def like_post():
    # TODO: Add 1 to like count of liked post
    return None

# User adds a comment
def add_comment():
    # TODO: Create new comment record with given info
    return None

# User buys reward
def buy_reward():
    # TODO: Subtract reward amount from user profile
    return None

# Make a post
def new_post():
    # NOT FOR CURRENT ITERATION
    return None

# Get user porfile
def user_profile():
    # TODO: Return current user info
    return None

# Get team profile
def team_profile():
    # NOT FOR CURRENT ITERARTION
    return None

# NOT FOR CURRENT ITERATION
'''
# Get live scores
def live_scores():
    return None

# Get news updates
def news_updates():
    return None

# Get chatrooms
def chat_room():
    return None
'''