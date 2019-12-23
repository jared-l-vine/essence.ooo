import React, { FunctionComponent, Fragment } from "react";
import toNumber from "lodash/toNumber";
import { Formik, Form } from "formik";
import {
  useCreateListingMutation,
  CreateListingMutationVariables
} from "./CreateListing.generated";
// import { useGetListingsLazyQuery } from "./GetListings.generated";
import useAuthContext from "../../../services/auth";
import LoginOrganism from "../../../organisms/login";
import Field from "../../../molecules/Field";
import SelectField from "../../../molecules/Field/Select";

const CreateListingPage: FunctionComponent = () => {
  const { user } = useAuthContext();
  // const [
  //   getListings,
  //   { data: getListingsData, error: getListingsError }
  // ] = useGetListingsLazyQuery();
  const [createListing, { loading, error }] = useCreateListingMutation();

  // useEffect(() => {
  //   if (user) {
  //     getListings({ variables: { owner_id: user.id } });
  //   }
  // }, [user]);

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
            splat: "Solars",
            edition: "Third",
            medium: "Online Voice",
            schedule: undefined,
            players: undefined,
            owner_id: toNumber(user?.id)
          } as CreateListingMutationVariables
        }
        onSubmit={async (variables, formik) => {
          try {
            const { errors } = await createListing({
              variables: { ...variables, owner_id: toNumber(user?.id) }
            });
            if (!errors) {
              formik.resetForm();
              alert("Your game will be posted shortly");
            }
          } catch (ex) {
            console.error(ex);
          }
        }}
      >
        {({ isValid, setFieldValue, values }) => (
          <Fragment>
            {error && <span>{error.message}</span>}
            <Form
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <fieldset disabled={!user || loading}>
                <Field name="title" label="Game Name" />
                <Field
                  name="description"
                  label="Description"
                  fieldType="textarea"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <SelectField
                    name="splat"
                    label="Splat"
                    options={[
                      "Solars",
                      "Dragon-Blooded",
                      "Lunars",
                      "Other"
                    ].map(v => ({ label: v, value: v }))}
                  />
                  <SelectField
                    name="edition"
                    label="Edition"
                    options={["First", "Second", "Third"].map(v => ({
                      label: v,
                      value: v
                    }))}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <SelectField
                    name="medium"
                    label="Medium"
                    options={["Online Voice", "Online Text", "In Person"].map(
                      v => ({
                        label: v,
                        value: v
                      })
                    )}
                  />

                  <Field
                    name="players"
                    label="Players"
                    fieldType="number"
                    flexDirection="row"
                    placeholder="0"
                  />
                </div>
                <Field name="schedule" label="Schedule" />

                <button type="submit" disabled={!isValid}>
                  Create Listing
                </button>
              </fieldset>
            </Form>
          </Fragment>
        )}
      </Formik>
      {/* {(getListingsData?.listings?.length ?? 0) > 0 && (
        <Fragment>
          <h2>Your Listings</h2>
          <ul>
            {getListingsData?.listings!.map(l => (
              <li key={l?.id}>{l?.title}</li>
            ))}
          </ul>
        </Fragment>
      )} */}
    </div>
  );
};

export default CreateListingPage;
