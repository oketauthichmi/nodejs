
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./singlepost.css"

export default function SinglePost() {
    const localtion = useLocation()
    const path = localtion.pathname.split("/")[2]
    const [post, setPost] = useState({})
    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/post/" + path)
            setPost(res.data)
        }
        getPost()
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} 
                    alt=""
                    className="singlePostImg"
                    />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Tác giả:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
