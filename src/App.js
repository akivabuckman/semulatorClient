import React from 'react';
import './App.css';
import JotformEmbed from 'react-jotform-embed'
import { useState, useEffect } from 'react';
import Jotform from './components/Jotform';
import InfoPane from './components/InfoPane';
import Form from './components/Form';
import dotenv from "dotenv"

function App() {
  const [adSpend, setAdSpend] = useState(null);
  const [landingPage, setLandingPage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [matchType, setMatchType] = useState("");
  const [headline1, setHeadline1] = useState("");
  const [headline2, setHeadline2] = useState("");
  const [headline3, setHeadline3] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [maxCpcBid, setMaxCpcBid] = useState(null);
  const [totalSpend, setTotalSpend] = useState(null);
  const [finalConversionRate, setFinalConversionRate] = useState(null);
  const [finalCpc, setFinalCpc] = useState(null);
  const [totalClicks, setTotalClicks] = useState(null);
  const [conversions, setConversions] = useState(null);
  const [costPerConv, setCostPerConv] = useState(null);
  const [round, setRound] = useState(1);
  const [userInputs, setUserInputs] = useState(
    {
      "1": {
        "landingPage": "",
        "keyword1": "",
        "matchType1": "",
        "keyword2": "",
        "matchType2": "",
        "keyword3": "",
        "matchType3": "",
        "headline1": "",
        "headline2": "",
        "headline3": "",
        "description1": "",
        "description2": "",
        "maxCpcBid": null,
        "totalSpend": null,
        "finalConversionRate": null,
        "finalCpc": null,
        "totalClicks": null,
        "conversions": null,
        "costPerConv": null
      },
      "2": {
        "landingPage": "",
        "keyword1": "",
        "matchType1": "",
        "keyword2": "",
        "matchType2": "",
        "keyword3": "",
        "matchType3": "",
        "headline1": "",
        "headline2": "",
        "headline3": "",
        "description1": "",
        "description2": "",
        "maxCpcBid": null,
        "totalSpend": null,
        "finalConversionRate": null,
        "finalCpc": null,
        "totalClicks": null,
        "conversions": null,
        "costPerConv": null
      },
      "3": {
        "landingPage": "",
        "keyword1": "",
        "matchType1": "",
        "keyword2": "",
        "matchType2": "",
        "keyword3": "",
        "matchType3": "",
        "headline1": "",
        "headline2": "",
        "headline3": "",
        "description1": "",
        "description2": "",
        "maxCpcBid": null,
        "totalSpend": null,
        "finalConversionRate": null,
        "finalCpc": null,
        "totalClicks": null,
        "conversions": null,
        "costPerConv": null
      },
    }
  )
  

  return (
    <div id="infoAndForm">
    <InfoPane 
    adSpend={adSpend}
    setAdSpend={setAdSpend}
    landingPage={landingPage}
    setLandingPage={setLandingPage}
    keyword={keyword}
    setKeyword={setKeyword}
    matchType={matchType}
    setMatchType={setMatchType}
    headline1={headline1}
    setHeadline1={setHeadline1}
    maxCpcBid={maxCpcBid}
    setMaxCpcBid={setMaxCpcBid}
    round={round}
    setRound={setRound}
    userInputs={userInputs}
    setUserInputs={setUserInputs}
    />
    
    <Form 
    adSpend={adSpend}
    setAdSpend={setAdSpend}
    landingPage={landingPage}
    setLandingPage={setLandingPage}
    keyword={keyword}
    setKeyword={setKeyword}
    matchType={matchType}
    setMatchType={setMatchType}
    headline1={headline1}
    setHeadline1={setHeadline1}
    headline2={headline2}
    setHeadline2={setHeadline2}
    headline3={headline3}
    setHeadline3={setHeadline3}
    description1={description1}
    setDescription1={setDescription1}
    description2={description2}
    setDescription2={setDescription2}
    maxCpcBid={maxCpcBid}
    setMaxCpcBid={setMaxCpcBid}
    totalSpend={totalSpend}
    setTotalSpend={setTotalSpend}
    finalConversionRate={finalConversionRate}
    setFinalConversionRate={setFinalConversionRate}
    finalCpc={finalCpc}
    setFinalCpc={setFinalCpc}
    totalClicks={totalClicks}
    setTotalClicks={setTotalClicks}
    conversions={conversions}
    setConversions={setConversions}
    costPerConv={costPerConv}
    setCostPerConv={setCostPerConv}
    round={round}
    setRound={setRound}
    userInputs={userInputs}
    setUserInputs={setUserInputs}

    
    
    />

    
    </div>
    
  );
}

export default App;




