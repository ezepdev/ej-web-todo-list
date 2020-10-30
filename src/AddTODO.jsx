import React from 'react';
import './AddTODO.css';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || '',
      text: this.props.text || '',
    };
  }

  addElement = () => {
    this.props.addElemList(this.state.title, this.state.text);
    this.setState({ title: '', text: '' });
  }

  changeText = (event) => {
    this.setState({ text: event.target.value });
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="addTODO">
        <div className="row">
          <div className="col-1 fix-possition text-right">
            <img className="rounded-circle small" src="https://pbs.twimg.com/profile_images/1064465168179085313/YgDr84RZ_bigger.jpg" alt="" />
          </div>
          <div className="col-11">
            <input value={this.state.title} onChange={this.changeTitle} className="form-control mb-2" placeholder="Title" />
            <textarea value={this.state.text} onChange={this.changeText} className="form-control" aria-label="With textarea" placeholder="Text" />
          </div>
        </div>
        <div className="buttonContainer text-right">
          <button type="button" className="btn btn-primary" onClick={this.addElement}>Add</button>
        </div>
      </div>
    );
  }
}
