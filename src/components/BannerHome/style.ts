import styled from 'styled-components'


export const BannerHomeStyle = styled.div`
    height: 90vh;
    width: 100%;
    min-height: 700px;
    display: flex;
    align-items:center;
    background-color:#1d498c;
    .swiper-container-horizontal{
        > .swiper-pagination-bullets{
            bottom:40px;
        }
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            display: inline-block;
            border-radius: 50%;
            background: transparent;
            border: 1px solid #FFF;
            opacity:1;
        }
        .swiper-pagination-bullet-active {
            background:#FFF;
        }

        .swiper-slide{
            opacity:0 !important;
        }
        .swiper-slide-active{
            opacity:1 !important;
        }
       
    }

    .swiper_video {
        background: blue;
        @media(max-width: 1024px) {
            display: none;
        }
    }

    .item_slide {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        overflow:hidden;
        .bg{
            > div {
                &:first-of-type{
                    height: 100%;
                    width: 100%;
                    position: absolute !important;
                    left: 50%;
                    top: 50%;
                    transform:translate3d(-50%,-50%,0);
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    transition:all 200ms;
                    animation:changebackground;
                    animation-duration: 30s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                    animation-direction: alternate;
                    @media(max-width:800px){
                        display:none;
                        animation:none;
                    }
                }
            }
        }
        
        img {
            
            object-fit: cover;
        }
        .info_slide{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 10;
            margin-top: 180px;
            .title {
                font-weight: 300;
                font-family: 'ubuntu';
                font-size: 42px;
                line-height: 55px;
                color: #FFF;
                text-align: center;
                margin-bottom: 16px;
                }
             p {
                max-height: 120px;
                overflow: auto;
                line-height: 24px;
                font-size: 18px;
                font-weight: 300;
                margin-bottom: 40px;
                color: #FFF;
                b{
                    color:#FFF;
                }
            }
            a {
                padding: 4px 30px;
                background-color: transparent;
                transition: .3s;
                border: 1px solid #caa17a;
                border-width: 2px 2px 2px 2px;
                border-radius: 4px;
                text-align: center; 
                color: #838383;
                font-size: 14px;
                line-height: 36px;
                font-weight:bold;
                &:hover {
                    transition: .3s;
                    background-color: #caa17a;  
                }
            }
        }
        
        iframe{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            height: 150%;
            pointer-events: none;
            width: 100%;
        }
    }
    @media(max-width:800px){
        .item_slide{
            .info_slide{
                .title{
                    font-size: 30px;
                    line-height: 32px;
                }
            }
        }
    }
`