import Carousel from "../components/Carousel";
import React, {useState} from "react";
import {Box, Card, Grid, Icon, Paper} from "@mui/material";
import {GetImages} from "../components/GetImages";
import {ThemeProvider, width} from "@mui/system";
import {createTheme} from "@mui/material/styles";
import ToTopButton from "@/components/ToTopButton";
import CustomCursor from "@/components/CustomCursor";

const customBreakpoints = {
    xs: 0,
    xm: 320,
    mi: 400,
    min: 430,
    smm: 500,
    sm: 600,
    mm: 760,
    md: 960,
    lg: 1100,
    ml: 1440,
    xml: 1600,
    xl: 1920,
    fk: 2400,
    // Add your custom sizes here
};

// Create a theme with your custom breakpoints
const theme = createTheme({
    breakpoints: {
        values: customBreakpoints,
    },
});

export async function getStaticProps(context) {
    const first = GetImages(process.env.FIRST);
    const second = GetImages(process.env.SECOND);
    const third = GetImages(process.env.THIRD);
    const fourth = GetImages(process.env.FOURTH);
    const fifth = GetImages(process.env.FIFTH);
    const sixth = GetImages(process.env.SIXTH);

    return {
        props: {
            first,
            second,
            third,
            fourth,
            fifth,
            sixth,
        },
    }
}

const spacing = 1.7;

