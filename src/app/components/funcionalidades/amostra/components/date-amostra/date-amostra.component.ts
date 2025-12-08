import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-amostra',
  templateUrl: './date-amostra.component.html',
  styleUrls: ['./date-amostra.component.scss']
})
export class DateAmostraComponent {

  formbirthdayData: FormGroup;

  dateRange: FormGroup;

  minCheckoutDate: Date | null = null;

  formDates = new FormGroup({
    checkinDate: new FormControl(),
    checkoutDate: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder){
    this.formbirthdayData = this.formBuilder.group({
      birthdayData: ['', Validators.required]
    });
    this.dateRange = this.formBuilder.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    });
  }

  get checkinDate() {
    return this.formDates.get('checkinDate');
  }

  get checkoutDate() {
    return this.formDates.get('checkoutDate');
  }

  // Função para filtrar as datas inválidas
  dateFilter = (date: Date | null): boolean => {
    const checkinDate = this.checkinDate?.value;
    if (!checkinDate || !date) {
      return true;
    }

    return date > checkinDate;
  };

  // Função para atualizar a data mínima de checkout
  updateMinCheckoutDate() {
    this.minCheckoutDate = this.checkinDate?.value;
  }

  // Função para verificar se a data está dentro do intervalo selecionado
  inDateRange(date: Date) {
    const checkinDate = this.checkinDate?.value;
    const checkoutDate = this.checkoutDate?.value;

    return date >= checkinDate && date <= checkoutDate;
  }

  dateClass = (date: Date) => {
    return this.inDateRange(date) ? 'date-in-range' : undefined;
  }

}
