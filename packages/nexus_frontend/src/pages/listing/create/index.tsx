import React, { FunctionComponent, Fragment } from "react";

import { Formik, Form, Field } from "formik";
import {
  useCreateListingMutation,
  CreateListingMutationVariables
} from "./createListing.generated";

const CreateListingPage: FunctionComponent = () => {
  const [createListing, { loading, error }] = useCreateListingMutation();
  return (
    <Formik
      initialValues={
        {
          title: "",
          description: ""
        } as CreateListingMutationVariables
      }
      onSubmit={async variables => {
        try {
          const {} = await createListing({
            variables
          });
        } catch (ex) {
          console.log(ex);
        }
      }}
    >
      {({ isValid }) => (
        <Fragment>
          {error && <span>{error.message}</span>}
          <Form
            style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}
          >
            <fieldset disabled={loading}>
              <label style={{ display: "flex", flexDirection: "column" }}>
                <span>Name</span>
                <Field type="text" name="title" placeholder="Game Name" />
              </label>
              <label style={{ display: "flex", flexDirection: "column" }}>
                <span>Description</span>
                <Field
                  component="textarea"
                  name="description"
                  placeholder="Description"
                />
              </label>
              <button type="submit" disabled={!isValid}>
                Create Listing
              </button>
            </fieldset>
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};

export default CreateListingPage;
