import React from 'react';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText, TextField, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";

const NextButton = (props) => {
    const goNext = () => {
        const nextQ = "q" + (props.question + 1).toString();
        document.querySelector(`#${nextQ}`).scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        });
    };

    const goBack = () => {
        const prevQ = "q" + (props.question - 1).toString();
        document.querySelector(`#${prevQ}`).scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        });
    };

    const nextButtonDisabled = () => {
        let disabled = false;
        if (props.requirements) {
            for (let i of props.requirements) {
                if (i === "" || i === null) {
                    disabled = true
                }
            };
        }
        return disabled
    }
    return (
        <div class="buttonDiv">
            {props.question === 1 ? null :
                <Button onClick={goBack} variant="outlined" color="primary" type="submit" >Back</Button>
            }
            {props.question !== 9 ? 
                <>
                <Button onClick={goNext} variant="contained" color="primary" type="submit" disabled={nextButtonDisabled()}>Next</Button>
                <p>{props.question} of 9</p>
                </>
                :
                null
            }
        </div>
    )
};

export default NextButton