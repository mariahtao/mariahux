import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const CardImg = ({ children }) => {
  return (
    <div class="card">
      <main className="flex items-center gap-2">{children}</main>
    </div>
  );
};
export default CardImg;
