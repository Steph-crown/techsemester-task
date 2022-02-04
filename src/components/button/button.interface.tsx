export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    round?: boolean;
    type?: "button" | "submit" | "reset";
}
