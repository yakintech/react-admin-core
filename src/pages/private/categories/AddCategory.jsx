import { Button, LinearProgress } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import React from 'react'
import { useMutation } from 'react-query'
import { axiosInstance } from '../../../network/axiosInstance'
import { useNavigate } from 'react-router-dom'

function AddCategory() {

  let navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data) => {
      let result = await axiosInstance.post('categories', data);
      return result;
    }
    ,
    onSuccess: () => {
      navigate('/admin/categories');
    },
    onError: (err) => {
      console.log('Error', err);
    }
  })

  return (<>
    <Formik
      initialValues={{
        name: '',
        description: ''
      }}
      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {
          setSubmitting(false);

          mutation.mutate(values);
        }, 500);
      }}
    >

      {
        ({ isSubmitting, submitForm }) => (<Form>
          <Field
            component={TextField}
            name="name"
            type="text"
            label="Name"
          />
          <br />
          {isSubmitting && <LinearProgress />}
          <Field
            component={TextField}
            name="description"
            type="text"
            label="Description"
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>)
      }



    </Formik>
  </>
  )
}

export default AddCategory