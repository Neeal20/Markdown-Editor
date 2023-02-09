import './TextHeader.scss';
import { Book } from 'react-feather';

const TextHeader = () => {
  console.log('test');
  return (
    <div className="text-header">
      <h2 className="text-header-title">Title</h2>
      <h4 className="text-header-folder"><Book className="text-header-book" /> Folder Title</h4>
    </div>
  );
};

export default TextHeader;
