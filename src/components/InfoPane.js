import { useState, useEffect } from 'react';

const InfoPane = (props) => {

    // hide future rounds
    useEffect(()=>{
        const roundDivs = document.querySelectorAll(".roundDiv");
        for (let i of roundDivs) {
            if (parseInt(i.getAttribute("round")) > parseInt(props.round)) {
                i.style.display = "none"
            } else {
                i.style.display = "block"
            }
        };
        const resultsDivs = document.querySelectorAll(".resultsDiv");
        for (let i of resultsDivs) {
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
                <div id="round1Inputs" className="round1 inputDiv" round="1">
                    <h2>Round 1</h2>
                    <h3 className='round1'>Your Choices</h3>
                    <p className="round1 lp">Landing Page: <strong>{props.userInputs["1"]["landingPage"] ? props.userInputs["1"]["landingPage"] : "******"}</strong></p>
                    <p className="round1 kw">Keyword 1: <strong>{props.userInputs["1"]["keyword1"] ? props.userInputs["1"]["keyword1"] : "******"}</strong></p>
                    <p className="round1 mt">Match Type 1: <strong>{props.userInputs["1"]["matchType1"] ? props.userInputs["1"]["matchType1"] : "******"}</strong></p>
                    <p className="round1 kw">Keyword 2: <strong>{props.userInputs["1"]["keyword2"] ? props.userInputs["1"]["keyword2"] : "******"}</strong></p>
                    <p className="round1 mt">Match Type 2: <strong>{props.userInputs["1"]["matchType2"] ? props.userInputs["1"]["matchType2"] : "******"}</strong></p>
                    <p className="round1 kw">Keyword 3: <strong>{props.userInputs["1"]["keyword3"] ? props.userInputs["1"]["keyword3"] : "******"}</strong></p>
                    <p className="round1 mt">Match Type 3: <strong>{props.userInputs["1"]["matchType3"] ? props.userInputs["1"]["matchType3"] : "******"}</strong></p>
                    <p className="round1 kw">Headline 1: <strong>{props.userInputs["1"]["headline1"] ? props.userInputs["1"]["headline1"] : "******"}</strong></p>
                    <p className="round1 kw">Headline 2: <strong>{props.userInputs["1"]["headline2"] ? props.userInputs["1"]["headline2"] : "******"}</strong></p>
                    <p className="round1 kw">Headline 3: <strong>{props.userInputs["1"]["headline3"] ? props.userInputs["1"]["headline3"] : "******"}</strong></p>
                    <p className="round1 kw">Description 1: <strong>{props.userInputs["1"]["description1"] ? props.userInputs["1"]["description1"] : "******"}</strong></p>
                    <p className="round1 kw">Description 2: <strong>{props.userInputs["1"]["description2"] ? props.userInputs["1"]["description2"] : "******"}</strong></p>
                    <p className="round1 kw">Max CPC Bid: <strong>{props.userInputs["1"]["maxCpcBid"] ? props.userInputs["1"]["maxCpcBid"] : "******"}</strong></p>
                </div>
                <div id="round1Results" className="round1 resultsDiv" round="1">
                    <h3 className='round1'>Results</h3>
                    <p>Amount Spent: <strong>${props.userInputs["1"]["totalSpend"]}</strong></p>
                    <p>Cost per Click: <strong>{props.userInputs["1"]["finalCpc"]}</strong></p>
                    <p>Total Clicks: <strong>{props.userInputs["1"]["totalClicks"]}</strong></p>
                    <p>Conversion Rate: <strong>{props.userInputs["1"]["finalConversionRate"]}</strong></p>
                    <p>Cost per Conversion: <strong>${props.userInputs["1"]["costPerConv"]}</strong></p>
                    <p><strong>Conversions: <span>{props.userInputs["1"]["conversions"]}</span></strong></p>
                </div>
            </div>
            <div id="round2Div" className='round2 roundDiv' round="2">
                <div id="round2Inputs" className="round2 inputDiv" round="2">
                    <h2>Round 2</h2>
                    <h3 className='round2'>Your Choices</h3>
                    <p className="round2 lp">Landing Page: <strong>{props.userInputs["2"]["landingPage"] ? props.userInputs["2"]["landingPage"] : "******"}</strong></p>
                    <p className="round2 kw">Keyword 1: <strong>{props.userInputs["2"]["keyword1"] ? props.userInputs["2"]["keyword1"] : "******"}</strong></p>
                    <p className="round2 mt">Match Type 1: <strong>{props.userInputs["2"]["matchType1"] ? props.userInputs["2"]["matchType1"] : "******"}</strong></p>
                    <p className="round2 kw">Keyword 2: <strong>{props.userInputs["2"]["keyword2"] ? props.userInputs["2"]["keyword2"] : "******"}</strong></p>
                    <p className="round2 mt">Match Type 2: <strong>{props.userInputs["2"]["matchType2"] ? props.userInputs["2"]["matchType2"] : "******"}</strong></p>
                    <p className="round2 kw">Keyword 3: <strong>{props.userInputs["2"]["keyword3"] ? props.userInputs["2"]["keyword3"] : "******"}</strong></p>
                    <p className="round2 mt">Match Type 3: <strong>{props.userInputs["2"]["matchType3"] ? props.userInputs["2"]["matchType3"] : "******"}</strong></p>
                    <p className="round2 kw">Headline 1: <strong>{props.userInputs["2"]["headline1"] ? props.userInputs["2"]["headline1"] : "******"}</strong></p>
                    <p className="round2 kw">Headline 2: <strong>{props.userInputs["2"]["headline2"] ? props.userInputs["2"]["headline2"] : "******"}</strong></p>
                    <p className="round2 kw">Headline 3: <strong>{props.userInputs["2"]["headline3"] ? props.userInputs["2"]["headline3"] : "******"}</strong></p>
                    <p className="round2 kw">Description 1: <strong>{props.userInputs["2"]["description1"] ? props.userInputs["2"]["description1"] : "******"}</strong></p>
                    <p className="round2 kw">Description 2: <strong>{props.userInputs["2"]["description2"] ? props.userInputs["2"]["description2"] : "******"}</strong></p>
                    <p className="round2 kw">Max CPC Bid: <strong>{props.userInputs["2"]["maxCpcBid"] ? props.userInputs["2"]["maxCpcBid"] : "******"}</strong></p>
                </div>
                <div id="round2Results" className="round2 resultsDiv" round="2">
                    <h3 className='round2'>Results</h3>
                    <p>Amount Spent: <strong>${props.userInputs["2"]["totalSpend"]}</strong></p>
                    <p>Cost per Click: <strong>{props.userInputs["2"]["finalCpc"]}</strong></p>
                    <p>Total Clicks: <strong>{props.userInputs["2"]["totalClicks"]}</strong></p>
                    <p>Conversion Rate: <strong>{props.userInputs["2"]["finalConversionRate"]}</strong></p>
                    <p>Cost per Conversion: <strong>${props.userInputs["2"]["costPerConv"]}</strong></p>
                    <p><strong>Conversions: <span>{props.userInputs["2"]["conversions"]}</span></strong></p>
                </div>
                <div id="round3Div" className='round3 round3Div' round="3">
                    <div id="round3Inputs" className="round3 input3Div" round="3">
                        <h2>Round </h2>
                        <h3 className='round'>Your Choices</h3>
                        <p className="round lp">Landing Page: <strong>{props.userInputs["3"]["landingPage"] ? props.userInputs["3"]["landingPage"] : "******"}</strong></p>
                        <p className="round kw">Keyword 1: <strong>{props.userInputs["3"]["keyword1"] ? props.userInputs["3"]["keyword1"] : "******"}</strong></p>
                        <p className="round mt">Match Type 1: <strong>{props.userInputs["3"]["matchType1"] ? props.userInputs["3"]["matchType1"] : "******"}</strong></p>
                        <p className="round kw">Keyword 2: <strong>{props.userInputs["3"]["keyword2"] ? props.userInputs["3"]["keyword2"] : "******"}</strong></p>
                        <p className="round mt">Match Type 2: <strong>{props.userInputs["3"]["matchType2"] ? props.userInputs["3"]["matchType2"] : "******"}</strong></p>
                        <p className="round kw">Keyword 3: <strong>{props.userInputs["3"]["keyword3"] ? props.userInputs["3"]["keyword3"] : "******"}</strong></p>
                        <p className="round mt">Match Type 3: <strong>{props.userInputs["3"]["matchType3"] ? props.userInputs["3"]["matchType3"] : "******"}</strong></p>
                        <p className="round kw">Headline 1: <strong>{props.userInputs["3"]["headline1"] ? props.userInputs["3"]["headline1"] : "******"}</strong></p>
                        <p className="round kw">Headline 2: <strong>{props.userInputs["3"]["headline2"] ? props.userInputs["3"]["headline2"] : "******"}</strong></p>
                        <p className="round kw">Headline 3: <strong>{props.userInputs["3"]["headline3"] ? props.userInputs["3"]["headline3"] : "******"}</strong></p>
                        <p className="round kw">Description 1: <strong>{props.userInputs["3"]["description1"] ? props.userInputs["3"]["description1"] : "******"}</strong></p>
                        <p className="round kw">Description 2: <strong>{props.userInputs["3"]["description2"] ? props.userInputs["3"]["description2"] : "******"}</strong></p>
                        <p className="round kw">Max CPC Bid: <strong>{props.userInputs["3"]["maxCpcBid"] ? props.userInputs["3"]["maxCpcBid"] : "******"}</strong></p>
                    </div>
                    <div id="round3Results" className="round3 resultsDiv" round="3">
                        <h3 className='round3'>Results</h3>
                        <p>Amount Spent: <strong>${props.userInputs["3"]["totalSpend"]}</strong></p>
                        <p>Cost per Click: <strong>{props.userInputs["3"]["finalCpc"]}</strong></p>
                        <p>Total Clicks: <strong>{props.userInputs["3"]["totalClicks"]}</strong></p>
                        <p>Conversion Rate: <strong>{props.userInputs["3"]["finalConversionRate"]}</strong></p>
                        <p>Cost per Conversion: <strong>${props.userInputs["3"]["costPerConv"]}</strong></p>
                        <p><strong>Conversions: <span>{props.userInputs["3"]["conversions"]}</span></strong></p>
                    </div>
                </div>


            </div>





            
        </aside>
    )
}

export default InfoPane