import { useState } from "react";
import { Stepper } from "@mantine/core";
import { useTranslation } from "react-i18next";

const SignupStepper = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step
        label={t("signup.stepper.step1")}
        description={t("signup.stepper.step1desc")}
      />
      <Stepper.Step
        label={t("signup.stepper.step2")}
        description={t("signup.stepper.step2desc")}
      />
      <Stepper.Step
        label={t("signup.stepper.step3")}
        description={t("signup.stepper.step3desc")}
      />
      <Stepper.Step
        label={t("signup.stepper.step4")}
        description={t("signup.stepper.step4desc")}
      />
    </Stepper>
  );
};

export default SignupStepper;
