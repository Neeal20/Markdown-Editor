import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Plus } from 'react-feather';
import { setIsOpenAddNotebook } from '../../store/reducers/notebook';

import './File.scss';

const File = ({ note, id }) => {
  const dispatch = useDispatch();

  const isOpenSubFolder = useSelector((state) => state.SideBar.isOpenSubFolder);

  const handleDisplayFormNotebook = () => {
    dispatch(setIsOpenAddNotebook(true));
  };

  return (
    <div className={isOpenSubFolder ? 'file' : 'close'}>
      <NavLink style={{ display: 'flex', color: 'white' }} className={({ isActive }) => `${isActive ? ' is-active' : ''}`} to={`/folder/subfolder/${id}`}>
        {note}
        <Plus onClick={handleDisplayFormNotebook} className="feather-plus" />
      </NavLink>
    </div>
  );
};

export default File;

File.propTypes = {
  note: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
