import { Fragment } from "react";
import { Footer } from "../layer";

import { StepWrapper, InputField } from "../ui";

import { removeFormDataFromLocalStorage } from "@/utils/local-storage-utils";
import { validateStepThree } from "@/utils/step-validators";

import { FileUpload } from "../feature/FileUploud";

export const ProfileStep = ({
  formErrors,
  formValues,
  goToNextStep,
  goToPreviousStep,
  updateFormErrors,
  handleInputChange,
  setFormValues,
  setFormErrors,
}) => {
  const { dateOfBirth } = formValues;
  const { dateOfBirth: errorDateOfBirth, profileImage: errorProfileImage } =
    formErrors;
  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepThree(formValues);
    if (isFormValid) {
      removeFormDataFromLocalStorage();
      console.log({ formValues });
      goToNextStep();
      return;
    }
    updateFormErrors(validationErrors);
  };
  return (
    <StepWrapper handleSubmit={handleSubmit}>
      <Fragment>
        <InputField
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          label="Date of birth"
          placeholder="--/--/--"
          error={errorDateOfBirth}
          onChange={handleInputChange}
        />
        <FileUpload
          error={errorProfileImage}
          setFormValues={setFormValues}
          setFormErrors={setFormErrors}
        />
        <Footer step="Continue 3/3" goToPreviousStep={goToPreviousStep} />
      </Fragment>
    </StepWrapper>
  );
};
