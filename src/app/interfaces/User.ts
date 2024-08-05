interface User {
    id: number;
    username: string;
    mail: string;
    creation_date: Date;
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


class User implements User {
    id: number;
    username: string;
    mail: string;
    creation_date: Date;

    constructor(id: number, username: string, mail: string, creation_date: Date) {
        this.id = id;
        this.username = username;
        this.mail = mail;
        this.creation_date = creation_date;
    }
}

export interface checkAuth {
    authenticated: boolean, 
    message: string
}

  