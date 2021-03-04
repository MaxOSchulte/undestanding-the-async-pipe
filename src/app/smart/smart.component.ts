import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Mutable} from '../Mutable';
import {Immutable, NumberService} from '../number.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartComponent implements OnInit, OnDestroy {
  value = 1;
  mutableValue: Mutable = {mutable: {stillMutable: {value: 1}}};
  immutableValue: Immutable = {doNotMutate: {value: 1}};

  private valueSub = Subscription.EMPTY;
  private mutableValueSub = Subscription.EMPTY;
  private immutableValueSub = Subscription.EMPTY;


  constructor(private numberService: NumberService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.valueSub = this.numberService.value$.subscribe(x => {
      this.value = x;
      this.changeDetectorRef.markForCheck();
    });

    this.mutableValueSub = this.numberService.mutableValue$.subscribe(x => {
      this.mutableValue = x;
      this.changeDetectorRef.markForCheck();
    });

    this.immutableValueSub = this.numberService.immutableValue$.subscribe(x => {
      this.immutableValue = x;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.valueSub.unsubscribe();
    this.mutableValueSub.unsubscribe();
    this.immutableValueSub.unsubscribe();
  }
}
