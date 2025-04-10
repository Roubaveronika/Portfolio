import styled from "styled-components";
import photo from "../../../assets/images/IMG_9270.webp";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Name } from "../../../components/menu/Name.tsx";
import { ContainerBox } from "../../../components/ContainerBox.ts";
import { theme } from "../../../styles/Theme.ts";
import { MainTitle } from "./MainTitle.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerBoxMain>
                <FlexWrapper align="center" justify="space-between" direction="row"
                             directionTablet="column" >
                    <TextBlock>
                        <Name>HELLO I’M<br />VERONIKA</Name>
                        <MainTitle />
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </ContainerBoxMain>
        </StyledMain>
    );
};

const ContainerBoxMain = styled(ContainerBox)`
    overflow: visible;
`
const StyledMain = styled.div`
  background-color: ${theme.colors.primaryBg};
  min-height: 100vh;
  margin-bottom: 30px;
  padding: 100px 20px 20px;
  display: flex;
  align-items: center;
    overflow: visible;
    

  @media ${theme.media.tablet} {
    padding: 80px 15px 30px;
  }
`;

const TextBlock = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding-left: 60px;
    
    
    color: ${theme.colors.secondaryFont};
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    overflow: visible;

    @media ${theme.media.tablet} {
        width: 100%;
        margin-bottom: 30px;
        text-align: left;
        padding-top:80px;
        padding-left: 0;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    z-index: 1;
    padding: 4rem;
    

    @media ${theme.media.mobile} {
        width: 100%;
        margin-top: 30px;
    }

    &::before {
        content: "";
        position: absolute;
        top: 10%;
        left: 50%;
        width: 420px;
        height: 570px;
        background-color: #e7e7e7;
        transform: translate(-50%) rotate(-12deg);
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 300px;
            height: 400px;
        }
    }
`;

const Photo = styled.img`
  position: relative;
  min-width: 420px;
  height: 570px;
  object-fit: cover;
  
  transform: rotate(12deg);
   
    

  @media ${theme.media.mobile} {
    margin: 20px auto;
      width: 100%;
      height: 100%;
      transform: rotate(0deg)
      
  }
`;

