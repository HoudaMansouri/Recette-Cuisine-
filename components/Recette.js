/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Recette = (props) => {
  const { title } = useParams();
  console.log("title", title);
  console.log("data", props);

  return (
    <div>
      {props.data.map((post) => {
        console.log("aaa", post);
        if (post.title === title) {
          return (
            <div className="recet">
              <h2 className="title-recet">{post.title}</h2>
              <img src={post.thumbnail} alt="photo de la recette" />
              <h3 className="author">
                {post.author}-{post.difficulty}
              </h3>
              <p className="ingredient">Ingredients : </p>
              {post.ingredients.map((post) => {
                console.log("post", post);
                return (
                  <li>
                    {post.quantity}
                    {post.unit}
                    {post.name}
                  </li>
                );
              })}
              <p className="instruction">Instructions : </p>
              {post.instructions.map((post) => {
                console.log("hhh", post);
                return <p className="methode"> {post}</p>;
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Recette;
