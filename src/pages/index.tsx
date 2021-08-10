import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Banner from '../components/Banner';
import BannerHome from '../components/BannerHome'
import { BannerHomeInterface } from '../components/BannerHome/interface'
import { Navbar } from '../components/Navbar';

export default function Home() {
    const data: BannerHomeInterface = {
        _id: '1',
        buttonLabel: "Testye",
        sequence: 1,
        title: "asasasasa",
        description: "asasa",
        link: "asa",
        img: "/background.jpg"
    };
    const data2: BannerHomeInterface = {
        _id: '2',
        buttonLabel: "tesf2",
        sequence: 1,
        title: "asasasasa",
        description: "asasa",
        link: "asa",
        img: "/background2.jpg"
    };
    const data3: BannerHomeInterface = {
        _id: '2',
        buttonLabel: "sdf",
        sequence: 1,
        title: "asasasasa",
        description: "asasa",
        link: "asa",
        img: "/background3.jpg"
    };
    const asas: BannerHomeInterface[] = [];
    asas.push(data);
    asas.push(data2);
    asas.push(data3);

    return (
        <>
            <Navbar />
            <BannerHome data={asas}/>
        </>
    )
}
