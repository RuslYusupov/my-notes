import './Note.css';

function Note({ note, deleteNote, editNote }) {

    const { title, body, id } = note;
    
    function handleEdit() {
        editNote(note);
    }

    function handleDelete() {
        deleteNote(id);
    }
    
    return (
        <div className="note-container">
            <h4 className="title-card">{title}</h4>
            <p className="body-card">{body}</p>
            <div className="buttons-container">
                <span className="edit-button" onClick={handleEdit}></span>
                <span className="delete-button" onClick={handleDelete}></span>
            </div>
        </div>
    )
}

export default Note;