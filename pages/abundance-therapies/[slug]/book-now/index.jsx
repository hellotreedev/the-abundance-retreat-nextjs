import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from "axios";
import GlobalState from '../../../../components/layouts/GlobalState';
import Layout from '../../../../components/layouts/layout';
import Seo from '../../../../components/layouts/seo';


export default function Main(props) {

    const { triggerScroll } = useContext(GlobalState);
    const productsSingle = props.singleTherapiesData.page_items.single_product;
    const therapiesSettings = props.singleTherapiesData.page_items.abundance_therapies_settings;
    const socialMedia = props.singleTherapiesData.social_media;
    const menuItems = props.singleTherapiesData.fixed_titles;
    const newSocialMedia = props.singleTherapiesData.at_social_media;
    const router = useRouter();
    const { slug } = router.query;


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loadingForm, setLoadingForm] = useState(false);
    const [formErrors, setFormErrors] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);


    const submitBooking = (e) => {
        e.preventDefault();
        setLoadingForm(true);
        setFormErrors(null);

        axios
            .post('book-data', {
                'name': name,
                'email': email,
                'phone_number': phone,
                'address': address,
                'product_name': productsSingle.title
            })
            .then(r => {

                setFormErrors(null)
                setLoadingForm(false)
                e.target.reset()
                setFormSuccess(true)
                setTimeout(function () {
                    setFormSuccess(false)
                }, 3000);
            })
            .catch(r => {
                if (r.response) {
                    // Request made and server responded
                    console.log(r.response.data);
                    console.log(r.response.status);
                    console.log(r.response.headers);
                    setFormErrors(r.response.data.errors)
                } else if (r.request) {
                    // The request was made but no response was received
                    console.log(r.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', r.message);
                }
                setLoadingForm(false)
            });
    }

    if (!productsSingle) return null;

    return (
        <>
            <Seo title={productsSingle?.seo_title} description={productsSingle.seo_description} image={productsSingle.image} />
            <Layout activePage="abundance-therapies" menuItems={menuItems} socialMedia={socialMedia} newSocialMedia={newSocialMedia}>
                <div className="container mt-4 mary-bugg-single mb-5">
                    <div className="row">
                        <div className="col-12 w-100 bg-white">
                            <div className="row">
                                <div className="col-12 col-lg-6 pr-lg-0 order-lg-2">
                                    <div className="square-empty">
                                        <img className="header-banner-image" src={productsSingle.image}></img>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 pt-5 pt-lg-0">
                                    <div className="position-relative h-100">
                                        <div className="single-image-desc w-50 h-100 justify-content-center d-flex flex-column">
                                            <Link href={"/abundance-therapies/" + productsSingle.slug} style={{ textDecoration: 'none' }}>
                                                <a className="button-full-line">
                                                    <span>BACK TO {productsSingle.title}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                                        <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                                            <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                                            <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </Link>
                                            <h1>BOOK NOW!</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-lg-5">
                    <div className="row py-lg-5 reach-us">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h1 className="big-h1-und">{therapiesSettings.banner_main_title}</h1>
                                    <p className="pt-4">{therapiesSettings.book_form_subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-lg-5">

                            <form onSubmit={submitBooking} id="book-form">
                                <input name="name" type="text" placeholder={therapiesSettings.book_form_name} onChange={e => setName(e.target.value)}></input>
                                <input name="email" type="text" placeholder={therapiesSettings.book_form_email} onChange={e => setEmail(e.target.value)}></input>
                                <input name="phone_number" type="number" placeholder={therapiesSettings.book_form_phone} onChange={e => setPhone(e.target.value)}></input>
                                <input name="address" type="text" placeholder={therapiesSettings.book_form_address} onChange={e => setAddress(e.target.value)}></input>
                                <div className={loadingForm ? "lds-ring" : "lds-ring d-none"}><div></div><div></div><div></div><div></div></div>
                                {
                                    formErrors ?
                                        Object.keys(formErrors).map((inputName, i) => (
                                            formErrors[inputName].map((errorMessage, j) => (
                                                <p className="pl-3 pt-2 m-0" key={`${i}-${j}`}>{errorMessage}</p>
                                            ))
                                        ))
                                        :
                                        ""
                                }
                                <p className={formSuccess ? "pt-2 pl-3 show " : "hide"}>{therapiesSettings.book_form_success}</p>
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
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 py-3 pt-5">
                            <div className="book-now-desc">
                                <h1>{productsSingle.title}</h1>
                                <p>{productsSingle.package_text}</p>
                                {productsSingle?.products_sessions?.map((singleList, index) => (
                                    <div className="row d-flex pt-4 pt-lg-1" key={index}>
                                        <div className="col-md-6 col-lg-5 col-xl-6">
                                            <h6 animate="down">{singleList.title}</h6>
                                        </div>
                                        <div className="col-md-6 col-lg-7 col-xl-6">
                                            <div className="row">
                                                <div className="col-auto col-md-6">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto pr-2">
                                                            <img src="/img/time-icon.svg" alt="Time Icon" animate="down" width={20} />
                                                        </div>
                                                        <div className="col" animate="down">
                                                            <h5>{singleList.time}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto col-md-6">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto pr-2">
                                                            <img src="/img/money-icon.svg" alt="Time Icon" animate="down" width={20} />
                                                        </div>
                                                        <div className="col" animate="down">
                                                            <h5>{singleList.amount}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                                <hr />
                                <h2>{therapiesSettings.order_total_text}<span> {productsSingle.product_total}</span></h2>
                                <h4 className="pt-3">{therapiesSettings.whatsapp_text} <a target="_blank" rel="noreferrer" href={"https://wa.me/" + therapiesSettings.whatsapp_number + "?text=" + therapiesSettings.whatsapp_message + " " + slug + ""}><img src="/img/whatsapp.png" /></a></h4>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    let therapies = await axios.get("/abundance-therapies");
    const paths = therapies?.data?.page_items?.all_products_list?.map((therapy) => ({
        params: { slug: therapy.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps(params) {
    const { slug } = params.params;
    const singleTherapiesData = await axios.get("/abundance-therapies/" + slug);
    return {
        props: {
            singleTherapiesData: singleTherapiesData.data,
        },
        revalidate: 10, // In seconds
    };
}