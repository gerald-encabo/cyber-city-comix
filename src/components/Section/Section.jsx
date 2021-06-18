import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';


function Section() {
    return (
        <div className='section'>
            <div className='section-container container'>
                <Link to='#' className='section-card'>
                    <div className='section-tile'>
                        <h1 className='title'>Membership</h1>
                        <img className='img' src={process.env.PUBLIC_URL + '/images/membership.svg'} alt='promotion logo' />
                        <p className='text'>$20 buys you a LIFETIME membership to our awesome establishment. That gives you 20% off new comics, back issues, art books, magazines, manga, hardcovers, and trade paperbacks. $20. You pay once, you get the discount forever. Believe it. It seems too good to be true, I know. But it’s for real. Don’t pass it up.</p>
                    </div>
                </Link>
                <Link to='#' className='section-card'>
                    <div className='section-tile'>
                        <h1 className='title'>Special Orders</h1>
                        <img className='img' src={process.env.PUBLIC_URL + '/images/weekly-lists.svg'} alt='promotion logo' />
                        <p className='text'>A credit card on file also helps for those times where life gets in the way (we’ll call you first). Got something special in mind? Pre-orders, out-of-stock and equally hard-to-find items can be tracked down for you as well – just email us and we’ll do our best to make your dreams a reality!</p>
                    </div>
                </Link>
                <Link to='#' className='section-card'>
                    <div className='section-tile'>
                        <h1 className='title'>Warehouse Sales!</h1>
                        <img className='img' src={process.env.PUBLIC_URL + '/images/warehouse-sales.svg'} alt='promotion logo' />
                        <p className='text'>Once a month Cyber City Comix offers its customers the opportunity to survey the vast sea of comic goodness that is its overstock warehouse. As if the deals couldn’t get any better! Dollar comics, discount toys, cards, and statues guaranteed to make the frugal consumer drool with delight. Because we love you all very much.</p>
                    </div>
                </Link>
                <Link to='#' className='section-card'>
                    <div className='section-tile'>
                        <h1 className='title'>Stay Social</h1>
                        <img className='img' src={process.env.PUBLIC_URL + '/images/social-media.svg'} alt='promotion logo' />
                        <p className='text'>Follow us on social networks to keep up to date with our latest news and info. Click here for more info.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Section
