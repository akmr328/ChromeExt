import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createNewReminder({ ...this.state });
    this.setState({
      reminder: ""
    })

}