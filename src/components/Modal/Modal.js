import { useState } from 'react';

import './Modal.css';

function Modal({ currentNote, updateNote }) {
    
    const [note, setNote] = useState(currentNote);
    const { title, body, id } = note;

    function handleChange(event) {
        const { name, value } = event.target;

        setNote({
        ...note,
        [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        updateNote(id, note);
    }
    
    return(
            <div className="modal-window">
                <form className="modal-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="modal-title-input"
                        name="title"
                        placeholder="Title..."
                        value={title}
                        onChange={handleChange}
                    />
                    <textarea
                        className="modal-body-input"
                        name="body"
                        placeholder="Create a note..."
                        value={body}
                        onChange={handleChange}
                    />
                    <button className="modal-btn">✓</button>
                </form>
            </div>
    )
}


export default Modal;