import React from "react";
import "../App.css";

const Card = (props) => {
  console.log(props);

  return (
    <>
      {props.data.map((post) => {
        return (
          <div className="card" key={post.id}>
            <img src={post.thumbnail} alt="" />
            <h3>{post.title}</h3>
            <h5>{post.difficulty}</h5>
            <p>{post.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
