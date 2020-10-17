import React from "react";
import '../Navbar/Navbar.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                    alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>)
};

export default Profile;
