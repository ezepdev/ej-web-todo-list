import React, { useState } from 'react';
import './AddTODO.css';

const AddTodo = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [text, setText] = useState(props.text || '');

  const addElement = () => {
    props.addElemList(title, text);
    setTitle('');
    setText('');
  };

  const changeText = (event) => setText(event.target.value);
  const changeTitle = (event) => setTitle(event.target.value);

  return (
    <div className="addTODO">
      <div className="row">
        <div className="col-1 fix-possition text-right">
          <img className="rounded-circle small" src="https://pbs.twimg.com/profile_images/1064465168179085313/YgDr84RZ_bigger.jpg" alt="" />
        </div>
        <div className="col-11">
          <input value={title} onChange={changeTitle} className="form-control mb-2" placeholder="Title" />
          <textarea value={text} onChange={changeText} className="form-control" aria-label="With textarea" placeholder="Text" />
        </div>
      </div>
      <div className="buttonContainer text-right">
        <button type="button" className="btn btn-primary" onClick={addElement}>Add</button>
      </div>
    </div>
  );
};

export default AddTodo;
