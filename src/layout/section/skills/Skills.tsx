
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill number={"01."} title={"React"} text={"I have experience working with React and its ecosystem."}/>
                <Skill number={"02."} title={"TypeScript"} text={"I have experience working with TypeScript and its ecosystem."}/>
                <Skill number={"03."} title={"Node.js"} text={"I have experience working with Node.js and its ecosystem."}/>
                <Skill number={"04."} title={"GraphQL"} text={"I have experience working with GraphQL and its ecosystem."}/>
                <Skill number={"05."} title={"MongoDB"} text={"I have experience working with MongoDB and its ecosystem."}/>
                <Skill number={"06."} title={"MySQL"} text={"I have experience working with MySQL and its ecosystem."}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background: #131212;
    text-align: center;
`