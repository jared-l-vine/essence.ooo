import React, { FunctionComponent, Fragment, useEffect } from "react";

import { Formik, Form, Field } from "formik";
import {
  useCreateListingMutation,
  CreateListingMutationVariables
} from "./createListing.generated";
import { useGetListingsLazyQuery } from "./GetListings.generated";
import useAuthContext from "../../../services/auth";
import LoginOrganism from "../../../organisms/login";

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
            description: ""
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
        {({ isValid }) => (
          <Fragment>
            {error && <span>{error.message}</span>}
            <Form
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <fieldset disabled={!user || loading}>
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
