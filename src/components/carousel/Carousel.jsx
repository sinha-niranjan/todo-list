
import React from "react";
import "./style.css"

import { Carousel } from "react-bootstrap";
import personalImg from "../../assets/img/personal.jpg"
import professionalImg from "../../assets/img/professional.jpg"
import vacationImg from "../../assets/img/vacation.jpg"

const  Baner = ()  =>{
  return (
    <Carousel className="carousel">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={personalImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PERSONAL TASKS</h3>
          <p>Personal work management is essential in daily life as it leads to
              increased productivity, better time management, reduced stress,
              and improved work-life balance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={professionalImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>PROFESSIONAL TASKS</h3>
          <p>Professional tasks are important because they contribute to the
              successful execution of job responsibilities and help individuals
              develop skills and expertise in their chosen field.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vacationImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>VACATION</h3>
          <p>
          Taking a vacation is important for both mental and physical
              well-being, as it provides an opportunity to rest, recharge, and
              engage in activities that bring joy and relaxation. It also helps
              reduce stress, improve productivity, and foster better
              relationships with family and friends.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Baner;
