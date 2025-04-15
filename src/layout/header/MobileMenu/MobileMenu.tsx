import styled, { css } from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {useState} from "react";

export const MobileMenu = (props: {menuItems:Array<{ title: string, href: string }>}) => {
   const [menuIsOpen, setmenuIsOpen] = useState(false);
   const onBurgerBtnClick = () => { setmenuIsOpen (!menuIsOpen) };
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span>
                    <div className="left-line"></div>
                    <div className="right-line"></div>
                </span>
            </BurgerButton>
            <MobilePopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)} }>
            <ul>
                {props.menuItems.map((item, index   ) =>{
                    return  <ListItem key={index}>
                        <Link href={item.href}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
            </MobilePopup>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.div`
    position: relative;
    display: none;
    height: 40px;
    width: 40px;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobilePopup = styled.div<{isOpen: boolean}>`
    background-color: rgba(255,255, 255, 0.9);
    position: fixed;
    left: 0;
    z-index: 9999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: fixed;
        justify-content: center;
        align-items: center;
        overflow: hidden;
`}   
    
        ul {

        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        }
    
    li {
        width: 100%;
        border-bottom: 2px solid black;
        
    }
    `;

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 999999;
    

    
     span {
        display: flex;
        justify-content: space-between;
        .left-line {
            width: 20%;
            height: 2px;
            background-color: black;
            ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        }
        
        .right-line {
            width: 60%;
            height: 2px;
            background-color: black;
            ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        }


        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &:before {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(-10px);
            

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 100%;
            `};
        }
    ;
    }
`



const ListItem = styled.li`

`;

const Link = styled.a`
    font-family: "Epilogue", sans-serif;
    font-size: 16px;
    color: #2d2c2c;
    text-decoration: none;

`