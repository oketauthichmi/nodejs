import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-telegram-plane"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">Contact</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">Write</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && 'Logout'}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg'
                        src="https://flightcharter.com.au/wp-content/uploads/2018/03/fun-icon.svg" alt="" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to="/login">Login</Link>
                            </li>
                            <li className='topListItem'>
                            <Link className='link' to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
