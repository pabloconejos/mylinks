import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-page-start-config',
  templateUrl: './page-start-config.component.html',
  styleUrl: './page-start-config.component.scss'
})
export class PageStartConfigComponent implements AfterViewInit{

  @ViewChild('containerOne') containerOne!: ElementRef;
  @ViewChild('containerTwo') containerTwo!: ElementRef;

  @ViewChild('btnPrev') btnPrev!: ElementRef;
  @ViewChild('btnNext') btnNext!: ElementRef;

  nextText = 'Next'
  activeContainer!: number;

  settingForm: FormGroup;
  settingFormSubmitted = false;
  settingError: boolean = false;
  loading: boolean = false;

  constructor
  (
    private renderer: Renderer2, 
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) 
  {
      this.settingForm = this.formBuilder.group({
        pageName: ['', []],
        pageDescription: ['', []],
        emojiBg: ['', []],
        colorBg: ['', []]
      });    

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

}


