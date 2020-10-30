import React, { useState } from 'react';
import './ListTODO.css';
import AddTodo from './AddTODO';

const UserImageTodo = () => (
  <div className="col-1 aaa">
    <img className="rounded-circle" src="https://pbs.twimg.com/profile_images/1064465168179085313/YgDr84RZ_bigger.jpg" alt="" />
  </div>
);

const HeaderTodo = (props) => (
  <div className="row">
    <div className="col-11">
      <h6>UserName - Time</h6>
    </div>
    <div className="col-1">
      <HeaderTodoActions index={props.index} edit={props.edit} delete={props.delete} />
    </div>
  </div>
);

const HeaderTodoActions = (props) => (
  <div className="dropdown">
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button className="dropdown-item" type="button" onClick={() => props.edit(props.index)}>Edit</button>
      <button className="dropdown-item" type="button" onClick={() => props.delete(props.index)}>Delete</button>
    </div>
  </div>
);

const ListTODO = (props) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  const edit = (index) => setCurrentSelected(index);
  const deleteNote = (index) => props.deleteElemList(index);

  const renderEditElem = (index, title, text) => (
    <AddTodo
      addElemList={(newTitle, newText) => {
        props.editElemList(index, newTitle, newText);
        setCurrentSelected(null);
      }}
      title={title}
      text={text}
    />
  );

  const renderElem = (index, title, text) => (
    <div key={index} className={index === 0 ? 'list-group-item borderList first' : 'list-group-item borderList'}>
      <div className="row">
        <UserImageTodo />
        <div className="col-11">
          <HeaderTodo index={index} edit={edit} delete={deleteNote} />
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="list-group">
      {props.elems.map((elem, index) => {
        if (currentSelected === index) {
          return renderEditElem(index, elem.title, elem.text);
        }
        return renderElem(index, elem.title, elem.text);
      })}
    </div>
  );
};

export default ListTODO;
