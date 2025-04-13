
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    number: string;
    title: string;
    text: string;


}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>

            <SkillNumber>{props.number}</SkillNumber>

         <FlexWrapper direction="column" justify={"center"}>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
         </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    display: flex;
    
    @media ${theme.media.desktop} {
        width: 100%;
        text-wrap: wrap;
        padding: 0 10px;
        
    }
    
    
    
`
const SkillNumber = styled.div`
    color: #FFFFFF;
    font-weight: 100;
    font-size: 70px;
    padding-top: 18px ;
    padding-right: 40px;

    @media ${theme.media.tablet} {
        font-size: 45px;
        padding-right: 20px;
        font-family: "Epilogue-Thin", sans-serif;
        
    }
    
   
`
const SkillTitle = styled.h3`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 30px;
    text-align: left;
    padding-top: 20px;

    @media ${theme.media.tablet} {
        font-size: 25px;
        font-family: "Epilogue-Light";
    
    
    
    
`
const SkillText = styled.p`
    color: #FFFFFF;
    font-weight: 200;
    font-size: 18px;
    line-height: 123%;
    text-align: left;
    word-break: break-word;
    padding: 10px 10px 0 10px;

    @media ${theme.media.tablet} {
        font-size: 14px;
        font-family: "Epilogue-extraLight";
    }
    
`

