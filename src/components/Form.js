import React from 'react';
import { useState, useEffect } from 'react';
import "./Form.css";
import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText, TextField, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";




const Form = (props) => {
    const postAndGetResults = async (e) => {
        e.preventDefault();
        try {
          const data = JSON.stringify({
            adSpend: props.adSpend,
            landingPage: props.landingPage,
            keyword: props.keyword,
            matchType: props.matchType,
            headline1: props.headline1,
            headline2: props.headline2,
            headline3: props.headline3,
            description1: props.description1,
            description2: props.description2,
            maxCpcBid: props.maxCpcBid
          })
  
    //   const res = await fetch(`${process.env.REACT_APP_BASE_URL}/sem/userSubmission`, {
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
        } catch (error) {
          console.log(error)
        };

    };

    const closePopup = (e) => {
        console.log(e.target);
        document.querySelector("#popups").style.display = "none";
    }

    // handle inputs

    const handleLandingPage = (event) => {
        props.setLandingPage(event.target.value)
    };

    const handleKeyword = (event) => {
        props.setKeyword(event.target.value)
    };

    const handleMatchType = (event) => {
        props.setMatchType(event.target.value)
    };

    const handleHeadline1 = (event) => {
        props.setHeadline1(event.target.value)
    };

    const handleHeadline2 = (event) => {
        props.setHeadline2(event.target.value)
    };

    const handleHeadline3 = (event) => {
        props.setHeadline3(event.target.value)
    };

    const handleDescription1 = (event) => {
        props.setDescription1(event.target.value)
    };

    const handleDescription2 = (event) => {
        props.setDescription2(event.target.value)
    };

    const handleMaxCpcBid = (event) => {
        props.setMaxCpcBid(event.target.value)
    };

    const formLog = () =>{
        console.log(props.round)
    }

    
    return (
        <>
        <button onClick={formLog}>form log</button>
        <FormControl id="form">
    <div id="intro" className="question">
      <h1>Semulator</h1>
      <h2>You are working for a client who helps beginners learn guitar over the internet. You have $100/day to spend on ads over the next 2 weeks, for a total of $1400.</h2>
      <p>Your goal: Get 35 ad leads (conversions) in one round</p>
    </div>

    <div id='q2' className='question'>
      <h3>Learn about landing pages</h3>
      <iframe width="650" height="350" src="https://www.youtube.com/embed/G59uBAfcpSQ" title="Landing Pages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div className='question'>
      <h3 htmlFor="landingPage">Choose your landing page</h3>
      <RadioGroup name="landingPage" value={props.landingPage} onChange={handleLandingPage} required>
        <FormControlLabel value="https://mailchi.mp/a1b44f8539f5/ogl1" control={<Radio />} label="https://mailchi.mp/a1b44f8539f5/ogl1" />
        <FormControlLabel value="https://mailchi.mp/c75056f9e68d/0vbdv2gzpf" control={<Radio />} label="https://mailchi.mp/c75056f9e68d/0vbdv2gzpf" />
        <FormControlLabel value="https://mailchi.mp/6172a273b63f/ucu54u0ssn" control={<Radio />} label="https://mailchi.mp/6172a273b63f/ucu54u0ssn" />
        <FormControlLabel value="https://mailchi.mp/a6be4fdef0a7/99xf1ssoix" control={<Radio />} label="https://mailchi.mp/a6be4fdef0a7/99xf1ssoix" />
        <FormControlLabel value="https://mailchi.mp/641a0d8d206f/hj2x6skckh" control={<Radio />} label="https://mailchi.mp/641a0d8d206f/hj2x6skckh" />
      </RadioGroup>
    </div>

    <div className='question'>
      <h3>Enter your keyword below</h3>
      <TextField type="text" onChange={handleKeyword} required />
    </div>

    <div className='question'>
      <h3>Choose your match type</h3>
      <RadioGroup name="matchType" value={props.matchType} onChange={handleMatchType}>
        <FormControlLabel value="Exact" control={<Radio />} label="Exact" />
        <FormControlLabel value="Phrase" control={<Radio />} label="Phrase" />
        <FormControlLabel value="Broad" control={<Radio />} label="Broad" />
      </RadioGroup>
    </div>

    <div className='question'>
      <h3>Choose Your Headlines</h3>
      <div>
      <label>
          Select first headline:
          <Select value={props.headline1} onChange={handleHeadline1} required>
            <MenuItem value="Headline a">Headline a</MenuItem>
            <MenuItem value="Dynamic Headline">Dynamic Headline</MenuItem>
            <MenuItem value="Easy, Step-By-Step Lessons">Easy, Step-By-Step Lessons</MenuItem>
          </Select>
        </label>
        <label>
          Select second headline:
          <Select value={props.headline2} onChange={handleHeadline2} required>
            <MenuItem value="Headline a">Headline a</MenuItem>
            <MenuItem value="Dynamic Headline">Dynamic Headline</MenuItem>
            <MenuItem value="Easy, Step-By-Step Lessons">Easy, Step-By-Step Lessons</MenuItem>
          </Select>
        </label>
        <label>
          Select third headline:
          <Select value={props.headline3} onChange={handleHeadline3} required>
            <MenuItem value="Headline a">Headline a</MenuItem>
            <MenuItem value="Dynamic Headline">Dynamic Headline</MenuItem>
            <MenuItem value="Easy, Step-By-Step Lessons">Easy, Step-By-Step Lessons</MenuItem>
          </Select>
        </label>
      </div>
    </div>

    <div className='question'>
      <h3>Choose Your Descriptions</h3>
      <div>
        <label>
          Select first description:
          <Select value={props.description1} onChange={handleDescription1} required>
            <MenuItem value="des a">des a</MenuItem>
            <MenuItem value="des b">des b</MenuItem>
            <MenuItem value="Our expert instructors will teach you everything you need to know to play like a pro">Our expert instructors will teach you everything you need to know to play like a pro</MenuItem>
          </Select>
        </label>
        <label>
          Select second description:
          <Select value={props.description2} onChange={handleDescription2} required>
            <MenuItem value="des a">des a</MenuItem>
            <MenuItem value="des b">des b</MenuItem>
            <MenuItem value="Our expert instructors will teach you everything you need to know to play like a pro">Our expert instructors will teach you everything you need to know to play like a pro</MenuItem>
          </Select>
        </label>
      </div>
    </div>

    <div className='question'>
      <label htmlFor="maxCpcBid">Enter your max cost per click bid:</label>
      <TextField id="maxCpcBidInput" type="text" onChange={handleMaxCpcBid} required />
    </div>

    <div>
      <Button onClick={(e)=>{
        document.querySelector("#popups").style.display="flex"
        console.log(props.conversions)
        if (parseFloat(props.conversions) >= 0) {
            document.querySelector("#successPopup").style.display = "flex"
            document.querySelector("#failPopup").style.display = "none"

        } else {
            document.querySelector("#successPopup").style.display = "none"
            document.querySelector("#failPopup").style.display = "flex"
        };
        postAndGetResults(e)}}
        variant="contained" color="primary" type="submit" disabled={!props.landingPage || !props.keyword || !props.matchType || !props.headline1 || !props.description1 || !props.maxCpcBid}>Submit</Button>
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
            <button id="closePopupButtonInfo" onClick={()=>{
                    document.querySelector("#popups").style.display="none"
                }}>OK</button>

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