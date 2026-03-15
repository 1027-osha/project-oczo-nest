import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(30)
    name: string;
      @IsString()
    @MaxLength(30)
    lastName: string;
      @IsString()
    @MaxLength(30)
    phoneNumber: string;
      @IsString()
    @IsEmail()
    email:string;

}
