import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './ContactPage.css'; // Make sure to import your CSS file

const ContactPage = () => {
  return (
    <div className="contact-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-contact-container">
            <h1>Collaborations Page</h1>
        </div>
        
        <div className='main-content'>
          <section>
            <h2>Contact the Artist</h2>
            <span>Send an email to me, and I'll get back to you as soon as possible.</span>
            <br></br>
            <br></br>
            <label>Artist Name: </label>
            <span className='name-span'>Pro</span><br></br>

            <label>Artist Email: </label>
            <span className='name-span'>&nbsp;team@pro-music.com</span>


            {/* Add your contact form or details here */}
          </section>

          <section>
            <h2>Contact the Producer(s)</h2>
            <span>Send an email to me, and I'll get back to you as soon as possible.</span>
            <br></br>
            <br></br>
            <label>Producer's Name: </label>
            <span className='name-span'>Berz</span><br></br>

            <label>Producer's Email: </label>
            {/* <span className='name-span'>&nbsp;audio-engineering@berz.io</span> */}
            <span className='name-span'>&nbsp;support@berz.io</span>


            {/* Add your contact form or details here */}
          </section>
        </div>

    </div>
  );
};

export default ContactPage;
