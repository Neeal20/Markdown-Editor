import { File as FileFeather } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { setIsOpenAddNotebook, setNoteBookValue, setNotes } from '../../store/reducers/notebook';

import './Form.scss';
import Border from '../../Utils/Border';
import FormButtons from './FormButtons/FormButtons';
import NotebookValue from './NotebookValue';

const Form = () => {
  const dispatch = useDispatch();
  const { urlId } = useParams();

  const noteBookValue = useSelector((state) => state.Notebook.noteBookValue);

  const date = moment(new Date()).format('DD-MM-YYYY', true);
  const newDate = date.replace('-', '/');
  const formatDate = newDate.replace('-', '/');

  // On récupère le state initiale du boolean notebook pour gérer l'affichage du form
  const isOpenAddNotebook = useSelector((state) => state.Notebook.isOpenAddNotebook);
  const notes = useSelector((state) => state.SideBar.notesTitle);

  // On filtre les notes gráce à leur ids pour obtenir le titre correspondant au dossier
  const folderTitle = notes.filter((note) => note.id === urlId);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    dispatch(setNotes({
      id: crypto.randomUUID(), folderId: urlId, noteTitle: noteBookValue, date: formatDate, shortDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem fugit, perferendis sequi culpa quisquam quasi possimus explicabo dolor itaque enim corporis asperiores sint nulla excepturi doloremque ut officia eveniet.',
    }));
    dispatch(setIsOpenAddNotebook(false));
    dispatch(setNoteBookValue(''));
  };

  return (
    <form onSubmit={handleFormSubmit} className="forms">
      <div className={isOpenAddNotebook ? 'forms-notebook animate__animated animate__fadeInUp' : 'close'}>
        <h4 className="forms-notebook-title">
          <FileFeather className="feather-file" />
          Add New Notebook in
          {' '}
          '{folderTitle[0].note}'
        </h4>
        <Border />
        <NotebookValue />
        <Border />
        <FormButtons />
      </div>
    </form>
  );
};

export default Form;
