import React from "react";

export default function DivButton({ children, style = {}, onClick }) {
  return (
    <div style={{ cursor: "pointer", ...style }} onClick={onClick}>
      {children}
    </div>
  )
}