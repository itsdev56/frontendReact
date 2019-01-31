import React, { Component } from 'react'
export default class Add extends Component {
  state=
  {
    taskName:''
  }
  /*meri=()=>
  {
    width: '400px',
    padding: '10px 10px',
    margin:'0 auto',  
    marginTop: '20px', 
    marginBottom: '20px',
    borderRadius: '2px',
    textAlign:'center',
    border: '2px solid black', 
    color: 'green',
  }*/
  onChange=(e)=> this.setState({taskName:e.target.value});
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.add(this.state.taskName);
    this.setState({taskName:''});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-inline">
        <input type='text' required name='tit' id='orange' className="form-control" placeholder="add todo..." value={this.state.taskName} onChange={this.onChange}/>
        <button className="btn btn-danger form-control">
        <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}
