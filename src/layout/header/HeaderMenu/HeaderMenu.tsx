import styled from "styled-components";

export const HeaderMenu = (props: {menuItems:Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                    return  <ListItem key={index}>
                        <Link href="">{item}</Link>
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