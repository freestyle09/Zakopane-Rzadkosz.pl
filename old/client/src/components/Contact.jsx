import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';

class Contact extends Component {
  state = {};
  render() {
    return (
      <section id='contact'>
        <div className='background-image' />
        <div className='container'>
          <h2>Kontakt</h2>
          <ContactForm from='Zakopane-Rzadkosz.pl' />
          <Footer />
        </div>
      </section>
    );
  }
}

export default Contact;
