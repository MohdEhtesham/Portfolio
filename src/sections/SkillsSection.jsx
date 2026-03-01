import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillGraph from '../components/SkillGraph';
import { skills } from '../data/portfolioData';

export default function SkillsSection() {
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono mb-4 block"
                    style={{ color: '#22C55E' }}
                >
                    02 — Skills & Expertise
                </motion.span>

                <h2 className="section-heading mb-4">
                    Technical <span className="gradient-text">Arsenal</span>
                </h2>

                <p className="section-subheading mx-auto">
                    A comprehensive toolkit honed through years of building production mobile
                    applications across diverse domains.
                </p>
            </div>

            <SkillGraph skills={skills} />
        </SectionWrapper>
    );
}