const IndexPage = ({first,second,third,fourth,fifth,sixth}) => {
    const cursors = [
        './svg/cursor.svg',
        './svg/left.svg',
        './svg/right.svg',
    ];

    const [currentCursor, setCurrentCursor] = useState(0);

    const handleMouseEnter = (cursorIndex) => {
        setCurrentCursor(cursorIndex);
    };

    const handleMouseLeave = () => {
        setCurrentCursor(0);
    };

    React.useEffect(() => {
        const body = document.body;
        body.style.cursor = 'none';

        return () => {
            body.style.cursor = 'auto';
        };
    }, []);

    return(
    <ThemeProvider theme={theme}>
        <div>
            <CustomCursor cursor={cursors[currentCursor]}/>
            <Box sx={{flexGrow: 1, fontFamily: "Arial"}}>
                <Grid container spacing={spacing} sx={{marginLeft: "-15px"}}>
                    <Grid item sx={{height: {xs: "100", md: "240"}, width: {sx: "100%", md: "50%",}}}>
                        <Icon sx={{width: "98%", height: "98%", textAlign: "left"}}>
                            <img
                                style={{width: "100%"}}
                                src={"./svg/logo.svg"}
                                alt={"logo"}
                            />
                        </Icon>
                    </Grid>
                    <Grid item sx={{height: {xs: "0", md: "240"}, width: {sx: "0%", md: "50%",}}}/>

                    <Grid item sx={{
                        height: {
                            xs: 150,
                            xm: 200,
                            mi: 280,
                            min: 320,
                            smm: 380,
                            mm: 400,
                            sm: 600,
                            md: 800,
                            lg: 1070,
                            ml: 1160,
                            xml: 1370,
                            fk : 1500
                        },
                        fontSize: {xs: "10px", sm: "16px",fk:"32px"},
                        width: {
                            xm: "45%",
                            xs: "45%",
                            lg: "25%",
                        }
                    }}>
                        <div>
                            Jsme malá rodinná umělecko-řemeslná firma, jejímž základem je práce se dřevem a grafika.
                            Nevyhýbámese ale i jiným disciplínám a materiálům.
                        </div>
                        <Box sx={{marginTop: "20px", width: {sm:"10%",md:"20%"}, float:"left", fontSize: {xs: "10px", sm: "16px",fk:"32px"},}}
                        >mail<br/>tel
                        </Box>
                        <Box sx={{marginTop: "20px", width: {md:"50%",sm:"50%"}, float :"left", fontSize: {xs: "10px", sm: "16px",fk:"32px"},}}>
                            marek.markova@email.cz<br/> +420 777 716 782
                        </Box>
                    </Grid>
                    <Grid item sx={{
                        width: {
                            xs: 0,
                            lg: "25%",
                        },
                        padding: {
                            xs: 0,
                        }
                    }}/>
                    <Grid item sx={{
                        width: {xs: "45%", sm: "50%", md: "50%"},
                    }}>
                        <Carousel images={first} dir={"./1/"} handleMouseEnter={handleMouseEnter} sx={{alignItems: "right"}}/>
                    </Grid>

                    <Grid item xs={9} sx={{
                        height: {
                            xs: 170,
                            xm: 220,
                            mi: 270,
                            min: 290,
                            smm: 340,
                            mm: 550,
                            sm: 560,
                            md: 640,
                            lg: 850,
                            ml: 920,
                            xml: 1080,
                            fk : 1520
                        },
                    }}>
                        <Carousel images={second} dir={"./2/"} handleMouseEnter={handleMouseEnter} sx={{alignItems: "left"}}/>
                    </Grid>
                    <Grid item xs={3} sx={{
                        fontSize: {xs: "10px", sm: "16px",fk:"32px"},
                    }}>
                        <div>Loutky a divadlo</div>
                        <br/>
                        <div>Vyrábíme loutky a menší výpravy pro naše i zahraniční divadla.</div>
                    </Grid>

                    <Grid item xs={3} sx={{
                        height: {
                            xs: 170,
                            xm: 170,
                            mi: 250,
                            min: 260,
                            smm: 320,
                            mm: 410,
                            sm: 480,
                            md: 600,
                            lg: 760,
                            ml: 860,
                            xml: 1010,
                            fk : 1220
                        },
                        fontSize: {xs: "10px", sm: "16px",fk:"32px"},
                    }}>
                        <div>Instalace a interaktivní herny</div>
                        <br/>
                        <div>
                            Navrhujeme a vyrábíme interaktivní herny
                            a vzdělávací panely pro školy, školky, lékařské čekárny, obchodní centra. Dále také
                            instalace
                            a expozice pro muzea a galerie.
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Carousel images={third} dir={"./3/"} handleMouseEnter={handleMouseEnter}/>
                    </Grid>

                    <Grid item xs={6} sx={{
                        height: {
                            xs: 170,
                            xm: 210,
                            mi: 260,
                            min: 270,
                            smm: 330,
                            mm: 540,
                            sm: 550,
                            md: 620,
                            lg: 810,
                            ml: 900,
                            xml: 1060,
                            fk : 1500
                        },
                    }}>
                        <Carousel images={fourth} dir={"./4/"} handleMouseEnter={handleMouseEnter}/>
                    </Grid>
                    <Grid item sx={{fontSize: {xs: "10px", sm: "16px",fk:"32px"}, width: {xs: "45%", md: "25%",}}}>
                        <div>Nábytek a doplňky</div>
                        <br/>
                        <div>Vyrábíme solitérní nábytek a doplňky ve spolupráci s architekty, nebo podle vlastních
                            návrhů.
                        </div>
                    </Grid>
                    <Grid item sx={{width: {xs: "0%", md: "25%",}}}/>

                    <Grid item sx={{ width:{xm:"45%",md:"25%"},
                        height: {
                            xs: 170,
                            xm: 170,
                            mi: 250,
                            min: 280,
                            smm: 420,
                            mm: 520,
                            sm: 650,
                            md: 800,
                            lg: 1040,
                            ml: 1160,
                            xml: 1380
                        }, fontSize: {xs: "10px", sm: "24px",fk:"32px"}
                    }}>
                        <div>Řezbařina</div>
                        <br/>
                        <div>Provádíme řezbářské práce a to zejména figurativní.</div>
                    </Grid>
                    <Grid item sx={{width:{md:"25%",xs:"0%"}}}/>
                    <Grid item sx={{width: {xs:"45%",mm:"50%"}}}>
                        <Carousel images={fifth} dir={"./5/"} handleMouseEnter={handleMouseEnter}/>
                    </Grid>

                    <Grid item xs={9} sx={{
                        height: {
                            xm: 250,
                            mi: 250,
                            min: 300,
                            xs: 380,
                            smm: 400,
                            mm: 500,
                            sm: 560,
                            md: 700,
                            lg: 1040,
                            ml: 1000,
                            xml: 1080,
                            fk : 1600
                        },
                    }}>
                        <Carousel images={sixth} dir={"./6/"} handleMouseEnter={handleMouseEnter}/>
                    </Grid>
                    <Grid item xs={3} sx={{
                        height: {
                            xm: 250,
                            mi: 250,
                            xs: 380,
                            smm: 400,
                            sm: 560,
                            md: 700,
                            lg: 1040,
                            ml: 1000,
                            xml: 1080
                        }, fontSize: {min: "14px",xs: "10px", sm: "16px",fk:"32px"}
                    }}>
                        <div>Volné práce</div>
                        <br/>
                        <div>V nepříliš častých volnějších chvílích se věnujeme své volné tvorbě.</div>
                    </Grid>


                    <Grid item xs={6} sx={{height: 100, fontSize: {xs: "10px",min:"14px", sm: "18px", md:"32px"}}}>
                        Vzhledem k tomu, že fungujeme od roku 1992 naše práce je velmi široká.
                        Proto další informace případně fotografie poskytneme na přání po telefonu nebo emailu.
                    </Grid>
                    <Grid item xs={6} sx={{fontSize: {xs:"10px",min: "14px", sm: "18px", md:"32px"}}}>
                        <Box sx={{marginLeft:"10%", width: "20%", float:"left"}}>mail<br/>tel</Box>
                        <Box sx={{width: "60%", float :"left"}}>marek.markova@email.cz<br/> +420 777 716 782</Box>
                    </Grid>

                    <Grid item xs={12} sx={{
                        height: {
                            xm: 10,
                            mi: 30,
                            xs: 40,
                            smm: 50,
                            sm: 60,
                            md: 100,
                            lg: 150,
                            ml: 200,
                            xml: 300
                        },
                    }}/>

                    <Grid item xs={12}>
                        <ToTopButton/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </ThemeProvider>
    )
}

export default IndexPage
