import React from "react";
import Layout from "../components/Layout";

const IndexPage = ({ location }) => {
  console.log(location);
  return <Layout location={location}>Hi</Layout>;
};

export default IndexPage;
