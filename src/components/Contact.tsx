import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import useInput from "../custom-hooks/use-input";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "./UI/Card";
import contactStyles from "./Contact.module.css";
import React, { Fragment } from "react";

// toast.configure();

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) =>
  value.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const Contact = () => {
  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: subjectInputValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);

  const {
    value: messageInputValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_x99ip57",
        "template_71vebom",
        event.currentTarget,
        "user_wDtFNHZTDhxHpoCO08gNH"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!", {
            position: "top-right",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("An Error Occured! ", {
            position: "top-right",
          });
        }
      );

    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  const nameInputStyles = `${contactStyles["form-control"]} ${
    nameHasError ? contactStyles.invalid : ""
  }`;
  const emailInputStyles = `${contactStyles["form-control"]} ${
    emailHasError ? contactStyles.invalid : ""
  }`;
  const subjectInputStyles = `${contactStyles["form-control"]} ${
    subjectHasError ? contactStyles.invalid : ""
  }`;
  const messageInputStyles = `${contactStyles["form-control"]} ${
    messageHasError ? contactStyles.invalid : ""
  }`;

  return (
    <Fragment>
      <section className={contactStyles.contact} id="contact">
        <Card>
          <div className={contactStyles.content}>
            <div className={contactStyles.info}>
              <h1>Get in touch</h1>
              <p>Fill the form and send me a message</p>
              <div className={contactStyles["sub-info"]}>
                {" "}
                <MdLocationOn size="1rem" /> {"   "}
                <p>Duisburg, Germany</p>
              </div>
              <div className={contactStyles["sub-info"]}>
                <HiOutlineMail size="1rem" /> {"  "}{" "}
                <p>alsamy.asif@gmail.com</p>
              </div>
            </div>
            <form onSubmit={formSubmitHandler}>
              <div className={nameInputStyles}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={nameChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={nameInputValue}
                  placeholder="Your Name"
                />
                {nameHasError && (
                  <p className={contactStyles["error-text"]}>
                    Name must not be empty!
                  </p>
                )}
              </div>
              <div className={emailInputStyles}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={emailChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={emailInputValue}
                  placeholder="Your Email"
                />
              </div>
              {emailHasError && (
                <p className={contactStyles["error-text"]}>
                  Please enter a valid email!
                </p>
              )}
              <div className={subjectInputStyles}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={subjectChangeHandler}
                  onBlur={subjectInputBlurHandler}
                  value={subjectInputValue}
                  placeholder="Subject"
                />
                {subjectHasError && (
                  <p className={contactStyles["error-text"]}>
                    Subject must not be empty!
                  </p>
                )}
              </div>
              <div className={messageInputStyles}>
                <textarea
                  id="message"
                  name="message"
                  onChange={messageChangeHandler}
                  onBlur={messageInputBlurHandler}
                  value={messageInputValue}
                  placeholder="Message"
                />
                {messageHasError && (
                  <p className={contactStyles["error-text"]}>
                    Message must not be empty!
                  </p>
                )}
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </Card>
      </section>
      <ToastContainer />
    </Fragment>
  );
};

export default Contact;
