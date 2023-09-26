import InfoPane from './InfoPane';
import Form from './Form';
import React from 'react';
import { useState, useEffect } from 'react';
import "./Form.css";
import FormControl from '@mui/material/FormControl';
import NextButton from "./NextButton"
import google from "../images/google.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import tiktok from "../images/tiktok.png"
import weather from "../images/weather.png"
import { InputLabel, Input, FormHelperText, TextField, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";
const options = require('../options.json');


const InfoAndForm = (props) => {
    const [token, setToken] = useState(null);
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
    return(
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
    )
    }

export default InfoAndForm