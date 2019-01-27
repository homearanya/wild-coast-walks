import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import "./contactForm.css";

const ContactFormWrapper = styled.form`
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

const ResultWrapper = styled.div`
  height: 60px;
  margin-top: -10px;
  margin-bottom: 20px;
  position: relative;
`;
const ResultMessage = styled.div`
  background: rgba(9, 103, 185, 0.7);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`;
const StyledText = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-size: 0.9em;
  @media (min-width: 768px) {
    font-size: 1em;
  }

  a {
    color: white;
    font-weight: 700;
    text-decoration: underline;
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
      loadSpinner: false
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
          </div>
        </form>
        <ResultWrapper>
          <CSSTransition
            in={this.state.contactFormSubmissionResult !== null}
            classNames="slideUp"
            timeout={300}
            unmountOnExit
          >
            <ResultMessage>
              <StyledText>{this.state.contactFormSubmissionResult}</StyledText>
            </ResultMessage>
          </CSSTransition>
        </ResultWrapper>
        <ResultWrapper>
          <CSSTransition
            in={this.state.newsletterSubmissionResult !== null}
            classNames="slideUp"
            timeout={300}
            unmountOnExit
          >
            <ResultMessage>
              {this.state.newsletterSubmissionResult ? (
                <StyledText
                  dangerouslySetInnerHTML={{
                    __html: this.state.newsletterSubmissionResult.msg
                  }}
                />
              ) : null}
            </ResultMessage>
          </CSSTransition>
        </ResultWrapper>
      </ContactFormWrapper>
    );
  }
}
