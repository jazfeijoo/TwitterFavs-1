import React from 'react';
 import { connect } from 'react-redux';
 import { fetchSearchAuthor } from '../Redux/searchAuthor'
 import SearchResult  from './SearchResults'

class SearchAuthor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screen_name: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        console.log('PROPS.SEARCH @ UPDATE SEARCH:',this.props.searchAuthor)

      }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    handleSubmit(evt){
        evt.preventDefault();
            this.props.getSearchAuthor({...this.state})
        
        if (this.state.screen_name.length && (this.props.searchAuthor.screen_name !== this.state.screen_name)){
            this.setState({message: 'Twitter handle does not exist.'})
            
        } 
        if  (!this.state.screen_name.length){
            this.setState({message: 'Please provide a valid input.'})
        }
        if (this.state.screen_name === this.props.searchAuthor.name){
            this.setState({message: ''})
            
        } 
    }  

    render() {
        const author = this.props.searchAuthor || {}
        const {screen_name} = this.state.screen_name
        const { handleChange, handleSubmit } = this;    
        return (          
            <section>
                <form className="Twitter-search-box" onSubmit={handleSubmit}>
                        <label htmlFor="screen_name">Twitter Handle:</label>
                        <input name="screen_name" onChange={handleChange} value={screen_name} /> 
                        <button type="submit" className="screen_name-button">FIND</button>
                </form>
                <div> 
                    {author.name?
                    (<SearchResult/>):
                    (<h3>{this.state.message}</h3>)
                    }
                </div>
            </section>
        )
    }

}

 const mapState = (state) => {
     return {
         searchAuthor: state.searchAuthor
     }
   }

  const mapDispatchToProps = (dispatch, { history }) => {
    return {
      getSearchAuthor: (screen_name) => dispatch(fetchSearchAuthor(screen_name, history))
    }
  }

export default connect(mapState, mapDispatchToProps)(SearchAuthor)
