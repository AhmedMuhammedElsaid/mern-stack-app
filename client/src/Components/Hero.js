import React from "react";
import styled from "styled-components";
import mainBcg from "../Img.jpg";

export default function Hero({ img }) {
  return (
    <HeroWrapper img={img}>
      <div className="banner">
        <h1 className="title">
          "For rainy days Trufla company, keeping you prepared Your money, our
          insurance, your life, be protected "
        </h1>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  max-width: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    color: #c73737c4;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
