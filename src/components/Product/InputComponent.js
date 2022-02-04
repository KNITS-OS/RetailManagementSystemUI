import { React } from 'react';
import {
    FormGroup,
    Input
  } from "reactstrap";

export const InputComponent = ({
    inputLabel = '',
    inputPlaceholder = '',
    inputType = 'text',
    inputName,
    inputId,
    inputField,
    errors = {},
    customErrorMsg = ''
  }) => {
  return (
    <FormGroup>
      <label
        className="form-control-label"
        htmlFor={inputId}
      >
        {inputLabel} 
      </label>
      <Input
        className={`form-control-alternative ${errors[inputName] ? 'is-invalid' : ''}`}
        id={inputId}
        placeholder={inputPlaceholder}
        type={inputType}
        {...inputField}
      />
      <div className="invalid-feedback">
        {customErrorMsg ? customErrorMsg : errors[inputName]?.message}
      </div>
    </FormGroup>
  )
}