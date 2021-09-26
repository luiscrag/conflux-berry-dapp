import React from "react";
import Banner from "../../components/Banner";
import { Container } from "../../components/Layout";

const PoolsBanner = ({ title, description }) => (
  <Banner>
    <Container>
      <h3 className="Title">{title}</h3>
      <p className="Description">{description}</p>
    </Container>
  </Banner>
);

export default PoolsBanner;
