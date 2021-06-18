import React from 'react';
import './Footer.css';
import Button  from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            Sign up to get exclusive offers, the best in comics & more.
          </p>
          <div className='input-areas'>
            <form action='/'>
              <input className='footer-input' name='email' type='email' placeholder='Your Email' required/>
                 <Button buttonStyle='btn-secondary'>Sign up</Button>
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='#'>Our Company</Link>
              <Link to='#'>Careers</Link>
              <Link to='#'>Terms of Service</Link>
              <Link to='#'>Affiliates Program</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Services</h2>
              <Link to='#'>Help</Link>
              <Link to='#'>Contact Us</Link>
              <Link to='#'>Shipping & Returns</Link>
              <Link to='#'>Events</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Discover</h2>
              <Link to='#'>Comics</Link>
              <Link to='#'>Authors</Link>
              <Link to='#'>Subjects</Link>
              <Link to='#'>Search</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='#'>Instagram</Link>
              <Link to='#'>Facebook</Link>
              <Link to='#'>Youtube</Link>
              <Link to='#'>Twitter</Link>
            </div>
          </div>
        </div>
        <div className='footer-rights'>
              <p className='website-rights'>© 2021 Cyber City Comics. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
