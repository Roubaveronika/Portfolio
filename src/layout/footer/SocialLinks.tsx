import styled from'styled-components'
import {Icon} from "../../components/icon/Icon.tsx";

export const SocialLinks = () => {
    return(
        <StyledSocialList>
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
    
    
`