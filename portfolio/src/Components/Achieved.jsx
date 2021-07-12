import React from "react";
//import { Col, Row } from "react-bootstrap";
//import "../styles/skills.css"
import styles from "../styles/achieved.module.css";
import GitHubCalendar from 'react-github-calendar';

const Achieved = () => {
  return (
    <div key="profi" id="achieved"  className={styles.achieved} style={{ "backgroundColor": "#0b0d0e"}}>

<div className="container-fluid mt-5">

    <div className="row">
        <div className="col-12 text-center mt-5">
            <h1 className={styles.pro}>
            <span className="chonburi-font green-text">Profic</span>iencies
            </h1>
           
        </div>
    </div>

</div>

<div className="row mt-4 px-5">

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/machine_icon.png" style={{width:"53%"}} className="img-fluid " alt="react_app"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Machine Learning</h3>
            </div>

            <div className="col-12">
                <p className="text-center">When it comes to machine learning
                I have the strength of Atlas</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/deep_icon1.png" style={{width:"53.5%"}} className="img-fluid " alt="front-end"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Deep Learning</h3>
            </div>

            <div className="col-12">
                <p className="text-center">Now just that I can
                even host the show</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/nlp_icon.png" style={{width:"54%"}} className="img-fluid " alt="ds"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>NLP</h3>
            </div>

            <div className="col-12">
                <p className="text-center">Putting the right blocks in the right place is just my thing</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/data_icon.png" style={{width:"54%"}} className="img-fluid " alt="ds"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Data Science</h3>
            </div>

            <div className="col-12">
                <p className="text-center">I am the one who runs the show</p>
            </div>
        </div>
    </div>
</div>
</div>
  )
};

export {Achieved};