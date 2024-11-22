import { Helmet } from 'react-helmet'

import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <div>
            <Helmet>
                <title>Da Silva Ferreira Adrien | Portfolio - Développeur Web Low Code</title>
            </Helmet>
            <HeroSection />
        </div>
    )
}

export default Home