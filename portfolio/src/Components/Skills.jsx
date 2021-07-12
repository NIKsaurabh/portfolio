import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/skills.css"

const skills = [
  { 
    id:"1",
    logo: "/images/sklearn.png",
    name: "scikit learn",
  },
  {
    id:"2",
    logo: "/images/numpy.png",
    name: "numpy",
  },
  {
    id:"3",
    logo: "/images/pandas.png",
    name: "pandas",
  },
  {
    id:"4",
    logo: "/images/scipy.png",
    name: "scipy",
  },
  { 
    id:"5",
    logo: "/images/matplotlib.png",
    name: "matplotlib",
  },
  {
    id:"6",
    logo: "/images/seaborn.png",
    name: "seaborn",
  },
  {
    id:"7",
    logo: "/images/tensorflow.png",
    name: "tensorflow",
  },
  {
    id:"8",
    logo: "/images/keras.png",
    name: "keras",
  },
  {
    id:"9",
    logo: "/images/flask.png",
    name: "flask",
  },
  {
    id:"10",
    logo: "/images/etc.png",
    name: "and many more",
  }
];
const prgm_lng = [
  { 
    id:"1",
    logo: "/images/python.png",
    name: "Python",
  }
];
const tools = [
  { 
    id:"1",
    logo: "/images/jupyter.png",
    name: "jupyter",
  },
  { 
    id:"2",
    logo: "/images/spyder.png",
    name: "spyder",
  },
  { 
    id:"3",
    logo: "/images/anaconda.png",
    name: "anaconda",
  },
  { 
    id:"4",
    logo: "/images/visual_studio.png",
    name: "visual studio",
  },
  { 
    id:"5",
    logo: "/images/colab.png",
    name: "colab",
  }
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <div className="container">
      
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Programming </span>Language
          </h1>
        </div>
        <Row>
          {prgm_lng.map((skill) => {
            return (
              <Col key={skill.id}>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <h6>{skill.name}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Libraries /</span>Frameworks
          </h1>
        </div>
        <Row>
          {skills.map((skill) => {
            return (
              <Col key={skill.id}>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <h6>{skill.name}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Too</span>ls
          </h1>
        </div>
        <Row>
          {tools.map((skill) => {
            return (
              <Col key={skill.id}>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <h6>{skill.name}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export {Skills};