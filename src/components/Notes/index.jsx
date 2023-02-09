import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Note from './Note';
import './Notes.scss';

const Notes = () => {
  // On récupère le params d'Url
  const { noteId } = useParams();

  // On récupère notre tableau des notes
  const notes = useSelector((state) => state.Notebook.notes);

  // On filtre notre tableau des notes en fonction de l'ID
  const filteredNotes = notes.filter((note) => note.folderId === noteId);

  return (
    <div className="notes">
      {
        filteredNotes.map((note) => (
          <Note key={note.id} {...note} />
        ))
      }
    </div>
  );
};

export default Notes;
