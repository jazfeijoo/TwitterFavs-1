import React from 'react';
 import { connect } from 'react-redux';
 import { fetchSearchAuthor } from '../Redux/searchAuthor'

class SearchAuthor extends React.Component {
    constructor(){
        super();
        this.state = {
            screen_name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.getSearchAuthor({...this.state})
    }  

    render() {
        console.log('PROPS:' , this.prop)
        console.log('STATE:' , this.state)
        const {screen_name} = this.state
        const { handleChange, handleSubmit } = this;
        return (
            
            <section>
                <form className="Twitter-search-box" onSubmit={handleSubmit}>
                        <label htmlFor="screen_name">Search title handle:</label>
                        <input name="screen_name" onChange={handleChange} value={screen_name} /> 
                        <button type="submit" className="screen_name-button">Search</button>
                </form>
            </section>
        )
    }

}

const mapState = (state) => {
    return {
        searchAuthor: state.searchAuthor
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getSearchAuthor: (screen_name) => dispatch(fetchSearchAuthor(screen_name))
    }
  }

export default connect(mapState, mapDispatchToProps)(SearchAuthor)
