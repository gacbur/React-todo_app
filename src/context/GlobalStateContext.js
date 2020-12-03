import React, { createContext, useState, useEffect } from 'react'

const initialState = {
    todoItems: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}

export const GlobalStateContext = createContext(initialState)

export const GlobalStateContextProvider = (props) => {

    const [todoList, setTodoList] = useState(initialState.todoItems)

    const [filterStatus, setFilterStatus] = useState('all')
    const [filteredTodo, setFilteredTodo] = useState([])

    useEffect(() => {
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
        filterHandler()
    }, [todoList, filterStatus])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList))
    }, [todoList, filterStatus,])

    const addToList = (text) => {
        const item = {
            id: todoList.length + 1,
            text,
            isDone: false
        }
        setTodoList([item, ...todoList])
    }

    const removeFromList = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }

    const listItemCompleted = (id) => {
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

    const clearCompleted = () => {
        setTodoList(todoList.filter(item => item.isDone === false))
    }

    return (
        <GlobalStateContext.Provider value={{
            todoList,
            addToList,
            removeFromList,
            setFilterStatus,
            listItemCompleted,
            filteredTodo,
            clearCompleted
        }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}
