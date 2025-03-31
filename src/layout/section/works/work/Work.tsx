
import styled from "styled-components";

type WorkPropsTypes = {
    src: string;
    category: string;
    title: string;
    description: string;
}

export const Work = (props: WorkPropsTypes) => {
    return (
        <StyledWork background={props.src}>
            <Content>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link href={""}></Link>
            </Content>
        </StyledWork>
    );
};

const StyledWork= styled.div<{background: string}>`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    max-width: 1040px;
    width: 100%;
    height: 447px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 78px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Затемнение (можно изменить) */
    }

`
const Content= styled.div`
    color: #fff;
    padding: 20px;
    width: 100%;
    text-align: center;

    > * {
        position: relative;
        z-index: 1;
    }

    `;

const Description= styled.p`
    `
        
const Link= styled.a`
`
const Title= styled.h3`
`
const Category= styled.strong`
`