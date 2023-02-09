import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isOpenFolder: false,
  isOpenSubFolder: false,
  notesTitle: [
    {
      id: crypto.randomUUID(),
      note: 'React Configuration',
    },
    {
      id: crypto.randomUUID(),
      note: 'VueJs Configuration',
    },
    {
      id: crypto.randomUUID(),
      note: 'Angular Configuration',
    },
  ],
};

export const setIsOpenFolder = createAction('folder/setFolderState');
export const setIsOpenSubFolder = createAction('folder/setSubFolderState');

const SideBarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsOpenFolder, (state, action) => {
      state.isOpenFolder = action.payload;
    })
    .addCase(setIsOpenSubFolder, (state, action) => {
      state.isOpenSubFolder = action.payload;
    });
});

export default SideBarReducer;
