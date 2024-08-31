import { Component, Input } from '@angular/core';
import { Notification } from '@/app/interfaces'

export interface NoticationTemplate {
  type: number,
  css: string,
  src: string
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  isOpen: boolean = false

  @Input()
  notification!: Notification

  constructor() {}

  cssClasses: NoticationTemplate[] = [
    {
      type: 1,
      css: 'text-green-500 bg-green-100 rounded-lg',
      src: 'check.svg'
    },
    {
      type: 2,
      css: 'text-red-500 bg-red-100 rounded-lg  p-1',
      src: 'wrong.svg'
    },
    {
      type: 3,
      css: 'text-orange-500 bg-orange-100 rounded-lg',
      src: 'warming'
    },
  ]

  close() {
    this.isOpen = !this.isOpen
  }

}
