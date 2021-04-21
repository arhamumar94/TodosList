import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
    return (
        <div className="container m-auto">
            <h2 className="text-center">Todos List</h2>
           <div className="m-100"> 
           {props.todos.length===0?"No todos to display":
             props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}/>
             })
            
            
            }
           </div>
            
            
           
           
            
        </div>
    )
}
