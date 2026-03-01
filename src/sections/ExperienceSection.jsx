import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Timeline from '../components/Timeline';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono mb-4 block"
                    style={{ color: '#22C55E' }}
                >
                    03 — Experience
                </motion.span>

                <h2 className="section-heading mb-4">
                    Professional <span className="gradient-text">Journey</span>
                </h2>

                <p className="section-subheading mx-auto">
                    A track record of delivering impactful mobile solutions at
                    scale across diverse industries.
                </p>
            </div>

            <Timeline items={experience} />
        </SectionWrapper>
    );
}
