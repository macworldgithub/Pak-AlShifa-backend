// src/file-uploads/file-uploads.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  UseGuards,
  Request,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadsService } from './file-uploads.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
@ApiTags('file-uploads')
@Controller('file-uploads')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class FileUploadsController {
  constructor(private readonly fileUploadsService: FileUploadsService) {}

  @Post()
  @Roles('Doctor', 'Nurse', 'Receptionist')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload file' })
  @ApiResponse({ status: 201, description: 'File uploaded' })
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateFileUploadDto,
    @Request() req,
  ) {
    return this.fileUploadsService.create(body, file.path, req.user.userId);
  }

  @Get('visit/:visitId')
  @Roles('Doctor', 'Nurse', 'Receptionist', 'Admin')
  @ApiOperation({ summary: 'Get files by visit ID' })
  @ApiResponse({ status: 200, description: 'List of files' })
  findByVisit(@Param('visitId') visitId: string) {
    return this.fileUploadsService.findByVisit(visitId);
  }

  @Delete(':id')
  @Roles('Admin')
  @ApiOperation({ summary: 'Delete file by ID' })
  @ApiResponse({ status: 200, description: 'File deleted' })
  remove(@Param('id') id: string) {
    return this.fileUploadsService.remove(id);
  }
}
