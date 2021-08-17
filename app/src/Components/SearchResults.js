import React from 'react';
import { connect } from 'react-redux';
import ShowTweets from './ShowTweets'
import fetchAddToList from '../Redux/userList'


class SearchResult extends React.Component {
    constructor(){
        super();
        this.state = {
            showTweets: false,
        }
        this.handleTweet = this.handleTweet.bind(this);
        this.handleList = this.handleList.bind(this);
    }


    handleTweet(evt){
        evt.preventDefault();
        this.setState({
            showTweets: !this.state.showTweets
        })
    }

    handleList(evt){
        evt.preventDefault();
        console.log(this.props.searchAuthor)
        this.props.addToList(this.props.searchAuthor)
    }

    render() {
        const { handleTweet, handleList } = this;
        let author = this.props.searchAuthor
        let length = author.profile_image_url.length -11 //remove: _normal from img
        let img = author.profile_image_url.slice(0, length)
        img = img.concat('.jpg')
        return (
            <div>
                <div className="Twitter-Search-Results">
                    <h1>{author.name}</h1>
                    <img src={img} alt='not available'/>
                    <h3>@{author.screen_name}</h3>
                    <h3>Followers: {author.followers_count.toLocaleString('en-US')}</h3>
                    <a style={{color: 'rgb(184, 208, 231)'}} href={'https://twitter.com/'.concat(author.screen_name)}>{'https://twitter.com/'.concat(author.screen_name)}</a>
                    <div>
                        <button onClick={handleTweet} name={author.screen_name} type="submit">{this.state.showTweets? "TWEETS ▲" : "TWEETS ▼"}</button>    
                        <button onClick={handleList} type="submit">ADD TO LIST</button>
                    </div>
                </div>
                {this.state.showTweets? 
                (<ShowTweets/>):
                ('')}    
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

  const mapDispatchToProps = (dispatch, { history }) => {
    return {
        addToList: (author) => dispatch(fetchAddToList(author)),
    }
  }

export default connect(mapState, mapDispatchToProps)(SearchResult)

 