import pypyodbc
import scraper

reddit_posts = scraper.scrape_reddit()

print(reddit_posts)

connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')

cursor = connection.cursor()

# cursor.execute('''
#     INSERT INTO Teams (TeamID, TeamName)
#     VALUES (2, 'Los Angeles Lakers')
# ''')
# cursor.execute('''
#     SET IDENTITY_INSERT Posts ON
# ''')

# connection.commit()

# cursor.execute('''
#     INSERT INTO Posts(PostID, TeamID, CommentsNumber, LikesNumber, PostURL)
#     VALUES (2, 2, 201, 1176, 'https://twitter.com/UW_Football/status/1369821950059499520?s=20'),
#     (3, 1, 10, 12, 'https://twitter.com/UW_MBB/status/1370082659511115779?s=20'),
#     (4, 2, 6, 208, 'https://twitter.com/UW_Football/status/1369062325123129344?s=20'),
#     (5, 1, 22, 34, 'https://twitter.com/UW_MBB/status/1369832903119544321?s=20'),
#     (6, 1, 0, 187, 'https://twitter.com/UW_MBB/status/1369831893886140419?s=20')
# ''')

# connection.commit()
# cursor.execute("SELECT * FROM Posts")
# print(cursor.fetchall())