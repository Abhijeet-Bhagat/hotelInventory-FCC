import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomsTableComponent } from './rooms-table.component';
import { FilterPipe } from '../booking/PriceFilterPipe/filter.pipe';
@NgModule({
  declarations: [RoomsTableComponent, FilterPipe],
  imports: [CommonModule, RouterModule],
  exports: [RoomsTableComponent],
})
export class RoomsTableModule {}
