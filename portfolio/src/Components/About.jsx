import React from "react";
import { Col, Row } from "react-bootstrap";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={""} alt="" />

      <div className="container">
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img className="about-img" src="../images/saurabh.jpg" alt="" />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="">
                I am a Machine Learning and Data Science enthusiast with sound 
                knowledge and hands-on experience of Machine Learning, Deep Learning, 
                Natural Language Processing and Data Science. I love to work on challenging
                projects as it gives me an opportunity to learn new skills and sharpen my 
                existing skills.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a
                  href="https://drive.google.com/file/d/1zdwTcfNdI2c_LdXtEBvVPY69xXpUNJoW/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col className="active-tab custom-ml-3">
                    <LocalLibraryIcon />
                    <h5>Training and Academics</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  <div className="education">
                    <div>
                      <h5>Applied AI course (AAIC)</h5>
                      <ul>
                        <li className="text-justify">
                        Mastered machine learning algorithms, data cleaning, data visualization, model creation, 
                        model optimization, natural language processing, deep learning, computer vision, 
                        transfer learning, RNN, LSTM and many more skills. Got geometrical and mathematical
                        intuition behind ML algorithms along with statistics.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>B.tech</h5>
                      <ul>
                        <li className="text-justify">
                          Graduated in Information Technology from Haldia
                          institute of Technology in 2020.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
