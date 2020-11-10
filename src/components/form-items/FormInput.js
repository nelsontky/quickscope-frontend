import React from "react";

export default function FormInput({ children, style = {}, textarea, ...rest }) {
  if (textarea) {
    return (
      <textarea style={{}}>
        {children}
      </textarea>
    )
  }

  return (
    <input style={{ height: 30, fontFamily: "Montserrat", ...style }} {...rest}>
      {children}
    </input>
  )
}