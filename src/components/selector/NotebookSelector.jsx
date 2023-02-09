export const findTitleByUrl = (notesTitle, urlId) => {
  const titleNote = notesTitle.find((noteTitle) => noteTitle.id === urlId);
  return titleNote;
};
