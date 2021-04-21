import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js'
import {Todos} from './MyComponents/Todos.js'
import {Footer} from './MyComponents/Footer.js'
import {todoItem} from './MyComponents/TodoItem.js'
import React,{useState,useEffect} from 'react';
import {AddTodo}from "./MyComponents/AddTodo"
import {About} from "./MyComponents/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem('todos'))
  }
  const addTodo=(title,desc)=>{
    let sno
    if(todos.length===0)
    {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno;
    }
    const myTodo={
      sno:sno+1,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])

   
  }
  const onDelete=(todo)=>{
   
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  
  return (
   <>
   <Router>
   <Header title="My Todo List" searchBar={true}/>
   <Switch>
         
          <Route  path="/" render={()=>{
            return (
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
     </Switch>


   


   <Footer/>
   </Router>
   </>
  );
}

export default App;
