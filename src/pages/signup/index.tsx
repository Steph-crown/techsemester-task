import { useFormik } from "formik";
import { FC, useState } from "react";
import { InputGroup } from "../../components/input-group";
import { Authentication } from "../../components/authentication";
import { ISignUpData } from "./signup.interface";

import { Checkbox } from "../../components/checkbox";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { signupFormValidation } from "./signup.validation";

export const Signup: FC = () => {
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            password1: "",
            password2: "",
        } as ISignUpData,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: signupFormValidation,
    });

    const [receiveEmails, setReceiveEmails] = useState<boolean>(false);
    const [privacy, setPrivacy] = useState<boolean>(false);
    return (
        <Authentication title="Register">
            <form action="" onSubmit={formik.handleSubmit}>
                <h3>Manage all your lottery efficiently</h3>
                <p>
                    Let's get you all set up so you can verify your personal
                    account and begin setting up your file
                </p>
                <hr />
                <section>
                    <header>
                        <h2>User's information</h2>
                    </header>
                    <div>
                        <InputGroup
                            label="First Name"
                            name="first_name"
                            value={formik.values.first_name}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.first_name &&
                                formik.touched.first_name &&
                                formik.errors.first_name
                            }
                        />{" "}
                        <InputGroup
                            label="Last Name"
                            name="last_name"
                            value={formik.values.last_name}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.last_name &&
                                formik.touched.last_name &&
                                formik.errors.last_name
                            }
                        />{" "}
                        <InputGroup
                            label="Phone Number"
                            name="phone"
                            value={formik.values.phone}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.phone &&
                                formik.touched.phone &&
                                formik.errors.phone
                            }
                        />{" "}
                        <InputGroup
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.email &&
                                formik.touched.email &&
                                formik.errors.email
                            }
                        />{" "}
                        <InputGroup
                            label="Password"
                            name="password1"
                            value={formik.values.password1}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.password1 &&
                                formik.touched.password1 &&
                                formik.errors.password1
                            }
                            type="password"
                        />{" "}
                        <InputGroup
                            label="Confirm Password"
                            // placeholder="Enter your full name"
                            name="password2"
                            value={formik.values.password2}
                            width="48%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.password2 &&
                                formik.touched.password2 &&
                                formik.errors.password2
                            }
                            type="password"
                        />{" "}
                        <div className="checkbox-list">
                            <Checkbox
                                setSelected={setReceiveEmails}
                                selected={receiveEmails}
                                name="Sunday"
                                label={
                                    "Yes, I want to receive Lottery Display File"
                                }
                            />
                            <Checkbox
                                setSelected={setPrivacy}
                                selected={privacy}
                                name="Sunday"
                                label={
                                    <>
                                        I agree to all the{" "}
                                        <Link to="/signup">Terms</Link>,{" "}
                                        <Link to="/signup">Privacy Policy</Link>
                                        and <Link to="/signup">Fees</Link>
                                    </>
                                }
                            />
                        </div>
                        <Button round={false} type="submit">
                            Create account
                        </Button>
                    </div>
                    <b>
                        Already have an account? <Link to="/login">Login</Link>
                    </b>
                </section>
            </form>
        </Authentication>
    );
};
