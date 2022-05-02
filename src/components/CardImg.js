import * as React from "react";

const CardImg = ({ children }) => {
  return (
    <div className="card">
      <main className="flex items-center gap-2">{children}</main>
    </div>
  );
};
export default CardImg;
