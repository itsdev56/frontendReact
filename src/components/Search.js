import React, { Component } from 'react'

export default class Search extends Component {
    state=
    {
      item:''
    }
    onChange=(e)=> 
    {
        this.setState({item:e.target.value})
        this.props.search(e.target.value);
        console.log(e.target.value);
       // this.setState({item:''});
    }
   render() {
     return (
      <form>
          <input type="text" name="abbb" placeholder="search the todo" onChange={this.onChange}/>
          <button className="btn btn-success ml-2">
              <i class="fa fa-search" aria-hidden="true"></i>
          </button>
      </form>
  )
}
}