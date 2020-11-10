import React from "react";

export default function FormInput({ children, style = {}, ...rest }) {
  return (
    <input style={{ height: 30, fontFamily: "Montserrat", ...style }} {...rest}>
      {children}
    </input>
  )
}