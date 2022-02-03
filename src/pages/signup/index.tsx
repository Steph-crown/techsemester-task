import { useFormik } from "formik";
import { FC, useState } from "react";
import { InputGroup } from "../../components/input-group";
import { Authentication } from "../components/authentication";
import { ISignUpData } from "./signup.interface";

import { Checkbox } from "../components/checkbox";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";

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
        onSubmit: (values) => {},
    });

    const [receiveEmails, setReceiveEmails] = useState<boolean>(false);
    const [privacy, setPrivacy] = useState<boolean>(false);
    return (
        <Authentication title="Register">
            <form action="">
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
                            // placeholder="Enter your full name"
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
                            // placeholder="Enter your full name"
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
                            label="Phone Number"
                            // placeholder="Enter your full name"
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
                            label="Email"
                            // placeholder="Enter your full name"
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
                            label="Password"
                            // placeholder="Enter your full name"
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
                            label="Confirm Password"
                            // placeholder="Enter your full name"
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
                        <Button round={false}>Create account</Button>
                    </div>
                    <b>
                        Already have an account? <Link to="/login">Login</Link>
                    </b>
                </section>
            </form>
        </Authentication>
    );
};
