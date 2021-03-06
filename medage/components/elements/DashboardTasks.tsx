import React from "react";
//local components
import { CommonCard } from "components/card";

//icons
import { CheckDouble } from "@styled-icons/remix-fill";

const DashboardTasks = () => {
  const tasks = [
    {
      title: "Meeting with Doctor John",
      status: "Online",
      date: "29 Apr 2021",
    },
    {
      title: "Client Bernard Stanley",
      status: "Exam 04",
      date: "31 Apr 2021",
    },
    {
      title: "Meeting with the client",
      status: "Exam 08",
      date: "01 Oct 2021",
    },
    {
      title: "Client Bernard Stanley",
      status: "Exam 03",
      date: "04 Oct 2021",
    },
  ];
  return (
    <CommonCard>
      <div className="d-flex align-items-center">
        <div>
          <h6 className="fw-bold m-0">Tasks</h6>
        </div>
        <div className="ms-auto">
          <button className="btn btn-sm btn-outline-dark text-muted">
            New Task +
          </button>
        </div>
      </div>
      {tasks.map((task, id) => (
        <div key={id} className="mt-4">
          <div className="d-flex align-items-center">
            <div className="p-3 border-0 bg-light-primary rounded">
              <CheckDouble className="text-primary" size="20" />
            </div>
            <div className="ms-3">
              <small className="m-0 d-block text-dark fw-bold">
                {task.title}
              </small>
              <small className="text-muted">{task.status}</small>
            </div>
            <div className="ms-auto text-muted">
              <small className="fw-bold">{task.date}</small>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end">
        <small className="text-primary">View All</small>
      </div>
    </CommonCard>
  );
};

export default DashboardTasks;
