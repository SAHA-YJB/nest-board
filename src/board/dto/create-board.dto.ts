import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    description: '게시글 제목',
    required: true,
    example: '게시글 제목입니다.',
    minLength: 2,
    maxLength: 20,
  })
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: '게시글 내용',
    required: true,
    example: '게시글 내용입니다.',
  })
  @IsNotEmpty()
  content: string;
}
