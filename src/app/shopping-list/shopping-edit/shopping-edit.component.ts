import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAdd(event) {
    event.preventDefault();

    const { value: nameValue } = this.nameInput.nativeElement;
    const { value: amountValue } = this.amountInput.nativeElement;

    this.addIngredient.emit(new Ingredient(nameValue, amountValue));
  }
}
