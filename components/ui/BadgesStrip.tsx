import Image from "next/image";

const badges = [
    {
        href: "https://www.7hills.org/seven-hills/alumni/reunion/",
        bg: "#203769",
        img: "https://shs001.wpenginepowered.com/wp-content/uploads/2026/02/V2-Reunion-logo-2026-badge.jpg",
        alt: "Reunion 2026",
        label: "Join us for Reunion 2026",
    },
    {
        href: "https://www.7hills.org/buzzworthy/",
        bg: undefined,
        img: "https://shs001.wpenginepowered.com/wp-content/uploads/2024/10/Buzzworthy-WEB-Badge-290x290-1.png",
        alt: "Buzzworthy Newsletter",
        label: "Read our Monthly Newsletter",
    },
    {
        href: "https://www.7hills.org/fall-winter-magazine-2025/",
        bg: undefined,
        img: "https://shs001.wpenginepowered.com/wp-content/uploads/2026/02/Cover-for-web-RGB1-290-SQUARE.png",
        alt: "Fall/Winter Magazine 2025",
        label: "Read the Fall/Winter 2025 Magazine",
        cover: true,
    },
    {
        href: "https://www.7hills.org/seven-hills-ranked-best-private-school-in-ohio/",
        bg: undefined,
        img: "https://shs001.wpenginepowered.com/wp-content/uploads/2025/10/%E2%80%A2-2026-Niche-Badge-OH_K-12_GREEN-290x290-1.jpg",
        alt: "Niche #1 School in Ohio",
        label: "Seven Hills Ranked #1 by Niche",
    },
    {
        href: "https://www.7hills.org/students-earn-325-scholastic-art-and-writing-awards/",
        bg: undefined,
        img: "https://shs001.wpenginepowered.com/wp-content/uploads/2021/02/Scholastic-Badge.jpg",
        alt: "Scholastic Awards",
        label: "Students Earned 325 Scholastic Awards",
    },
];

export default function BadgesStrip() {
    return (
        <section className="badges-strip">
            <div className="badges-eyebrow">Recognition &amp; Highlights</div>
            <h2 className="badges-headline">In the <em>spotlight.</em></h2>
            <div className="badges-row">
                {badges.map((badge) => (
                    <a key={badge.label} className="badge-item" href={badge.href}>
                        <div className="badge-hex-wrap">
                            <div
                                className="badge-hex"
                                style={{
                                    ...(badge.bg ? { background: badge.bg } : {}),
                                    ...(badge.cover ? { padding: 0 } : {}),
                                }}
                            >
                                <Image
                                    src={badge.img}
                                    alt={badge.alt}
                                    width={290}
                                    height={290}
                                    style={badge.cover ? { objectFit: "cover" } : {}}
                                />
                            </div>
                        </div>
                        <span className="badge-label">{badge.label}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
