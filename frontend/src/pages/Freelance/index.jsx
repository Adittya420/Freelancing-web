import { FormControl, InputLabel, Select, TextField, Box, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Toast from "../../components/Toast.jsx";
import { useNavigate } from "react-router-dom";

const Freelance = () => {    
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const [data, setData] = useState({
        fname:"",
        lname:"",
        username:"",
        email:"",
        category:"",
        employment:"",
        linkedin:"",
        resume:"",
        clientCount:""
    });
    

    const handleChange = (e) => {
        setData(prev => {
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleSubmit = () => {        
        const newRequest = axios.create({
            withCredentials:true,
            baseURL:"http://localhost:4000/api/freelance/"
        });

        newRequest.post("/", data, {headers:{"Content-Type":"application/json"}})
        .then(response =>{
            console.log(response.data);
            setMsg("Freelancer added successfully");
            setShowToast(true);            
        })
        .catch(err => {            
            setMsg(err.response.data.Error);
            setShowToast(true);
        });        
    }

    return (
        <div style={{
            marginTop: "4rem",            
        }}>
            <form style={{
                display:"flex",
                flexDirection:"column",
                gap:"16px",
                width:"80%",
                marginLeft:"20%"
            }}>
                <div>
                    <InputLabel style={{ display: "inline-block" }}>First Name</InputLabel>
                    <TextField id="standard-basic" name="fname" variant="standard" onChange={handleChange} />
                </div>
                <div>
                    <InputLabel style={{ display: "inline-block" }}>Last Name</InputLabel>
                    <TextField id="standard-basic" name="lname" variant="standard" onChange={handleChange} />
                </div>
                <div>
                    <InputLabel style={{ display: "inline-block" }}>Username</InputLabel>
                    <TextField id="standard-basic" name="username" variant="standard" onChange={handleChange}/>
                </div>
                <div>
                    <InputLabel style={{ display: "inline-block" }}>Email ID associated with QuickGig account</InputLabel>
                    <TextField type="email" id="standard-basic" name="email" variant="standard" onChange={handleChange}/>
                </div>

                <Box>
                    <FormControl style={{ width: "200px" }}>
                        <InputLabel id="demo-simple-select-label" style={{ display: "inline-block" }}>Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"                            
                            label="Category"
                            name="category"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Website Maintaenance"}>Website Maintaenance</MenuItem>
                            <MenuItem value={"Game Development"}>Game Development</MenuItem>
                            <MenuItem value={"AI Development"}>AI Development</MenuItem>
                            <MenuItem value={"Project Management"}>Project Management</MenuItem>
                            <MenuItem value={"Sales"}>Sales</MenuItem>
                            <MenuItem value={"Cybersecurity"}>Cybersecurity</MenuItem>
                            <MenuItem value={"Data Science"}>Data Science</MenuItem>
                            <MenuItem value={"Search Engine Optimization(SEO)"}>Search Engine Optimization(SEO)</MenuItem>
                            <MenuItem value={"Website Content"}>Website Content</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Current employment status</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"                        
                        name="employment"                        
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Freelancer" control={<Radio />} label="Freelancer" />
                        <FormControlLabel value="Hybrid(Part-time freelance)" control={<Radio />} label="Hybrid(Part-time freelance)" />
                        <FormControlLabel value="Full-time employee" control={<Radio />} label="Full-time employee" />
                        <FormControlLabel value="Agency" control={<Radio />} label="Agency" />
                    </RadioGroup>
                </FormControl>

                <div>
                    <InputLabel style={{ display: "inline-block" }}>LinkedIn profile</InputLabel>
                    <TextField variant="standard" name="linkedin" label="www.website.com" onChange={handleChange}></TextField>
                </div>
                <div>
                    <InputLabel style={{ display: "inline-block" }}>Resume Link</InputLabel>
                    <TextField variant="standard" name="resume" label="www.website.com" onChange={handleChange}></TextField>
                </div>

                <FormLabel>Who's your ideal client?</FormLabel>
                <RadioGroup
                    name="clientCount"
                    onChange={handleChange}
                >
                    <FormControlLabel value="1-10" control={<Radio />} label="1-10" />
                    <FormControlLabel value="11-50" control={<Radio />} label="11-50" />
                    <FormControlLabel value="50-250" control={<Radio />} label="50-250" />
                    <FormControlLabel value="250-1000" control={<Radio />} label="250-1000" />
                    <FormControlLabel value="1000+" control={<Radio />} label="1000+" />

                </RadioGroup>
            <Button style={{backgroundColor:"orange", width:"200px"}} onClick={handleSubmit}>Submit</Button>
            </form>
            {showToast && <Toast onClose={() => setShowToast(false)} open={true} message={msg}/>}  
        </div>
    )
}

export default Freelance;