import Border from '../../Utils/Border';
import './Text.scss';
import TextArea from './TextArea';
import TextHeader from './TextHeader';
import TextIcons from './TextIcons';

const Text = () => {
  console.log('test');
  return (
    <div className="text">
      <TextHeader />
      <Border />
      <TextIcons />
      <TextArea />
    </div>
  );
};

export default Text;
