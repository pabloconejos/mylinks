import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStartConfigComponent } from './page-start-config.component';

describe('PageStartConfigComponent', () => {
  let component: PageStartConfigComponent;
  let fixture: ComponentFixture<PageStartConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageStartConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStartConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
