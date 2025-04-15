import styled from'styled-components'
import {Icon} from "../../components/icon/Icon.tsx";

export const SocialLinks = () => {
    return(
        <StyledSocialList>
        <SocialItem>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Icon iconId={"facebook"} />
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Icon iconId={"twitter"} />
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Icon iconId={"instagram"} />
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Icon iconId={"linkedin"} />
            </SocialLink>
        </SocialItem>

    </StyledSocialList>
        );
    };




    const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0; 
    margin: 0;
    justify-content: flex-end;
    align-items: center;
    
`
const SocialItem = styled.li`
    margin: 0 10px;

`
const SocialLink = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: 24px;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
        transform: scale(1.1);
        color: rgba(56, 52, 52, 0.2);
    }

    &:active {
        transform: scale(1);
    }



`