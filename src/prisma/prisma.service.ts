import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService){
        super({
            datasources: {
                db: {
                    url:'postgresql://postgres:123@localhost:5434/nest'
                }
            }
        });
    }
}
