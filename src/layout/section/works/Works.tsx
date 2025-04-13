import styled from "styled-components";
import {Name} from "../../../components/menu/Name.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import mentalHealthImg from "../../../assets/images/MentalHealth.webp";
import fashionShowImg from "../../../assets/images/FashionShow.webp";
import barbequeImg from "../../../assets/images/Barbeque1.webp";
import {ContainerBox} from "../../../components/ContainerBox.ts";
import {theme} from "../../../styles/Theme.ts";


export const Works = () => {
    return (
        <StyledWork>
            <ContainerBoxWorks>
            <StyledName>MY PROJECTS</StyledName>
            <StyledFlexWrapper direction={"column"} align={"center"} justify={"center"} >
                <Work category={"Mental Health"} src={mentalHealthImg} title={"A Case Study_" +
                    "Find Peace in Meditation"} description={"A case study on how meditation can help people with depression and anxiety. It is an integral component of health and well-being that underpins our individual and collective abilities to make decisions, build relationships and shape the world we live in. Mental health is a basic human right. "} />
                <Work category={"Fashion Show"} src={fashionShowImg} title={"A Case Study_ " +
                    "Enjoy Fashion Shows From Home"} description={"A case study on how to enjoy fashion shows from home. A fashion show is an event put on by a fashion designer to showcase their upcoming line of clothing and/or accessories during a fashion week. Fashion shows debut every season, particularly the spring/summer and fall/winter seasons. This is where designers seek to promote their new fashions."} />
                <Work category={"Barbeque"} src={barbequeImg} title={"Branding_" +
                    "Chicken Barbeque Never Goes Wrong"} description={"A branding project for a chicken barbeque company. Barbecue or barbeque (often shortened to BBQ worldwide; barbie or barby in Australia and New Zealand) is a term used with significant regional and national variations to describe various cooking methods that employ live fire and smoke to cook food."}/>
            </StyledFlexWrapper>
                </ContainerBoxWorks>
        </StyledWork>
    );
};


const StyledName = styled(Name)`
  text-align: center;
    padding-top: 78px;
`

const StyledFlexWrapper = styled(FlexWrapper)`
    gap:78px;
`
const ContainerBoxWorks = styled(ContainerBox)`
    display: flex;
    flex-direction: column;

    @media ${theme.media.tablet} {
        
      

    }

`

const StyledWork = styled.div`
    min-height: 100vh;
    background-color: #FFFFFF;
    
`
