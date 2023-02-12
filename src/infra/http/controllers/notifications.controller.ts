import { Controller, Get, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/application/useCases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor (
    private SendNotification: SendNotification
  ) {}

  @Post()
  async postNotifications(@Body() body: CreateNotificationBody) {
    // console.log(body)
    const { recipientId, content, category } = body

    const { notification } = await this.SendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification }
  }
}
