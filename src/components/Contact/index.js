import React, { Fragment } from 'react';
import Footer from "../Footer";
import {InputSubmit,Textarea,InputSub,InputEmail,InputText,EmailName,Form,TitleSpan,ContactTitle,ContactSection} from "./style.js";
 const Contact =() => {
 
  return (
    <Fragment>
      <ContactSection >
        <div className="container">
          <ContactTitle><TitleSpan> Contact </TitleSpan> Me A line</ContactTitle>
          <Form action="">
            <EmailName>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </EmailName>
            <InputSub type="text"  placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </Fragment>
  );
}

export default Contact;