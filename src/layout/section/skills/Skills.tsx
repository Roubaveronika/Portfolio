
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {ContainerBox} from "../../../components/ContainerBox.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <SkillsContainerBox>
            <FlexWrapper wrap={"wrap"} justify={"space-between"} >
                <Skill number={"01."} title={"React"} text={"I have experience working with React and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
                <Skill number={"02."} title={"TypeScript"} text={"I have experience working with TypeScript and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
                <Skill number={"03."} title={"Node.js"} text={"I have experience working with Node.js and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
                <Skill number={"04."} title={"GraphQL"} text={"I have experience working with GraphQL and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
                <Skill number={"05."} title={"MongoDB"} text={"I have experience working with MongoDB and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
                <Skill number={"06."} title={"MySQL"} text={"I have experience working with MySQL and its ecosystem.React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. "}/>
            </FlexWrapper>
            </SkillsContainerBox>
        </StyledSkills>
    );
};

const SkillsContainerBox = styled(ContainerBox)`
    max-width: 1400px; 
    width:100vw;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`;
const StyledSkills = styled.section`
    background: #131212;
    padding: 100px 0;
`