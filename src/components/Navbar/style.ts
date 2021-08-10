import styled from 'styled-components'

export const NavbarStyle = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    width:100%;
    z-index:100;
    z-index:100;
    @media(max-width:1024px){
            position:relative;
        }

    .menu{
        width:100%;
        background: linear-gradient(180deg,#838383,transparent);
        height: 158px;
        padding-top:15px;
        .container{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        .logo{
            
            /* transform:translateX(-15px); */
            width:250px;
        }
        .container-menu{
            display:flex;
            align-items:center;
        }
        ul{
            margin-right:3vw;
            list-style:none;
            display:flex;
            li{
                padding:0 15px;
            }
            a{
                font: normal normal bold 16px/21px "Roboto";
                color: #FFFFFF;
            }
        }

        .right-menu{
            display:flex;
            align-items:center;

            .button-menu{
                width:24px;
                height:24px;
                display:none;
            }
        }
    }
    @media(max-width:1500px){
        .menu{
            .logo{
                width:190px;
            }
        }
    }
    @media(max-width:1024px){
        position:absolute;
        
        .menu{
            padding-top: 60px;
            .container{
                &.menu-mob-active{
                    position: fixed;
                    top: 45px;
                    padding-top:45px;
                    background-color: rgb(131, 131, 131) !important;
                    border-bottom-color: rgb(118, 30, 171) !important;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content:flex-start;
                    padding-top:20px;
                    .container-menu{
                        flex-direction:column;
                        ul{
                            display:flex;
                            flex-direction:column;
                            margin-right:0;
                            margin:30px 0;
                            li{
                                text-align:center;
                                margin:5px 0;
                            }
                        }
                        .right-menu{
                            a{
                                display:block;
                            }
                            .button-menu{
                                position:absolute;
                                right:5%;
                                top:68px;
                                width:20px;
                                height:20px;
                                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPHRpdGxlLz4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPSJub25lIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iNDAyIiB3aWR0aD0iNTgyIiB5PSItMSIgeD0iLTEiLz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8bGluZSBzdHJva2Utd2lkdGg9IjJweCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIGlkPSJzdmdfMSIgeTI9IjI1IiB5MT0iNyIgeDI9IjI1IiB4MT0iNyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgc3Ryb2tlLXdpZHRoPSIycHgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBpZD0ic3ZnXzIiIHkyPSI2Ljk1NTM1NyIgeTE9IjI0Ljk1NTM1NyIgeDI9IjI1IiB4MT0iNyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPg==);
                                background-position: center;
                                svg{
                                    display:none;
                                }
                            }
                        }
                    }
                }
            }
            .container-menu{
                ul{
                    display:none;
                }
                .right-menu{
                    a{
                        display:none;
                    }
                    .button-menu{
                        cursor: pointer;
                        display:block;
                    }
                }
            }
        }
    }
    @media(max-width:800px){
        .menu{
            .logo{
                width:130px;
            }
        }
    }
`;