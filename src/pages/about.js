import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'About';

export default function About() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />

            <main className="about-page">
                <img src="../assets/images/coupleyoga.avif" alt='two people doing a standing yoga position with their arms raised' className="backImage" />
                <div className="about1">
                    <h1>About Us</h1>
                    <p>Welcome to FroGa, where we blend the joy of yoga with the playful spirit of frogs! 🐸</p>

                    <p>At FroGa, we're all about making yoga accessible, enjoyable, and beneficial for everyone. Our website combines traditional poses with a touch of whimsy, inviting you to leap into wellness with a smile on your face.</p>

                    <p>FroGa is more than just physical movement; it's also about feeling like you belong to a movement of people that want to improve their physical and mental health. Join us on the lily pad of self-discovery, where every ribbit is a reminder to embrace the present moment with grace and intention. Check the frog's wisdom for inspiring words to uplift your spirits and nourish your soul.</p>
                    <p>Namaste 🌿🐸</p>
                </div>
                <div className="about2">
                    <div className="about-form">
                        <h1>Want to be in touch?</h1>
                        <p className="paragraph">Send us a message or subscribe to our newsletter to get the positive phrase of the day, information about yoga poses, and much more information related to mindfulness!</p>
                        <form className="form-inputs">
                            <div className="names-input">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="first-name-input"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="last-name-input"
                                />
                            </div>
                            <input
                                type="email"
                                name="Email address"
                                placeholder="Email address"
                                className="email-input"
                                required
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            />
                            <input
                                type="text"
                                placeholder="Message"
                                className="message-input"
                            />
                            <p>Do you want to subscribe to our Newsletter?</p>
                            <div className="choice-input">
                                <input
                                    type="radio"
                                    id="subscribe-yes"
                                    name="subscribe"
                                    className="subscribe-input"
                                    value="Yes"
                                />
                                <label htmlFor="subscribe-yes" className="choices">Yes</label>
                                <input
                                    type="radio"
                                    id="subscribe-no"
                                    name="subscribe"
                                    className="subscribe-input"
                                    value="No"
                                />
                                <label htmlFor="subscribe-no" className="choices">No</label>
                            </div>
                            <div className="submit-form">
                                <input
                                    type="submit"
                                    name="Subscribe"
                                    className="about-form-button"
                                    value="Submit"
                                />
                            </div>
                        </form>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
