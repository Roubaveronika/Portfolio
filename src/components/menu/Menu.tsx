import styled from "styled-components";

export const Menu = (props: {menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                  return  <li key={index}>
                      <a href="">{item}</a>
                  </li>
                })}
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    padding: 0; 
    margin: 0; 
}
    li {
        margin: 0;
    }
    
    a {
        text-decoration: none;
        color: inherit;
        font-size: 18px;
    }
`
