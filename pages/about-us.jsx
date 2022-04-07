import { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import GlobalState from '../components/layouts/GlobalState';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '../components/layouts/layout';
import Seo from '../components/layouts/seo';


import "swiper/components/effect-fade/effect-fade.min.css";
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css";

export default function About(props) {

    const { triggerScroll } = useContext(GlobalState);
    const teamList = props.aboutData.page_items.team_list;
    const aboutSettings = props.aboutData.page_items.about_settings;
    const seoSettings = props.aboutData.page_items.seo;
    const daysList = props.aboutData.page_items.days_list;
    const socialMedia = props.aboutData.social_media;
    const menuItems = props.aboutData.fixed_titles;
    // const [teamList, setTeamList] = useState();

    // useEffect(() => {
    //     axios.post('/team-list').then(r => setTeamList(r.data));
    // }, []);

    // const [daysList, setDaysList] = useState([]);
    // const [teamList, setTeamList] = useState([]);
    const [teamPopup, setTeamPopup] = useState(false);
    const [teamPopupTitle, setTeamPopupTitle] = useState('');
    const [teamPopupText, setTeamPopupText] = useState('');

    return (
        <>
            <Seo title={seoSettings?.title} image={seoSettings?.image} description={seoSettings?.description} />
            <Layout activePage="about-us" menuItems={menuItems} socialMedia={socialMedia} aboutSettings={aboutSettings}>
                {
                    (daysList && teamList) ?
                        <>
                            <div className="about-page">
                                <div className="about-banner container-fluid py-lg-4 px-0">
                                    <div className="row no-gutters">
                                        <div className="col-4 d-none d-lg-block">
                                            <div className="vertical-box" animate="left">
                                                <img className="about-banner-image" src={aboutSettings.banner_image} alt="banner-image4" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-8">
                                            <div className="banner-horizontal d-flex align-content-center justify-content-center" style={{ backgroundImage: `url(/img/newsletter-bg.png)` }} animate="right">
                                                <h1>{aboutSettings.banner_title}</h1>
                                            </div>
                                            <div className="p-3 pl-lg-5 p-lg-3" animate="down">
                                                <h2>{aboutSettings.banner_section_title}</h2>
                                                {<div className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.banner_section_text }}></div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="about-banner container-fluid py-lg-5 px-0">
                                    <div className="row no-gutters py-lg-5">
                                        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 order-lg-2">
                                            <div className="vertical-box2">
                                                <img className="about-banner-image" src={aboutSettings.vision_image} alt="banner-image1" animate="down" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7" animate="up">
                                            <div className="p-3 pl-lg-5">
                                                <h2>{aboutSettings.vision_title}</h2>
                                                <div className="pr-lg-5">
                                                    {<div className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.vision_text }}></div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container-fluid p-0 pt-lg-5">
                                    <div className="row no-gutters pt-lg-5">
                                        <div style={{ backgroundImage: `url(` + aboutSettings.retreat_image + `)` }} className="soul-bg h-100 w-100" animate="down">
                                            <div className="back-black">
                                                <div className="col-12">
                                                    <div className="row h-100 no-gutters d-flex justify-content-center align-items-center">
                                                        <div className="col-8 py-3 py-lg-5 text-center">
                                                            <h1 className="pt-5" animate="up">{aboutSettings.retreat_title}</h1>
                                                            <h2 animate="up">{aboutSettings.retreat_subtitle}</h2>
                                                            {<div className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.retreat_text }}></div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="days-section">
                                    <div className="container">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-12 align-self-center text-center pt-5 pb-5">
                                                <h1 animate="right">{aboutSettings.days_title}</h1>
                                            </div>
                                            {
                                                daysList.map((singleDay, index) => (
                                                    <div className="col-12 col-md-6 col-lg-4 pb-5 h-100 align-self-start" animate="left" key={index}>
                                                        <div className="row align-items-start">
                                                            <div className="col-auto">
                                                                <h2 className="m-0">{singleDay.day}</h2>
                                                            </div>
                                                            <div className="col">
                                                                <h3>{singleDay.title}</h3>
                                                                <p className="m-0">{singleDay.subtitle}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <img className="days-leaf" src="/img/days-leaf.png" alt="Leaf-Image" />
                                </div>


                                <div className="container-fluid p-0">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-lg-4 order-lg-2" animate="right">
                                            <div className="acc-img h-100 w-100" style={{ backgroundImage: `url(` + aboutSettings.accommodation_image + `)` }}>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-8 w-100 h-100" animate="left">
                                            <div className="desc-acc-bg" style={{ backgroundImage: `url(/img/header.png)` }}>
                                                <div className="desc-acc">
                                                    <h1>{aboutSettings.accommodation_title}</h1>
                                                    <div className="pt-lg-5 pt-2">
                                                        {<div className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.accommodation_text }}></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="subak-section">
                                    <div className="container-fluid p-0">
                                        <div className="row no-gutters">
                                            <div className="col-12 col-lg-5" animate="left">
                                                <div className="acc-img h-100 w-100" style={{ backgroundImage: `url(` + aboutSettings.subak_image + `)` }}>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="subak-desc">
                                                    <h1 animate="right">{aboutSettings.subak_title}</h1>
                                                    {<div className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.subak_text }}></div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container-fluid p-0 pt-lg-5 pb-lg-5">
                                    <div className="row no-gutters pt-lg-5 pb-lg-5">
                                        <div style={{ backgroundImage: `url(` + aboutSettings.feeding_image + `)` }} className="soul-bg h-100 w-100">
                                            <div className="back-black">
                                                <div className="col-12">
                                                    <div className="row h-100 no-gutters d-flex justify-content-center align-items-center">
                                                        <div className="col-9 text-center pb-3">
                                                            <h1 className="pt-5" animate="left">{aboutSettings.feeding_title}</h1>
                                                            <h2 className="pt-3" animate="left">{aboutSettings.feeding_subtitle}</h2>
                                                            {<div animate="left" className="content pb-4" dangerouslySetInnerHTML={{ __html: aboutSettings.feeding_text }}></div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-section-about">
                                    <div className="container pb-5">
                                        <div className="row">
                                            <div className="col-lg-3 text-center text-lg-left text my-auto py-4">
                                                <div className="team-desc">
                                                    <h1>{aboutSettings.team_title}</h1>
                                                    <h2>{aboutSettings.team_subtitle}</h2>
                                                </div>
                                            </div>
                                            <div className="col-auto d-none d-md-block"></div>
                                            <div className="col-12 col-lg-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="about-swiper swiper-container">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-10" >
                                                                    <Swiper
                                                                        observer={true}
                                                                        slidesPerView={1}
                                                                        slidesPerGroup={1}
                                                                        spaceBetween={10}
                                                                        autoplay={{
                                                                            delay: 4000,
                                                                            disableOnInteraction: false
                                                                        }}
                                                                        breakpoints={{
                                                                            // when window width is >= 320px
                                                                            500: {
                                                                                slidesPerView: 2,
                                                                                slidesPerGroup: 2
                                                                            },
                                                                            991: {
                                                                                slidesPerView: 3,
                                                                                slidesPerGroup: 3
                                                                            }
                                                                        }}
                                                                        pagination={{
                                                                            el: '.custom-pagination',
                                                                            "clickable": true
                                                                        }}
                                                                        className="mySwiper2"
                                                                    >
                                                                        {
                                                                            teamList?.map((singleTeam, index) => (
                                                                                <SwiperSlide className="cursor-pointer" key={index} onClick={() => { setTeamPopupTitle(singleTeam.title); setTeamPopupText(singleTeam.description); }}>
                                                                                    <div className="col-auto team-data">
                                                                                        <div className="square-slider">
                                                                                            <img className="team-img" src={singleTeam.image} alt="Team Member" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-auto team-data">
                                                                                        <h2>{singleTeam.title}</h2>
                                                                                        <p>{singleTeam.subtitle}</p>
                                                                                    </div>
                                                                                </SwiperSlide>
                                                                            ))
                                                                        }
                                                                    </Swiper>
                                                                </div>
                                                                <div className="col-12 col-xl d-flex align-items-center ">
                                                                    <div className="custom-pagination"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                teamPopupTitle && teamPopupText ?
                                    <div id="errors-popup" className="error-popup-api d-flex align-items-center justify-content-center px-3 fade-in">
                                        <div className="pop-up-api-box">
                                            <svg className="close-svg" onClick={() => { setTeamPopupText(''); setTeamPopupTitle('') }} xmlns="http://www.w3.org/2000/svg" width="16.672" height="17.204" viewBox="0 0 16.672 17.204">
                                                <g id="Group_18" data-name="Group 18" transform="translate(-1205.242 -317.086)">
                                                    <line id="Line_28" data-name="Line 28" x1="13.844" y2="14.376" transform="translate(1206.656 318.5)" fill="none" stroke="#25d6ff" strokeLinecap="round" strokeWidth="2" />
                                                    <line id="Line_29" data-name="Line 29" x2="13.844" y2="13.844" transform="translate(1206.656 318.5)" fill="none" stroke="#25d6ff" strokeLinecap="round" strokeWidth="2" />
                                                </g>
                                            </svg>
                                            <div className="content background-light text-center px-3 py-3">
                                                <h1 className="my-2">{teamPopupTitle}</h1>
                                            </div>
                                            <div className="container pb-3">
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-md-9">
                                                        <div className="content background-light text-center">
                                                            <p>{teamPopupText}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </>
                        :
                        <div className="py-5">
                            <div className="home-loader lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                }
            </Layout >
        </>
    );
}

export async function getStaticProps() {
    const aboutData = await axios.get("/about");
    return {
        props: {
            aboutData: aboutData.data,
        },
    };
}