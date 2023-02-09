import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import File from '../File';
import Folder from '../Folder';
import Form from '../Form';
import Notes from '../Notes';
import SubFolder from '../SubFolder';
import Text from '../Text';
import './App.css';

const App = () => {
  const notesTitle = useSelector((state) => state.SideBar.notesTitle);

  return (
    <div className="app">
      <Routes>
        <Route path="/folder/subfolder/:urlId" element={<Form />} />
      </Routes>
      <div className="sidebar">
        <Folder />
        <SubFolder />
        {
          notesTitle.map((note) => (
            <File key={note.id} {...note} />
          ))
        }
      </div>
      <div className="notebooks">
        <Routes>
          <Route path="/folder/subfolder/:noteId" element={<Notes />} />
        </Routes>
      </div>
      <div className="text-container">
        <Text />
      </div>
    </div>
  );
};

export default App;
