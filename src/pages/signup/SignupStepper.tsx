import { useState } from "react";
import { Stepper } from "@mantine/core";

const SignupStepper = () => {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Find out about GradeGuard" />
      <Stepper.Step label="Step 2" description="Create your new account" />
      <Stepper.Step label="Step 3" description="Verify email" />
      <Stepper.Step label="Step 4" description="Better your grades!" />
    </Stepper>
  );
};

export default SignupStepper;
