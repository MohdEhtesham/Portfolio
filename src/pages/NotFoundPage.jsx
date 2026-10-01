import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="fade-up flex flex-col items-start justify-center min-h-[60vh]">
            <div className="page-header">
                <div className="page-label">
                    <span>✕ MODULE NOT FOUND</span>
                    <div className="line" />
                </div>
                <h2>
                    404 — <span className="gradient-text">No such route</span>
                </h2>
                <p>The page you're looking for doesn't exist or has moved.</p>
            </div>
            <Link to="/" className="btn-primary no-underline">
                ← Back to home
            </Link>
        </div>
    );
}
