import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.modal';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAdd(event) {
    event.preventDefault();

    const { value: nameValue } = this.nameInput.nativeElement;
    const { value: amountValue } = this.amountInput.nativeElement;
    this.shoppingListService.addIngredient.emit(new Ingredient(nameValue, amountValue));
  }
}
