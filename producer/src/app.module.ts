import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { OrmConfig } from './common/database/orm-config';
// import { DataSource, DataSourceOptions } from 'typeorm';
import { SqsProducerModule } from './sqs-producer/sqs-producer.module';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useClass: OrmConfig,
    //   dataSourceFactory: async (options: DataSourceOptions) => {
    //     return new DataSource(options).initialize();
    //   },
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
    }),
    SqsProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
