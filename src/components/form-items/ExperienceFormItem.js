import React from "react";
import { useStore } from "../../store";

import FormItem from "./FormItem";
import ExperienceFormCard from "./ExperienceFormCard";

export default function ExperienceFormItem() {
  const { experiences, setExperiences } = useStore();

  return (
    <FormItem
      label="Experience"
      description="Your work experience"
      FormCard={ExperienceFormCard}
      details={experiences}
      setDetails={setExperiences}
    />
  )
}