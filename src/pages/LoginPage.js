import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../services/authService';
import { useHistory } from 'react-router-dom';

const signinSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function LoginPage() {
  let history = useHistory();
  const [error, setError] = useState(null);

  async function handleSubmit(values, { setSubmitting }) {
    console.log({ values });
    setError(null);

    try {
      const data = await signIn(values);
      console.log(data);
      localStorage.setItem('token', data.token);
      history.push('/');
    } catch (e) {
      setError(e.response.data.error);
      console.log(e.response.data.error);
      // debugger;
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-4">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signinSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form
              className="form-signin"
              onSubmit={handleSubmit}
              novalidate="true"
            >
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-4">
                <label for="email" className="sr-only">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="me@example.com"
                  required
                  autofocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  className="form-error text-danger mt-2"
                  name="email"
                  component="small"
                />
              </div>

              <div className="mb-4">
                <label for="password" className="sr-only">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  className="form-error text-danger mt-2"
                  name="password"
                  component="small"
                />
              </div>
              <div className="mt-3 d-flex justify-content-end">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <Formik
  //       initialValues={{ email: '', password: '' }}
  //       validate={(values) => {
  //         const errors = {};
  //         if (!values.email) {
  //           errors.email = 'Required';
  //         } else if (
  //           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //         ) {
  //           errors.email = 'Invalid email address';
  //         }
  //         return errors;
  //       }}
  //       onSubmit={(values, { setSubmitting }) => {
  //         setTimeout(() => {
  //           alert(JSON.stringify(values, null, 2));
  //           setSubmitting(false);
  //         }, 400);
  //       }}
  //     >
  //       {({
  //         values,
  //         errors,
  //         touched,
  //         handleChange,
  //         handleBlur,
  //         handleSubmit,
  //         isSubmitting,
  //       }) => (
  //         <Form className="mb-3" onSubmit={handleSubmit}>
  //           <Field
  //             type="email"
  //             name="email"
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //             value={values.email}
  //           />
  //           <ErrorMessage
  //             className="form-error"
  //             name="email"
  //             component="small"
  //           />

  //           <Field
  //             type="password"
  //             name="password"
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //             value={values.password}
  //           />
  //           <ErrorMessage
  //             className="form-error"
  //             name="password"
  //             component="small"
  //           />

  //           <button type="submit" disabled={isSubmitting}>
  //             Submit
  //           </button>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // );
}
