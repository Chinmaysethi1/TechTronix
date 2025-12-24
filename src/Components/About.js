import React from 'react'
import AnimatedTitle from './AnimTitle'
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import img from "./poster_techtronix.png"

function About() {

    return (
        <>
            <div className='heading' id='about' ><AnimatedTitle name="about techtronix."></AnimatedTitle></div>
            <Box sx={{ display: "flex", padding: "0 4rem", flexDrection: { xs: "column", sm: "row" } }}>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{ display: "inline-block" }}
                >
                    <Box
                        className="card"
                        sx={{
                            borderRadius: '0.5rem',
                            border: '0.1rem solid #0f1922',
                        }}
                    >

                        <Box className='image' sx={{
                            width: { xs: "20rem", md: "26rem" },
                            height: { xs: "28rem", md: "36rem" }, background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center"
                        }}>
                        </Box>


                    </Box>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: "20%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, type: "spring", stiffness: 60, delay: 0.5 }}
                >
                    <Box sx={{ marginLeft: "2rem", fontSize: { xs: "1.6rem", md: "1.6rem" }, fontWeight: "400", textTransform: "capitalize", textAlign: "justify" }}>
                        <b>
                            Innovation is the goal, precision is the key, Wire the future and fulfill your destiny .
                        </b>
                        <br></br>
                        <br></br>
                        

                        Step into an advanced arena of engineering excellence at Techtronix 2K26 featuring intensive hackathons, precision circuit design challenges, cryptic logic quests, and research-driven presentations. Collaborate with industry veterans to decode emerging technological paradigms, explore high-impact career roadmaps, and master the complexities of the rapidly shifting global engineering landscape.
                        <br></br>
                        <br></br>
                        Mark your calendars and prepare to engineer the future!
                    </Box>
                </motion.div>
            </Box>

        </>
    )
}

export default About