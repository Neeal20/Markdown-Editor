import './TextIcons.scss';
import {
  Hash, Bold, Italic, Paperclip, List, Code,
} from 'react-feather';

const TextIcons = () => {
  console.log('test');
  return (
    <div className="text-icons">
      <Hash className="text-icon" />
      <Bold className="text-icon" />
      <Italic className="text-icon" />
      <Paperclip className="text-icon" />
      <List className="text-icon" />
      <Code className="text-icon" />
    </div>
  );
};

export default TextIcons;
