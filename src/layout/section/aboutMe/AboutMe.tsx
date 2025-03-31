import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import photo from "../../../assets/images/IMG_9270.webp";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <LeftColumn>
                <SectionTitle>About Me</SectionTitle>
                <Phrase>I LOOK AT USUAL THINGS WITH MY UNSUAL EYES.</Phrase>
                <Photo src={photo} alt="Me" />
            </LeftColumn>
            <RightColumn>
                <TextBlock>
                    As a Frontend Developer, I bring a unique perspective to digital experiences. I believe that great design is not just about aesthetics but about creating seamless interactions. With a strong eye for detail, I transform complex ideas into intuitive and visually compelling interfaces.
                </TextBlock>
                <TextBlock>
                    Passionate about modern web technologies, I specialize in crafting responsive and high-performance applications. I enjoy pushing the boundaries of creativity while ensuring usability and accessibility. My approach blends technical expertise with a deep understanding of user experience.
                    I see the ordinary through an unconventional lens, turning everyday concepts into extraordinary digital solutions.
                </TextBlock>
                <Photo src={photo} alt="Me" />
            </RightColumn>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background: #131212;
    color: #fff;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    padding: 40px 0;
    gap: 40px;
    
`;

const LeftColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px 210px;
    gap: 20px;
`;

const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 200px;
`;

const Phrase = styled.strong`
    font-size: 32px;
    font-weight: bold;
    max-width: 400px;
`;
const TextBlock = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;
const Photo = styled.img`
    flex: 1;
    width: 100%;          
    height: 100%;         
    object-fit: cover;
    max-width: 300px;
    z-index: 1;
    margin-top: 100px;
`;

