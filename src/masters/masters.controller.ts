// src/masters/masters.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('masters')
@Controller('masters')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Post()
  @Roles('Admin')
  @ApiOperation({ summary: 'Create master data' })
  @ApiResponse({ status: 201, description: 'Master created' })
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.mastersService.create(createMasterDto);
  }

  @Get()
  @Roles('Admin', 'Doctor', 'Nurse')
  @ApiOperation({ summary: 'Get masters by type' })
  @ApiQuery({ name: 'type', type: String })
  @ApiResponse({ status: 200, description: 'List of masters' })
  findByType(@Query('type') type: string) {
    return this.mastersService.findByType(type);
  }

  @Get(':id')
  @Roles('Admin')
  @ApiOperation({ summary: 'Get master by ID' })
  @ApiResponse({ status: 200, description: 'Master details' })
  findOne(@Param('id') id: string) {
    return this.mastersService.findOne(id);
  }

  @Put(':id')
  @Roles('Admin')
  @ApiOperation({ summary: 'Update master by ID' })
  @ApiResponse({ status: 200, description: 'Master updated' })
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.mastersService.update(id, updateMasterDto);
  }

  @Delete(':id')
  @Roles('Admin')
  @ApiOperation({ summary: 'Delete master by ID' })
  @ApiResponse({ status: 200, description: 'Master deleted' })
  remove(@Param('id') id: string) {
    return this.mastersService.remove(id);
  }
}
