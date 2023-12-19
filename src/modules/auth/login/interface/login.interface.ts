export interface AuthBody {
    mail_user: string;
    password_user:string;
}

export interface PayLoadToken {
    sub: string;
    name: string;
    lastname: string;
    mail: string;
}