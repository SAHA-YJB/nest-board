import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'board' })
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  user_id: number;

  @ApiProperty({ description: '게시글 제목', example: '게시글 제목' })
  @Column()
  title: string;

  @ApiProperty({ description: '게시글 내용', example: '게시글 내용' })
  @Column()
  content: string;

  @ApiProperty({ description: '게시글 작성일', example: '2025-01-01' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: '게시글 수정일', example: '2025-01-01' })
  @UpdateDateColumn()
  updated_at: Date;
}
