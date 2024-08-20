import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BackgroundService } from '../../../../core/services/background.service';
import { Background } from '../../../../interfaces/Backgrounds';
import { PageService } from '../../../../core/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-start-config',
  templateUrl: './page-start-config.component.html',
  styleUrl: './page-start-config.component.scss'
})
export class PageStartConfigComponent implements AfterViewInit, OnInit{

  @ViewChild('containerOne') containerOne!: ElementRef;
  @ViewChild('containerTwo') containerTwo!: ElementRef;

  @ViewChild('btnPrev') btnPrev!: ElementRef;
  @ViewChild('btnNext') btnNext!: ElementRef;

  nextText = 'Next'
  activeContainer!: number;
  error!: boolean;

  emojiSelect: string = '';
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

  settingForm: FormGroup;
  settingFormSubmitted = false;
  settingError: boolean = false;
  loading: boolean = false;
  bgHtmlIdSelected: number = 0;

  constructor
  (
    private renderer: Renderer2, 
    private formBuilder: FormBuilder,
    private bgService: BackgroundService,
    private pageService: PageService,
    private router: Router
  ) 
  {
      this.settingForm = this.formBuilder.group({
        pageName: ['New Page', []],
        pageDescription: ['', []],
        emojiBg: ['', []],
        colorBg: ['#ffffff', []],
        cssBg: ['', []]
      });
      
      /*this.bgService.getBackgrounds().subscribe( bg => {
        this.backgrounds = bg.data
        //console.log(this.backgrounds)
      })*/

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.activeContainer = 1
    this.activeContainerCheck()
  }

  get lf() {
    return this.settingForm.controls;
  }

  

  prev() {
    switch (this.activeContainer) {
      case 1: // no hay prev
        break;
      case 2:
        // Desplazar el #2 a la izquierda y el #1 a la derecha
        
        this.renderer.removeClass(this.containerOne.nativeElement, 'left-translate');
        this.renderer.addClass(this.containerTwo.nativeElement, 'right-translate'); 
        this.activeContainer = 1;
        break;
    }

    this.activeContainerCheck()
  }

  next() {
    switch (this.activeContainer) {
      case 1:
        // Desplazar el #1 a la izquierda y el #2 a la derecha
        this.renderer.addClass(this.containerOne.nativeElement, 'left-translate');
        this.renderer.removeClass(this.containerTwo.nativeElement, 'right-translate');
        this.activeContainer = 2;
        break;
      case 2: // no hay next
        this.sumbitForm()
        break;
    }

    this.activeContainerCheck()
  }

  activeContainerCheck() {
    switch (this.activeContainer) {
      case 1:
        this.btnPrev.nativeElement.style.cursor = 'not-allowed';
        this.nextText = 'Next'; 
        break;
      case 2:
        this.btnPrev.nativeElement.style.cursor = 'pointer';
        this.nextText = 'Finish'; 
        break;
    }
  }


  handlerEmoji(emoji: any) {
    this.emojiSelect = emoji
  }


  selectBg(id: number) {
    this.bgHtmlIdSelected = id;
  }


  sumbitForm() {
    const { value } = this.settingForm
    value.emojiBg = this.emojiSelect;
    value.cssBg = this.bgHtmlIdSelected
    this.loading = true
    this.pageService.updatePage(value).subscribe( r => {
      this.loading = false
      this.error = false
      this.router.navigate(['/admin'])
    }, error => {
      this.error = true
      this.loading = false
      setTimeout(() => {
        this.error = false
      }, 10000)
    })
  }

}


