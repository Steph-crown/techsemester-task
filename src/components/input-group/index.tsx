import { FC } from "react";
import { IInputGroup } from "./interface";
import { InputGroupContainer } from "./style";

export const InputGroup: FC<IInputGroup> = ({
    label,
    placeholder,
    type,
    name,
    width,
    handleChange,
    error,
}) => {
    return (
        <InputGroupContainer width={width} error={error ? true : false}>
            <small>{label}</small>

            <input
                type={type || "text"}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                id={name}
            />
            {error && <small className="error">{error}</small>}
        </InputGroupContainer>
    );
};
