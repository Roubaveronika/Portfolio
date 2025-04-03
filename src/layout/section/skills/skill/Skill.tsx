
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

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
    
    
    
`
const SkillNumber = styled.div`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 70px;
    width: 80px;
    height: 70px;
    padding: 100px 15px;
`
const SkillTitle = styled.h3`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 30px;
    text-align: left;
    margin: 20px 0 0 0;
    
    
    
`
const SkillText = styled.p`
    color: #FFFFFF;
    font-weight: 200;
    font-size: 18px;
    max-width: 100%;
    text-align: left;
    word-break: break-word;
    line-height: 1.5;
`

