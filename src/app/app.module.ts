import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material/material.module';
import { AComponent } from './a/a.component';
import { TypographyComponent } from './typography/typography.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
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
import { DialogExampleComponent } from './dialog/dialog-example/dialog-example.component';
import { DialogFunctionsComponent } from './dialog/dialog-functions/dialog-functions.component';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AComponent,
    TypographyComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    MenuComponent,
    ListComponent,
    GridlistComponent,
    ExpansionPanelComponent,
    CardsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxRadioComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    DialogFunctionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
      }
    })
  ],
  entryComponents: [
    DialogExampleComponent,
    DialogFunctionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
