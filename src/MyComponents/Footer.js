import React from 'react'
import "./footer.css"

export const Footer = () => {
    let footerStyle={
        position: "fixed",
        left: "0",
        bottom: "0",
       width:"100%",
        color:"white",
       
        
    }
    return (
        <div className="bg-dark text-light py-3 " style={footerStyle}>
             <p className="text-center"id="fut">Copyright &copy; MyTodoList.com</p>
        </div>
    )
}
