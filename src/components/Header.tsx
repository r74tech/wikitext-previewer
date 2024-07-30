import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMe, saveMeThunk, selectUser } from '@src/features/user/userSlice';
import { generateNanoid } from '@src/utils/nanoid';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [username, setUsername] = useState("Default");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await dispatch(fetchMe()).unwrap();
                if (!user) {
                    const newUser = { username: generateNanoid() };
                    await dispatch(saveMeThunk(newUser));
                    setUsername(newUser.username);
                } else {
                    setUsername(user.username);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [dispatch]);

    return (
        <div id="header">
            <h1><a href="/" className="active"><span>Wikitext Previewer</span></a></h1>
            <h2><span></span></h2>
            <div id="search-top-box" className="form-search">
                <form id="search-top-box-form" action="dummy" className="input-append">
                    <input id="search-top-box-input" className="text empty search-query" type="text" name="query" value="Search this site" />
                    <input className="button btn" type="submit" name="search" value="Search" />
                </form>
                <div style={{ width: '1px', height: '1px', position: 'absolute', pointerEvents: 'none', opacity: 0 }}></div>
            </div>
            <div id="top-bar"></div>
            <div id="login-status">
                <span className="wj-user-info printuser">
                    <a className="wj-user-info-link" href="javascript:;">
                        <span className="wj-karma" data-karma="5">
                            <svg className="wj-sprite sprite-wj-karma" viewBox="0 0 64 114">
                                <use href="/files--static/media/ui.svg#wj-karma"></use>
                            </svg>
                        </span>
                        <img className="wj-user-info-avatar small" src="/files--static/media/default-avatar.png" alt={username} />
                    </a>{username}</span>
                | <a id="my-account" href="javascript:;">My accounts</a> <a id="account-topbutton" href="javascript:;">▼</a>
                <div id="account-options" style={{ display: 'none' }}>
                    <ul>
                        <li><a href="https://www.wikidot.com/account/activity">Activity</a></li>
                        <li><a href="https://www.wikidot.com/account/messages">Messages</a></li>
                        <li><a href="https://www.wikidot.com/account/sites">Sites</a></li>
                        <li><a href="https://www.wikidot.com/account/settings">Settings</a></li>
                        <li><a href="https://www.wikidot.com/account/upgrade">Upgrade</a></li>
                        <li><a href="javascript:;">Sign out</a></li>
                    </ul>
                </div>
            </div>
            <div id="header-extra-div-1"><span></span></div>
            <div id="header-extra-div-2"><span></span></div>
            <div id="header-extra-div-3"><span></span></div>
        </div>
    );
};

export default Header;
