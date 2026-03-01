import { useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const pathLabels = {
    '/': 'SYS.CORE',
    '/about': 'IDENTITY.MODULE',
    '/skills': 'CAPABILITY.MATRIX',
    '/projects': 'PROJECT.NODES',
    '/experience': 'SYSTEM.LOGS',
    '/architecture': 'TECH.ARCHITECTURE',
    '/contact': 'SIGNAL.TERMINAL',
};

export default function StatusStrip() {
    const { pathname } = useLocation();
    const label = pathLabels[pathname] || 'UNKNOWN';

    return (
        <div className="status-strip">
            <span>MODULE: {label}</span>
            <span className="hidden sm:inline">OPERATOR: {personalInfo.name.toUpperCase()}</span>
            <span className="hidden md:inline">LOCATION: {personalInfo.location.toUpperCase()}</span>
            <span>© {new Date().getFullYear()} EHTESHAM.SYS</span>
        </div>
    );
}
