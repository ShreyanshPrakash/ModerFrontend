import React, { FC } from "react";
import styled from "styled-components";

interface HomeProps {}

const HomeWrapper = styled.div``;

const Home: FC<HomeProps> = ({}: HomeProps) => {
  return <HomeWrapper>Home page</HomeWrapper>;
};

export default Home;
