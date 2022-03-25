import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoTarefasComponent } from './edicao-tarefas.component';

describe('EdicaoTarefasComponent', () => {
  let component: EdicaoTarefasComponent;
  let fixture: ComponentFixture<EdicaoTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
