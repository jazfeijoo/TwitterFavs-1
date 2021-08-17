import React from 'react';
import { connect } from 'react-redux';


class ShowTweets extends React.Component {
    // constructor(){
    //     super();
    // }
    componentDidMount(){
        console.log('PROPS AT SHOW TWEETS:',this.props)
    }
    render() {
        const author = this.props.searchAuthor
        const tweets = author.tweets.map( tweet => (
          <div id="Twitter-tweets" key={tweet.id}>
                <h3>{tweet.text}</h3>
                <h5>{tweet.created_at.slice(0,16)}</h5>
          </div>
        ))

        return (
            <div id="Twitter-tweets-list">
             {tweets}
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        searchAuthor: state.searchAuthor,

    }
  }

export default connect(mapState,null)(ShowTweets)