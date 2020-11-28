import React, { createContext, useState, useEffect } from 'react'

const initialState = {
    todoItems: []
}

export const GlobalStateContext = createContext(initialState)

export const GlobalStateContextProvider = (props) => {

    const [todoList, setTodoList] = useState([])

    const [filterStatus, setFilterStatus] = useState('all')
    const [filteredTodo, setFilteredTodo] = useState([])

    useEffect(() => {
        filterHandler()
    }, [todoList, filterStatus])


    const filterHandler = () => {
        switch (filterStatus) {
            case "completed":
                setFilteredTodo(todoList.filter(todo => todo.isDone === true))
                break;
            case "active":
                setFilteredTodo(todoList.filter(todo => todo.isDone === false))
                break;
            default:
                setFilteredTodo(todoList)
        }
    }

    const addToList = (text) => {
        const item = {
            id: todoList.length + 1,
            text,
            isDone: false
        }
        setTodoList([item, ...todoList])
        console.log(todoList)
    }

    const removeFromList = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }

    const listItemCompleted = (id) => {
        console.log(id)
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                return {
                    ...item, isDone: !item.isDone
                }
            } else {
                return item
            }
        }))
    }

    return (
        <GlobalStateContext.Provider value={{
            todoList,
            addToList,
            removeFromList,
            setFilterStatus,
            listItemCompleted,
            filteredTodo
        }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}
