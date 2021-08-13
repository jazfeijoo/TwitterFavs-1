0. set up:
    1. backend:  
        npm install -g express-draft
        exp folderName 
        (i.e. exp server)
    2. frontend: 
        npx create-react-app folderName --use-npm 
        (i.e. npx create-react-app app --use-npm)
   * Dependencies are now included for both backend & front end :p
   3. npm init i concurrently
   * since backend and frontend are running separately, we use concurrently to be able to run both
   4. add package.json script:
        "dev": "concurrently 'cd app && npm start' 'cd server && npm run dev' "
    5. In app/src -> delete unnecessary files...

//TO SEARCH FOR AUTHOR BY SCREENNAME AND RETURN: [{id, id_str, name, screen_name, etc...}]
// https://api.twitter.com/1.1/users/lookup.json?screen_name=${screen_name}
//https://api.twitter.com/2/users/by/username/USER_NAME

//TO SHOW AUTHOR BY SCREENNAME:
// 'https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev'

// EX: {
//     "id": 813286,
//     "id_str": "813286",
//     "name": "Barack Obama",
//     "screen_name": "BarackObama",
//     "location": "Washington, DC",
//     "description": "Dad, husband, President, citizen.", etc...

//ONCE AUTHOR GRABBED, SEARCH FOR THEIR TWEETS: 
https://api.twitter.com/1.1/search/tweets.json?q=from%3A${screen_name}
//&result_type=recent
//&count=3 (is the max count therefore it returns 2 tweets)

//EXAMPLE: https://api.twitter.com/1.1/search/tweets.json?q=from%3Ashakira&count=3&result_type=recent/


