import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const HeaderMenu = (props: {menuItems:Array<{ title: string, href: string }>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                    return  <ListItem key={index}>
                        <Link href={item.href}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav `
ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
}
    @media ${theme.media.tablet} {
       display: none; 
    }
`
const ListItem = styled.li`

`

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-size: 16px;
    color: #2d2c2c;
    text-decoration: none;

`