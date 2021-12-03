import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from './DatePicker'

let InputForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="title">Title</label>
    <Field name="title" component="select">
        <option />
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="miss">Miss</option>
        <option value="ms">Ms</option>
    </Field>
  </div>
  <div>
    <label htmlFor="firstName">First Name</label>
    <Field name="firstName" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="lastName">Last Name</label>
    <Field name="lastName" component="input" type="text" />
  </div>
    <DatePicker/>
    <div>
    <label htmlFor="income">Annual income</label>
    <Field name="income" component="input" type="text" placeholder="£" />
  </div>
  <div>
    <label htmlFor="employment-status">Employment Status</label>
    <Field name="employment-status" component="select">
        <option />
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Self-employed">Self-employed</option>
        <option value="Student">Student</option>
        <option value="Unemployed">Unemployed</option>
    </Field>
  </div>
  <div>
    <label htmlFor="house-number">House number</label>
    <Field name="house-number" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="postcode">Postcode</label>
    <Field name="postcode" component="input" type="text" />
  </div>
  <button type="submit">Submit</button>
</form>
}

InputForm = reduxForm({
  // a unique name for the form
  form: 'input'
})(InputForm)

export default InputForm