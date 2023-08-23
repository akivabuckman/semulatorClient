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
  
  console.log(process.env.REACT_APP_BASE_URL)

  return (
    <>
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
    
    
    />

    
    </>
    
  );
}

export default App;




