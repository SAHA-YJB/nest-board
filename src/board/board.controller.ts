import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardService } from './board.service';
import { Board } from './boards.mock.data';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({ summary: '게시글 전체 조회' })
  @Get()
  findAll(): Board[] {
    return this.boardService.findAll();
  }

  @ApiOperation({ summary: '게시글 하나 조회' })
  @ApiParam({ name: 'boardId', type: Number, description: '게시글 ID' })
  @Get(':boardId')
  findOne(@Param('boardId', ParseIntPipe) boardId: number) {
    return this.boardService.findOne(boardId);
  }

  @ApiOperation({ summary: '게시글 생성' })
  @ApiBody({ type: CreateBoardDto })
  @Post()
  create(@Body(new ValidationPipe()) boardData: CreateBoardDto) {
    return this.boardService.create(boardData);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiParam({ name: 'boardId', type: Number, description: '게시글 ID' })
  @ApiBody({ type: UpdateBoardDto })
  @Put(':boardId')
  update(
    @Param('boardId', ParseIntPipe) boardId: number,
    @Body(new ValidationPipe()) boardData: UpdateBoardDto,
  ) {
    return this.boardService.update(boardId, boardData);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @ApiParam({ name: 'boardId', type: Number, description: '게시글 ID' })
  @Delete(':boardId')
  delete(@Param('boardId', ParseIntPipe) boardId: number) {
    return this.boardService.delete(boardId);
  }
}
