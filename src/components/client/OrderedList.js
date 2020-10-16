import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Loader from "../loader/Loader";
import { Col, Row } from "reactstrap";
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
  }, [newTitle, setTitle, uid, url]);
  return (
    <Row>
      {list === null && <Loader />}
      {list && list.length === 0 && <p>You have no order.</p>}
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Col xs={12} md={6} lg={4} className="p-3">
              <div className="h-100 border p-3">
                <p className="font-weight-bold text-center">
                  {item.orderedService}
                </p>
                {item.status === "pending" && (
                  <p className="p-2 text-danger d-flex justify-content-center">
                    <i className="fa fa-hourglass-1 fa-spin fa-2x"></i>
                    <span className="ml-3">{item.status}</span>
                  </p>
                )}
                {item.status === "done" && (
                  <p className="p-2 text-danger d-flex justify-content-center">
                    <i className="fa fa-check-circle-o fa-2x"></i>
                    <span className="ml-3">{item.status}</span>
                  </p>
                )}
                {item.status === "on Going" && (
                  <p className="p-2 text-warning d-flex justify-content-center">
                    <i className="fa fa-spinner fa-spin fa-2x"></i>
                    <span className="ml-3">{item.status}</span>
                  </p>
                )}
              </div>
            </Col>
          );
        })}
    </Row>
  );
};
