import React, { useContext, useState } from 'react'
import cross from '../icons/cross.svg'
import { GlobalStateContext } from '../context/GlobalStateContext'

const ListItem = ({ item }) => {

    const { removeFromList, listItemCompleted } = useContext(GlobalStateContext)
    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = (e) => {
        setIsChecked(prevState => !prevState)
        if (e.target.checked) {
            listItemCompleted(item.id)
        }
    }

    return (
        <>
            <li className="list-item">
                <input
                    onChange={handleChecked}
                    checked={isChecked}
                    type="checkbox"
                ></input>
                <p>{item.text}</p>
                <img
                    onClick={() => removeFromList(item.id)}
                    src={cross}
                    alt="delete"></img>
            </li>
        </>
    )
}

export default ListItem
