import { useContext, useEffect, useState } from "react";
import Layout from './layouts/layout';
import axios from "axios";
import GlobalState from './contexts/GlobalState';
import Seo from './layouts/seo';


export default function Retreats(props) {

    const { triggerScroll } = useContext(GlobalState);
    const retreatsSections = props.retreatsData.page_items.retreats_sections;
    const retreatsSettings = props.retreatsData.page_items.retreats_settings;
    const seoSettings = props.retreatsData.page_items.seo;
    const socialMedia = props.retreatsData.social_media;
    const menuItems = props.retreatsData.fixed_titles;


    return (
        <>
            <Seo title={seoSettings?.title} image={seoSettings?.image} description={seoSettings?.description} />
            <Layout activePage="retreats" menuItems={menuItems} socialMedia={socialMedia}>
                <div className="container-fluid p-0 mt-4" animate="up">
                    <div className="row no-gutters">
                        <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-xs-12 w-100">
                            <div className="rectangle">
                                <img className="header-banner-image" src={retreatsSettings.banner_image} alt="image" />
                                <div className="header-banner-image-text text-center">
                                    <h1 className="text-center h-100 align-self-center">{retreatsSettings.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="retreats-sections pb-4 pb-lg-0">
                    <div className="container-fluid px-0 py-lg-5">
                        <div className="row no-gutters d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <div className="square-empty">
                                    <img className="retreats-image-col" src={retreatsSettings.section_1_image} alt="retreats1" />
                                    <h1 className="image-title">{retreatsSettings.section_1_title}</h1>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 my-auto pt-3" animate="right">
                                {<div className="content" dangerouslySetInnerHTML={{ __html: retreatsSettings.section_1_text }}></div>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expect" style={{ backgroundImage: `url(/img/newsletter-bg.png)` }} animate="down">
                    <div className="container-fluid p-0 py-3 w-100">
                        <div className="row no-gutters justify-content-center align-items-center">
                            <div className="col-6 text-center">
                                <h1 className="py-3 py-lg-5 m-0">{retreatsSettings.expect_title}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-retreats">
                    {
                        retreatsSections.map((retreatsSec, index) => (
                            <div className={"retreats-sections " + (retreatsSec.green_tree && " green-tree-pad") + (retreatsSec.colored_tree && " green-tree-pad")} key={index}>
                                <div className="container-fluid px-0 py-5">
                                    {retreatsSec.single_leaf ?
                                        <img className="single-leaf d-none d-lg-block" src="/img/single_leaf.png" alt="single_leaf" />
                                        : null
                                    }
                                    {retreatsSec.double_leaf ?
                                        <img className="double-leaf d-none d-lg-block" src="/img/double_leaf.png" alt="double_leaf" />
                                        : null
                                    }
                                    <div className="row no-gutters d-flex justify-content-center align-items-center">
                                        <div className={"col-12 col-lg-6 " + (index % 2 === 0 ? "order-lg-2" : "")}>
                                            <div className="retreats-box">
                                                {retreatsSec.green_tree ?
                                                    <img className="green-tree" src="/img/tree1.png" alt="green_tree" />
                                                    :
                                                    null
                                                }
                                                {retreatsSec.colored_tree ?
                                                    <img className="colored-tree" src="/img/colored-tree.png" alt="colored tree" />
                                                    :
                                                    null
                                                }
                                                <img className="retreats-image-col" src={retreatsSec.image} alt="retreats1" animate="left" />
                                                <h1 className="image-title">{retreatsSec.title}</h1>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 pt-3 my-auto">
                                            {<div className="content" dangerouslySetInnerHTML={{ __html: retreatsSec.text }} animate="right"></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const retreatsData = await axios.get("/retreats");
    return {
        props: {
            retreatsData: retreatsData.data,
        },
    };
}