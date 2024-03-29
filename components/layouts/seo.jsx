import Head from 'next/head';
import Script from 'next/script';

export default function seo(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="title" content={props.title} />
            <meta name="description" content={props.description} />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.theabundanceretreat.com" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.theabundanceretreat.com" />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.image} />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-3GMTPN1JMK" />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-3GMTPN1JMK');
              `,
                }}
            />
        </Head>
    )
}