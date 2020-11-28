import React, { useContext, useState } from 'react'
import { GlobalStateContext } from '../context/GlobalStateContext'
import ListItem from './ListItem'

const Todo = () => {

    const [value, setValue] = useState('')

    const { todoList, addToList, setFilterStatus, filteredTodo } = useContext(GlobalStateContext)

    const handleAddItemToList = () => {
        if (value !== '') {
            addToList(value)
        }
        setValue('')
    }

    return (
        <div className="todo-cnt">
            <div className="header">
                <h1>TODO</h1>
                <button>toggle darkmode</button>
            </div>
            <div className="todo-add">
                <div className="todo-add-btn-cnt">
                    <input
                        onClick={handleAddItemToList}
                        type="button"
                        className="todo-add-btn"
                    ></input>
                </div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Create a new todo"
                ></input>
            </div>
            <div className="todo-list">
                <ul className="list-cnt">
                    {filteredTodo.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))}
                </ul>
                <div className="todo-list-footer">
                    <div className="items-left">
                        {`${0} items left`}
                    </div>
                    <div className="items-filter-btns">
                        <button onClick={() => setFilterStatus('all')} className="fltr-btn">All</button>
                        <button onClick={() => setFilterStatus('active')} className="fltr-btn">Active</button>
                        <button onClick={() => setFilterStatus('completed')} className="fltr-btn">Completed</button>
                    </div>
                    <div className="items-clear-completed">
                        <button>Clear Completed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
