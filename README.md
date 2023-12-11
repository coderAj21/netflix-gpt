# Netflix GPT
- create react app
- configure tailwind css
- Header
- Routing of app
- login form
- sign up form
- form validation
- useRef hook and I have use the formData state
- firebase setup
- create user with create user api
- sign in by sign by user
- create redux store and userSlice
- implement sign out by firebase 
- update profile method to add the name and profile pic 
- Bugfix for new user sign up not showing the name and profile image
- Bugfix if the user is not logged in Redirect/browse to login page and vice-versa
- unmounting the onAtuhStateChanged by assign it in unsubcribe and then returing it in useEffect
- then hardcode the url and svg file to constant.js file
- register for the api on tmdb and get the api key
- go to he document and get the different api like movie list
- create movie slice to store movie list
- create a custom hooks and where we fetch the api and get the result and put it into the store for the movies data
- create the maincontainer and secondary container
- fetch th data for the trailer video
- create the state in moviesSlice and add the reducer in it and named it trailerVideo
- embeded the youtube video and make it autoplay and mute
- 

# Feature
    -> Login/ Sign Up
        -> Sign In/ Sign up form 
        -> redirected to browser page
    -> Browse( After Authentication)
        -> Header
        -> Main Movie 
            -> Trailer in Background
            -> Title and Description
            -> Movie Suggestion
                -> Movielist * N
    -> NetflixGPT
        -> Search Bar
        -> Movie Suggestions
