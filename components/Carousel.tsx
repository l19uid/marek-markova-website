import React, {useState} from "react";
import Button from '@mui/material/Button';
import {Box, Fade, Slide, Typography} from '@mui/material';
import {TransitionProps} from "@mui/material/transitions";

const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevious = () => {
        setCurrentImage((prevIndex) => prevIndex === 0 ? props.images.length - 1 : prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % props.images.length);
    };

    return (
<div>
    <div style={{ position: 'relative', height: '100%', width:"100%", overflow: 'hidden' }}>
        <div
            style={{
                display: 'flex',
                transition: 'transform 1s',
                transform: `translateX(-${currentImage * 100}%)`,
            }}
        >
            {props.images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        flex: '0 0 100%',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <img src={props.dir + image.alt} style={{ width: '100%', height: '100%' }} />
                </div>
            ))}
        </div>
        <Typography sx={{ position: 'absolute', top: '10px', left: '15px',width:"100%",
            fontFamily:"Arial", fontSize:{xs:"10px", sm:"17px"},}}>
            <a style={{color:"white"}}>{currentImage + 1} / {props.images.length}</a>
        </Typography>
        <Box
            onClick={handlePrevious}
            onMouseEnter={() => props.handleMouseEnter(1)}
            onMouseLeave={() => props.handleMouseEnter(0)}

            sx={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' , height:"100%",width:"50%"}}
        >
        </Box>

        <Box
            onClick={handleNext}
            onMouseEnter={() => props.handleMouseEnter(2)}
            onMouseLeave={() => props.handleMouseEnter(0)}

            sx={{position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' , height:"100%",width:"50%",}}
        >
        </Box>
    </div>
</div>
    );
}

export default Carousel;
