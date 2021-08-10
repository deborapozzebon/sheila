import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        text-decoration:none;
        box-sizing:border-box;
        outline:0;
        color: #878787;
        font-family:"Roboto","Helvetica";
    }
    p{
       font-size:16px;
       line-height:28px;
    }
    strong{
        font-weight:bold;
    }
    html{
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(131,131,131,0.87);
    }
    .container{
        width:100%;
        padding:0 5%;
        @media(max-width:1024px){
            padding:0 25px;
        }
    }

    .prev,.next{
        cursor: pointer;
    }
    @media(max-width:1024px){
        padding-top:45px;
    }
    @keyframes changebackground { from { transform: translate3d(-50%,-50%,0) scale(1.0); } to { transform: translate3d(-50%,-50%,0) scale(1.5); } }
`;