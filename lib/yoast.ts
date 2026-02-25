export interface YoastOgImage {
    url: string;
    width: number;
    height: number;
    type: string; // e.g. "image/jpeg"
}

export interface YoastHeadJson {
    title: string;
    description: string;
    robots: Record<string, string>;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    og_image: YoastOgImage[];
    article_modified_time: string;
    twitter_card: string;
    twitter_site: string;
}

interface WPPageResponse {
    yoast_head_json: YoastHeadJson;
}

export async function getYoastMeta(pageId: number): Promise<YoastHeadJson | null> {
    try {
        const res = await fetch(
            `https://www.7hills.org/wp-json/wp/v2/pages/${pageId}?_fields=yoast_head_json`,
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) return null;
        const data: WPPageResponse = await res.json();
        return data.yoast_head_json ?? null;
    } catch {
        return null;
    }
}
