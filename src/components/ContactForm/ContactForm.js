import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

import "./contactForm.css";
import { AjaxMessage } from "../AjaxMessage";

const ContactFormWrapper = styled.div`
  && {
    margin-bottom: -50px;
    @media (min-width: 768px) {
      margin-bottom: -100px;
    }
    @media (min-width: 992px) {
      margin-bottom: -120px;
    }
  }
`;

const LoaderContainer = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
`;

const StyledButton = styled.input`
  &&& {
    margin-bottom: 20px;
    color: ${props => (props.loadSpinner ? "#0967B9 " : "#ffffff")};
    background-color: #0967b9;
    :focus {
      color: ${props => (props.loadSpinner ? "#0967B9 " : "#ffffff")};
      background-color: #0967b9;
    }
    :hover,
    :active {
      color: ${props => (props.loadSpinner ? "#043B6C" : "#ffffff")};
      background-color: #043b6c;
    }
  }
`;

const RecaptchaContainer = styled.div`
  text-align: center;
`;
const StyledRecaptcha = styled.div`
  display: inline-block;
`;

export class ContactForm extends Component {
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
      newsletterSubmissionResult: null,
      verified: false,
      loadSpinner: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.callback = this.callback.bind(this);
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

  subscribeNewsletter() {
    if (this.state.subscribeNewsletter) {
      this.setState(
        {
          loadSpinner: true
        },
        async () => {
          const result = await addToMailchimp(this.state.email, {
            FNAME: this.state.fname,
            LNAME: this.state.lname
          });
          // I recommend setting `result` to React state
          // but you can do whatever you want
          this.setState({
            newsletterSubmissionResult: result,
            loadSpinner: false
          });
        }
      );
    }
  }

  sendEmail() {
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
        this.setState(
          {
            f_name: "",
            l_name: "",
            email: "",
            phone_number: "",
            subject: "",
            message: "",
            contactFormSubmissionResult:
              "Thanks for the message. I’ll be in touch shortly.",
            loadSpinner: false
          },
          this.subscribeNewsletter()
        );
      } else {
        // The form submission failed
        this.setState({
          contactFormSubmissionResult: "Something went wrong",
          loadSpinner: false
        });
        console.error(JSON.parse(response.target.response).message);
      }
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    // confirmation not a robot
    if (!this.state.verified) {
      this.setState({
        contactFormSubmissionResult: "Please, confirm you are not a robot"
      });
      return;
    }

    this.setState(
      {
        loadSpinner: true,
        contactFormSubmissionResult: null,
        newsletterSubmissionResult: null
      },
      // Callback funtion to be called after component has been updated with the new state
      this.sendEmail()
    );
  };

  callback = function() {
    console.log("Done!!!!");
  };

  verifyCallback = function(response) {
    if (response) {
      this.setState({ verified: true, contactFormSubmissionResult: null });
    }
  };

  render() {
    return (
      <ContactFormWrapper className="contact-form-area">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <input
                aria-label="First Name"
                aria-required
                required
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
                required
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
                aria-label="Message"
                aria-required
                required
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
            <ButtonContainer className="col-sm-12">
              {this.state.loadSpinner && (
                <LoaderContainer>
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height={18}
                    width={80}
                  />
                </LoaderContainer>
              )}

              <StyledButton
                aria-label="Submit Button"
                type="submit"
                value="Send Message"
                className="submit-button"
                loadSpinner={this.state.loadSpinner}
                disabled={this.state.loadSpinner}
              />
            </ButtonContainer>
            <RecaptchaContainer>
              <StyledRecaptcha>
                <Recaptcha
                  sitekey="6LfQMI0UAAAAAFJCg43F0uVN1gPKFozH1_fvwRuG"
                  render="explicit"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.callback}
                />
              </StyledRecaptcha>
            </RecaptchaContainer>
          </div>
        </form>
        <AjaxMessage
          in={this.state.contactFormSubmissionResult !== null}
          dangerouslySetInnerHTML={this.state.contactFormSubmissionResult}
        />
        <AjaxMessage
          in={this.state.newsletterSubmissionResult !== null}
          dangerouslySetInnerHTML={
            this.state.newsletterSubmissionResult &&
            this.state.newsletterSubmissionResult.msg
          }
        />
      </ContactFormWrapper>
    );
  }
}
