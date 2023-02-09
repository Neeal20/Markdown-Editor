import PropTypes from 'prop-types';

const Note = ({ noteTitle, date, shortDescription }) => (
  <div className="note">
    <h2 className="note-title">{noteTitle}</h2>
    <p className="note-date">{date}</p>
    <p className="note-description">{shortDescription.substring(0, 55)}...</p>
  </div>
);

export default Note;

Note.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};
