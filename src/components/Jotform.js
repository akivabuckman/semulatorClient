import React from 'react';
import JotformEmbed from 'react-jotform-embed'
import { useState, useEffect } from 'react';


const Jotform = (props) => {
   
  const iframeDoc = document.querySelector("iframe").contentDocument.documentElement;
  let submitButton;
  let allInputs;
  let lpInputs;
  let mtInputs;

  const postAndGetResults = async (event) => {

      event.preventDefault();
      try {
        console.log("adspend", props.adSpend)
        const data = JSON.stringify({
          adSpend: props.adSpend,
          landingPage: props.landingPage,
          keyword: props.keyword,
          matchType: props.matchType,
          headline1: props.headline1
        })

        console.log("data", data)
        const res = await fetch("http://localhost:5000/sem/userSubmission", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: data,
        });
        const parsedData = await res.json();
      } catch (error) {
        console.log(error)
      }
    }
  


  // detects submit button load
  useEffect(() => {
    let intervalId = null;
    const checkForElement = () => {
      submitButton = iframeDoc.querySelector("#input_2");
      if (submitButton) {
        submitButton.removeEventListener("click", postAndGetResults)
        submitButton.addEventListener("click", postAndGetResults)
        clearInterval(intervalId); // Stop checking once element is found
      }
    };

    intervalId = setInterval(checkForElement, 100); // Check every 100ms for submitButton


    return () => {
      clearInterval(intervalId); // Clean up the interval if the component unmounts
    };
  }, [props.adSpend, props.landingPage, props.keyword, props.matchType, props.headline1]);


//   event listener for each field. need to useEffect because DOM doesnt find elemeents immediately.
// ad spend
  useEffect(() => {
    let intervalId = null;
    const checkForElement = () => {
      const adSpendInput = iframeDoc.querySelector("#input_30");
      if (adSpendInput) {

        // ad spend
        adSpendInput.addEventListener("input", (event)=>{
            props.setAdSpend(adSpendInput.value)
        });
        clearInterval(intervalId); // Stop checking once element is found
      };
    };

    intervalId = setInterval(checkForElement, 100); // Check every 100ms for submitButton


    return () => {
      clearInterval(intervalId); // Clean up the interval if the component unmounts
    };
  }, []);


  window.addEventListener("load", () => {
    allInputs = iframeDoc.getElementsByClassName("form-radio validate[required]");
    lpInputs = Object.keys(allInputs).filter(function(key) {
        let element = allInputs[key];
        return element.getAttribute("aria-describedby") === "label_33";
      }).map(function(key) {
        return allInputs[key]
    });
    mtInputs = Object.keys(allInputs).filter(function(key) {
        let element = allInputs[key];
        return element.getAttribute("aria-describedby") === "label_35";
        }).map(function(key) {
        return allInputs[key]
    });

    // event listeners
    lpInputs.forEach(function(element) {
        element.addEventListener("change", (event) => {
            props.setLandingPage(event.target.value)
        })
    });

    mtInputs.forEach(function(element) {
        element.addEventListener("change", (event) => {
            props.setMatchType(event.target.value)
        })
    });
  })

  // keyword
  useEffect(() => {
    let intervalId = null;
    const checkForElement = () => {
      const keywordInput = iframeDoc.querySelector("#input_34");
      if (keywordInput) {

        // ad spend
        keywordInput.addEventListener("input", (event)=>{
            props.setKeyword(keywordInput.value)
        });
        clearInterval(intervalId); // Stop checking once element is found
      }
    };

    intervalId = setInterval(checkForElement, 100); // Check every 100ms for submitButton


    return () => {
      clearInterval(intervalId); // Clean up the interval if the component unmounts
    };
  }, []);


   // headline1
   useEffect(() => {
    let intervalId = null;
    const checkForElement = () => {
      const headline1Input = iframeDoc.querySelector("#input_36");
      if (headline1Input) {

        // ad spend
        headline1Input.addEventListener("input", (event)=>{
            props.setHeadline1(headline1Input.value)
        });
        clearInterval(intervalId); // Stop checking once element is found
      }
    };

    intervalId = setInterval(checkForElement, 100); // Check every 100ms for submitButton


    return () => {
      clearInterval(intervalId); // Clean up the interval if the component unmounts
    };
  }, []);

  const log = () => {
    console.log(props.adSpend)
  }
  return (
    <button onClick={log}>log jotform</button>
  )
}

export default Jotform;




