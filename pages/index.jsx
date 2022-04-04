import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Router from 'next/router';
import GlobalState from '../components/layouts/GlobalState';
import { useEffect, useState, useContext } from "react";
import global from '../global';
import axios from 'axios';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '../components/layouts/layout';
import Seo from '../components/layouts/seo';
import Link from "next/link";

import "swiper/components/effect-fade/effect-fade.min.css";
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css";



SwiperCore.use([EffectFade, Pagination, Autoplay]);

export default function Home(props) {

  const { triggerScroll } = useContext(GlobalState);
  const homeData = props.homeData.page_items.home_settings;
  const seoSettings = props.homeData.page_items.seo;
  const homeSwiper = props.homeData.page_items.home_swiper;
  const socialMedia = props.homeData.social_media;
  const menuItems = props.homeData.fixed_titles;


  useEffect(() => {
    triggerScroll();
  }, [homeData]);



  return (
    <>
      <Seo title={seoSettings?.title} image={seoSettings?.image} description={seoSettings?.description} />
      <Layout activePage="home" menuItems={menuItems} socialMedia={socialMedia}>
        {
          homeSwiper && homeData
            ?
            <>
              <div className="home-swiper" animate="">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 pr-lg-0">
                      <div className="swiper-container {styles.SliderWrapper}">
                        <Swiper
                          pagination={{
                            "clickable": true
                          }}
                          observer={true}
                          className="mySwiper"
                          effect="fade"
                          spaceBetween={0}
                          grabCursor="true"
                          direction="horizontal"
                          loop="true"
                          autoHeight={true}
                          breakpoints={{
                            992: {
                              direction: "vertical"
                            }
                          }}
                          slidesPerView="1"
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                          }}
                        >
                          {
                            homeSwiper?.map((swiperItem, index) => (
                              <SwiperSlide key={index}>
                                <div>
                                  <div className="row no-gutters">
                                    <div className="col-12 col-lg-6 pl-0 ml-0 order-lg-2 home-slide">
                                      {swiperItem.url ?
                                        <Link href={swiperItem.url}>
                                          <a className="button-full-line">
                                            <img className="swiper-image" src={swiperItem.image} alt="image30" />
                                          </a>
                                        </Link>
                                        :
                                        <img className="swiper-image" src={swiperItem.image} alt="image30" />
                                      }
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 bg-white w-100 pr-0 mr-0 home-slide">
                                      <div className="row no-gutters h-100">
                                        <div className="col-10 my-auto pt-1 pt-lg-0">
                                          <h1 className="h-100">
                                            {swiperItem.title}
                                          </h1>
                                          <p>{swiperItem.subtitle}</p>
                                          {swiperItem.button_text ?
                                            <Link href={swiperItem.url}>
                                              <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{swiperItem.button_text}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                                  <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                                    <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#333" />
                                                    <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#333" strokeWidth="1.5" />
                                                  </g>
                                                </svg>
                                              </a>
                                            </Link>
                                            :
                                            null
                                          }
                                        </div>
                                        <div className="col-2 mx-auto">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <main className={styles.main}> */}
              <div className="retreat position-relative mb-lg-3" animate="down">
                <div className="container-fluid p-0">
                  <div className="row no-gutters">
                    <div className="col-12 col-lg-3" animate="left">
                      <img className="left-leaf-img" src="/img/leaf-left.svg" alt="image34" />
                    </div>
                    <div className="col-lg-6 col-12 text-center" animate="">
                      <div className="retreat-section-title">
                        <h1>
                          {homeData?.retreats_title}
                        </h1>
                        <p className="pt-1"> {homeData?.retreats_subtitle}</p>
                        <div className="align-bottom d-flex pt-3" animate="down">
                          <Link href={'/retreats'} >
                            <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{homeData?.retreats_button}</span>
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
                    <div className="col-12 col-lg-3" animate="right">
                      <img className="right-leaf-img" src="/img/leaf-right.svg" alt="image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative py-5 w-100">
                <div className="section-1-home">
                  <div className="container-fluid p-0">
                    <div className="row no-gutters">
                      <div className="col-12 col-lg-5">
                        <div className="square-empty-mission">
                          <img src={homeData?.section_2_image} alt="image" animate="left" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7" animate="">
                        <div className="home-section-1-bg">
                          <p className="pt-4 mb-5" animate="right">
                            {homeData?.mission_header}
                          </p>
                          <h2 animate="right">
                            {homeData?.mission_title}
                          </h2>
                          <hr animate="right" />
                          <p className="pt-4 mb-5" animate="right">{homeData?.mission_text}</p>

                          <h2 className="pt-4" animate="right">
                            {homeData?.vision_title}
                          </h2>
                          <hr animate="right" />
                          <p className="pt-4" animate="right"> {homeData?.vision_text}</p>
                          <Link href={'/about-us'}>
                            <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{homeData?.section_2_button}</span>
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
                  </div>
                </div>
              </div>

              <div className="home-r-section pb-lg-5">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-lg-0 m-0">
                      <img className="section-r-img" src={homeData?.explore_image} alt="image" animate="left" />
                      <img className="section-r-img-shaddow" src="/img/shadow-img-relax.svg" alt="image" animate="left" />
                      <div className="section-r-img-desc" animate="right">
                        <h3>{homeData?.explore_small_title}</h3>
                        <h1>{homeData?.explore_title}</h1>
                        <p className="learn-more mt-4">
                          <Link href={'/retreats'}>
                            <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{homeData?.explore_title}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                  <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#FFF" />
                                  <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#FFF" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pl-lg-0 align-content-center ">
                      <div className="py-5 section-r-bg text-center justify-content-center d-flex flex-column">
                        {<div className="content" dangerouslySetInnerHTML={{ __html: homeData?.relax_text }}></div>}
                        <div className="py-4 py-lg-5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="63.5" height="7" viewBox="0 0 63.5 7">
                            <line id="Line_18" data-name="Line 18" x2="63.5" transform="translate(0 3.5)" fill="none" stroke="#00d0ac" strokeWidth="7" />
                          </svg>
                        </div>
                        {<div className="content" dangerouslySetInnerHTML={{ __html: homeData?.relax_bottom }}></div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="home-last-section py-lg-5" animate="">
                  <img className="back-last-img" src={homeData?.mb_image} alt="mb_image" />
                  <div className="container">
                    <div className="row d-flex justify-content-center align-content-cente">
                      <div className="col-11 col-lg-7 py-4">
                        <div className="position-relative">
                          <div className="last-home-div-desc">
                            <h1 animate="right">
                              {homeData?.mb_title}
                            </h1>
                            <h3 animate="right">
                              {homeData?.mb_subtitle}
                            </h3>
                            <p className="text-limited">
                              {homeData?.mb_text}
                            </p>
                            <p className="learn-more">
                              <Link href={"/about-us"}>
                                <a className="button-full-line" style={{ textDecoration: 'none' }}><span className="align-text-bottom">{homeData?.mb_button}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15.511" height="5.94" viewBox="0 0 15.511 5.94">
                                    <g id="Group_2699" data-name="Group 2699" transform="translate(-230 -590)">
                                      <path id="Path_4542" data-name="Path 4542" d="M5.94,0H0L2.935,4.314Z" transform="translate(241.197 595.94) rotate(-90)" fill="#FFF" />
                                      <line id="Line_10" data-name="Line 10" x1="13.427" transform="translate(230 593.092)" fill="none" stroke="#FFF" strokeWidth="1.5" />
                                    </g>
                                  </svg>
                                </a>
                              </Link>
                            </p>
                          </div>
                          <img className="black-bg-home" src="/img/header.png" alt="image" animate="left" />
                        </div>
                      </div>
                      <div className="col-11 col-lg-5 py-4">
                        <div className="square-90">
                          <img className="home-last-2" src={homeData?.mb_small_image} alt="image" animate="right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            null
        }
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const homeData = await axios.get("/home");
  return {
    props: {
      homeData: homeData.data,
    },
  };
}