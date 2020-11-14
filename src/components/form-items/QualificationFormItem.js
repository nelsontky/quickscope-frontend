import React from "react";
import { useStore } from "../../store";

import FormItem from "./FormItem";
import QualificationFormCard from "./QualificationFormCard";

export default function QualificationFormItem() {
  const { qualifications, setQualifications } = useStore();
  return (
    <FormItem
      label="Qualifications"
      description="Your Certifications, Diplomas, Degrees or Awards"
      FormCard={QualificationFormCard}
      details={qualifications}
      setDetails={setQualifications}
    />
  )
}