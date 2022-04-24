import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const CardList = ({ children }) => {
  return (
    <div class="card">
      <main className="col-span-1">{children}</main>
    </div>
  );
};
export default CardList;
