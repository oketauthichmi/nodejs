import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg"
                alt=""
            />
            
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="blog của bạn" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Submit</button>
            </form>
        </div>
    )
}
