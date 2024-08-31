import { InputLabel, TextField, Stack, Slider, Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";
import React, {useState} from "react";
import Toast from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import CreateAd from "../CreateAd";

const Ad = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    return (
        <div style={{marginTop:"4rem"}}>
            {!showForm ? (<><Typography variant="h5">No ads visible</Typography>
            <Typography variant="body1" style={{margin:"1rem"}}>Create an ad to showcase to the world</Typography>
            <Button style={{backgroundColor:"orange", color:"white"}} onClick={() => setShowForm(true)}>Create Ad</Button> </>)
            :
            (<CreateAd />)}
        </div>        
    )
}

export default Ad;