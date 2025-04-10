import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {AboutMe} from "./layout/section/aboutMe/AboutMe.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyle} from "./styles/GlobalStyle.ts";


function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default App
