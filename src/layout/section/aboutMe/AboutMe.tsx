import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import photo from "../../../assets/images/IMG_9270.webp";
import {ContainerBox} from "../../../components/ContainerBox.ts";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <ContainerBox>
            <LeftColumn>
                <SectionTitle>About Me</SectionTitle>
                <Phrase>I LOOK AT USUAL THINGS WITH MY UNSUAL EYES.</Phrase>
                <PhotoSmall src={photo} alt="Me" />
            </LeftColumn>
            <RightColumn>
                <TextBlock>
                    As a Frontend Developer, I bring a unique perspective to digital experiences. I believe that great design is not just about aesthetics but about creating seamless interactions. With a strong eye for detail, I transform complex ideas into intuitive and visually compelling interfaces.
                </TextBlock>
                <TextBlock>
                    Passionate about modern web technologies, I specialize in crafting responsive and high-performance applications. I enjoy pushing the boundaries of creativity while ensuring usability and accessibility. My approach blends technical expertise with a deep understanding of user experience.
                    I see the ordinary through an unconventional lens, turning everyday concepts into extraordinary digital solutions.
                </TextBlock>
                <PhotoBig src={photo} alt="Me" />
            </RightColumn>
                </ContainerBox>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background: #131212;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 40px;
    
    
`;

const LeftColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 80px;
    gap: 20px;
`;

const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Phrase = styled.strong`
    font-weight: 254;
    font-size: 48px;
    line-height: 120%;
    font-variant: all-small-caps;
`;
const TextBlock = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
`;
const PhotoSmall = styled.img`
    width: 100%;          
    height: auto;
    object-fit: cover;
    max-width: 550px; 
    z-index: 1;
    margin-top: 20px;
`;

const PhotoBig = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 350px; 
    z-index: 1;
    margin-top: 50px;
`;

