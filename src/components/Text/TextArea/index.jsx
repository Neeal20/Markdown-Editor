import './TextArea.scss';

const TextArea = () => {
  console.log('test');
  return (
    <div className="text-area">
      <textarea placeholder="Just start typing..." className="text-area-input" cols="30" rows="10" />
    </div>
  );
};

export default TextArea;
