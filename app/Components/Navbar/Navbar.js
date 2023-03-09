"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../Logo'
import './navbar.css'
const Menu =  [ ['Home', '/'],
                ['Services', '/services'],
                ['About', '/about'],
                ['Blogs', '/blogs']]

export default function Navbar() {
const [mobilemenu, setMobileMenu] = useState('');
function menu_toggle() {
    setMobileMenu(mobilemenu => mobilemenu ? '' : 'menu_display');
    }  
    
    
    return (
    
<header className='mb-20'>
<nav className='navbar-main dark:bg-slate-900 nav-sticky'>
    <div className="container nav-container px-9 ">
    <Logo color="dark" />
    <div className='allitems'>
    <div className="mobile_bar" onClick={menu_toggle} >
               <span className="br_1"></span>
               <span className="br_2"></span>
               <span className="br_3"></span>
    </div>

    <ul className={`navbar_menu ${mobilemenu}` }>
    {Menu.map(([title, url]) => (<li key={title}><Link href={url} className="menu_list" >{title}</Link></li>))}
    <li><Link href='/' className='btn-trans'>Contact Us</Link></li>
    </ul>
</div>
</div>
</nav>
</header>

)}