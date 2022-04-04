import '../styles/globals.css';
import { useEffect, useState } from "react";
import Router from 'next/router';
import GlobalState from "./contexts/GlobalState";
import axios from 'axios';
import "../styles/bootstrap.min.css";
import "../styles/style.css";

axios.defaults.baseURL = 'https://tar-backend.hellotree.dev/api';


function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);


  function inViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }
  function getPercentangeInViewport(el) {
    var elHeight = el.offsetHeight;
    var elOffsetTop = el.offsetTop;
    var elOffsetBottom = elOffsetTop + elHeight;
    while (el.offsetParent) {
      el = el.offsetParent;
      elOffsetTop += el.offsetTop;
    }
    var pageOffsetTop = window.pageYOffset + window.innerHeight;
    return (
      (100 * (pageOffsetTop - elOffsetTop)) /
      (elOffsetBottom + window.innerHeight - elOffsetTop)
    );
  }
  function triggerScroll() {
    var animatedElements = document.querySelectorAll("[animate]");
    for (let i = 0; i < animatedElements.length; i++) {
      if (inViewport(animatedElements[i])) {
        animatedElements[i].classList.add("show");
      }
    }
    var scrollStylesElements = document.querySelectorAll("[scroll-styles]");
    for (let i = 0; i < scrollStylesElements.length; i++) {
      scrollStylesElements[i].style.transform =
        "translate(0," +
        (-getPercentangeInViewport(scrollStylesElements[i]) + 50) *
        scrollStylesElements[i].getAttribute("scroll-styles") +
        "%)";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", triggerScroll);
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <GlobalState.Provider
      value={{
        triggerScroll,
      }}
    >
      {loading ? (
        <div className='loader-forms'>
          <div className="home-loader lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        // <p>test</p>
      ) : (
        <Component {...pageProps} />
      )}
    </GlobalState.Provider>
  );
}

export default MyApp;