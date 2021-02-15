import './List.css';
import Note from '../Note/Note';

function List({ notes, deleteNote, editNote }) {
    return(
        <div className="list-note-container">
            {
                notes.length ? notes.map((note) => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
                ))
                : null
            }
        </div>
    )
}

export default List;