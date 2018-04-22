# liri-node-app
Class exercise: Language Interpretation and Recognition Interface

This is a node application which will run one of the four following line items:

1. node liri.js my-tweets  

This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. node liri.js spotify-this-song SONG_NAME  
 
This will show the following information about the song in your terminal/bash window:  

 Artist(s)  
 The song's name  
 A preview link of the song from Spotify  
 The album that the song is from  
 If no song is provided then your program will default to "The Sign" by Ace of Base.  

3. node liri.js movie-this MOVIE_NAME  
 
This will show the following information about the song in your terminal/bash window:  

  Title of the movie.  
  Year the movie came out.  
  IMDB Rating of the movie.  
  Rotten Tomatoes Rating of the movie.  
  Country where the movie was produced.  
  Language of the movie.  
  Plot of the movie.  
  Actors in the movie.  
If no movie is provided, the default is “Mr. Nobody”

4. node liri.js do-what-it-says  

This calls the item(s) entered in the random.txt file.

Note: in order to run this application, you’ll need to create an .env file with the following data:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
