import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { CSSTransition } from "react-transition-group";

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
      phone_number: "",
      subject: subject,
      message: "",
      contactFormSubmissionResult: null,
      subscribeNewsletter: true,
      newsletterSubmissionResult: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      case "phone_number":
        this.setState({ phone_number: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      case "subscribe_newsletter":
        this.setState({ subscribeNewsletter: event.target.checked });
        break;
      default:
        console.log("Wrong Case in Switch HandleChange");
    }
  }
  handleSubmit = async event => {
    event.preventDefault();

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://lbp7i4kzl4.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
      true
    );
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    // Send the collected data as JSON
    xhr.send(JSON.stringify(this.state));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        this.setState({
          f_name: "",
          l_name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
          contactFormSubmissionResult:
            "Thanks for the message. I’ll be in touch shortly."
        });
      } else {
        // The form submission failed
        this.setState({ contactFormSubmissionResult: "Something went wrong" });
        console.error(JSON.parse(response.target.response).message);
      }
    };

    // subscribe to newsletter
    console.log("subscribe to newwsletter", this.state.subscribeNewsletter);
    if (this.state.subscribeNewsletter) {
      const result = await addToMailchimp(this.state.email, {
        FNAME: this.state.fname,
        LNAME: this.state.lname
      });
      // I recommend setting `result` to React state
      // but you can do whatever you want
      this.setState({ newsletterSubmissionResult: result });
    }
  };

  render() {
    return (
      <div className="contact-form-area">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <input
                aria-label="First Name"
                aria-required
                name="f_name"
                type="text"
                className="form-box"
                placeholder="First name"
                value={this.state.f_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                aria-label="Last Name"
                aria-required
                name="l_name"
                type="text"
                className="form-box"
                placeholder="Last name"
                value={this.state.l_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                aria-label="Email Address"
                aria-required
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
                aria-label="Phone Number"
                name="phone_number"
                type="text"
                className="form-box"
                placeholder="Phone number"
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <input
                aria-label="Subject"
                aria-required
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
                aria-label="Message"
                aria-required
                name="message"
                className="yourmessage"
                placeholder="Your message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <label
                htmlFor="subscribe_newsletter"
                className="subscribe-newsletter-label"
              >
                Would you like to subscribe to our quarterly newsletter?
                <input
                  name="subscribe_newsletter"
                  id="subscribe_newsletter"
                  type="checkbox"
                  className="subscribe-newsletter"
                  checked={this.state.subscribeNewsletter}
                  onChange={this.handleChange}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="col-sm-12">
              <input
                aria-label="Submit Button"
                type="submit"
                value="Send Message"
                className="submit-button"
              />
            </div>
          </div>
        </form>
        <div className="result-submission">
          <CSSTransition
            in={this.state.contactFormSubmissionResult !== null}
            classNames="fade-dropdown-menu"
            timeout={300}
            unmountOnExit
          >
            <div className="result-message">
              {this.state.contactFormSubmissionResult}
            </div>
          </CSSTransition>
          <CSSTransition
            in={this.state.newsletterSubmissionResult !== null}
            classNames="fade-dropdown-menu"
            timeout={300}
            unmountOnExit
          >
            <div className="result-message">
              {this.state.newsletterSubmissionResult ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.newsletterSubmissionResult.msg
                  }}
                />
              ) : null}
            </div>
          </CSSTransition>
        </div>
        {/* {this.state.contactFormSubmissionResult ||
        this.state.newsletterSubmissionResult ? (
          <div className="result-submission">
            <div className="result-message">
              {this.state.contactFormSubmissionResult}
              {this.state.newsletterSubmissionResult ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.newsletterSubmissionResult.msg
                  }}
                />
              ) : null}
            </div>
          </div>
        ) : null} */}
      </div>
    );
  }
}
