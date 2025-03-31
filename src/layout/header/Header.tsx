import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items =["Projects", "About", "Digital Assets", "Let’s Talk"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    
`;