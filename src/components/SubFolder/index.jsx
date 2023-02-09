import './SubFolder.scss';
import { Folder } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenSubFolder } from '../../store/reducers/folder';

const SubFolder = () => {
  // On récupère notre state de isOpenFolder
  const isOpenFolder = useSelector((state) => state.SideBar.isOpenFolder);

  // On récupère notre state de isOpenSubFolder
  const isOpenSubFolder = useSelector((state) => state.SideBar.isOpenSubFolder);

  // On récupère la fonction qui permet une action
  const dispatch = useDispatch();

  // On change le state de isOpenFolder en fonction du click to false/true
  const handleIsOpenSubFolder = () => {
    dispatch(setIsOpenSubFolder(!isOpenSubFolder));
  };

  return (
    <div className="subfolder">
      <div onClick={handleIsOpenSubFolder} className={isOpenFolder ? 'subfolder-options' : 'subfolder-close'}>
        <Folder className="feather feather-folder" />
        <h3 className="subfolder-title">Folder</h3>
      </div>
    </div>
  );
};

export default SubFolder;
