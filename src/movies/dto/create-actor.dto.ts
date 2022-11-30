import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateActorDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['Male', 'Female', 'Other'])
    gender: string;
}