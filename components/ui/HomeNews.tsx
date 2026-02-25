import Image from "next/image";

interface WPPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    _embedded?: {
        "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
        "wp:term"?: Array<Array<{ name: string }>>;
    };
}

async function getPosts(): Promise<WPPost[]> {
    const res = await fetch(
        "https://www.7hills.org/wp-json/wp/v2/posts?per_page=3&_embed&_fields=id,title,excerpt,link,_embedded,_links",
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "").trim();
}

export default async function HomeNews() {
    const posts = await getPosts();

    return (
        <section className="news">
            <div className="section-header">
                <div>
                    <div className="section-label" style={{ color: "var(--gold)" }}>From the Campus</div>
                    <h2 className="section-title" style={{ color: "var(--white)" }}>
                        News &amp; <em style={{ color: "var(--gold-light)" }}>stories.</em>
                    </h2>
                </div>
                <a href="https://www.7hills.org/news/" className="btn-ghost" style={{ color: "rgba(255,255,255,0.5)" }}>All News</a>
            </div>

            <div className="news-grid">
                {posts.map((post) => {
                    const media = post._embedded?.["wp:featuredmedia"]?.[0];
                    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "News";
                    const excerpt = stripHtml(post.excerpt.rendered);

                    return (
                        <div key={post.id} className="news-card" style={{ overflow: "hidden" }}>
                            {media && (
                                <div style={{ overflow: "hidden" }}>
                                    <Image
                                        className="news-card-img"
                                        src={media.source_url}
                                        alt={media.alt_text || post.title.rendered}
                                        width={900}
                                        height={500}
                                    />
                                </div>
                            )}
                            <div className="news-card-body">
                                <div className="news-tag">{category}</div>
                                <div className="news-title"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <p className="news-excerpt">{excerpt}</p>
                                <a href={post.link} className="news-link">Read Story →</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
