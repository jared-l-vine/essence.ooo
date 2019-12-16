import React, { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
const LazyApp: FunctionComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: ""
      }}
      onSubmit={variables => {}}
    >
      <Form style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
        <fieldset>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Game Name" />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span>Description</span>
            <Field
              component="textarea"
              name="description"
              placeholder="Description"
            />
          </label>
          <button type="submit">Create Listing</button>
        </fieldset>
      </Form>
    </Formik>
  );
};

export default LazyApp;
