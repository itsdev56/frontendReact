import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/header'
import './App.css';
import Todos from './components/Todos';
import Add from './components/Add';
//import uuid from 'uuid';
import about from './components/pages/about'
import axios from 'axios';
import Search from './components/Search';
export default class App extends React.Component {
  state=
  {
      todo:[],
      query:[],
  } 
  componentDidMount()
  {
      axios.get('http://localhost:3008/').then(res=>{
        this.setState({todo:res.data, query: res.data})})
  }
  del=(id)=>
  {
      axios.delete(`http://localhost:3008/delete/task/${id}`).then(res=>{this.setState({todo:[...this.state.todo.filter(x=> x.id !==id)]})
      this.search('')
  })
  }
  add=(taskName)=>
  {
      axios.post('http://localhost:3008/add/task',{
        taskName:taskName,
        isdone:false
      }).then(res=>{
        const neww=
        {
          id:res.data.task_id,
          taskName:taskName,
          isdone:false
        }
        this.setState({todo:[...this.state.todo,neww]})
        this.search('')})
        
  }
  search=(item)=>
  {

        item=item.toLowerCase();
        this.setState({
          query:(item==='')?this.state.todo:this.state.todo.filter(todo=>todo.taskName.toLowerCase().startsWith(item))
        })
  }
  markComplete=(id )=>
    {
      axios.put(`http://localhost:3008/update/${id}`).then(res=>this.setState(
        {
            todo:this.state.todo.map(value=>
              {
                  if(value.id===id)
                  {
                      value.isdone=!value.isdone;
                  }
                  return value;
              })
        }
      )
      )
    }
  render() {
    return (
      <Router>
        <div className="App">  
          <div className='container'>
            <Header />
            <Route exact path='/' render={props=>(
              <React.Fragment>
                  <Add add={this.add}/>
                  <br/>
                  <Search search={this.search}/>
                  <br/>
                  <Todos to={this.state.query} markComplete={this.markComplete} del={this.del}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={about} />
          </div>
        </div>
      </Router>
    );
  }
}
