import React from "react";
import Head from "next/head";
import { ReactChild, ReactNode, useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { useAppSelector } from "@/hooks/redux";

type Props = {
  children: ReactChild | ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  col?: number;
  full?: boolean;
};

const Layout = (props: Props) => {
  const { auth } = useAppSelector((state) => state.authReducer);
  const {
    title = "Home",
    description = "Convenient job search in IT",
    keywords = "IT, Work",
    col = 1,
    full = false,
  } = props;

  return (
    <div className="layout">
      <Head>
        <title>{`TSWork - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={`IT, Work, ${keywords}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar full={full}></NavBar>
      <div className={`columnLayout${col}`}>{props.children}</div>
    </div>
  );
};

export default Layout;
