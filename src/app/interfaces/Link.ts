export interface Link {
    id: string
    userId: string
    pageId: string
    linkUrl: string
    title: string
    description: string
    creationDate: string
    imageId: number
    imageName: string
    imageUrl: string
}

export class Link implements Link {
    id: string;
    userId: string;
    pageId: string;
    linkUrl: string;
    title: string;
    description: string;
    imageId: number
    imageName: string
    imageUrl: string

    constructor(
        id: string,
        userId: string,
        pageId: string,
        linkUrl: string,
        title: string,
        description: string,
        image: string,
        imageId: number,
        imageName: string,
        imageUrl: string
    ) {
        this.id = id;
        this.userId = userId;
        this.pageId = pageId;
        this.linkUrl = linkUrl;
        this.title = title;
        this.description = description;
        this.imageId = imageId,
        this.imageName = imageName,
        this.imageUrl = imageUrl
    }
}

export interface LinkForm {
    url: string;
    title: string;
    description: string;
    image_id: number;
  }


 export interface LinkResult {
    link: LinkForm, 
    action: string
}
