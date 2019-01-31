import React from 'react'
export default class Todoitem extends React.Component {
    
    getstylee = () =>
    {
        return {
            textDecoration : this.props.tost.isdone ? 'line-through' : 'none',
            background:'#f4f4f4'
        }
    }
    render() {
        const {id,taskName}=this.props.tost;
        return (
        <div style={this.getstylee()}>
            <p>
                <input type="checkbox" checked={this.props.tost.isdone} onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {taskName}
                <button style={btnStyle} onClick={this.props.del.bind(this,id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </p>
        </div>
    )
  }
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    //cursor:'pointer',
    float:'right'
}
