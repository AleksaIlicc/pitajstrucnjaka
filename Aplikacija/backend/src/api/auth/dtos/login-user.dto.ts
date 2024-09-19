import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Unesite ispravnu e-mail adresu.' })
  @MaxLength(100, {
    message: 'E-mail adresa mora imati najvise 100 karaktera.',
  })
  @IsNotEmpty({ message: 'Polje za e-mail adresu ne sme biti prazno.' })
  public readonly email: string;

  @IsNotEmpty({ message: 'Polje za sifru ne sme biti prazno.' })
  public readonly password: string;
}
