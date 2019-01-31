import React from 'react';
import Todoitem from './Todoitem';
export default class Todos extends React.Component {
    render() {
        return this.props.to.map(
            (value)=>
            (
                <Todoitem key={value.id} tost={value} markComplete={this.props.markComplete} del={this.props.del}/>
            ));
    }
}
