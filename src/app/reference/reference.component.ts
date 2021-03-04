import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Mutable} from '../Mutable';
import {Immutable} from '../number.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
  @Input() value?: number | Mutable | Immutable | null;
  @Input() title?: string;
}
