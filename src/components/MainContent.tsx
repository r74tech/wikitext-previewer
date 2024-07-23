import React, { useEffect, useState } from 'react';
import EditForm from './EditForm';

import { getData } from '@src/api/index';

const MainContent: React.FC = () => {
    const [content] = useState('loading...');

    useEffect(() => {
        getData("mnfat7kghUk2XRwyqQLY8").then((data) => {
            console.log(data);
        });
    }, []);

    return (
        <div id="content-wrap">
            <div id="side-bar"></div>
            <div id="main-content">
                <div id="page-title"></div>
                <div id="page-content">{content}</div>
                <div id="page-info-break">
                    <div id="page-styles"></div>
                    <img className="wj-image" src="https://apiwd.scp-jp.org/endpoint" style={{ width: '1px', visibility: 'hidden', userSelect: 'none' }} alt="" />
                    <div id="page-info"></div>
                </div>
                <div id="action-area" style={{ display: 'block' }}>
                    <EditForm />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
