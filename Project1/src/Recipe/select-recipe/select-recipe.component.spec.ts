import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipeComponent } from './select-recipe.component';

describe('SelectRecipeComponent', () => {
  let component: SelectRecipeComponent;
  let fixture: ComponentFixture<SelectRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
