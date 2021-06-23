import React from "react";
//router
import { useRouter } from "next/router";
//react bootstrap
import { InputGroup, Form } from "react-bootstrap";
//icons
import { Search } from "@styled-icons/boxicons-regular";
import ActiveLink2 from "./ActiveLink2";

const AdminNavbar = () => {
  const router = useRouter();
  const data = [
    {
      name: "Dashboard",
      route: "/doctor/1/dashboard",
    },
    {
      name: "Appointments",
      route: "/doctor/1/appointment",
    },
    {
      name: "Tasks",
      route: "/doctor/1/tasks",
    },
    {
      name: "Reports",
      route: "/doctor/1/reports",
    },
    {
      name: "Analytics",
      route: "/doctor/1/analytics",
    },
  ];

  const data2 = [
    {
      name: "Dashboard",
      route: "/admin/dashboard",
    },
    {
      name: "Finance",
      route: "/admin/finances/billing-summary",
    },
    {
      name: "Forms",
      route: "/admin/forms",
    },
    {
      name: "Inventory",
      route: "/admin/inventory/hospital-stretchers",
    },
    {
      name: "HR",
      route: "/admin/hr/doctors",
    },
  ];

  const data3 = [
    {
      name: "Dashboard",
      route: "dashboard",
    },
    {
      name: "Patient Information",
      route: "patient-information",
    },
    {
      name: "Doctors",
      route: "doctor-list",
    },
    {
      name: "Reports",
      route: "reports",
    },
    {
      name: "Calendar",
      route: "calendar",
    },
  ];
  return (
    <div className="d-flex py-2 px-5 align-items-center bg-white shadow-sm">
      <div className="d-flex justify-content-around align-items-center w-75 mx-auto">
        {(router.pathname.startsWith("/doctor")
          ? data
          : router.pathname.startsWith("/admin")
          ? data2
          : router.pathname.startsWith("/nurse")
          ? data3
          : router.pathname.startsWith("/receptionist")
          ? data3
          : []
        ).map((item, id) => (
          <ActiveLink2 href={item.route} key={id}>
            <h6 className="fw-normal m-0 cr-p">{item.name}</h6>
          </ActiveLink2>
        ))}
      </div>

      <InputGroup className="bg-light rounded px-2 d-flex align-items-center w-25">
        <InputGroup.Prepend>
          <Search size="20" />
        </InputGroup.Prepend>
        <Form.Control placeholder="Search Here" className="bg-light border-0" />
      </InputGroup>
    </div>
  );
};

export default AdminNavbar;
