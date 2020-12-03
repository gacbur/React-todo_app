import React, { useContext, useState } from 'react'
import cross from '../icons/cross.svg'
import { GlobalStateContext } from '../context/GlobalStateContext'

const ListItem = ({ item }) => {

    const { removeFromList, listItemCompleted } = useContext(GlobalStateContext)

    const handleChecked = (id) => {
        listItemCompleted(id)
    }

    return (
        <>
            <li
                className={`list-item ${item.isDone ? 'checked' : 'notchecked'}`} >
                <p className={`${item.isDone ? 'list-item-text-checked' : ''}`} onClick={() => handleChecked(item.id)}>{item.text}</p>
                <img
                    className="delete-item-icon"
                    onClick={() => removeFromList(item.id)}
                    src={cross}
                    alt="delete"></img>
            </li>
        </>
    )
}

export default ListItem
