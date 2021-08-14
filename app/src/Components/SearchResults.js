import React from 'react';
 import { connect } from 'react-redux';


class SearchResult extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        let author = this.props.searchAuthor
        let length = author.profile_image_url.length -11 //remove: _normal from img
        let img = author.profile_image_url.slice(0, length)
        img = img.concat('.jpg')
        return (
            <div className="Twitter-Search-Results">
                <h1>{author.name}</h1>
                <img src={img} alt='not available'/>
                <h3>@{author.screen_name}</h3>
                <h3>Followers: {author.followers_count.toLocaleString('en-US')}</h3>
                <a style={{color: 'rgb(214, 168, 83)'}} href={'https://twitter.com/'.concat(author.screen_name)}>{'https://twitter.com/'.concat(author.screen_name)}</a>
                <div>
                <button type="submit">TWEETS</button>    
                <button type="submit">ADD TO LIST</button>
                </div>
                
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        searchAuthor: state.searchAuthor,

    }
  }

export default connect(mapState, null)(SearchResult)

 