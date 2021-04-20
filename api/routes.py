from flask import Flask, request, jsonify
import pypyodbc
import requests

app = Flask(__name__)

# TODO: Put in mock data

# Get social feed
@app.route('/feed', methods=['GET'])
def social_feed():
    # TODO: Get first 10 Posts with the most likes

    connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')
    cursor = connection.cursor()
    # if 'id' in request.args:
    #     team_id = int(request.args['id'])
    #     cursor.execute("""
    #         SELECT T.TeamID
    #         FROM Teams T
    #             JOIN Posts P ON P.TeamID = T.TeamID
    #         WHERE T.TeamID = {}
    #         ORDER BY P.LikesNumber
    #     """.format(team_id))
    # else:
    #     cursor.execute('''
    #         SELECT TOP 10 *
    #         FROM Posts P
    #         ORDER BY P.LikesNumber
    #     ''')
    # posts_arr = []
    # for row in cursor.fetchall():
    #     curr_post = {}
    #     curr_post['PostID'] = row[0]
    #     curr_post['TeamID'] = row[1]
    #     curr_post['CommentsNumber'] = row[2]
    #     curr_post['LikesNumber'] = row[3]
    #     curr_post['PostURL'] = row[4]
    #     posts_arr.append(curr_post)
    postIDs = cursor.execute("SELECT * FROM Posts")
    cursor.close()
    posts = []
    for postID in postIDs:
        curr_post = {}
        curr_post['id'] = postID[0]
        posts.append(curr_post)

    return posts

@app.route('/signup', methods=['POST'])
def sign_up():
    username = request.form['username']
    password = request.form['password']
    connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')
    cursor = connection.cursor()

    cursor.execute('INSERT INTO Users (RewardsCount, Username, Password) VALUES (0, {username}, {password})'.format(username=username, password=password))
    cursor.close()

@app.route('/login', methods=['GET'])
def log_in():
    username = request.args.get('username')
    password = request.args.get('password')
    connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')
    cursor = connection.cursor()

    output = cursor.execute('SELECT * FROM Users WHERE username=\'{username}\' AND password=\'{password}\''.format(username=username, password=password))
    if len(output.fetchall()) >= 1:
        return "True"
    else:
        return "False"

@app.route('/feed/<team_id>', methods=['GET'])
def team_social_feed(team_id):
    # TODO: Get first 10 posts from certain team
    conn = pypyodbc.connect(conn_string)
    cursor = conn.cursor()
    cursor.execute('''
        SELECT T.TeamID
        FROM Teams T
            JOIN Posts P ON P.TeamID = T.TeamID
        WHERE T.TeamID = {}
        ORDER BY P.LikesNumber
    '''.format(team_id))
    posts_arr = []
    for row in cursor.fetchall():
        curr_post = {}
        curr_post['PostID'] = row[0]
        curr_post['TeamID'] = row[1]
        curr_post['CommentsNumber'] = row[2]
        curr_post['LikesNumber'] = row[3]
        curr_post['PostURL'] = row[4]
        posts_arr.append(curr_post)
    return jsonify(posts_arr)

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
@app.route('/user/<username>')
def user_profile(username):
    # TODO: Return current user info
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

if __name__ == '__main__':
    app.run(debug=True) 
