const pillars = [
    {
        number: "01",
        icon: "🎓",
        title: "Academic Depth",
        body: "Rigorous, curiosity-driven coursework that challenges students to think critically, question boldly, and develop a lifelong love of learning across every discipline.",
    },
    {
        number: "02",
        icon: "🎨",
        title: "Creative Voice",
        body: "From studio arts to theatre to writing, students find and amplify their unique creative voice in programs that have earned hundreds of national awards.",
    },
    {
        number: "03",
        icon: "🤝",
        title: "Character & Community",
        body: "We build leaders of integrity — young people who are empathetic, engaged, and ready to make a meaningful difference in their communities and the world.",
    },
];

export default function HomePillars() {
    return (
        <section className="pillars">
            <div className="section-header">
                <div>
                    <div className="section-label">Our Philosophy</div>
                    <h2 className="section-title">
                        Three pillars.<br /><em>One mission.</em>
                    </h2>
                </div>
            </div>

            <div className="pillars-grid">
                {pillars.map((pillar) => (
                    <div key={pillar.number} className="pillar-card">
                        <div className="pillar-number">{pillar.number}</div>
                        <div className="pillar-icon">{pillar.icon}</div>
                        <div className="pillar-title">{pillar.title}</div>
                        <p className="pillar-body">{pillar.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
