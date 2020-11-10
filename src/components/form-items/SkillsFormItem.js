import React from "react";
import FormItem from "./FormItem";

import SkillsFormCard from "./SkillsFormCard";

export default function SkillsFormItem() {
  return (
    <FormItem
      label="Skills"
      description="Skills that you have picked up"
      FormCard={SkillsFormCard}
    />
  )
}