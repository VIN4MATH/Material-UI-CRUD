import React,{useEffect} from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Radio,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useForm, Form } from "../useForm";
import InputCnt from "../../Components/Controls/Input";
import RadioCnt from "../../Components/Controls/Radio";
import Select from "../../Components/Controls/Select";
import * as EmployeeService from "../../Services/EmployeeServices";
import CheckboxCnt from "../../Components/Controls/Checkbox";
import DatePicker from "../../Components/Controls/DatePicker";
import ButtonsCnt from "../../Components/Controls/Buttons";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "Others", title: "Others" },
];

const initialFValues = {
  id: "0",
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeesForm(props) {
const {addOrEdit,recordForEdit } = props

  const Validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "Name is Required ";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not Valid";
    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Min 10 numbers required";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is Required";
    setErrors({
      ...temp,
    });
    if (fieldValues = values)
      return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialFValues, true, Validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
        addOrEdit(values,resetForm);
    }
  };

  useEffect(() => {
    if(recordForEdit !== null)
      setValues({
        ...recordForEdit
      })
  },[recordForEdit] )

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <InputCnt
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <InputCnt
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <InputCnt
            name="mobile"
            label="Mobile Number"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <InputCnt
            name="city"
            label="City "
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioCnt
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Select
            name="departmentId"
            label="Department"
            values={values.departmentId}
            onChange={handleInputChange}
            options={EmployeeService.getDepartmentCollections()}
            error={errors.departmentId}
          />
          <DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <CheckboxCnt
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <ButtonsCnt
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              text="Submit"
            />
            <ButtonsCnt
              variant="contained"
              type="reset"
              color="primary"
              size="large"
              text="Reset "
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
