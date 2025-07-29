import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, mockBoards } from './boards.mock.data';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = mockBoards;

  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  findAll(): Board[] {
    return this.boards;
  }

  findOne(boardId: number): Board {
    const board = this.boards.find((board) => board.id === boardId);
    if (!board) {
      throw new NotFoundException(`Board with ID ${boardId} not found`);
    }
    return board;
  }

  create(boardData: CreateBoardDto) {
    const newBoard = { ...boardData, id: this.getNextId() };
    this.boards = [newBoard, ...this.boards];
    return newBoard;
  }

  update(boardId: number, boardData: UpdateBoardDto) {
    const board = this.findOne(boardId);
    if (!board) {
      throw new NotFoundException(`Board with ID ${boardId} not found`);
    }

    const updatedBoard = { ...board, ...boardData };
    this.boards = this.boards.map((b) => (b.id === boardId ? updatedBoard : b));
    return updatedBoard;
  }

  delete(boardId: number) {
    const board = this.findOne(boardId);
    if (!board) {
      throw new NotFoundException(`Board with ID ${boardId} not found`);
    }

    this.boards = this.boards.filter((board) => board.id !== boardId);
    return { boards: this.boards, deletedBoard: board };
  }
}
