// react
import React from "react";
// next
import Head from "next/head";
//components
import { CommonCard } from "components/card";
import DoctorLayout from "layouts/DoctorLayout";
import { Tasks as TasksList } from "components/elements";
//icons
import { Tasks as TaskIcon } from "@styled-icons/fa-solid";
import { CheckCircle } from "@styled-icons/fa-regular";
import { ArrowCounterclockwise } from "@styled-icons/bootstrap";
import { FilterAlt } from "@styled-icons/boxicons-regular/FilterAlt";

const Tasks = () => {
  const buttons = [
    {
      name: "All",
      icon: TaskIcon,
    },
    {
      name: "Not Done",
      icon: CheckCircle,
    },
    {
      name: "Not Pending",
      icon: ArrowCounterclockwise,
    },
  ];
  return (
    <>
      <Head>
        <title>Doctor Tasks</title>
      </Head>
      <DoctorLayout>
        <div className="container pt-2">
          <CommonCard>
            {/* Header */}
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div>
                {buttons.map((item, id) => {
                  const Icon = item.icon;
                  return (
                    <button className="btn btn-sm bg-light-primary fw-bold text-primary border-0 me-3">
                      <Icon className="text-primary" size="20" /> {item.name}
                    </button>
                  );
                })}
              </div>
              <button className="btn btn-sm btn-outline-dark ms-auto">
                <FilterAlt className="text-muted" size="20" /> SORT : A-Z
              </button>
            </div>
            {/* Task List */}
            <TasksList />
          </CommonCard>
        </div>
      </DoctorLayout>
    </>
  );
};

export default Tasks;
