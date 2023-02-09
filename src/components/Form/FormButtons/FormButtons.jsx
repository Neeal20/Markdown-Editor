import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { setIsOpenAddNotebook, setNoteBookValue, setNotes } from '../../../store/reducers/notebook';

const FormButtons = () => {
  const dispatch = useDispatch();

  // Fonction pour gérer le click du button create du form
  const { urlId } = useParams();
  const noteBookValue = useSelector((state) => state.Notebook.noteBookValue);

  const date = moment(new Date()).format('DD-MM-YYYY', true);
  const newDate = date.replace('-', '/');
  const formatDate = newDate.replace('-', '/');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    dispatch(setNotes({
      id: crypto.randomUUID(), folderId: urlId, noteTitle: noteBookValue, date: formatDate, shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero ducimus, vitae fuga expedita excepturi ipsa nisi enim illum quam suscipit mollitia possimus reiciendis saepe? Accusantium possimus quidem quisquam voluptate',
    }));
    dispatch(setIsOpenAddNotebook(false));
    dispatch(setNoteBookValue(''));
  };

  // Fonction pour gérer le click du button cancel du form
  const handleCancelButton = () => {
    dispatch(setIsOpenAddNotebook(false));
    dispatch(setNoteBookValue(''));
  };

  return (
    <div className="form-notebook-buttons">
      <button onClick={handleCancelButton} type="button" className="form-notebook-buttons-cancel">Cancel</button>
      <button onClick={handleFormSubmit} type="button" className="form-notebook-buttons-create">Create</button>
    </div>
  );
};

export default FormButtons;
