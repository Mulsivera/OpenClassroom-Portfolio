import { Helmet } from 'react-helmet'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'

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
        </div>
    )
}

export default Home