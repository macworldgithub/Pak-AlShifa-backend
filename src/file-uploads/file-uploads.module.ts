// // src/file-uploads/file-uploads.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { FileUpload, FileUploadSchema } from 'src/schemas/file-upload.schema';
// import { FileUploadsService } from './file-uploads.service';
// import { FileUploadsController } from './file-uploads.controller';
// import { MulterModule } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import * as fs from 'fs-extra';

// @Module({
//   imports: [
//     MongooseModule.forFeature([
//       { name: FileUpload.name, schema: FileUploadSchema },
//     ]),
//     MulterModule.registerAsync({
//       useFactory: () => ({
//         storage: diskStorage({
//           destination: async (req, file, cb) => {
//             const visitId = req.body.visit;
//             const dir = `./uploads/patient-files/${visitId}`;
//             await fs.ensureDir(dir);
//             cb(null, dir);
//           },
//           filename: (req, file, cb) => {
//             cb(null, `${Date.now()}-${file.originalname}`);
//           },
//         }),
//       }),
//     }),
//   ],
//   providers: [FileUploadsService],
//   controllers: [FileUploadsController],
// })
// export class FileUploadsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileUpload, FileUploadSchema } from 'src/schemas/file-upload.schema';
import { FileUploadsService } from './file-uploads.service';
import { FileUploadsController } from './file-uploads.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs-extra';

fs.ensureDirSync('./uploads/tmp'); // ensure temp dir exists

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileUpload.name, schema: FileUploadSchema },
    ]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/tmp', // temporary upload dir
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  ],
  providers: [FileUploadsService],
  controllers: [FileUploadsController],
})
export class FileUploadsModule {}
