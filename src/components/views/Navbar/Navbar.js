// import {FaReact} from 'react-icons/fa'
// import {BiSearch} from 'react-icons/bi'
// import { Link } from 'react-router-dom'
// import "../Navbar/Navbar.css"
// // import { useState } from 'react'

// export const Navbar = () => {

//     // const [isActive,setIsActive] = useState(false)
//   return (
//     <nav className='navbar-nav-container'>
//         <Link className='Navbar-logo'>
//             <FaReact className='logo'/>
//             <span>React</span>
//         </Link>
//         <ul className='navbar-list-container'>
//             <li>
//                 <Link to = "/" className='navbar-list-link'> Docs</Link>
//             </li>
//             <li>
//                 <Link to= "/tutorial" className='navbar-list-link'> Tutorial</Link>
//             </li>
//             <li>
//                 <Link to= "/blog" className='navbar-list-link'> Blog</Link>
//             </li>
//             <li>
//                 <Link to= "/community" className='navbar-list-link'> Community</Link>
//             </li>
//         </ul>
//         <span className='navbar-search'>
//             <BiSearch className='logo'/>
//             <input type="search" placeholder = "Search"/>
//         </span>
//     </nav>
//   )
// }


import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";


export const Navbar = () => {
  const NavbarData = [
    { link: "/", title: "Doc" },
    { link: "/tutorial", title: "Tutorial" },
    { link: "/blog", title: "Blog" },
    { link: "/community", title: "community" },
  ];

  const [isActive, setIsActive] = useState(0);

  const toggle = (i) => {
    setIsActive(i);
  };

  return (
    <div className="navbar-nav-container">
      <Link className="Navbar-logo">
        <FaReact className="logo" />
        <span>React</span>
      </Link>
      <nav className="navbar-link-container">
        {NavbarData.map((item, i) => (
          <div className={isActive === i ? "selected-navbar-link" : "unselected-navbar-link"}>
            <Link
              onClick={() => toggle(i)}
              className={isActive === i ? "selected-link" : "unselected-link"}
              to={item.link}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
      <span className="navbar-search">
        <BiSearch className="logo" />
        <input type="search" placeholder="Search" />
      </span>
    </div>
  );
};