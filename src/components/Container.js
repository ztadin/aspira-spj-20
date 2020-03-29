import React from "react";

function Container(props) {
  return <main className="card mx-2 my-4">{props.children}</main>;
}

export default Container;
