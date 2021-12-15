import { React } from 'react';
import {
    FormGroup,
    Input
  } from "reactstrap";

export const SelectComponent = ({
    inputLabel = '',
    inputPlaceholder = '',
    inputType = 'select',
    inputName,
    inputId,
    inputField,
    errors = {},
    options = [],
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
      >
       {
          options && 
          options.map(option => (
              <option key={option.value} value={option.value}>
              {option.label}
              </option>
          ))
        }
      </Input>
      <div className="invalid-feedback">
        {customErrorMsg ? customErrorMsg : errors[inputName]?.message}
      </div>
    </FormGroup>
  )
}