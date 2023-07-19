import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import blind from "../blind.png";
import back from "../back.png";
import watch from "../watch.png";
import { Container } from "react-bootstrap";
function Tweet() {
  return (
    <div>
      <Container>
        <Carousel className="imgcar">
          <Carousel.Item interval={1000}>
            <Image
              className="mx-auto d-block w-100"
              src={blind}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Image
              className="mx-auto d-block w-100"
              src={back}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="mx-auto d-block w-100"
              src={watch}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Tweet;
