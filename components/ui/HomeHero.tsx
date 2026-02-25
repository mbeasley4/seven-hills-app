
export default function HomeHero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-eyebrow">Cincinnati, Ohio · Since 1906</div>
                <h1 className="hero-title">
                Be <em>Boldly</em>
                Yourself.
                </h1>
                <div className="hero-subtitle-bar"></div>
                <p className="hero-body">
                At Seven Hills, every student is celebrated for what makes them singular. From kindergarten through twelfth grade, we cultivate curious minds, compassionate hearts, and the confidence to lead.
                </p>
                <div className="hero-actions">
                <a href="#" className="btn-primary">Schedule a Visit</a>
                <a href="#" className="btn-ghost">Explore Academics</a>
                </div>
                <div className="hero-stats">
                <div>
                    <div className="stat-number">#1</div>
                    <div className="stat-label">Private K–12 in Ohio<br />Niche 2026</div>
                </div>
                <div>
                    <div className="stat-number">325</div>
                    <div className="stat-label">Scholastic Art &amp;<br />Writing Awards</div>
                </div>
                <div>
                    <div className="stat-number">K–12</div>
                    <div className="stat-label">Unified Campus<br />Experience</div>
                </div>
                </div>
            </div>
            <div className="hero-right">
                <video className="hero-bg-video" autoPlay muted loop playsInline>
                    <source src="https://shs001.wpenginepowered.com/wp-content/themes/sevenhills2017/videos/home-page-video-v.6.mp4" type="video/mp4" />
                </video>
                <div className="hero-bg-overlay"></div>
                <div className="hero-tag">Enrollment Open 2026–27</div>
                <div className="hero-badge">
                <div className="hero-badge-rank">#1</div>
                <div className="hero-badge-text">Private K–12 School in Ohio</div>
                </div>
            </div>

            <div className="scroll-hint">
                <span>Scroll</span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.5"/>
                <rect x="7" y="5" width="2" height="6" rx="1" fill="white"/>
                </svg>
            </div>
            </section>
    )
}