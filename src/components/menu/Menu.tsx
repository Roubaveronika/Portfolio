import styled from "styled-components";

export const Menu = (props: {menuItems:Array<{ title: string, href: string }>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                  return  <li key={index}>
                      <a href={item.href}>{item.title}</a>
                  </li>
                })}
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
ul {
    gap: 30px;
    list-style-type: none;
    
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
