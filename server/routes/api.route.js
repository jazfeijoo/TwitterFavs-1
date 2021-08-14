const router = require('express').Router();
const Twitter = require('twitter')
var cors = require('cors');
router.use(cors());

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);


router.get(`/`, async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// //TESTING: SEARCH FOR A TWITTER AUTHOR:
// router.get('/authors', async (req, res, next) => {
//   console.log('REQ BODY: ', req.query, 'google this')
//   try {
//     const searchScreenName = await client.get(`/users/lookup`, {screen_name: "shakira"})
//     console.log(searchScreenName)
//     res.send(searchScreenName);
//   } catch (err){
//     console.log('/authors api route error:', err)
//   }
  
// });

router.get('/authors/:screen_name', async (req, res, next) => {
  const screen_name = req.params.screen_name
  try {
    const searchScreenName = await client.get(`/users/lookup`, {screen_name: screen_name})
    const twitterAuthor = searchScreenName[0] //because user object gets returned in an array [{}]
    console.log('OBJ RETURNED!',twitterAuthor)
    res.send(twitterAuthor);
  } catch (err){
    console.log('AUTHOR API ROUTE ERR:', err)
    res.send({})
  }
  
});

//IF ADDED TO FAV LIST: show user info needed & record/add author to fav list db for that user... 
router.get('/authors/show', async (req, res, next) => {
  try {
    const screen_name = 'shakira' //pass in screen_name as req
    const searchScreenName = await client.get(`/users/show`, {screen_name: screen_name})
    res.send( {'twitter_id': searchScreenName.id, 'twitter_id_str': searchScreenName.id_str,'twitter_name': searchScreenName.name, 'twitter_screen_name': searchScreenName.screen_name,'twitter_profileImg': searchScreenName.profile_image_url,'twitter_followers': searchScreenName.followers_count});
  } catch (err){
    console.log('/authors api route error:', err)
  }
  
});
//ONCE AUTHOR ADDED AS FAV, THEIR TWEETS POPULATE IN MAIN PAGE:
//RETURNS ARRAY OF TWEET OBJECTS...
router.get(`/authors/tweets`, async (req, res, next) => {
  try {
    const id = 44409004 //pass in twitter id once person has been found, to populate tweets in main page
    const authorTweets = await client.get(`/statuses/user_timeline.json`,{user_id: id, include_rts: false})
    res.send( authorTweets);
  } catch (err){
    console.log('/authors api route error:', err)
  }
});

//route gets tweets for particular author:
// router.get(`/authors/:${id}/tweets`, async (req, res, next) => {
//   res.send({ message: 'Ok api is working 🚀' });
// });

module.exports = router;
