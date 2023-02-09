import { useDispatch, useSelector } from 'react-redux';
import { setNoteBookValue } from '../../../store/reducers/notebook';

const NoteBookValue = () => {
  // On récupère le setState
  const dispatch = useDispatch();

  // On récupère la valeur initiale du newNoteBookValue pour gérer le changement de valeur
  const noteBookValue = useSelector((state) => state.Notebook.noteBookValue);

  // On récupère la valeur initiale du newNoteBookValue pour gérer le focus
  const inputFormFocus = useSelector((state) => state.Notebook.inputFormFocus);

  return (
    <div className="form">
      <input ref={inputFormFocus} className="form-notebook-input" onChange={(event) => dispatch(setNoteBookValue(event.target.value))} value={noteBookValue} type="text" placeholder="Enter notebook name" />
    </div>
  );
};

export default NoteBookValue;
