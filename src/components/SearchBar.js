import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
});

const SearchBar = ({ onSubmit }) => {
  return (
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <Formik
          initialValues={{ name: '' }}
          validationSchema={searchSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="card-sm">
              <div class="card-body row no-gutters align-items-center">
                <div class="col">
                  <Field
                    type="search"
                    name="name"
                    className="form-control form-control-borderless"
                    placeholder="Search superheroes"
                  />
                </div>

                <div class="col-auto">
                  <button
                    class="btn btn-success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Search
                  </button>
                </div>
                <ErrorMessage
                  className="form-error text-danger mt-2"
                  name="name"
                  component="small"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchBar;
