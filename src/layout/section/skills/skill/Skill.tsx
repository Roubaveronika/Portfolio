
import styled from "styled-components";

type SkillPropsType = {
    number: string;
    title: string;
    text: string;


}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillNumber>{props.number}</SkillNumber>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    
`
const SkillNumber = styled.div`
    color: #FFFFFF;
`
const SkillTitle = styled.h3`
    color: #FFFFFF;
    
`
const SkillText = styled.p`
    color: #FFFFFF;
`

