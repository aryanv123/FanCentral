import pypyodbc
import scraper

twitter_posts = scraper.scrape_twitter()

connection = pypyodbc.connect(r'DRIVER={ODBC Driver 17 for SQL Server}; SERVER=capstone.cgt2vqhhmy5k.us-east-2.rds.amazonaws.com; DATABASE=FanCentral; UID=admin; PWD=INFO490Capstone')
cursor = connection.cursor()

for post in twitter_posts:
    cursor.execute('''
    INSERT INTO Posts (postId)
    VALUES ({})
    '''.format(post))

connection.commit()
cursor.execute("SELECT * FROM Posts")
print(cursor.fetchall())
