import "../style/Header.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

function Header() {
    const [NavMobileVisibility, SetNavMobileVisibility] = useState("Show");

    function SwitchVisibility() {
        if (NavMobileVisibility === "Hide") {
            SetNavMobileVisibility("Show");
        } else if (NavMobileVisibility === "Show") {
            SetNavMobileVisibility("Hide");
        }
    }

    function handleLinkClick(event, targetId) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 75;
            const topPosition = targetElement.offsetTop - window.innerHeight / 2 + offset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className="HeaderDiv">
            <p onClick={(e) => handleLinkClick(e, "#AccueilSection")} className="HeaderName">Adrien Da Silva Ferreira</p>
            <nav className="HeaderNav">
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#AboutSection")}>A propos</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#SkillsSection")}>Compétences</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#ProjectsSection")}>Projets</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#ExperiencesSection")}>Expériences</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#EducationSection")}>Formations</p>
                <FaBars className="HeaderMenuIcon" onClick={SwitchVisibility} />
            </nav>
            <nav className={NavMobileVisibility === "Hide" ? "HeaderNavMobileShow" : "HeaderNavMobileHide"}>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#AboutSection")}>A propos</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#SkillsSection")}>Compétences</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#ProjectsSection")}>Projets</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#ExperiencesSection")}>Expériences</p>
                <p className="HeaderNavLink" onClick={(e) => handleLinkClick(e, "#EducationSection")}>Formations</p>
            </nav>
        </div>
    );
}

export default Header;
