import React from "react";
import FormItem from "./FormItem";

import QualificationFormCard from "./QualificationFormCard";

export default function QualificationFormItem() {
  return (
    <FormItem
      label="Qualifications"
      description="Your Certifications, Diplomas, Degrees or Awards"
      FormCard={QualificationFormCard}
    />
  )
}