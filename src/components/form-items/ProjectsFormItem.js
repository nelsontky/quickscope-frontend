import React from "react";
import { useStore } from "../../store";

import FormItem from "./FormItem";
import ProjectsFormCard from "./ProjectsFormCard";

export default function ProjectsFormItem() {
  const { projects, setProjects } = useStore();

  return (
    <FormItem
      label="Projects"
      description="Side projects that you have done"
      FormCard={ProjectsFormCard}
      details={projects}
      setDetails={setProjects}
    />
  )
}