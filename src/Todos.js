import React from 'react'
import logo from './waste-bin.png'

const Todos = ({ todos, deleteTodo }) => {

    let numb = 1;
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="pt-3" key={todo.id}>
                    <span>{numb++}.</span>
                    <span className="break pl-3 m-auto">{todo.content}</span>
                    <span onClick={() => { deleteTodo(todo.id) }} ><input className="react ml-3" type="image" src={logo} alt="" height="22" width="22" /> </span>
                </div >
            )
        })
    ) : null
    return (
        <div>
            <p className="col-11 m-auto pt-4 text-uppercase">{todoList}</p>
        </div >
    )
}

export default Todos
