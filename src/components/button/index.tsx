import { FC } from "react";
import { IButtonProps } from "./button.interface";
import { ButtonContainer } from "./button.style";

export const Button: FC<IButtonProps> = ({
    children,
    onClick,
    className,
    round,
}: IButtonProps) => {
    return (
        <ButtonContainer {...{ round, className }}>{children}</ButtonContainer>
    );
};
