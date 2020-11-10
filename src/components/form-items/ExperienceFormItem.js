import React from "react";
import FormItem from "./FormItem";

import ExperienceFormCard from "./ExperienceFormCard";

export default function ExperienceFormItem() {
  return (
    <FormItem
      label="Experience"
      description="Your work experience"
      FormCard={ExperienceFormCard}
    />
  )
}