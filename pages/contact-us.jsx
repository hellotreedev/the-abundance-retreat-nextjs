import Layout from './layouts/layout';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import GlobalState from './contexts/GlobalState';
import Seo from './layouts/seo';

export default function ContactUs(props) {

    const { triggerScroll } = useContext(GlobalState);
    const contactSettings = props.contactData.page_items.contact_page;
    const seoSettings = props.contactData.page_items.seo;
    const socialMedia = props.contactData.social_media;
    const menuItems = props.contactData.fixed_titles;



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loadingForm, setLoadingForm] = useState(false);
    const [formErrors, setFormErrors] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setLoadingForm(true);
        setFormErrors(null);

        axios
            .post('contact-data', {
                'name': name,
                'email': email,
                'message': message,
            })
            .then(r => {
                console.log(r)
                setFormErrors(null)
                setLoadingForm(false)
                setName(null)
                setEmail(null)
                setMessage(null)
                e.target.reset()
                setFormSuccess(true)
                setTimeout(function () {
                    setFormSuccess(false)
                }, 10000);
            })
            .catch(r => {
                setFormErrors(r.response.data.errors)
                setLoadingForm(false)
            });
    }

    return (
        <>
            <Seo title={seoSettings?.title} image={seoSettings?.image} description={seoSettings?.description} />
            <Layout activePage="contact-us" menuItems={menuItems} socialMedia={socialMedia}>
                <div className="container-fluid p-0 mt-4" animate="down">
                    <div className="row no-gutters">
                        <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-xs-12 w-100">
                            <div className="rectangle">
                                <img className="header-banner-image" src={contactSettings.banner_image} alt="image22" />
                                <div className="header-banner-image-text text-center">
                                    <h1 className="text-center h-100 align-self-center">{contactSettings.banner_title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-lg-5">
                    <div className="row py-lg-5 reach-us">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 py-3 text-center order-2 order-md-1" animate="left">
                            <div className="position-relative">
                                <img className="reach-us-tree" src="/img/reach-us-tree.png" alt="image23" />
                                <div className="square-tree">
                                    <img className="reach-us-img" src={contactSettings.contact_image} alt="image24" />
                                </div>
                                <img className="reach-us-bg d-none d-md-block" src="/img/header.png" alt="image25" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 py-3 pr-lg-0" animate="right">
                            <h1 className="big-h1-und mt-lg-5">{contactSettings.reach_title}</h1>
                            <p className="pt-4">{contactSettings.reach_subtitle}</p>
                            <form onSubmit={submitForm} id="contact-form">
                                <input name="name" type="text" placeholder={contactSettings.name_placeholder} onChange={e => setName(e.target.value)} />
                                <input name="email" type="text" placeholder={contactSettings.email_placeholder} onChange={e => setEmail(e.target.value)} />
                                <textarea name="message" type="textarea" placeholder={contactSettings.message_placeholder} onChange={e => setMessage(e.target.value)}></textarea>

                                {
                                    formErrors ?
                                        Object.keys(formErrors).map((inputName, i) => (
                                            formErrors[inputName].map((errorMessage, j) => (
                                                <p className="pl-3" key={`${i}-${j}`}>{errorMessage}</p>
                                            ))
                                        ))
                                        :
                                        ""
                                }
                                <p className={formSuccess ? "pt-2 pl-3 show " : "hide"}>{contactSettings.success_message}</p>
                                <div className={loadingForm ? "lds-ring" : "lds-ring d-none"}><div></div><div></div><div></div><div></div></div>
                                <button type="submit" disabled={loadingForm} className="float-right pt-3 pr-0" style={{ textDecoration: "none" }}><a className="button-full-line text-right"><span>SUBMIT</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                        <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                            <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                            <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                        </g>
                                    </svg>
                                </a></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container pb-5 contact-icons">
                    <div className="row py-5">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-5" animate="right">
                            <div className="row">
                                <div className="col-auto">
                                    <img src={contactSettings.phone_icon} alt="image26" />
                                </div>
                                <div className="col my-auto">
                                    <h4>{contactSettings.phone_title}</h4>
                                    <a href={"tel:" + contactSettings.phone_number}><p className="p-0 m-0">{contactSettings.phone_number}</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 pb-5" animate="left">
                            <div className="row">
                                <div className="col-auto col-lg-3">
                                    <img src={contactSettings.email_icon} alt="image27" />
                                </div>
                                <div className="col my-auto">
                                    <h4>{contactSettings.email_text}</h4>
                                    <a target="_blank" rel="noreferrer" href={"mailto:" + contactSettings.email_address}><p className="p-0 m-0">{contactSettings.email_address}</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 pb-5" animate="right">
                            <div className="row">
                                <div className="col-auto">
                                    <img src={contactSettings.location_icon} alt="image28" />
                                </div>
                                <div className="col my-auto">
                                    <h4>{contactSettings.location_title}</h4>
                                    <p className="p-0 m-0">{contactSettings.location_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const contactData = await axios.get("/contact-us");
    return {
        props: {
            contactData: contactData.data,
        },
    };
}