import type { AppProps } from 'next/app'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/navigation/navigation.scss';
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Head>
                <link rel="icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_FRONT_HOST}favicon.ico`} />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp
