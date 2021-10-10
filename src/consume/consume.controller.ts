import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Put} from '@nestjs/common';
import { ConsumeService } from './consume.service';
import { CreateConsumeDto } from './dto/create-consume.dto';
import { UpdateConsumeDto } from './dto/update-consume.dto';

@Controller('consume')
export class ConsumeController {
  constructor(private readonly consumeService: ConsumeService) {}

  @Post()
  create(@Body() createConsumeDto: CreateConsumeDto) {
    return this.consumeService.create(createConsumeDto);
  }

  @Get()
  findAll() {
    return this.consumeService.findAll();
  }

  @Get(':user_id')
  findUserId(@Param('user_id') user_id: string) {
    return this.consumeService.findUserId(user_id);
  }

  @Get('/consumeid/:id')
  findOne(@Param('id') id: string) {
    return this.consumeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumeDto: UpdateConsumeDto) {
    return this.consumeService.update(id, updateConsumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumeService.remove(id);
  }

}