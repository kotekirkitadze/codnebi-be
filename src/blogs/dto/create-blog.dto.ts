// import { ApiProperty } from '@nestjs/swagger';
// import { Category } from '../schemas/restaurant.schema';
import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';
// import { User } from '../../auth/schema/user.schema';

export class CreateBlogDto {
  // @ApiProperty({
  //   description: 'The name of the restaurant',
  //   example: 'Test Restaurant',
  // })

  @IsNotEmpty()
  @IsString()
  readonly title: string;
  // @ApiProperty({
  //   description: 'The description of the restaurant',
  //   example: 'Test description',
  // })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  // @ApiProperty({
  //   description: 'The email of the restaurant',
  //   example: 'test@gmail.com',
  // })

  @IsNotEmpty()
  @IsString()
  readonly content: string;
  // @ApiProperty({
  //   description: 'The email of the restaurant',
  //   example: 'test@gmail.com',
  // })

  @IsNotEmpty()
  @IsString()
  readonly dateCreated: string;
  // @ApiProperty({
  //   description: 'The email of the restaurant',
  //   example: 'test@gmail.com',
  // })

  @IsEmpty({
    message: 'You can not provide user id',
  })
  readonly user: any;
}
