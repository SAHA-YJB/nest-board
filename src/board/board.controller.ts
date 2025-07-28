import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './boards.mock.data';
import { ApiTags } from '@nestjs/swagger';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll(): Board[] {
    return this.boardService.findAll();
  }

  @Get(':boardId')
  findOne(@Param('boardId') boardId: number) {
    return this.boardService.findOne(Number(boardId));
  }

  @Post()
  create(@Body() boardData: Board) {
    return this.boardService.create(boardData);
  }

  @Put(':boardId')
  update(@Param('boardId') boardId: number, @Body() boardData: Board) {
    return this.boardService.update(Number(boardId), boardData);
  }

  @Delete(':boardId')
  delete(@Param('boardId') boardId: number) {
    return this.boardService.delete(Number(boardId));
  }
}
