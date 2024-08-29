import { Box, Button, Typography } from "@mui/material";
import React from "react";


const GeometryElem = () => {
    return (
        <svg
            viewBox="0 0 100 100"
            style={{height:"100px"}}
            aria-hidden="true">
            <path 
                fill="#FFAD60"
                d="M 4.22,27.46
           C 4.22,27.46 6.66,25.41 6.66,25.41
             6.66,25.41 36.86,60.48 36.86,60.48
             36.86,60.48 34.43,62.59 34.43,62.59
             34.43,62.59 4.22,27.46 4.22,27.46 Z
           M 35.07,24.77
           C 35.07,24.77 38.27,24.90 38.27,24.90
             38.27,24.90 37.25,62.53 37.25,62.53
             37.25,62.53 34.05,62.46 34.05,62.46
             34.05,62.46 35.07,24.77 35.07,24.77 Z
           M 4.80,26.75
           C 4.80,26.75 4.80,23.55 4.80,23.55
             4.80,23.55 37.31,23.81 37.31,23.81
             37.31,23.81 37.31,27.01 37.31,27.01
             37.31,27.01 4.80,26.75 4.80,26.75 Z
           M 20.80,10.05
           C 20.80,10.05 23.17,7.87 23.17,7.87
             23.17,7.87 55.68,43.39 55.68,43.39
             55.68,43.39 53.31,45.57 53.31,45.57
             53.31,45.57 20.80,10.05 20.80,10.05 Z
           M 52.93,9.47
           C 52.93,9.47 56.13,9.47 56.13,9.47
             56.13,9.47 55.87,45.44 55.87,45.44
             55.87,45.44 52.67,45.44 52.67,45.44
             52.67,45.44 52.93,9.47 52.93,9.47 Z
           M 21.25,10.88
           C 21.25,10.88 21.25,7.68 21.25,7.68
             21.25,7.68 55.49,7.68 55.49,7.68
             55.49,7.68 55.49,10.88 55.49,10.88
             55.49,10.88 21.25,10.88 21.25,10.88 Z"
                strokeWidth={0.5}
                stroke="#FFAD60"
            />
        </svg>
    )
}


const Home = () => {

    return (
        <div style={{
            // backgroundColor: "#F1DEC6",
            backgroundColor: "#EBD3F8",
            height: "80vh",
            width: "100%",
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem"
        }}>
            <Box sx={{
                flexBasis:"40%"
            }}>
                <Typography variant="h4" fontFamily="Noticia Text, serif">Your one-stop platform for finding top freelance talent – Fast, easy, and reliable.</Typography>
                <Typography variant="p" fontFamily="Nunito, sans-serif" style={{marginTop:"10px", display:"block"}}>Forget the old rules. You can have the best people.
                Right now. Right here.</Typography>
                <Button style={{
                  backgroundColor:"#AD49E1" ,
                  color:"white",
                  marginTop:"10px",        
                  fontSize:"1.2rem"          
                }}
                >Get Started</Button>
            </Box>
            <Box sx={{
                flexBasis:"40%",
                textAlign:"center",
                height:"80%",
                position:"relative",
                // overflowY:"hidden",
                top:"3.5rem",
            }}>
                <div style={{
                    backgroundColor:"#674188",
                    position:"absolute",
                    height:"300px",
                    width:"7rem",
                    top:"-4rem",
                    right:"-2rem",
                    borderRadius:"30px",
                    zIndex:"1",
                }}></div>
                <div style={{
                    backgroundColor:"#fcb85d",
                    position:"absolute",
                    height:"350px",
                    width:"65%",
                    right:"10%",
                    top:"2rem",
                    zIndex:"0",
                    boxShadow:"0px 0px 10px 5px #b8b4b4"
                }}></div>
                <img style={{
                    position:"absolute",                    
                    zIndex:"2",
                    right:"30%",
                    height:"400px"
                    }} 
                    src="/assets/a_guy.png" alt="man with comp" />
                <div style={{
                   backgroundColor:"#674188",
                    height:"18rem",
                    width:"18rem",
                    borderRadius:"170px",
                    position:"absolute",
                    right:"2rem",
                    bottom:"-8rem",
                    zIndex:"2"
                }}></div>
            </Box>
        </div>
    )
}

export default Home;