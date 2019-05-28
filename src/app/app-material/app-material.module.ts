import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
