import {ButtonStyle} from "./MainButton.style";

const MainButton = ({
                        variant = "contained",
                        color = "primary",
                        children
                    }) => {
    return (
        <ButtonStyle variant={variant}
                     color={color}>
            {children}
        </ButtonStyle>
    );
};

export default MainButton;
