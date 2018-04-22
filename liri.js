// Include .env file
require("dotenv").config();

// Include the request npm package 
let request = require("request");

// Retrieve the keys
let keys = require('./keys.js');

// Load the fs package to read and write
let fs = require("fs");

// Take two arguments.
// The first will be the action ("my-tweets, spotify-this-song, movie-this, do-what-it-says")
// The second will be the input for the action (song name, movie name)
let action = process.argv[2];
let input = process.argv[3];

switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        song();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        whatever();
        break;
};


// Twitter section
function tweets () {

    let Twitter = require('twitter');
    let client = new Twitter(keys.twitter);

    let params = {screen_name: 'joanhealthynote'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < 20; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                console.log("-------------------------");
            };
        } else {
            console.log("Error in tweet retrieval");
        }
    });
};    

//Spotify section

function song () {

    let Spotify = require('node-spotify-api');
    let spotify = new Spotify(keys.spotify);

    if (input === undefined) { input = "The Sign" };

    spotify.search({type: 'track', query: input}, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        let index = 0;
        for (i = 0; i < data.tracks.items.length; i++) {
            //if the first item is a match, we take it; otherwise, we search
            if (data.tracks.items[0].name !== input && input === data.tracks.items[i].name) {
                index = i;
            }
        }
        console.log("This is the artist: ", data.tracks.items[index].artists[0].name);
        console.log("This is the song's name:  ", data.tracks.items[index].name);
        console.log("This is the preview link: ", data.tracks.items[index].preview_url);
        console.log("This is the album: ", data.tracks.items[index].album.name);
    });
};


// OMDB movie section

function movie() {

    if (input === undefined) {input = "Mr. Nobody"};

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            console.log("Title: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year +
                "\nIMDB Rating: " + JSON.parse(body).imdbRating + "\nRotten Tomatoes: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " +
                JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors );
            console.log("\n-------------\n");

        } else {
            console.log("No response");
        }

    });
};

function whatever() {

    // Read the existing file
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }

        // Break down all the items inside
        data = data.split(",");
        action = data[0];
        input = data[1];

        console.log(action, input);

        switch (action) {
            case "my-tweets":
                tweets();
                break;

            case "spotify-this-song":
                song();
                break;

            case "movie-this":
                movie();
                break;

        };


    });
};




