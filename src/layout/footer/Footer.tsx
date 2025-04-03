import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

const items =["Projects", "About", "Digital Assets"]
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <LeftBox>
                    <Logo/>
                    <Menu menuItems={items} />
                </LeftBox>
                <RightBox>
                    <TitleEmail>Subscribe to my emailing list</TitleEmail>
                    <StyledForm>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </StyledForm>
                    <small>By subscribing you agree to with our <SpanWithUnderline>Privacy Policy</SpanWithUnderline></small>
                </RightBox>
            </Container>
            <Divider/>
            <Container>
                <small>2022 Relume. All right reserved.</small>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"facebook"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"twitter"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"instagram"} />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"linkedin"} />
                            </SocialLink>
                        </SocialItem>

                    </SocialList>
            </Container>
        </StyledFooter>

    );
};


const StyledFooter = styled.section`
    min-height: 20vh;
    margin-top: 80px;
`
const TitleEmail = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
`
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 150px;
    gap: 20px;
`
const Divider = styled.hr`
    border: none;
    height: 1px;
    background: black;
    width: 90%;
    margin: 30px auto;
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

    }

    input, button {
        padding: 10px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
`;
const SpanWithUnderline = styled.span`
  text-decoration: underline;
`;
const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none; 
    padding: 0; 
    margin: 0; 
    
`
const SocialItem = styled.li`
    margin: 0 ;

`
const SocialLink = styled.a`
    text-decoration: none;
    color: inherit;
    
`
