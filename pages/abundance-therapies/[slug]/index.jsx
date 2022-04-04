import React, { useEffect, useState, useContext } from 'react';
import Layout from '../../layouts/layout';
import { useRouter } from 'next/router'
import axios from "axios";
import GlobalState from '../../contexts/GlobalState';
import Link from 'next/link';
import Seo from '../../layouts/seo';


export default function singleProduct(props) {

    const { triggerScroll } = useContext(GlobalState);
    const productsSingle = props.singleTherapiesData.page_items.single_product;
    const socialMedia = props.singleTherapiesData.social_media;
    const menuItems = props.singleTherapiesData.fixed_titles;
    const newSocialMedia = props.singleTherapiesData.at_social_media;
    const router = useRouter();
    const { slug } = router.query;


    // const [productsSingle, setProductsSingle] = useState(null);

    // useEffect(() => {
    //     axios.post('products-list', {
    //         custom_validation: [
    //             { constraint: "with", value: ['products_sessions'] },
    //             { constraint: "where", value: ['slug', slug] }
    //         ]
    //     }).then((r) => setProductsSingle(r.data[0]));

    //     return () => {
    //         setProductsSingle(null);
    //     }
    // }, []);

    // if (!productsSingle) return null;

    return (
        <>
            <Seo title={productsSingle?.seo_title} description={productsSingle.seo_description} image={productsSingle.image} />
            <Layout activePage="abundance-therapies" menuItems={menuItems} socialMedia={socialMedia} newSocialMedia={newSocialMedia}>
                <div className="container mt-4 mary-bugg-single mb-5">
                    <div className="row">
                        <div className="col-12 w-100 bg-white pr-lg-0">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-0 order-lg-2">
                                    <div className="square-empty">
                                        <img className="header-banner-image" src={productsSingle.image} alt="image" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <div className="single-image-desc pt-5 pt-lg-0">
                                        <Link href={"/abundance-therapies"}>
                                            <a className="button-full-line" style={{ textDecoration: 'none' }}><span>BACK TO {menuItems['abundance-therapies']}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                                    <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                                        <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                                        <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </Link>
                                        <h1>{productsSingle.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-description">
                    <div className="container pt-5 pb-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <h1 animate="down">{productsSingle.description_title}</h1>
                                {<div className="content" dangerouslySetInnerHTML={{ __html: productsSingle.description }} animate="down"></div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-0 pb-5">
                    <div className="row no-gutters pb-5">
                        <div className="col-12 col-lg-6">
                            <div className="rect" style={{ backgroundImage: `url(/img/home-last-img.png)` }}>
                                <img className="img-rect-single" src={productsSingle.package_image} alt="image" animate="right" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="single-package-desc">
                                <h1>{productsSingle.package_title}</h1>
                                <p>{productsSingle.package_text}</p>
                                {productsSingle.products_sessions.map((singleList, index) => (
                                    <div className="row d-flex justify-content-center pt-4 pt-lg-1" key={index}>
                                        <div className="col-md-6 col-lg-5 col-xl-6">
                                            <h4 animate="down">{singleList.title}</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-7 col-xl-6">
                                            <div className="row">
                                                <div className="col-auto col-md-6">
                                                    <div className="row align-items-center no-gutters">
                                                        <div className="col-auto pr-2">
                                                            <img src="/img/time-icon.svg" alt="Time Icon" alt="image" animate="down" width={20} />
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
                            </div>

                            <div className="book-button">
                                <img className="black-bg-home" src="/img/header.png" alt="image" />
                                <div className="booking-button">
                                    <Link href={"/abundance-therapies/" + slug + "/book-now"} >
                                        <a className="button-full-line-white" style={{ textDecoration: 'none' }}><span>Book Now</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.427" height="1.5" viewBox="0 0 13.427 1.5">
                                                <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(0 0.75)" fill="none" stroke="#fff" strokeWidth="1.5" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
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
    const paths = therapies.data.page_items.all_products_list.map((therapy) => ({
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
    };
}