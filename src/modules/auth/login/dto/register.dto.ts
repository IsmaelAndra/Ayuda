import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    name_user: string;

    @IsString()
    @IsNotEmpty()
    lastname_user: string;

    @IsEmail()
    @IsNotEmpty()
    mail_user: string;

    @IsString()
    @IsNotEmpty()
    password_user: string;
}