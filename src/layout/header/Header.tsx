import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu.tsx";
import {ContainerBox} from "../../components/ContainerBox.ts";
import {Button} from "../../components/Botton.tsx";

const items =["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerBox>
                    <Logo/>
                    <RightSideMenu>
                        <HeaderMenu menuItems={items}/>
                        <Button>Let’s Talk</Button>
                    </RightSideMenu>
            </ContainerBox>
        </StyledHeader>
    );
};

const RightSideMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const StyledHeader = styled.header`
    background: #fff;
    padding: 20px 0 0 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: space-between;
`