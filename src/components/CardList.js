import * as React from "react";

const CardList = ({ children }) => {
  return (
    <div className="card">
      <main className="col-span-1">{children}</main>
    </div>
  );
};
export default CardList;
