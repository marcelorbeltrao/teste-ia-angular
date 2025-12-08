import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@sicoob/ui';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-input-amostra',
  templateUrl: './input-amostra.component.html',
  styleUrls: ['./input-amostra.component.scss']
})
export class InputAmostraComponent {

  formGroup: FormGroup;

  allComplete: boolean = false;

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  valor = 15.33333;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      color: ['#ffffff'],
      date: ['', Validators.required],
      datetime: ['', Validators.required],
      month: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required],
      search: [''],
      tel: [''], // Exemplo de validação de telefone
      text: ['', Validators.required],
      time: ['', Validators.required],
      url: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')], // Exemplo de validação de URL
      week: ['', Validators.required],
      currency: [15.51, Validators.required],
    });
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }



  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

}
