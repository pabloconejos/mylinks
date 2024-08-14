import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrl: './emoji-picker.component.scss'
})
export class EmojiPickerComponent {


  @Output() emoji = new EventEmitter<string>()

  texto: string = '';
  isVisible = false

  addEmoji(event: any) {
    const { emoji } = event
    this.emoji.emit(emoji.native)
    this.isVisible = false;
  }

  toogleEmojiMart() {
    this.isVisible = !this.isVisible
  }

}
