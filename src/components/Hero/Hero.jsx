import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {
  const transition =  { type: "spring", duration:3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*The best ad section*/}
        <div className="the-best-ad">
          <motion.div
          initial={{ left: mobile? "165px" : '238px' }}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/*Hero Heading*/}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>

          <div className="span">
            <span>
              In here we will help you to shape and build your ideal body and
              live your life to the fullest
            </span>
          </div>
        </div>

        {/*Figures number counter */}

        <div className="figures">
          <div>
            <span>
            <NumberCounter end={160} start={100} delay='4' prefix="+"/>
              </span>
            <span>Expert coaches</span>
          </div>

          <div>
          <span>
            <NumberCounter end={978} start={300} delay='4' prefix="+"/>
              </span>
            <span>Members Joined</span>
          </div>

          <div>
          <span>
            <NumberCounter end={66} start={0} delay='4' prefix="+"/>
              </span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{ right: "-1rem" }}
        whileInView={{ right: "4rem" }}  
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Image section */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
         initial={{ right: "11rem" }}
         whileInView={{ right: "20rem" }}  
         transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/*Calories */}

        <motion.div
         initial={{ right: "37rem" }}
         whileInView={{ right: "28rem" }}  
         transition={transition}
         className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burn</span>
            <span>262kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
