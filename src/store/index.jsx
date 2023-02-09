import { configureStore } from '@reduxjs/toolkit';
import SideBarReducer from './reducers/folder';
import NoteBookReducer from './reducers/notebook';

const store = configureStore({
  reducer: {
    SideBar: SideBarReducer,
    Notebook: NoteBookReducer,
  },
});

export default store;
