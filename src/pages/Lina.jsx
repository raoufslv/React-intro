import React from "react";
import { useParams } from "react-router-dom";

export default function Lina() {
  const { id } = useParams();
  return <div>Article {id}</div>;
}
