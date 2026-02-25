const items = [
    "Academic Excellence",
    "Arts Leadership",
    "Championship Athletics",
    "College Preparation",
    "Community Impact",
    "Innovation & Discovery",
    "Ranked #1 in Ohio",
];

export default function MarqueeStrip() {
    return (
        <div className="marquee-strip">
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="marquee-item">{item}</div>
                ))}
            </div>
        </div>
    );
}
