import { Link } from "./Link";

export interface Page {
    id: number;
    user_id: string;
    title: string;
    description: string;
    background_emoji: string;
    background_color: string;
    background_html: string;
    bg_mode: number;
    links: Link[]

}

export class Page implements Page {
    id: number;
    user_id: string;
    title: string;
    description: string;
    background_emoji: string;
    background_color: string;
    background_html: string;
    bg_mode: number;
    links: Link[]

    constructor(
        id: number, 
        user_id: string, 
        title: string, 
        description: string, 
        background_emoji: string, 
        background_color: string, 
        background_html: string, 
        bg_mode: number,
        links: Link[]
    ) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.background_emoji = background_emoji;
        this.background_color = background_color;
        this.background_html = background_html;
        this.bg_mode = bg_mode;
        this.links = links
    }
}

