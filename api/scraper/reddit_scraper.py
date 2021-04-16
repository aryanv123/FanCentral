import praw

def scrape_reddit():
    reddit = praw.Reddit(client_id="WEme202K__afgw",      # your client id
                        client_secret="mtUtN1jj7zYOeF8cdhwxybahkHTuXQ",  #your client secret
                        user_agent="sports scraper", #user agent name
                        username = "Own_Assistance6905")     # your reddit username

    subreddit = reddit.subreddit('Huskies')

    reddit_posts = []

    for post in subreddit.new(limit=10):
        reddit_posts.append("htts://www.reddit.com" + post.permalink)
    return reddit_posts
