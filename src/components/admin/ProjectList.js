import Axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Table } from "reactstrap";
import { userContext } from "../../App";
import Loader from "../loader/Loader";

export const ProjectList = ({ setTitle }) => {
  const { url } = useContext(userContext);
  const history = useHistory();

  const handleSelect = (id, e) => {
    const selected = e.target.value;
    Axios.patch(url + "/projectStatus", {
      status: selected,
      id: id,
    }).then((res) => {
      if (res.data) {
        history.push("/admin");
      } else {
        alert("operation couldn't be done.");
      }
    });
  };

  const [textFull, setTextFull] = useState(false);
  const [projectLists, setProjectLists] = useState(null);

  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
    Axios.get(url + "/projectlist")
      .then((res) => {
        setProjectLists(res.data);
      })
      .catch((err) => {
        alert("couldn't load data.");
      });
  }, [newTitle, setTitle, url]);
  return (
    <Col xs={12} className="mt-3 bg-white table-responsive-sm">
      <Table responsive borderless className="text-center p-0">
        <thead className="border-bottom thead-light">
          <tr
            style={{
              color: "rgba(0,0,0,.6)",
            }}
          >
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Project Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projectLists &&
            projectLists.length > 0 &&
            projectLists.map((project) => {
              return (
                <tr>
                  <td>{project.name}</td>
                  <td>{project.email}</td>
                  <td>{project.orderedService}</td>
                  <td
                    onClick={() => setTextFull(!textFull)}
                    style={{ cursor: "pointer" }}
                  >
                    {textFull
                      ? project.projectDetails
                      : project.projectDetails.slice(0, 10) + "..."}
                  </td>
                  <td>
                    <select
                      className={`border-0 ${
                        project.status === "on Going"
                          ? "text-warning"
                          : project.status === "done"
                          ? "text-success text-white"
                          : "text-danger text-white"
                      }`}
                      name="status"
                      onInput={(e) => handleSelect(project._id, e)}
                      defaultValue={project.status}
                    >
                      <option value={project.status} hidden selected>
                        {project.status}
                      </option>
                      <option
                        value="pending"
                        className="text-danger text-white"
                      >
                        pending
                      </option>
                      <option value="on Going" className="text-warning">
                        on Going
                      </option>
                      <option value="done" className="text-success text-white">
                        done
                      </option>
                    </select>
                  </td>
                </tr>
              );
            })}
          {projectLists && projectLists.length === 0 && (
            <p
              style={{ fontSize: "3rem" }}
              className="text-success text-center font-weight-bold"
            >
              no order takes place.
            </p>
          )}
          {projectLists === null && <Loader />}
        </tbody>
      </Table>
    </Col>
  );
};
