import { PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
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

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    name_user: string;

    @IsString()
    @IsOptional()
    lastname_user: string;

    @IsEmail()
    @IsOptional()
    mail_user: string;

    @IsString()
    @IsOptional()
    password_user: string;
}