import { FC } from "react";
import { Header } from "../../components/header";
import { HomePageContainer } from "./home.style";

export const HomePage: FC = () => {
    return (
        <HomePageContainer>
            <Header />
        </HomePageContainer>
    );
};
