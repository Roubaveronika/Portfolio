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
                    <p>Subscribe to my emailing list</p>
                    <StyledForm>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </StyledForm>
                    <small>By subscribing you agree to with our Privacy Policy</small>
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
`
const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`
const Divider = styled.hr`
    border: none;
    height: 1px;
    background: black;
    width: 80%;
    margin: 0 auto;
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
`
const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
`
