import { NavbarStyle } from './style';
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    let time = 0;
    if (isMobile) {
        time = 4500
    }
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, time);
    })
    const handleMenu = (e: any) => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = (e: any) => {
        setMenuOpen(false)
    }
    return (
        <NavbarStyle>
            <div className="menu">
                <div className={`container ${menuOpen ? "menu-mob-active" : ""}`}>
                    <Link href="/">
                        <a className="logo" onClick={closeMenu}>
                            <Image src={'/logo.png'} layout={'intrinsic'} width={70} height={100} alt="Sheila Scholl Lemos" priority={true} />
                        </a>
                    </Link>

                    <div className="container-menu">
                        <ul>
                            <li>
                                <Link href="/#o-hospital">
                                    <a onClick={closeMenu}>{'Início'}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#beneficios">
                                    <a onClick={closeMenu}>{'Serviços'}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#historias">
                                    <a onClick={closeMenu}>{'Equipe'}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/artigos">
                                    <a onClick={closeMenu}>{'Clínica'}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/artigos">
                                    <a onClick={closeMenu}>{'Onde Estamos'}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/artigos">
                                    <a onClick={closeMenu}>{'Contato'}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="right-menu">
                            <div className="button-menu" onClick={handleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path fill="#fff" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </NavbarStyle>
    )
}