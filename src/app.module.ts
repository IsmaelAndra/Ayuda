import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.key';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { UserRepository } from './modules/user/repositories/user.repository';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule,
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule, AuthModule],
        inject: [ConfigService],
        async useFactory(config:ConfigService){
            return {
                type: 'postgres',
                username: config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                host:config.get(Configuration.HOST),
                port: 5432,
                database:config.get(Configuration.DATABASE),
                entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                migrations: [__dirname + '/migrations/*.{.ts,.js}'],
                synchronize: true,
            }
        }
    }
    )
  ],
  providers: [UserRepository]
})
export class AppModule {
  static port: number | string;
    constructor(private readonly _configService: ConfigService){
        AppModule.port = this._configService.get(Configuration['PORT'])
    }
}
