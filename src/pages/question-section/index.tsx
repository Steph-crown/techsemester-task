import { FC } from "react";
import { IQuestionSectionProps } from "./question.interface";
import { QuestionSectionContainer } from "./question.style";

import avatar from "../../assets/avatar.png";
import { MarkdownEditor } from "../../components/markdown-editor";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { Header } from "../../components/header";

export const QuestionSection: FC<IQuestionSectionProps> = () => {
    return (
        <div
            style={{ backgroundColor: "var(--milk-color)", minHeight: "100vh" }}
        >
            <Header />{" "}
            <QuestionSectionContainer>
                <figure className="avatar">
                    <img src={avatar} alt="" />
                    <p>Steph Crown</p>
                </figure>
                <h1>Ask your Question!</h1>
                <main>
                    <h3>Body</h3>
                    <p>Input all information needed to answer your question.</p>

                    <MarkdownEditor />

                    <div className="flex">
                        <div>
                            <h3>Tags</h3>
                            <p>
                                Write up to 5 tags to describe what your
                                question is about.
                            </p>
                        </div>
                        <BsFillQuestionCircleFill />
                    </div>
                    <input type="text" placeholder="e.g. (mysql, html)" />
                    <Button round={true}>Post your question</Button>
                </main>
            </QuestionSectionContainer>
        </div>
    );
};
