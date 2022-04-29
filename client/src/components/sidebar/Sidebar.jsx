import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([])
    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/category")
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img height="500" src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/hinh-nen-dien-thoai-dep-moi-nhat-19.jpg?fit=700%2C20000&quality=95&ssl=1" alt=""></img>
                <p>
                    Hello my friend
                    Today, i want to learn expensive python program
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Category</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-telegram-plane"></i>
                </div>
            </div>
        </div>
    )
}
