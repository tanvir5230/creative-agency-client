import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Loader from "../loader/Loader";
import { Col } from "reactstrap";
import { userContext } from "../../App";
export const OrderedList = ({ setTitle }) => {
  const { url } = useContext(userContext);
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  const { uid } = JSON.parse(localStorage.getItem("user"));
  const [list, setList] = useState(null);
  useEffect(() => {
    setTitle(newTitle);
    Axios.get(url + "/orderedlist?id=" + uid).then((res) => {
      setList(res.data);
    });
  }, [newTitle, setTitle, uid]);
  return (
    <div>
      {list === null && <Loader />}
      {list && list.length === 0 && <p>You have no order.</p>}
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <div className="h-100 border px-3 py-2">
                <p>{item.orderedService}</p>
                {item.status === "pending" && (
                  <span className="bg-danger p-2 text-white">
                    {item.status}
                  </span>
                )}
                {item.status === "done" && (
                  <span className="btn btn-success">{item.status}</span>
                )}
              </div>
            </Col>
          );
        })}
    </div>
  );
};
