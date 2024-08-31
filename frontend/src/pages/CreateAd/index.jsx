import { InputLabel, TextField, Stack, Slider, Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";
import React, {useState} from "react";
import Toast from "../../components/Toast";

const CreateAd = () => {
    const [price, setPrice] = useState();
    const [showToast, setShowToast] = useState(false);
    const [data, setData] = useState({
        thumbnail:"",
        service:"",
        offer:"",
        additional_info:"",
        price:"",
        skills:"",
        experience:""
    });

    const handleChange = (e) => {        
        if(e.target.name === "price"){
            const t = (e.target.value/100) * 100000;
            setPrice(t);
            setData(prev => {
                return{
                    ...prev,
                    [e.target.name]: t
                }
            })
        }
        else{
            setData(prev => {
                return{
                    ...prev,
                    [e.target.name]: e.target.value
                }
            })            
        }
    };

    const handleSubmit = () => {
        console.log(data);
        setShowToast(true);
    }

    return (
        <div style={{ marginTop: "4rem" }}>
            <Typography variant="h4"  fontFamily="Nunito, sans-serif" textAlign="center">Promote Your Skills to the Right Clients - Post Your Ad Today!</Typography>
            <Typography variant="body1" width="90%" textAlign="center" margin="auto">
            Boost your visibility and connect with clients looking for top talent. Whether you're a seasoned freelancer or just starting out, showcase your services with a compelling ad. Create your ad now and let your skills do the talking!
            </Typography>
            <form style={{
                display:"flex",
                marginTop:"1rem",
                flexDirection:"column",
                gap:"16px",
                width:"80%",
                marginLeft:"20%"
            }}>
                <InputLabel>Add Thumbnail image link for your Ad</InputLabel>
                <TextField name="thumbnail" onChange={handleChange} style={{width:"60%"}}/>

                <InputLabel>About this service:</InputLabel>
                <TextField
                    placeholder="Give description about your service"
                    multiline
                    minRows={3}
                    name="service"
                    onChange={handleChange}
                    style={{width:"60%"}}
                    />
                <InputLabel>What you offer</InputLabel>
                <TextField
                    placeholder=""
                    multiline
                    minRows={3}
                    style={{width:"60%"}}
                    name="offer"
                    onChange={handleChange}
                    />
                <InputLabel>Additional Info (If any)</InputLabel>
                <TextField
                    placeholder=""
                    multiline
                    minRows={3}
                    style={{width:"60%"}}
                    name="additional_info"
                    onChange={handleChange}
                />

                <InputLabel>Set your Price: </InputLabel>
                <Typography variant="h6">{price}</Typography>
                <Box sx={{ width: 300 }}>
                    <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                        0
                        <Slider defaultValue={40} aria-label="Price" value={price} name="price" onChange={handleChange} />
                        100000
                    </Stack>
                </Box>

                <InputLabel>Add relevant skills pertaining to your Ad</InputLabel>
                <TextField style={{width:"60%"}} name="skills" onChange={handleChange}/>

                <InputLabel>Years of experience in this domain</InputLabel>
                <RadioGroup
                    name="experience"                    
                    onChange={handleChange}
                >
                    <FormControlLabel value="0-1" control={<Radio />} label="0-1" />
                    <FormControlLabel value="1-3" control={<Radio />} label="1-3" />
                    <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
                    <FormControlLabel value="5-10" control={<Radio />} label="5-10" />
                    <FormControlLabel value="10+" control={<Radio />} label="10+" />

                </RadioGroup>
            <Button style={{backgroundColor:"orange", color:"white", width:"200px"}} onClick={handleSubmit}>Submit</Button>
            </form>
            {showToast && <Toast open={true} onClose={() => setShowToast(false)} message="Ad created successfully"/>}
        </div>
    )
}

export default CreateAd;