import { useState, useEffect } from 'react';

const InfoPane = (props) => {

    useEffect(()=>{
    }, [props.adSpend])
    return (
        <aside id="infopaneDiv">
            <p>Ad Spend: {props.adSpend}</p>
            <p>Landing Page: {props.landingPage}</p>
            <p>Keyword: {props.keyword}</p>
            <p>Match Type: {props.matchType}</p>
            <p>Headline 1: {props.headline1}</p>
        </aside>
    )
}

export default InfoPane