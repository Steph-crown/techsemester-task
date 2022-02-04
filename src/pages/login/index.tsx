import { useFormik } from "formik";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Authentication } from "../../components/authentication";
import { ILoginData } from "./login.interface";
import { InputGroup } from "./../../components/input-group";

export const Login: FC = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        } as ILoginData,
        onSubmit: (values) => {},
    });

    return (
        <Authentication title="Login">
            <form action="">
                <h3>Login to your account</h3>
                <p>
                    Thank you for getting back to Lottery Display. Sign in to
                    continue
                </p>

                <hr />
                <section>
                    <header>
                        <h2>User's information</h2>
                    </header>
                    <div>
                        <InputGroup
                            label="Email"
                            // placeholder="Enter your full name"
                            name="password"
                            value={formik.values.email}
                            width="100%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.email &&
                                formik.touched.email &&
                                formik.errors.email
                            }
                        />{" "}
                        <InputGroup
                            label="Password"
                            // placeholder="Enter your full name"
                            name="password"
                            value={formik.values.password}
                            width="100%"
                            handleChange={formik.handleChange}
                            error={
                                formik.errors.password &&
                                formik.touched.password &&
                                formik.errors.password
                            }
                            type="password"
                        />{" "}
                        <Button round={false}>Create account</Button>
                    </div>
                    <b>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </b>
                </section>
            </form>
        </Authentication>
    );
};
