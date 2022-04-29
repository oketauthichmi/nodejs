import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update your account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete account
                    </span>
                </div>
                <form action="" className="settingsForm">
                        <label>Profile picture</label>
                        <div className="settingsPP">
                            <img
                                src="https://www.anphatpc.com.vn/media/news/1410_z2125088170490_2507e5a8d5e8afecb2b1cd7d4d7391aa.jpg"
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fas fa-user-circle"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}></input>
                        </div>
                        <label>UserName</label>
                        <input type="text" placeholder="Username"></input>
                        <label>Email</label>
                        <input type="text" placeholder="UserName@gmail.com"></input>
                        <label>Password</label>
                        <input type="password" placeholder="password"></input>
                        <button className="settingsSubmit">Update</button>
                    </form>
            </div>
            <Sidebar/>
        </div>
    )
}
