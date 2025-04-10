import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const FooterMenu = (props: {menuItems:Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                    return  <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>

        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav `
ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    @media ${theme.media.tablet} {
       gap: 16px;
    }
}
`
const ListItem = styled.li`

`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-size: 16px;
    color: #2d2c2c;
    text-decoration: none;

    @media ${theme.media.tablet} {
       font-family: "Epilogue-regular", sans-serif;
        font-size: 14px;
    }

`