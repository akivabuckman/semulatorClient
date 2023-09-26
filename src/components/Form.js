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


const Form = (props) => {
  // upon submit button click
    const postAndGetResults = async (e) => {
        e.preventDefault();
        document.querySelector("#keyword1Input").value = "";
        document.querySelector("#keyword2Input").value = "";
        document.querySelector("#keyword3Input").value = "";
        document.querySelector("#maxCpcBidInput").value = "";
        
        try {
          const data = JSON.stringify({
            landingPage: props.userInputs[props.round]["landingPage"],
            keyword1: props.userInputs[props.round]["keyword1"],
            matchType1: props.userInputs[props.round]["matchType1"],
            keyword2: props.userInputs[props.round]["keyword2"],
            matchType2: props.userInputs[props.round]["matchType2"],
            keyword3: props.userInputs[props.round]["keyword3"],
            matchType3: props.userInputs[props.round]["matchType3"],
            headline1: props.userInputs[props.round]["headline1"],
            headline2: props.userInputs[props.round]["headline2"],
            headline3: props.userInputs[props.round]["headline3"],
            description1: props.userInputs[props.round]["description1"],
            description2: props.userInputs[props.round]["description2"],
            maxCpcBid: props.userInputs[props.round]["maxCpcBid"]
          })
  
      // const res = await fetch(`${process.env.REACT_APP_BASE_URL}/sem/userSubmission`, {
        const res = await fetch("http://localhost:5000/sem/userSubmission", {

        method: "POST",
            headers: {"content-type": "application/json"},
            body: data,
          });
          const parsedData = await res.json();
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
      const lpOptionDivs = Array.from(document.querySelectorAll(".lpOptionDiv"));
      for (let i of lpOptionDivs) {
        if (i.getAttribute("value") === event.target.value) {
          const overlay = i.querySelector(".overlay")
          overlay.style.display = "block"
 
        } else {
          const overlay = i.querySelector(".overlay")
          overlay.style.display = "none"
        }
      }
    };

    const handleKeyword1 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["keyword1"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleMatchType1 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["matchType1"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleKeyword2 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["keyword2"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleMatchType2 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["matchType2"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleKeyword3 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["keyword3"] = event.target.value;
      props.setUserInputs(updatedUserInputs);
    };

    const handleMatchType3 = (event) => {
      const updatedUserInputs = { ...props.userInputs };
      updatedUserInputs[props.round]["matchType3"] = event.target.value;
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
      const totalSpend = 1;
      const conversions = 2;
      const costPerConv = isNaN(totalSpend / conversions) ? 0: (totalSpend / conversions) === Infinity ? 0 : (totalSpend / conversions).toFixed(2);
      console.log(costPerConv)
    }
    
    

    
    return (
        <>
        <FormControl id="form">
        {/* <button onClick={formLog}>form log</button> */}

    <div id="q1" className="question">
      <h1 id="roundTitle">Round {props.round}</h1>
      <h2>You are working for a client who helps beginners learn guitar over the internet. You have $100/day to spend on ads over the next 2 weeks, for a total of $1400.</h2>
      <p>Your goal: Get 35 ad leads (conversions) in one round</p>
      <NextButton question={1} requirements={[]}/>
    </div>

    <div id='q2' className='question'>
      <h3>Learn about landing pages</h3>
      <iframe width="90%"  height="500px" src="https://www.youtube.com/embed/G59uBAfcpSQ" title="Landing Pages" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <NextButton question={2} requirements={[]} />

    </div>

    <div id="q3" className='question'>
      <h3 >Choose your landing page</h3>
      <div id="photoContainer" >

        <RadioGroup style={{display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }} aria-label="image" name="landingPage" value={props.userInputs[props.round]["landingPage"]} onChange={handleLandingPage} required>
          <div className="lpOptionDiv" value="A">
            <FormControlLabel style={{marginRight: "0", marginLeft: "0" }} control={<Radio className="radio-button"/>} label={<img className="lpOption" src={google} alt="google" selected={false}/>} value="A" />
            <p>A</p>
            <div className="overlay" value="A"></div>
          </div>
          <div className="lpOptionDiv" value="B">
            <FormControlLabel style={{marginRight: "0", marginLeft: "0" }} control={<Radio />} label={<img className="lpOption" src={facebook} alt="google" selected={false}/>} value="B" />
            <p>B</p>
            <div className="overlay" value="B"></div>
          </div>
          <div className="lpOptionDiv" value="C">
            <FormControlLabel style={{marginRight: "0", marginLeft: "0" }} control={<Radio />} label={<img className="lpOption" src={instagram} alt="google" selected={false}/>} value="C" />
            <p>C</p>
            <div className="overlay" value="C"></div>
          </div>
          <div className="lpOptionDiv" value="D">
            <FormControlLabel style={{marginRight: "0", marginLeft: "0" }} control={<Radio />} label={<img className="lpOption" src={tiktok} alt="google" selected={false}/>} value="D" />
            <p>D</p>
            <div className="overlay" value="D"></div>
          </div>
          <div className="lpOptionDiv" value="E">
            <FormControlLabel style={{marginRight: "0", marginLeft: "0" }} control={<Radio />} label={<img className="lpOption" src={weather} alt="google" selected={false}/>} value="E" />
            <p>E</p>
            <div className="overlay" value="E"></div>
          </div>
        </RadioGroup>
      </div>
      <NextButton question={3} requirements={[props.userInputs[props.round]["landingPage"]]}/>

    </div>

    <div id="q4" className='question'>
      <h3>Enter keyword 1:</h3>
      <TextField id="keyword1Input" type="text" onChange={handleKeyword1} required />
      <h3>Choose your match type for keyword 1:</h3>
      <RadioGroup name="matchType1" value={props.userInputs[props.round]["matchType1"]} onChange={handleMatchType1}>
        <FormControlLabel value="Exact" control={<Radio />} label="Exact" />
        <FormControlLabel value="Phrase" control={<Radio />} label="Phrase" />
        <FormControlLabel value="Broad" control={<Radio />} label="Broad" />
      </RadioGroup>
      <NextButton question={4} requirements={[props.userInputs[props.round]["keyword1"], props.userInputs[props.round]["matchType1"]]}/>
      
    </div>

    <div id="q5" className='question'>
      <h3>Enter keyword 2:</h3>
      <TextField id="keyword2Input" type="text" onChange={handleKeyword2} required />

      <h3>Choose your match type for keyword 2:</h3>
      <RadioGroup name="matchType2" value={props.userInputs[props.round]["matchType2"]} onChange={handleMatchType2} >
        <FormControlLabel value="Exact" control={<Radio />} label="Exact" />
        <FormControlLabel value="Phrase" control={<Radio />} label="Phrase" />
        <FormControlLabel value="Broad" control={<Radio />} label="Broad" />
      </RadioGroup>
      <NextButton question={5} requirements={[props.userInputs[props.round]["keyword2"], props.userInputs[props.round]["matchType2"]]}/>

    </div>

    <div id="q6" className='question'>
      <h3>Enter keyword 3:</h3>
      <TextField id="keyword3Input" type="text" onChange={handleKeyword3} required/>
      <h3>Choose your match type for keyword 3:</h3>
      <RadioGroup name="matchType3" value={props.userInputs[props.round]["matchType3"]} onChange={handleMatchType3}>
        <FormControlLabel value="Exact" control={<Radio />} label="Exact" />
        <FormControlLabel value="Phrase" control={<Radio />} label="Phrase" />
        <FormControlLabel value="Broad" control={<Radio />} label="Broad" />
      </RadioGroup>
      <NextButton question={6} requirements={[props.userInputs[props.round]["keyword3"], props.userInputs[props.round]["matchType3"]]}/>

    </div>

    <div id="q7" className='question'>
      <h3>Choose Your Headlines</h3>
      <div>
        <FormControl>
        <label>
          Select first headline: <br/>
          <Select value={props.userInputs[props.round]["headline1"]} onChange={handleHeadline1} required className='selectDrop' >
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
      <NextButton question={7} requirements={[props.userInputs[props.round]["headline1"], props.userInputs[props.round]["headline2"], props.userInputs[props.round]["headline3"]]}/>

    </div>

    <div id="q8" className='question'>
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
      <NextButton question={8} requirements={[props.userInputs[props.round]["description1"], props.userInputs[props.round]["description2"]]}/>

    </div>

    <div id="q9" className='question'>
      <label htmlFor="maxCpcBid">Enter your max cost per click bid:</label>
      <p>$<TextField id="maxCpcBidInput" type="text" onChange={handleMaxCpcBid} required/></p>
      <div className='lastButtonDiv'>
        <NextButton question={9} requirements={[props.userInputs[props.round]["maxCpcBid"]]} postAndGetResults={postAndGetResults}/>
      <Button onClick={(e)=>{
        document.querySelector("#popups").style.display="flex"
        if (parseFloat(props.conversions) >= 35) {
            document.querySelector("#successPopup").style.display = "flex"
            document.querySelector("#failPopup").style.display = "none"

        } else {
            document.querySelector("#successPopup").style.display = "none"
            document.querySelector("#failPopup").style.display = "flex"
        };
        postAndGetResults(e)}}
        variant="contained" color="secondary" type="submit" disabled={!props.userInputs[props.round]["landingPage"] || !props.userInputs[props.round]["keyword1"] || !props.userInputs[props.round]["matchType1"] || !props.userInputs[props.round]["headline1"] ||!props.userInputs[props.round]["headline2"] || !props.userInputs[props.round]["headline3"] || !props.userInputs[props.round]["description1"] || !props.userInputs[props.round]["description2"] || !props.userInputs[props.round]["maxCpcBid"]}>Submit
        </Button>
      </div>
      <p>9 of 9</p>
      
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
                    document.querySelector(`#q3`).scrollIntoView({
                      behavior: "smooth", 
                      block: "start", 
                  });
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