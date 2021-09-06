import React, {useState} from 'react'
import Validation from '../forms/validation'
import Alert from '../alerts'

const CreateAccount = ({message = null}) => {
  const [data, onSubmit] = useState(null)
  let items = [
    {
      label: 'Username',
      error: {required: 'Please enter a valid username'},
      name: 'username',
      type: 'text',
      placeholder: 'Enter you username'
    },
    {
      label: 'Password',
      error: {
        required: 'Password is required',
        minLength: {
          value: 4,
          message: 'Your password should have at least 4 characters'
        },
        maxLength: {
          value: 8,
          message: 'Your password should have no more than 8 characters'
        }
      },
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password'
    },
    {
      label: 'Full Name',
      error: {required: 'Please enter a valid full name'},
      name: 'username',
      type: 'text',
      placeholder: 'Enter you username'
    },
    {
      label: 'Email',
      error: {required: 'Please enter a valid email'},
      name: 'email',
      type: 'email',
      placeholder: 'Enter you email'
    },
    {
      label: 'User Group',
      error: {
        required: 'user group is required',
        validate: value =>
          ['user-g1', 'user-g2', 'user-g3'].includes(value) ||
          'User group is required'
      },
      name: 'language',
      type: 'select',
      options: [
        {value: null, label: 'Select user group'},
        {value: 'user-g1', label: 'Group 1'},
        {value: 'user-g2', label: 'Group 2'},
        {value: 'user-g3', label: 'Group 3'}
      ]
    },
    {
      label: 'Department',
      error: {
        required: 'Department is required',
        validate: value =>
          ['dept-1', 'dept-2', 'dept-3'].includes(value) ||
          'Department is required'
      },
      name: 'department',
      type: 'select',
      options: [
        {value: null, label: 'Select department'},
        {value: 'dept-1', label: 'dep 1'},
        {value: 'dept-2', label: 'dep 2'},
        {value: 'dept-3', label: 'dep 3'}
      ]
    },
    {
      label: 'Phone number',
      error: {required: 'Please enter a valid username'},
      name: 'username',
      type: 'text',
      placeholder: 'Enter phone number'
    },
       {
      label: 'Designation',
      error: {
        required: 'Designation is required',
        validate: value =>
          ['des-1', 'des-2', 'des-3'].includes(value) ||
          'Designation is required'
      },
      name: 'Designation',
      type: 'select',
      options: [
        {value: null, label: 'Select designation'},
        {value: 'des-1', label: 'des 1'},
        {value: 'des-2', label: 'des 2'},
        {value: 'des-3', label: 'des 3'}
      ]
    },
    {
      label: 'Tax Station',
      error: {
        required: 'Tax station is required',
        validate: value =>
          ['station-1', 'station-2', 'station-3'].includes(value) ||
          'Department is required'
      },
      name: 'department',
      type: 'select',
      options: [
        {value: null, label: 'Select department'},
        {value: 'station-1', label: 'sta 1'},
        {value: 'station-2', label: 'sta 2'},
        {value: 'station-3', label: 'sta 3'}
      ]
    },
    // {
    //   label: null,
    //   error: {
    //     required: 'Please agree to our terms of service'
    //   },
    //   name: 'terms',
    //   type: 'checkbox',
    //   options: [{value: true, label: 'I agree to the terms of service'}]
    // },
    // {
    //   label: null,
    //   error: {
    //     required: 'Please agree to our privacy policy'
    //   },
    //   name: 'privacy-policy',
    //   type: 'checkbox',
    //   options: [{value: true, label: 'I agree to the privacy policy'}]
    // },
  ]
  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default CreateAccount
