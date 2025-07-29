import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @ApiProperty({
    description: '게시글 제목',
    required: false,
    example: '게시글 제목입니다.',
    minLength: 2,
    maxLength: 20,
  })
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: '게시글 내용',
    required: false,
    example: '게시글 내용입니다.',
  })
  @IsOptional()
  content?: string;
}
