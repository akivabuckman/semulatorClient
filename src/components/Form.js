import React from 'react';
import { useState, useEffect } from 'react';
import "./Form.css";
import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText, TextField, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";
const options = require('../options.json');


const Form = (props) => {
  // upon submit button click
    const postAndGetResults = async (e) => {
        e.preventDefault();
        document.querySelector("#keywordInput").value = "";
        document.querySelector("#maxCpcBidInput").value = "";
        
        try {
          const data = JSON.stringify({
            adSpend: 1400,
            landingPage: props.userInputs[props.round]["landingPage"],
            keyword: props.userInputs[props.round]["keyword"],
            matchType: props.userInputs[props.round]["matchType"],
            headline1: props.userInputs[props.round]["headline1"],
            headline2: props.userInputs[props.round]["headline2"],
            headline3: props.userInputs[props.round]["headline3"],
            description1: props.userInputs[props.round]["description1"],
            description2: props.userInputs[props.round]["description2"],
            maxCpcBid: props.userInputs[props.round]["maxCpcBid"]
          })
          console.log(data)
  
      // const res = await fetch(`${process.env.REACT_APP_BASE_URL}/sem/userSubmission`, {
        const res = await fetch("http://localhost:5000/sem/userSubmission", {

        method: "POST",
            headers: {"content-type": "application/json"},
            body: data,
          });
          const parsedData = await res.json();
          console.log(parsedData)
          props.setTotalSpend(parsedData["totalSpend"]);
          props.setFinalConversionRate(parsedData["finalConversionRate"]);
          props.setFinalCpc(parsedData["finalCpc"]);
          props.setTotalClicks(parsedData["totalClicks"]);
          props.setConversions(parsedData["conversions"]);
          props.setCostPerConv(parsedData["costPerConv"]);
          const updatedUserInputs = { ...props.userInputs };
          updatedUserInputs[props.round]["totalSpend"] = parsedData["totalSpend"];
          updatedUserInputs[props.round]["finalConversionRate"] = parsedData["finalConversionRate"];
          updatedUserInputs[props.round]["finalCpc"] = parsedData["finalCpc"];
          updatedUserInputs[props.round]["totalClicks"] = parsedData["totalClicks"];
          updatedUserInputs[props.round]["conversions"] = parsedData["conversions"];
          updatedUserInputs[props.round]["costPerConv"] = parsedData["costPerConv"];
          props.setUserInputs(updatedUserInputs);
        } catch (error) {
          console.log(error)
        };

    };

    // handle inputs

    const handleLandingPage = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["landingPage"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleKeyword = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["keyword"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleMatchType = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["matchType"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleHeadline1 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["headline1"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleHeadline2 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["headline2"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleHeadline3 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["headline3"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleDescription1 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["description1"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleDescription2 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["description2"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleMaxCpcBid = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["maxCpcBid"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const formLog = async () => {
        console.log(props.userInputs)
      }

    
    return (
        <>
        <FormControl id="form">
        <button onClick={formLog}>form log</button>

    <div id="intro" className="question">
      <h1 id="roundTitle">Round {props.round}</h1>
      <h2>You are working for a client who helps beginners learn guitar over the internet. You have $100/day to spend on ads over the next 2 weeks, for a total of $1400.</h2>
      <p>Your goal: Get 35 ad leads (conversions) in one round</p>
    </div>

    <div id='q2' className='question'>
      <h3>Learn about landing pages</h3>
      <iframe width="650" height="350" src="https://www.youtube.com/embed/G59uBAfcpSQ" title="Landing Pages" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>

    <div className='question'>
      <h3 htmlFor="landingPage">Choose your landing page</h3>
      <RadioGroup name="landingPage" value={props.userInputs[props.round]["landingPage"]} onChange={handleLandingPage} required>
        {options.guitarLessons.landingPage.map((lp, key) => (
        <FormControlLabel
          key={key}
          value={lp}
          control={<Radio />}
          label={lp}
        />
      ))}
      </RadioGroup>
    </div>

    <div className='question'>
      <h3>Enter your keyword below</h3>
      <TextField id="keywordInput" type="text" onChange={handleKeyword} required />
    </div>

    <div className='question'>
      <h3>Choose your match type:</h3>
      <RadioGroup name="matchType" value={props.userInputs[props.round]["matchType"]} onChange={handleMatchType}>
        <FormControlLabel value="Exact" control={<Radio />} label="Exact" />
        <FormControlLabel value="Phrase" control={<Radio />} label="Phrase" />
        <FormControlLabel value="Broad" control={<Radio />} label="Broad" />
      </RadioGroup>
    </div>

    <div className='question'>
      <h3>Choose Your Headlines</h3>
      <div>
        <FormControl>
        <label>
          Select first headline: <br/>
          <Select value={props.userInputs[props.round]["headline1"]} onChange={handleHeadline1} required className='selectDrop'>
            {Object.keys(options.guitarLessons.headlines).map((headline, key) => (
                <MenuItem
                value={headline}
                key={key}
                >{headline}</MenuItem>
            ))}
          </Select>
        </label>
        </FormControl>
        <br/><br/>

        <FormControl>
            
            <label>
          Select second headline: <br/>
          <Select value={props.userInputs[props.round]["headline2"]} onChange={handleHeadline2} required className='selectDrop'>
          {Object.keys(options.guitarLessons.headlines).map((headline, key) => (
                <MenuItem
                value={headline}
                key={key}
                >{headline}</MenuItem>
            ))}
        </Select>
        </label>
        </FormControl>
        <br/><br/>
        <FormControl>
            <label>
          Select third headline: <br/>
          <Select value={props.userInputs[props.round]["headline3"]} onChange={handleHeadline3} required className='selectDrop'>
          {Object.keys(options.guitarLessons.headlines).map((headline, key) => (
                <MenuItem
                value={headline}
                key={key}
                >{headline}</MenuItem>
            ))}
        </Select>
        </label>
        </FormControl>
      </div>
    </div>

    <div className='question'>
      <h3>Choose Your Descriptions</h3>
      <div>
        <FormControl>
        <label>
          Select first description: <br/>
          <Select value={props.userInputs[props.round]["description1"]} onChange={handleDescription1} required className='selectDrop'>
          {Object.keys(options.guitarLessons.descriptions).map((description, key) => (
                <MenuItem
                value={description}
                key={key}
                >{description}</MenuItem>
            ))} 
        </Select>
        </label>
        </FormControl>
        <br/><br/>
        <FormControl>
        <label>
          Select second description: <br/>
          <Select value={props.userInputs[props.round]["description2"]} onChange={handleDescription2} required className='selectDrop'>
          {Object.keys(options.guitarLessons.descriptions).map((description, key) => (
                <MenuItem
                value={description}
                key={key}
                >{description}</MenuItem>
            ))} 
          </Select>
        </label>
        </FormControl>
      </div>
    </div>

    <div className='question'>
      <label htmlFor="maxCpcBid">Enter your max cost per click bid:</label>
      <p>$<TextField id="maxCpcBidInput" type="text" onChange={handleMaxCpcBid} required /></p>
    </div>

    <div>
      <Button onClick={(e)=>{
        document.querySelector("#popups").style.display="flex"
        console.log(props.conversions)
        if (parseFloat(props.conversions) >= 35) {
            document.querySelector("#successPopup").style.display = "flex"
            document.querySelector("#failPopup").style.display = "none"

        } else {
            document.querySelector("#successPopup").style.display = "none"
            document.querySelector("#failPopup").style.display = "flex"
        };
        postAndGetResults(e)}}
        variant="contained" color="primary" type="submit" disabled={!props.userInputs[props.round]["landingPage"] || !props.userInputs[props.round]["keyword"] || !props.userInputs[props.round]["matchType"] || !props.userInputs[props.round]["headline1"] ||!props.userInputs[props.round]["headline2"] || !props.userInputs[props.round]["headline3"] || !props.userInputs[props.round]["description1"] || !props.userInputs[props.round]["description2"] || !props.userInputs[props.round]["maxCpcBid"]}>Submit</Button>
    </div>
  </FormControl>

      <div id="popups">
        <div id="failPopup" className="popupDiv">
            <h3>Nice Try!</h3>
            <p>Here are your results for round 1. You generated {props.conversions} leads, which fell short of your goal of 35.</p>
            <p>But that's ok! This is a normal part of the optimization process that all digital marketers encounter, and you still have Z more rounds to reach your goal.</p>
            <p>Here are your next steps:</p>
            <ul>
                <li>Review the results below. Anything metric highlighted in yellow or red are in need of improvement.</li>
                <li>Check out these tips, which will guide you on how to make those improvements</li>
                <li>Try again in the next round!</li>
            </ul>
            <p>Amount Spent: <span>$1,400</span></p>
            <p>Cost per Click: <span>{props.finalCpc}</span></p>
            <p>Total Clicks: <span>{props.totalClicks}</span></p>
            <p>Conversion Rate: <span>{props.finalConversionRate}</span></p>
            <p>Cost per Conversion: <span>${props.costPerConv}</span></p>
            <p><strong>Conversions: <span>{props.conversions}</span></strong></p>
            {
                props.round !== 3 ? 
                <button id="closePopupButtonInfo" onClick={()=>{
                    document.querySelector("#popups").style.display="none";
                    props.setRound(props.round + 1);
                }}>Next Round</button>
            :
                <button id="closePopupButtonInfo" onClick={()=>{
                    document.querySelector("#popups").style.display="none";
                }}>Finish</button>
            }

        </div>
        <div id="successPopup" className="popupDiv">
            <p>Congratulations! Your goal was to generate at least 35 leads, and you generated {props.conversions}!</p>
            <p>Very impressive!</p>
            {
                props.round !== 3 ? 
                <button id="closePopupButtonInfo" onClick={()=>{
                    document.querySelector("#popups").style.display="none";
                    props.setRound(props.round + 1);
                }}>Next Round</button>
            :
                <button id="closePopupButtonInfo" onClick={()=>{
                    document.querySelector("#popups").style.display="none";
                }}>Finish</button>
            }
        </div>
      </div>
      </>
    )
}

export default Form