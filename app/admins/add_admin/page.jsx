import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";
import { StepperIndicator } from "./components/StepperIndicator";
import GeneralInfo from "./components/GeneralInfo";

function NewAdmin() {
  const links = [{ text: "Admins", href: "/admins" }];

  return (
    <Layout>
      <Breadcrumbs path={links} terminalPath={"Add Admin"} />
      <Title text={"Add new Admin"} />
      <div className="mt-10 ml-64 flex items-center justify-center">
        <StepperIndicator activeStep={1} totalSteps={3} />
      </div>
      <GeneralInfo />
    </Layout>
  );
}

export default NewAdmin;
