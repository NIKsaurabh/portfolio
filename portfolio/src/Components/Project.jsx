import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/project.css"

const myProjects = [
  {
    image: "/images/moa.png",
    title: "Mechanism of Action (MoA)",
    description:
      "The goal of this project is to make drug development more advance and fast by predicting the MoA of drug quickly.",
    source: "https://github.com/NIKsaurabh/Mechanism-of-Action-Predictor",
    demoLink: "https://drive.google.com/file/d/1ATtKN8uPio0YnDmilGIjw5AZQnr-sqrk/view?usp=sharing",
  },
  {
    image: "/images/dank.png",
    title: "Meme - Dank or Not?",
    description:
      "The goal of this project is to perform a detailed analysis on meme data and create Machine Learning and Deep Learning models to predict the dankness of a meme, which can give an idea to memers about the dankness of their memes before posting it anywhere.",
    source: "https://github.com/NIKsaurabh/Meme-Dank-or-Not-",
    demoLink: "https://drive.google.com/file/d/1geSbZii673w3dfJwiwpJaU9fClKEDmdu/view?usp=sharing",
  },
  {
    image: "/images/movie.png",
    title: "Movie Recommender",
    description:
      "This is a hollywood movie recommendation system. Developed using machine learning and deployed the model on Heroku.",
    source: "https://github.com/NIKsaurabh/Movie-Recommendation-Web-App",
    demoLink: "https://nikmoviemaniac.herokuapp.com/",
   }
];

const Project = () => {
  return (
    <div className="projects" id="projects">
      <div className="container pt-6 pb-6">
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                  <div className="project-card">
                    <div className="img-section">
                      <img src={project.image} alt="" />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export { Project };
