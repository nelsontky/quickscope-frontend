import React from "react";
import FormItem from "./FormItem";

import ProjectsFormCard from "./ProjectsFormCard";

export default function ProjectsFormItem() {
  return (
    <FormItem
      label="Projects"
      description="Side projects that you have done"
      FormCard={ProjectsFormCard}
    />
  )
}