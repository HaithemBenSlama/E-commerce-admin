"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React, { useState } from "react";
import { StepperIndicator } from "./components/StepperIndicator";
import GeneralInfo from "./components/GeneralInfo";
import AccountInfo from "./components/AccountInfo";
import Role from "./components/Role";

function Step1() {
  const links = [{ text: "Admins", href: "/admins" }];
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Layout>
      <Breadcrumbs path={links} terminalPath={"Add Admin"} />
      <Title text={"Add new Admin"} />
      <div className="mt-10 ml-64 flex items-center justify-center">
        <StepperIndicator activeStep={activeStep} totalSteps={3} />
      </div>
      {activeStep === 1 ? (
        <AccountInfo setActiveStep={setActiveStep} />
      ) : activeStep === 2 ? (
        <GeneralInfo setActiveStep={setActiveStep} />
      ) : (
        <Role setActiveStep={setActiveStep} />
      )}
    </Layout>
  );
}

export default Step1;
