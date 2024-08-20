import { Page } from './Page';

export interface User {
    id: number;
    username: string;
    mail: string;
    creation_date: Date;
    page: Page
}

export interface LoginDTO {
    mail: string;
    password: string;
}

export interface RegisterDTO {
    username: string;
    password: string;
    mail: string
}


export class User implements User {
    id: number;
    username: string;
    mail: string;
    creation_date: Date;
    page: Page

    constructor(id: number, username: string, mail: string, creation_date: Date, page: Page) {
        this.id = id;
        this.username = username;
        this.mail = mail;
        this.creation_date = creation_date;
        this.page = page
    }
}

export interface userDataBase {
    user_id: string
    username: string
    mail: string
    creation_date: string
    page_id: string
    title: string
    description: string
    likes: number
    background_emoji: string
    background_color: string
    background_html_id: number
    bg_mode: number
  }
  
  

export interface checkAuth {
    authenticated: boolean, 
    message: string
}

  