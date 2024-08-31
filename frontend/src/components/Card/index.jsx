import { Box, Typography } from "@mui/material";
import React from "react";
import Business from "../../icons/business.svg"
import Community from "../../icons/community.svg"
import Talent from "../../icons/talent.svg"
import Work from "../../icons/work.svg"

const map = new Map([
    ["Business", Business],
    ["Work", Work],
    ["Community", Community],
    ["Talent", Talent]
])

const Card = (props) => {
    return(
        <Box display="flex" flexDirection="column" 
         height="28vh" border="2px #AD49E1 solid" padding="0.5rem 1rem"
         borderRadius="2rem" fontFamily="Nunito, sans-serif" 
        >
            <img src={map.get(props.name)} width="64px" style={{margin:"10px 1rem 1rem"}}/>
            <Typography variant="h5" display="block" marginBottom="12px" fontFamily="Nunito, sans-serif" fontWeight="700">{props.title}</Typography>
            <Typography variant="body1" fontFamily="Nunito, sans-serif">{props.desc}</Typography>
        </Box>
    )
}

export default Card;