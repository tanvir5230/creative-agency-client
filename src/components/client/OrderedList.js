import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export const OrderedList = ({ setTitle }) => {
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  return <p>ordered list</p>;
};
