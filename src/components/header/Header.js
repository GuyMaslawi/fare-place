import {Title, Wrapper} from "./Header.style";

const Header = ({title}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
        </Wrapper>
    );
};

export default Header;
