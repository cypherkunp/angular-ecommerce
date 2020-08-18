import { Component } from '@angular/core';

enum NavigationOption {
  RECIPES = 'recipes',
  SHOPPING_LIST = 'shopping-list',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ecommerce';
  loadedFeature = NavigationOption.RECIPES;

  onNavigation(navLinkName: string) {
    switch (navLinkName) {
      case NavigationOption.RECIPES:
        this.loadedFeature = NavigationOption.RECIPES;
        break;
      case NavigationOption.SHOPPING_LIST:
        this.loadedFeature = NavigationOption.SHOPPING_LIST;
        break;
      default:
        return;
    }
  }
}
