import Image from 'next/image'
import { BannerStyle } from './style';

const Banner = () => {
    return (
        <BannerStyle>
            <Image src="/background.jpg" width={1920} height={900} layout={'responsive'} priority={true} />
        </BannerStyle>
    )
}

export default Banner;