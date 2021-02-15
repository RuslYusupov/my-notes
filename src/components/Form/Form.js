import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Библиотека для генерации случайного ID
import Error from "../Error/Error";

import './Form.css';

function Form({ addNewNote }) {
    
    const [note, setNote] = useState({
        title: '',
        body: '',
        id: ''
    });

    const { title, body } = note;

    const [error, setError] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote({
          ...note,
          [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!title && !body) {
            setError(true);
            return;
        }
        setError(false);
        note.id =  uuidv4();
        addNewNote(note);
        
        setNote({
            title: '',
            body: '',
            id: ''
          });
        };
    
    return (
        <div className="form-container">
            {error ? <Error message="You must complete at least one field" /> : null}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="title-input"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={handleChange}
                />
                <textarea
                    className="body-input"
                    name="body"
                    placeholder="Create a note..."
                    value={body}
                    onChange={handleChange}
                />
                <button className="form-btn">+</button>
            </form>
        </div>
    )
}

export default Form;