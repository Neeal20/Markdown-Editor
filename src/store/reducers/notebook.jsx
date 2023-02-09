import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isOpenAddNotebook: false,
  noteBookValue: '',
  notes: [],
  inputFormFocus: null,
};

export const setIsOpenAddNotebook = createAction('notebook/setIsOpenAddNotebook');
export const setNoteBookValue = createAction('notebook/setNoteBookValue');
export const setNotes = createAction('notebook/setNotes');

const NoteBookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsOpenAddNotebook, (state, action) => {
      state.isOpenAddNotebook = action.payload;
    })
    .addCase(setNoteBookValue, (state, action) => {
      state.noteBookValue = action.payload;
    })
    .addCase(setNotes, (state, action) => {
      state.notes.push(action.payload);
    });
});

export default NoteBookReducer;
