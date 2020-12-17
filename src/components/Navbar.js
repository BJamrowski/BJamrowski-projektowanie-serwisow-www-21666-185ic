import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
            <h1>
             {title}
            </h1>
            <ul>
                <li>
                <Link to='/widgets'>Kilknij tutaj!</Link>
                </li>
                <li>
                <Link to='/wudgets'>Tutaj jest fajniej!</Link>
                </li>
                <li>
                <Link to='/'>Home</Link>
                </li>
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'BJamrowski Lab7'
};

export default Navbar