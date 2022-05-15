import React, { FC } from "react";
import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

export const CustomHead: FC<CustomHeadProps> = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
