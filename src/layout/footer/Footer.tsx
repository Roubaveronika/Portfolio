import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {ContainerBox} from "../../components/ContainerBox.ts";
import {FooterMenu} from "./FooterMenu.tsx";
import {SocialLinks} from "./SocialLinks.tsx";
import {theme} from "../../styles/Theme.ts";

const items =["Projects", "About", "Digital Assets"]
export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerBox>
                <FlexWrapper justify="space-between">
                <LeftBox>
                    <Logo/>
                    <FooterMenu menuItems={items} />
                </LeftBox>
                <RightBox>
                    <TitleEmail>Subscribe to my emailing list</TitleEmail>
                    <StyledForm>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </StyledForm>
                    <Small>By subscribing you agree to with our <SpanWithUnderline>Privacy Policy</SpanWithUnderline></Small>
                </RightBox>
                    </FlexWrapper>
            </ContainerBox>
            <Divider/>
            <ContainerBox>
                <FlexWrapper justify="space-between">
                <Small>
                    <span className="full-text">© 2022 Relume. All right reserved.</span>
                    <span className="short-text">© 2022 Relume.</span>
                </Small>
                    <SocialLinks/>
            </FlexWrapper>
            </ContainerBox>
        </StyledFooter>

    );
};

const Small = styled.small`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    font-family: "Roboto-regular", sans-serif;

    @media ${theme.media.tablet} {
        .full-text {
            display: none;
        }

        .short-text {
            display: inline;
        }
    }
`
const StyledFooter = styled.footer`
    min-height: 20vh;
    margin-top: 80px;
    padding: 0 20px;
`
const TitleEmail = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    margin-top: 26px;
    
`
const Divider = styled.hr`
    border: none;
    height: 1px;
    background: black;
    max-width: 90%;
    margin: 60px auto;
    

    @media ${theme.media.tablet} {
        margin: 20px auto;
    }
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
`
const RightBox = styled.div`
    display: flex;
    gap: 10px;  
    flex-direction: column;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    margin: 16px 0;

    input {
        flex-grow: 1;
        padding: 10px;
        font-size: 16px;
    }

    button {
        padding: 10px 20px;
        background-color: inherit;
        font-size: 16px;

        @media ${theme.media.tablet} {
            width: 30%;
        }

    }

    input, button {
        padding: 10px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
    }
`;
const SpanWithUnderline = styled.span`
  text-decoration: underline;
`;

