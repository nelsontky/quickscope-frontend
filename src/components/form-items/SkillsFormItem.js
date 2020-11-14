import React from "react";
import { useStore } from "../../store";

import FormItem from "./FormItem";
import SkillsFormCard from "./SkillsFormCard";

export default function SkillsFormItem() {
  const { skills, setSkills } = useStore();

  return (
    <FormItem
      label="Skills"
      description="Skills that you have picked up"
      FormCard={SkillsFormCard}
      details={skills}
      setDetails={setSkills}
    />
  )
}