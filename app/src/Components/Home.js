import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {
  
    componentDidMount(){
        console.log('HOME: ',this.props)
    }

    render() {
  
        return (          
            <div id="Home-page">
                <h1>STAYING<br></br>connected<br></br>WITHOUT <br></br>having to<br></br> disconnect</h1>
                <h2>
                    Think about how old your Facebook/Twitter accounts are...Thats a lot of history ☕  👀
                    <br></br>It could be that your timeline is full of irrelevant content that you scroll through everyday
                    <br></br>It could be that you don't want a hard cut off but you don't want the data overflow either
                    <br></br>What if there was a way to limit your daily feed to the content you actually want to see 
                    <br></br>
                    <br></br>This is what Social Favs is solving! Simply choose your favorite accounts for each platform
                    <br></br>Your daily feed will only show posts/content posted by your favorites (currently set at last 20 tweets, minus retweets!)
                    <br></br>
                    <br></br>The goal of this app is help users weed out the content that they are fed on their social media accounts
                    <br></br>Saves time: No more endless scrolling 
                    <br></br>Saves stress: The amount of data we consume on daily basis cannot be healthy 
                
                </h2>
            </div>
        )
    }

}

 const mapState = (state) => {
     return {
         searchAuthor: state.searchAuthor,
         auth: state.auth
     }
   }

export default connect(mapState, null)(Home)