import { Helmet } from 'react-helmet'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExpEducSection from '../components/ExpEducSection'

function Home() {

    
    
    return (
        <div>
            <Helmet>
                <title>Da Silva Ferreira Adrien | Portfolio - Développeur Web Low Code</title>
            </Helmet>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExpEducSection />
        </div>
    )
}

export default Home