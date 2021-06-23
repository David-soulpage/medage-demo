import React from "react";
import { AppointmentsList } from "components/tables";
import CommonCard from "./CommonCard";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "@styled-icons/boxicons-regular";

const AppointmentCard = () => {
  return (
    <CommonCard>
      <div className="d-flex align-items-center">
        <div>
          <h6 className="fw-bold m-0">Appointments</h6>
        </div>

        <div className="ms-auto">
          <InputGroup className="d-flex align-items-center bg-light">
            <Form.Control placeholder="Search" className="border-0 bg-light" />
            <Search className="text-dark mx-2" size="20" />
          </InputGroup>
        </div>
      </div>
      <div className="my-3">
        <AppointmentsList />
      </div>
      <div className="d-flex justify-content-end">
        <small className="text-primary">View All</small>
      </div>
    </CommonCard>
  );
};

export default AppointmentCard;
