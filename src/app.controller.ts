import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async postNotifications(@Body() body: CreateNotificationBody) {
    // console.log(body)
    const { recipientId, content, category } = body

    await this.prisma.notification.create({
        data: {
          id: randomUUID(),
          content,
          category,
          recipientId
        }
    });
  }
}
