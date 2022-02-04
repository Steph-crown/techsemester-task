import { FC } from "react";
import { HeaderContainer } from "./header.style";

import avatar from "./../../assets/avatar.png";

import { FiSearch } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { ImPlay } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { Button } from "../button";

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <label htmlFor="search">
                {" "}
                <FiSearch color="var(--placeholder)" />
                <input type="search" placeholder="Search TechSemester" />
            </label>
            <nav className="md">
                <NavLink
                    to="/"
                    className={(active) => (active ? "active" : "")}
                >
                    <IoHome />
                    <span>Home</span>{" "}
                </NavLink>
                <NavLink to="/media">
                    <ImPlay />
                    <span>Media</span>
                </NavLink>

                <NavLink to="/media">
                    <IoNotificationsSharp />
                    <span>Media</span>
                </NavLink>
                <img src={avatar} alt="Avatar" className="avatar" />
                <Button round={true}>Ask Question</Button>
            </nav>

            <div className="sm">
                <CgMenuRight />
            </div>
        </HeaderContainer>
    );
};
