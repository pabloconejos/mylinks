import { Link } from "./Link";

// Interfaz Page con links como propiedad pública
export interface Page {
    id: string;
    user_id: string;
    title: string;
    description: string;
    background_emoji: string;
    background_color: string;
    background_html_id: number;
    bg_mode: number;
    css_real_bg: string;
    mainColor: string;
    secondaryColor: string,
    links: Link[]; // Aquí se utiliza links en lugar de _links
}

// Clase Page que implementa la interfaz Page
export class Page implements Page {
    id: string;
    user_id: string;
    title: string;
    description: string;
    background_emoji: string;
    background_color: string;
    background_html_id: number;
    bg_mode: number;
    likes: number;
    css_real_bg: string;
    mainColor: string;
    secondaryColor: string;
    private _links: Link[];

    constructor(
        id: string, 
        user_id: string, 
        title: string, 
        description: string, 
        background_emoji: string, 
        background_color: string, 
        background_html_id: number, 
        bg_mode: number,
        likes: number,
        css_real_bg: string,
        secondaryColor: string,
        mainColor: string
    ) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.background_emoji = background_emoji;
        this.background_color = background_color;
        this.background_html_id = background_html_id;
        this.bg_mode = bg_mode;
        this.likes = likes
        this.css_real_bg = css_real_bg;
        this.mainColor = mainColor;
        this.secondaryColor = secondaryColor,
        this._links = [];
    }

    get setlinks(): Link[] {
        return this._links;
    }

    set getlinks(newLinks: Link[]) {
        this._links = newLinks;
    }
}


export interface UpdatePage {
    pageName: string,
    pageDescription: string,
    emojiBg: string,
    colorBg: string,
    cssBg: number,
    mainColor: string,
    secondaryColor: string
}