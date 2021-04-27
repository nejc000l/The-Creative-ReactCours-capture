import React from 'react';
import home1 from '../img/home1.png'
import styled from 'styled-components'
import {About, Hide,Description,Image} from '../styled'
import {motion} from 'framer-motion';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams </span>come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                    <p>Contact us for any photography or videography
                    that you have.
                    We have professionals with amazing skills
                </p>
                    <button>Contact Us</button>
                </motion.div>
            </Description>
                <Image>
                    <img src={home1} alt="Guy with the camera" />
                </Image>
        </About>
    )
}

//styled components





export default AboutSection;