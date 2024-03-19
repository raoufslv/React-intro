import React from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const ids = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div>Articles Page</div>
      <Link to="/"> go to Home</Link>

      {ids.map((id) => (
        <div key={id}>
          <Link to={`/article/${id}`}>Article {id}</Link>
        </div>
      ))}
    </>
  );
}
