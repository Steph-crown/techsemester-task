import { FC } from "react";
import { AuthContainer } from "./auth.style";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import illustration from "./../../assets/illustration.png";

export const Authentication: FC<{ title: string }> = ({ children, title }) => {
    return (
        <AuthContainer>
            <aside className="left">
                <figure>
                    <Logo />
                    <figcaption>Lottery Display</figcaption>
                </figure>
                <h1>A few clicks from creating your Lottery Display</h1>
                <figure className="illustration__figure">
                    <img className="illustration" src={illustration} alt="" />
                </figure>
            </aside>
            <main>
                <h2>{title}</h2>
                {children}
            </main>
        </AuthContainer>
    );
};
