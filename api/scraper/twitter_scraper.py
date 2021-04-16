import tweepy

def scrape_twitter():
    intialize();
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_key, access_secret)
    api = tweepy.API(auth, wait_on_rate_limit=True)

    new_tweets = api.user_timeline(screen_name="UW_MBB", count=10)

    twitter_posts = []

    for tweet in new_tweets:
        twitter_posts.append(tweet.id)

def intialize():
    consumer_key = "aNmee6giDyVSo42ecsO09UFe2"
    consumer_secret = "lZh278olLZ1lhzh2qVpYHusdkF6eOcVwWRif2mizeFZwvZCuUB"
    access_key = "237514533-ORcaNLwxIjrAKJSCwXeqTk4nWu7e8xgJUYVDCe0D"
    access_secret = "T26H9nZNBQb5x7swkFIUeMNYP4x6MbxWplz47Uk1s7pRI"


