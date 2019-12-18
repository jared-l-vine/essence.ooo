import React, { FunctionComponent, Fragment, useEffect } from "react";

import { Formik, Form, Field as FormikField } from "formik";
import {
  useCreateListingMutation,
  CreateListingMutationVariables
} from "./createListing.generated";
import { useGetListingsLazyQuery } from "./GetListings.generated";
import useAuthContext from "../../../services/auth";
import LoginOrganism from "../../../organisms/login";
import Field from "../../../molecules/Field";
import SelectField from "../../../molecules/Field/Select";

const CreateListingPage: FunctionComponent = () => {
  const { user } = useAuthContext();
  const [
    getListings,
    { data: getListingsData, error: getListingsError }
  ] = useGetListingsLazyQuery();
  const [createListing, { loading, error }] = useCreateListingMutation();

  useEffect(() => {
    if (user) {
      getListings({ variables: { owner_id: user.id } });
    }
  }, [user]);

  return (
    <div
      style={{
        maxWidth: "100%",
        width: 600,
        height: "100%",
        background: "#fbfaf499",
        padding: 6,
        boxSizing: "border-box",
        margin: "0 auto",
        borderLeft: "2px solid #fbfaf4",
        borderRight: "2px solid #fbfaf4"
      }}
    >
      <LoginOrganism />

      <h2>Create New Listing</h2>
      <Formik
        initialValues={
          {
            title: "",
            description: "",
            edition: "Third",
            medium: "Online Voice",
            schedule: undefined,
            players: 5
          } as CreateListingMutationVariables
        }
        onSubmit={async variables => {
          try {
            const { data, errors } = await createListing({
              variables: { ...variables, owner_id: user?.id as string }
            });
            if (!errors) {
              console.log(data);
            }
          } catch (ex) {
            console.log(ex);
          }
        }}
      >
        {({ isValid, setFieldValue, values }) => (
          <Fragment>
            {console.log(values)}
            {error && <span>{error.message}</span>}
            <Form
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <fieldset disabled={!user || loading}>
                <Field name="title" label="Game Name" />
                <div style={{ display: "flex", flexBasis: "33%" }}>
                  <SelectField
                    name="edition"
                    label="Edition"
                    options={["First", "Second", "Third"].map(v => ({
                      label: v,
                      value: v
                    }))}
                  />
                  <SelectField
                    name="medium"
                    label="Play Medium"
                    options={["Online Voice", "Online Text", "In Person"].map(
                      v => ({
                        label: v,
                        value: v
                      })
                    )}
                  />
                  <Field name="players" label="Players" fieldType="number" />
                </div>
                <Field name="schedule" label="Schedule" />
                <Field
                  name="description"
                  label="Description"
                  fieldType="textarea"
                />

                <button type="submit" disabled={!isValid}>
                  Create Listing
                </button>
              </fieldset>
            </Form>
          </Fragment>
        )}
      </Formik>
      {(getListingsData?.allListings?.listings?.length ?? 0) > 0 && (
        <Fragment>
          <h2>Your Listings</h2>
          <ul>
            {getListingsData?.allListings?.listings!.map(l => (
              <li key={l?.id}>{l?.title}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default CreateListingPage;
