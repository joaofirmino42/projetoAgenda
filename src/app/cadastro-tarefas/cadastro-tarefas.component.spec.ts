import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTarefasComponent } from './cadastro-tarefas.component';

describe('CadastroTarefasComponent', () => {
  let component: CadastroTarefasComponent;
  let fixture: ComponentFixture<CadastroTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
