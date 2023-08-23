import React from 'react';
import { useState, useEffect } from 'react';
import "./Form.css"


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
  
          console.log("data", process.env.REACT_APP_BASE_URL);

          const res = await fetch(`${process.env.REACT_APP_BASE_URL}/sem/userSubmission`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: data,
          });
          const parsedData = await res.json();
          console.log(parsedData)
          props.setTotalSpend(parsedData["totalSpend"]);
          console.log(parsedData)
          props.setFinalConversionRate(parsedData["finalConversionRate"])
        } catch (error) {
          console.log(error)
        }
    };

    // handle inputs
    const handleAdSpend = (event) => {
        props.setAdSpend(event.target.value)
    };

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
    
    return (
        <form id="form">
            <div id="intro">
                <h1>Semulator</h1>
                <h2>You are working for a client who helps beginners learn guitar over the internet. You have $100/day to spend on ads over the next 2 weeks, for a total of $1400.</h2>
                <p>Your goal: Get 35 ad leads (conversions) in one round</p>
            </div>
            <div id="q1" className='question'>
                <label for="adSpend">Enter your daily ad spend:</label>
                <input id="adSpendInput" type="text" onInput={handleAdSpend}required></input>
            </div>
            <div id='q2' className='question'>
                <h3>Learn about landing pages</h3>
                <iframe width="650" height="350" src="https://www.youtube.com/embed/G59uBAfcpSQ" title="Landing Pages" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='question'>
                <h3>Choose your landing page</h3>
                <label>
                <input type="radio" name="option" onInput={handleLandingPage} value="https://mailchi.mp/a1b44f8539f5/ogl1" />
                    https://mailchi.mp/a1b44f8539f5/ogl1
                </label>
                <br />
                <label>
                    <input type="radio" name="option" onInput={handleLandingPage} value="https://mailchi.mp/c75056f9e68d/0vbdv2gzpf" />
                    https://mailchi.mp/c75056f9e68d/0vbdv2gzpf
                </label>
                <br />
                <label>
                    <input type="radio" name="option" onInput={handleLandingPage} value="https://mailchi.mp/6172a273b63f/ucu54u0ssn" />
                    https://mailchi.mp/6172a273b63f/ucu54u0ssn
                </label>
                <br />
                <label>
                    <input type="radio" name="option" onInput={handleLandingPage} value="https://mailchi.mp/a6be4fdef0a7/99xf1ssoix" />
                    https://mailchi.mp/a6be4fdef0a7/99xf1ssoix
                </label>
                <br />
                <label>
                    <input type="radio" name="option" onInput={handleLandingPage} value="https://mailchi.mp/641a0d8d206f/hj2x6skckh" />
                    https://mailchi.mp/641a0d8d206f/hj2x6skckh
                </label>
            </div>
            <div className='question'>
                <h3>Enter your keyword below</h3>
                <input type="text" onInput={handleKeyword}></input>
            </div>
            <div className='question'>
                <h3>Choose your match type</h3>
                <label>
                    <input type="radio" name="mtOption" value="Exact" onInput={handleMatchType}/>
                    Exact
                </label>
                <label>
                    <input type="radio" name="mtOption" value="Phrase" onInput={handleMatchType}/>
                    Phrase
                </label>
                <label>
                    <input type="radio" name="mtOption" value="Broad" onInput={handleMatchType}/>
                    Broad
                </label>
            </div>
            <div className='question'>
                <h3>Choose Your Headlines</h3>
                    <label>
                        Select first headline:
                        <select onInput={handleHeadline1} name="headline1">
                            <option value="">--Select--</option>
                            <option value="headline1" >Headline a</option>
                            <option value="Dynamic Headline" >Dynamic Headline</option>
                            <option value="Easy, Step-By-Step Lessons" >Easy, Step-By-Step Lessons</option>
                        </select>
                    </label>
                    <label>
                        Select second headline:
                        <select onInput={handleHeadline2} name="headline2">
                            <option value="">--Select--</option>
                            <option value="headline1" >Headline 1</option>
                            <option value="guitar lessons online near me beginners learn to play guitar online" >guitar lessons online near me beginners learn to play guitar online</option>
                            <option value="Learning Guitar Is Lots Of Fun" >Learning Guitar Is Lots Of Fun</option>
                        </select>
                    </label>
                    <label>
                        Select third headline:
                        <select onInput={handleHeadline3} name="headline3">
                            <option value="">--Select--</option>
                            <option value="headline1" >Headline a</option>
                            <option value="headline2" >Headline b</option>
                            <option value="In-Person Guitar Lessons" >In-Person Guitar Lessons</option>
                        </select>
                    </label>
            </div>
            <div className='question'>
                <h3>Choose Your Descriptions</h3>
                    <label>
                        Select first description:
                        <select onInput={handleDescription1} name="description1">
                            <option value="">--Select--</option>
                            <option value="headline1" >des a</option>
                            <option value="headline2" >des b</option>
                            <option value="Our expert instructors will teach you everything you need to know to play like a pro" >Our expert instructors will teach you everything you need to know to play like a pro</option>
                        </select>
                    </label>
                    <label>
                        Select second description:
                        <select onInput={handleDescription2} name="description2">
                            <option value="">--Select--</option>
                            <option value="headline1" >des 1</option>
                            <option value="headline2" >des 2</option>
                            <option value="Learn chords, scales, and techniques used by the world's top guitarists." >Learn chords, scales, and techniques used by the world's top guitarists.</option>
                        </select>
                    </label>
            </div>
            <div className='question'>
                <label for="maxCpcBid">Enter your max cost per click bid:</label>
                <input id="maxCpcBidInput" type="text" onInput={handleMaxCpcBid} required></input>
            </div>
            <div>
            <button onClick={postAndGetResults} type="submit">Submit</button>
            </div>
            <div id="totalSpend">TOTAL SPEND: {props.totalSpend}</div>
            <div id="finalConversionRate">FINAL CONVERSION RATE: {props.finalConversionRate}</div>

            
        </form>
    )
}

export default Form