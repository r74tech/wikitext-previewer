import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPageThunk, selectPage } from '@src/features/pages/pagesSlice';
import MainContent from '@src/components/MainContent';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

const SharePage: React.FC = () => {
    const { shortId } = useParams<{ shortId: string }>();
    const dispatch = useDispatch();
    const page = useSelector(selectPage);

    useEffect(() => {
        if (shortId) {
            dispatch(
                fetchPageThunk({
                    shortId: shortId as string,
                })
            );
        }
    }, [dispatch, shortId]);

    return (
        <>
            <div id="container-wrap">
                <div id="container">
                <Header />
                { page?<MainContent /> : 'Loading...'}
                <Footer />
                </div>
            </div>
            <div id="extra-div-1"><span></span></div>
            <div id="extra-div-2"><span></span></div>
            <div id="extra-div-3"><span></span></div>
            <div id="extra-div-4"><span></span></div>
            <div id="extra-div-5"><span></span></div>
            <div id="extra-div-6"><span></span></div>  
        </>
    );
};

export default SharePage;
