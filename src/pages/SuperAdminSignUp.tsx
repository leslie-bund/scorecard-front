import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FormInput, Card, FormButton, Form } from "../component";
import { Heading, Paragraph, HorizontalLine } from "../styling/css";
import axios from "axios"
import swal from "sweetalert"

type SuperAdminSignUpProps = {};

const SuperAdminSignUp: FC = (props: SuperAdminSignUpProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [ formErrors, setFormErrors] = useState({firstName:'', lastName:'', email: '', password: ''});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setFormErrors(validate(formData));
      setIsSubmit(true);
      await axios.post("http://localhost:5000/admin/superuser",formData)
      swal("Success", "You have successfully signed up!", "success");

    } catch(error) {
        swal("Error", "Something went wrong", "error");
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors = {firstName:'', lastName:'', email: '', password: ''};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstName){
      errors.firstName = "First name is required";
    }
    if(!values.lastName){
      errors.lastName = "Last name is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid email address";
    }
    if(!values.password){
      errors.password = "Password is required";
    } else if(values.password.length < 4){
      errors.password = "Password must be at least 4 characters";
    }
    return errors;
  };

  return (
    <>
      <Heading>SuperAdmin Signup</Heading>
      <Card>
        <div>
          <Paragraph>Fill in all required details.</Paragraph>
          <HorizontalLine />
        </div>

        <div style={{ padding: "2rem 2.5rem" }}>
          <Form
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInput
              label="First Name"
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={(e) => handleChange(e)}
            />
            <p>{formErrors.firstName}</p>

            <FormInput 
              label="Last Name"
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={(e) => handleChange(e)}
            />
            <p>{formErrors.lastName}</p>

            <FormInput 
              label="Email"
              type="email"
              value={formData.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <p>{formErrors.email}</p>

            <FormInput 
              label="Password"
              type="password"
              value={formData.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <p>{formErrors.password}</p>

            <FormButton text="Create Super Admin" />

          </Form>
        </div>
      </Card>
    </>
  );
};

export default SuperAdminSignUp;
