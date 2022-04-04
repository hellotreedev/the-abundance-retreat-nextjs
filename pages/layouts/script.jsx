import Script from 'next/script'

export default function Home() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3GMTPN1JMK" />
            <Script
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
        </>
    )
}