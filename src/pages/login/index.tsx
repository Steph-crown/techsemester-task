import { FC } from "react";
import { Authentication } from "./../components/authentication";

export const Login: FC = () => {
    return (
        <Authentication title="Login">
            <form action="">
                <h3>Login to your account</h3>
                <p>
                    Thank you for getting back to Lottery Display. Sign in to
                    continue
                </p>
            </form>
        </Authentication>
    );
};
