import React, {useState} from 'react';
import './NewLayoff.css';
import LayoffForm from './LayoffForm';

const NewLayoff = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveLayoffDataHandler = (enteredLayoffData) => {
        const layoffData = {
            ...enteredLayoffData,
            id: Math.random().toString()
        };
        console.log(layoffData);
        props.onAddLayoff(layoffData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className='new-layoff'>
    {!isEditing && <button onClick={startEditingHandler}>Add New Task</button>}
        {isEditing && <LayoffForm onSaveLayoffData={saveLayoffDataHandler} onCancel={stopEditingHandler} />}
    </div>
};

export default NewLayoff;