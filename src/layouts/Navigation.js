import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navigation.css"

// NavLink potrzebuje żeby wskazać mu ścieżkę - to...

// const Navigation = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <NavLink to="/">Start</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="products">Prdukty</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="contats">Kontakt</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="admin">Panel admina</NavLink>
//                 </li>
//             </ul>
//         </nav >
//     );
// }

//DRUGI SPOSÓB

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contacts" },
    { name: "Panel admina", path: "/admin" },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav >
    );
}

export default Navigation; 