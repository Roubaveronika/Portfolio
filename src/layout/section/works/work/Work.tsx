
import styled from "styled-components";

type WorkPropsTypes = {
    src: string;
    category: string;
    title: string;
    description: string;
}

export const Work = (props: WorkPropsTypes) => {
    const [firstPart, secondPart] = props.title.split("_");
    return (
        <StyledWork background={props.src}>
            <Content>
                <LeftColumn>
            <Category>{props.category}</Category>
            <Title>
                {firstPart}_
                {secondPart && <span>{secondPart}</span>}
            </Title>
                    </LeftColumn>
                <RightColumn>
            <Description>{props.description}</Description>
            <Link href={""}>View More</Link>
                    </RightColumn>
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
    justify-content: space-between;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    padding: 20px;
    width: 100%;
    text-align: left;

    > * {
        position: relative;
        z-index: 1;
    }

    `;
const LeftColumn= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
    margin: 20px;


`
const RightColumn= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
text-align: left;
 margin: 20px;   
    gap: 20px;
`
const Description= styled.p`
    font-size: 20px;
    line-height: 120%;
    `
        
const Link= styled.a`
    font-size: 16px;
    color: #FFF;
    text-decoration: none;
  
`
const Title= styled.h4`
    font-weight: 200; 
    font-size: 50px; 
    line-height: 120%;
    font-family: "Epilogue", sans-serif;
    
    span {
        font-size: 45px;
        line-height: 120%;
        display: block;
        font-weight: 900;
        font-family: "Epilogue-extraLight", sans-serif;
    }
`
const Category= styled.strong`
    font-weight: bold;
    font-size: 18px;
    font-family: "Epilogue-Bold", sans-serif;
`