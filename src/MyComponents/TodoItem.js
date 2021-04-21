import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="mx-auto p-3">
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{ onDelete(todo)}}>Delete</button>
        </div>
    )
}
