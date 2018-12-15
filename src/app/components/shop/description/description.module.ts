import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DescriptionComponent} from './description.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule.forChild([{path: '', component: DescriptionComponent}])],
  declarations: [DescriptionComponent],
})
export default class DescriptionModule {
  // needs a default keyword to use this class when searching for module
}
