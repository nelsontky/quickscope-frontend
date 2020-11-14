import React from "react";
import { useStore } from "../../store";

import FormItem from "./FormItem";

export default function IntroductionFormItem() {
  const { introduction, setIntroduction } = useStore();

  return (
    <FormItem
      textarea
      label="Introduction"
      description="A short introduction of yourself"
      intro={introduction}
      setIntro={setIntroduction}
    />
  )
}