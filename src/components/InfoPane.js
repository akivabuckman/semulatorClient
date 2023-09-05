import { useState, useEffect } from 'react';
import "./InfoPane.css"

const InfoPane = (props) => {

    // hide future rounds
    useEffect(()=>{
        const roundDivs = document.querySelectorAll(".roundDiv");
        console.log("rd", roundDivs);
        for (let i of roundDivs) {
            if (parseInt(i.getAttribute("round")) >= parseInt(props.round)) {
                i.style.display = "none"
            } else {
                i.style.display = "block"
            }
        }
    }, [props.round])
    return (
        <aside id="infoPaneDiv">
            <div id="round1Div" className='round1 roundDiv' round="1">
                <h3 className='round1 title'>Round 1 Results</h3>
                <p className="round1 lp">Landing Page: {props.userInputs["1"]["landingPage"]}</p>
                <p className="round1 kw">Keyword: {props.userInputs["1"]["keyword"]}</p>
                <p className="round1 mt">Match Type: {props.userInputs["1"]["matchType"]}</p>
                <p className="round1 h1">Headline 1: {props.userInputs["1"]["headline1"]}</p>
                <p className="round1 h2">Headline 2: {props.userInputs["1"]["headline2"]}</p>
                <p className="round1 h3">Headline 3: {props.userInputs["1"]["headline3"]}</p>
                <p className="round1 d1">Description 1: {props.userInputs["1"]["description1"]}</p>
                <p className="round1 d2">Description 2: {props.userInputs["1"]["description2"]}</p>
                <p className="round1">Max CPC Bid: {props.userInputs["1"]["maxCpcBid"]}</p>
                <p>Amount Spent: <span>$1,400</span></p>
                <p>Cost per Click: <span>{props.userInputs["1"]["finalCpc"]}</span></p>
                <p>Total Clicks: <span>{props.userInputs["1"]["totalClicks"]}</span></p>
                <p>Conversion Rate: <span>{props.userInputs["1"]["finalConversionRate"]}</span></p>
                <p>Cost per Conversion: <span>${props.userInputs["1"]["costPerConv"]}</span></p>
                <p><strong>Conversions: <span>{props.userInputs["1"]["conversions"]}</span></strong></p>
            </div>
            <div id="round2Div" className='round2 roundDiv' round="2">
                <h3 className='round2 title'>Round 2</h3>
                <p className="round2 lp">Landing Page: {props.userInputs["2"]["landingPage"]}</p>
                <p className="round2 kw">Keyword: {props.userInputs["2"]["keyword"]}</p>
                <p className="round2 mt">Match Type: {props.userInputs["2"]["matchType"]}</p>
                <p className="round2 h1">Headline 1: {props.userInputs["2"]["headline1"]}</p>
                <p className="round2 h2">Headline 2: {props.userInputs["2"]["headline2"]}</p>
                <p className="round2 h3">Headline 3: {props.userInputs["2"]["headline3"]}</p>
                <p className="round2 d1">Description 1: {props.userInputs["2"]["description1"]}</p>
                <p className="round2 d2">Description 2: {props.userInputs["2"]["description2"]}</p>
                <p className="round2">Max CPC Bid: {props.userInputs["2"]["maxCpcBid"]}</p>
            </div>
            <div id="round3Div" className='round3 roundDiv' round="3">
                <h3 className='round3 title'>Round 3</h3>
                <p className="round3 lp">Landing Page: {props.userInputs["3"]["landingPage"]}</p>
                <p className="round3 kw">Keyword: {props.userInputs["3"]["keyword"]}</p>
                <p className="round3 mt">Match Type: {props.userInputs["3"]["matchType"]}</p>
                <p className="round3 h1">Headline 1: {props.userInputs["3"]["headline1"]}</p>
                <p className="round3 h2">Headline 2: {props.userInputs["3"]["headline2"]}</p>
                <p className="round3 h3">Headline 3: {props.userInputs["3"]["headline3"]}</p>
                <p className="round3 d1">Description 1: {props.userInputs["3"]["description1"]}</p>
                <p className="round3 d2">Description 2: {props.userInputs["3"]["description2"]}</p>
                <p className="round3">Max CPC Bid: {props.userInputs["3"]["maxCpcBid"]}</p>
            </div>





            
        </aside>
    )
}

export default InfoPane