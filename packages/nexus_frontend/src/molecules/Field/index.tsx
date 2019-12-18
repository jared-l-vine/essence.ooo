import React, { FunctionComponent } from "react";
import { Field as FormikField } from "formik";

const Field: FunctionComponent<{
  name: string;
  label?: string;
  fieldType?: string;
  placeholder?: string | null;
}> = ({ name, label = name, fieldType = "text", placeholder = label }) => (
  <label style={{ display: "flex", flexDirection: "column" }}>
    <span>{label}</span>
    <FormikField
      type={fieldType}
      name={name}
      placeholder={placeholder}
      component={fieldType === "textarea" ? "textarea" : undefined}
    />
  </label>
);

export default Field;
