import React from "react";

const Loading = ( {style}) => (
  <div className="spinner">
    <img src="/loading.svg" alt="Loading" style={style}/>
  </div>
);

export default Loading;
