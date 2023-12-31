import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPageComponent } from './films-page.component';

describe('FilmsPageComponent', () => {
  let component: FilmsPageComponent;
  let fixture: ComponentFixture<FilmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
