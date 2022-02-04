import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuestionSection } from "./pages/question-section";
import { HomePage } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

export const Pages: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />{" "}
                <Route path="/question" element={<QuestionSection />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
