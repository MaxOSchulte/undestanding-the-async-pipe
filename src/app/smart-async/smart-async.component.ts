import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NumberService} from '../number.service';

@Component({
  selector: 'app-smart-async',
  templateUrl: './smart-async.component.html',
  styleUrls: ['./smart-async.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartAsyncComponent {
  value$ = this.numberService.value$;
  mutableValue$ = this.numberService.mutableValue$;
  immutableValue$ = this.numberService.immutableValue$;

  constructor(private numberService: NumberService) {
  }
}
