import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu.tsx";
import {ContainerBox} from "../../components/ContainerBox.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./MobileMenu/MobileMenu.tsx";
import {Button} from "../../components/Botton.tsx";
import {theme} from "../../styles/Theme.ts";

const items =["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerBox>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <RightSideMenu>
                        <HeaderMenu menuItems={items}/>
                        <MobileRightBlock>
                        <Button>Let's Talk</Button>
                        <MobileMenu menuItems={items}/>
                        </MobileRightBlock>

                    </RightSideMenu>
                </FlexWrapper>
            </ContainerBox>
        </StyledHeader>
    );
};


const MobileRightBlock = styled.div`
  

  @media ${theme.media.tablet} {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;


const RightSideMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    
    @media ${theme.media.tablet} {
        justify-content: flex-end;
        
    }
    
`
const StyledHeader = styled.header`
    background: #fff;
    padding: 20px 0 0 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`