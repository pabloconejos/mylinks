import { BackgroundService } from '@/app/core/services/background.service';
import { PageService } from '@/app/core/services/page.service';
import { Background } from '@/app/interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-background',
  templateUrl: './select-background.component.html',
  styleUrl: './select-background.component.scss'
})
export class SelectBackgroundComponent {

    @Output() bgSelectedEvent = new EventEmitter<number>();
    @Input() bgHtmlIdSelected!: number;

    constructor (
        private bgService: BackgroundService,
        private pageService: PageService ) 
    {
        this.bgService.getBackgrounds().subscribe( bg => {
            this.backgrounds = bg.data
        })
    }


    backgrounds : Background[] = [
        {
            "id": 1,
            "css_real_bg": "absolute inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
            "css_viewer_bg": "absolute inset-0 top-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        },
        {
            "id": 2,
            "css_real_bg": "absolute inset-0 -z-10 h-screen w-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]",
            "css_viewer_bg": "absolute inset-0 top-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"
        },
        {
            "id": 3,
            "css_real_bg": "absolute inset-0 top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]",
            "css_viewer_bg": "absolute inset-0 top-0 h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
        },
        {
            "id": 4,
            "css_real_bg": "absolute inset-0 top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]",
            "css_viewer_bg": "absolute inset-0 top-0 h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
        }
    ]


    selectBg(id: number) {
        this.bgHtmlIdSelected = id;
        this.bgSelectedEvent.emit(id)
    }

}
