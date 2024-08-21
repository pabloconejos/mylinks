export interface Link {
    id: number;
    user_id: string;
    page_id: string;
    url: string;
    title: string;
    description: string;
    image: string;
}

export class Link implements Link {
    id: number;
    user_id: string;
    page_id: string;
    url: string;
    title: string;
    description: string;
    image: string;

    constructor(
        id: number, 
        user_id: string, 
        page_id: string, 
        url: string, 
        title: string, 
        description: string, 
        image: string
    ) {
        this.id = id;
        this.user_id = user_id;
        this.page_id = page_id;
        this.url = url;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}

export interface LinkForm {
    url: string;
    title: string;
    description: string;
    image_id: number;
  }

