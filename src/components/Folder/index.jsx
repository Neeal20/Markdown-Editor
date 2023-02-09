import './Folder.scss';
import { BookOpen } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenFolder, setIsOpenSubFolder } from '../../store/reducers/folder';

const Folder = () => {
  // On récupère notre state de isOpenFolder
  const isOpenFolder = useSelector((state) => state.SideBar.isOpenFolder);
  const isOpenSubFolder = useSelector((state) => state.SideBar.isOpenSubFolder);

  // On récupère la fonction qui permet une action
  const dispatch = useDispatch();

  // On change le state de isOpenFolder en fonction du click to false/true
  const handleIsOpenFile = () => {
    dispatch(setIsOpenFolder(!isOpenFolder));
    if (isOpenSubFolder) {
      dispatch(setIsOpenSubFolder(false));
    }
  };

  return (
    <div className="folders">
      <div onClick={handleIsOpenFile} style={{ padding: '0 1.5rem', width: 'auto' }} className="folder">
        <BookOpen className="feather feather-book-open books" />
        <h2 className="folder-title">NoteBooks</h2>
      </div>
    </div>
  );
};

export default Folder;
