import React, { Component } from "react";

import "../assets/css/contactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    let subject = "";
    if (this.props.subject) {
      subject = this.props.subject;
    }
    this.state = {
      f_name: "",
      l_name: "",
      email: "",
      number: "",
      subject: subject,
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "f_name":
        this.setState({ f_name: event.target.value });
        break;
      case "l_name":
        this.setState({ l_name: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "subject":
        this.setState({ subject: event.target.value });
        break;
      case "number":
        this.setState({ number: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        console.log("Wrong Case in Switch HandleChange");
    }
  }
  render() {
    return (
      <form action="https://formspree.io/homearanya@gmail.com" method="POST">
        <div className="row">
          <div className="col-sm-6">
            <input
              required
              name="f_name"
              type="text"
              className="form-box"
              placeholder="First name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-6">
            <input
              required
              name="l_name"
              type="text"
              className="form-box"
              placeholder="Last name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-6">
            <input
              required
              name="email"
              type="email"
              className="form-box"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-6">
            <input
              name="number"
              type="text"
              className="form-box"
              placeholder="Phone number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-12">
            <input
              required
              name="subject"
              type="text"
              className="form-box"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-sm-12">
            <textarea
              required
              name="message"
              className="yourmessage"
              placeholder="Your message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </div>
        </div>
      </form>
    );
  }
}
