import styled from "styled-components";
import {Name} from "../../../components/menu/Name.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import mentalHealthImg from "../../../assets/images/MentalHealth.webp";
import fashionShowImg from "../../../assets/images/FashionShow.webp";
import barbequeImg from "../../../assets/images/Barbeque1.webp";


export const Works = () => {
    return (
        <StyledWork>
            <Name>MY PROJECTS</Name>
            <FlexWrapper direction={"column"} align={"center"} justify={"center"} >
                <Work category={"Mental Health"} src={mentalHealthImg} title={"A Case Study_\n" +
                    "Find Peace in Meditation"} description={"A case study on how meditation can help people with depression and anxiety."} />
                <Work category={"Fashion Show"} src={fashionShowImg} title={"A Case Study_\n" +
                    "Enjoy Fashion Shows From Home"} description={"A case study on how to enjoy fashion shows from home."} />
                <Work category={"Barbeque"} src={barbequeImg} title={"Branding_\n" +
                    "Chicken Barbeque Never Goes Wrong"} description={"A branding project for a chicken barbeque company."}/>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.section`
min-height: 100vh;
background-color: #FFFFFF;
`