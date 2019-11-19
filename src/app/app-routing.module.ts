import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { AComponent } from './a/a.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: AComponent },
  { path: 'typo', component: TypographyComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'buttontoggle', component: ButtonToggleComponent },
  { path: 'icon', component: IconsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'spinner', component: ProgressSpinnerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid', component: GridlistComponent },
  { path: 'expansion', component: ExpansionPanelComponent },
  { path: 'card', component: CardsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'radio', component: CheckboxRadioComponent },
  { path: 'date', component: DatepickerComponent },
  { path: 'tooltip', component: TooltipComponent},
  { path: 'snackbar', component: SnackbarComponent},
  { path: 'dialog', component: DialogComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
