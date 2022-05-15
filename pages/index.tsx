import { useRouter } from "next/router";
import React, { FC } from "react";
import { useEffect } from "react";
import styled from "styled-components";

interface IndexProps {}

const IndexWrapper = styled.div``;

const Index: FC<IndexProps> = (props: IndexProps) => {

  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [])

  return <IndexWrapper></IndexWrapper>;
};

export default Index;
