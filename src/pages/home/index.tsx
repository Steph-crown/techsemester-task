import { FC } from "react";
import { Route } from "react-router-dom";
import { QuestionSection } from "../../components/question-section";
import { Header } from "../components/header";
import { HomePageContainer } from "./home.style";

export const HomePage: FC = () => {
    return (
        <HomePageContainer>
            <Header />
        </HomePageContainer>
    );
};
