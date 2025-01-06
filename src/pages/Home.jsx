import { Helmet } from 'react-helmet'

import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperiencesSection from '../components/ExperiencesSection'

function Home() {

    
    
    return (
        <div>
            <Helmet>
                <title>Da Silva Ferreira Adrien | Portfolio - Développeur Web / Low Code</title>
            </Helmet>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperiencesSection />
        </div>
    )
}

export default Home