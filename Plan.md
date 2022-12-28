1.  prepare each component starting with the joke card,footer,header...

2.  prepare pages and import the needed components in it

3.  creating folder for api's calls

4.  will be storing these data on localstorage (using react-redux) so that data is shared between multiple components

5.  api is missing some attribute (likes,dislikes and title) so am gonna use some static values
    in normal circumstances i would create a cronjob that fetch data from https://api.chucknorris.io/ and store it back on a local database and each joke get an initial score value of 0
    so that the score wont be a static value and multiple users can test the app and see that the likes/dislikes counter works fine
    for now am just storing random likes/dislike on localstorage

6.  As for the Next joke and previous joke buttons i was thinking of getting a random joke from https://api.chucknorris.io/jokes/random and then change the location but instead of that, am thinking of getting previous/next joke from the array stored on redux based on the current joke index on that array (because there is a number showed on joke details page)
