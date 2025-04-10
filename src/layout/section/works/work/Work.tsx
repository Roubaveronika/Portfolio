
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

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
                {firstPart && <span className="firstPart">{firstPart}_</span>}
                {secondPart && <span className="secondPart">{secondPart}</span> }
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
    width: 100vw;
    min-height: 446px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;

    @media ${theme.media.tablet} {
        height: 100%;
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }

`
const Content= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100%;
    text-align: left;
    padding: 92px 46px;
    z-index: 1;
    gap: 20px;
    
@media ${theme.media.tablet} {
    
    flex-direction: column;
    padding:40px 20px;
    align-items: flex-start;
    justify-content: flex-start;
    
}
    `;
const LeftColumn= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
    gap: 16px;

    @media ${theme.media.tablet} {
        width: 90%;
        text-align: left;
        padding: 20px;
    }

`
const RightColumn= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
text-align: left;
 margin: 40px;   
    gap: 24px;

    @media ${theme.media.tablet} {
        width: 90%;
        text-align: left;
        padding: 20px;
        margin: 0;
    }
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
    font-size: 45px;
    line-height: 120%;
    font-family: "Epilogue", sans-serif;

    .firstPart {
        font-weight: 200;
        font-family: "Epilogue-extraLight", sans-serif;
    }
    .secondPart {
        font-weight: 800;
        font-family: "Epilogue-extraBold", sans-serif;
    }
    
    span {
        font-size: 45px;
        line-height: 120%;
        display: block;
        font-weight: 900;
        font-family: "Epilogue-extraLight", sans-serif;
    }
`
const Category= styled.h3`
    font-weight: bold;
    font-size: 18px;
    font-family: "Epilogue-Bold", sans-serif;
`