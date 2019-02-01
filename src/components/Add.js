import React, { Component } from 'react'
export default class Add extends Component {
  state=
  {
    taskName:''
  }
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
