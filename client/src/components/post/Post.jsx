import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./post.css"


export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
                <img
                    className="postImg"
                    src="https://kenh14cdn.com/2020/9/25/hinh-nen-iphone-11-1600990116056809485952.jpg"
                    alt=""
                />
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map(c=>{
                            <span className="postCat">{c.name}</span>
                        })
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr/>
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
