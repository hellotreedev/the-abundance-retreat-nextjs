import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalState from '../../components/layouts/GlobalState';
import Link from "next/link";
import Layout from '../../components/layouts/layout';
import Seo from '../../components/layouts/seo';


export default function AbundanceTherapies(props) {


    const { triggerScroll } = useContext(GlobalState);
    const abundanceTherapiesSettings = props.abundanceTherapiesData.page_items.abundance_therapies_settings;
    const newSocialMedia = props.abundanceTherapiesData.page_items.at_social_media;
    const seoSettings = props.abundanceTherapiesData.page_items.seo;
    const socialMedia = props.abundanceTherapiesData.social_media;
    const menuItems = props.abundanceTherapiesData.fixed_titles;


    const [lastPage, setLastPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsList, setProductsList] = useState([]);
    const [loadingForm, setLoadingForm] = useState(false);


    useEffect(() => {
        setLoadingForm(true);
        axios.post('products-list?page=' + currentPage, {
            custom_validation: [{
                constraint: "with",
                value: ['products_sessions']
            }],
            per_page: 4
        })
            .then((r) => {
                setProductsList([...productsList, ...r.data.data]);
                window.scrollTo(window.scrollX, window.scrollY + 1);
                window.scrollTo(window.scrollX, window.scrollY - 1);
                setCurrentPage(r.data.current_page);
                setLastPage(r.data.last_page);
                setLoadingForm(false);
            });
    }, [currentPage]);

    return (
        <>
            <Seo title={seoSettings?.title} image={seoSettings?.image} description={seoSettings?.description} />
            <Layout activePage="abundance-therapies" menuItems={menuItems} socialMedia={socialMedia} newSocialMedia={newSocialMedia}>
                <div className="mary-bugg">
                    <div className="container-fluid p-0 mt-4" >
                        <div className="row no-gutters">
                            <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-xs-12 w-100">
                                <div className="rectangle">
                                    <img className="header-banner-image" src={abundanceTherapiesSettings.banner_image} alt="image" />
                                    <div className="header-banner-image-text text-center">
                                        <h1 className="text-center h-100 align-self-center">{abundanceTherapiesSettings.banner_main_title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quotes-section">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col">
                                <img className="quotes float-right" src="/img/left-quotes.jpg" alt="image" animate="left" />
                            </div>
                            <div className="col-8 col-md-9 text-center" animate="top">
                                <h1>{abundanceTherapiesSettings.section_1_title}</h1>
                            </div>
                            <div className="col">
                                <img className="quotes" src="/img/right-quotes.jpg" alt="image" animate="rigth" />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-8 col-md-9 text-center">
                                <p animate="down">{abundanceTherapiesSettings.section_1_subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-product-section py-lg-5">
                    <div className="container py-5">
                        <div className="row">
                            {
                                productsList?.map((productSingle, index) => (
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 pb-5 d-flex flex-column" key={index}>
                                        <Link href={'/abundance-therapies/' + productSingle.slug}>
                                            <a style={{ textDecoration: 'none' }} animate="down">
                                                <div className="rectangle" animate="down">
                                                    <img className="product-image" src={productSingle.image} alt="products" />
                                                </div>
                                            </a>
                                        </Link>
                                        <div className="flex-grow-1 d-flex flex-column">
                                            <div className="flex-grow-1 ">
                                                <Link href={'/abundance-therapies/' + productSingle.slug}>
                                                    <a style={{ textDecoration: 'none' }} animate="down">{productSingle.title}</a>
                                                </Link>
                                                <hr animate="down" />
                                                <p animate="down">{productSingle.small_description}</p>
                                            </div>

                                            {
                                                productSingle?.products_sessions?.map((singleList, index) => (
                                                    <div className="row d-flex justify-content-center pt-4 pt-lg-1" key={index}>
                                                        <div className="col-md-6 col-lg-5 col-xl-6">
                                                            <h4 animate="down">{singleList.title}</h4>
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
                                            <div className="align-bottom d-flex pt-3" animate="down">
                                                <Link href={'/abundance-therapies/' + productSingle.slug} >
                                                    <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{productSingle.read_more_button}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                                            <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                                                <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                                                <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 d-flex text-center justify-content-center">
                                <div className={loadingForm ? "lds-ring load-more-loader" : "lds-ring d-none"}><div></div><div></div><div></div><div></div></div>
                                {
                                    !!(currentPage != lastPage) && (
                                        <button className={!loadingForm ? "load-more" : " hide"} onClick={() => { setCurrentPage(currentPage + 1); }} animate="down">
                                            <span>{abundanceTherapiesSettings.load_more_button}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5.94" height="15.511" viewBox="0 0 5.94 15.511">
                                                <g id="Group_2699" data-name="Group 2699" transform="translate(595.94 -230) rotate(90)">
                                                    <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                                    <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                                </g>
                                            </svg>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const abundanceTherapiesData = await axios.get("/abundance-therapies");
    return {
        props: {
            abundanceTherapiesData: abundanceTherapiesData.data,
        },
        revalidate: 10, // In seconds
    };
}