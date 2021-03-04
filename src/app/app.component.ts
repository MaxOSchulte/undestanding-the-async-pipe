import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Mutable} from './Mutable';
import {Immutable, NumberService} from './number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  value = 1;
  mutableValue: Mutable = {mutable: {stillMutable: {value: 1}}};
  immutableValue: Immutable = {doNotMutate: {value: 1}};

  value$ = this.numberService.value$;
  mutableValue$ = this.numberService.mutableValue$;
  immutableValue$ = this.numberService.immutableValue$;

  private valueSub = Subscription.EMPTY;
  private mutableValueSub = Subscription.EMPTY;
  private immutableValueSub = Subscription.EMPTY;

  constructor(private numberService: NumberService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.numberService.setup();
    this.valueSub = this.numberService.value$.subscribe(x => this.value = x);
    this.mutableValueSub = this.numberService.mutableValue$.subscribe(x => this.mutableValue = x);
    this.immutableValueSub = this.numberService.immutableValue$.subscribe(x => this.immutableValue = x);
  }

  ngOnDestroy(): void {
    this.valueSub.unsubscribe();
    this.mutableValueSub.unsubscribe();
    this.immutableValueSub.unsubscribe();
  }

  generateRandom(): void {
    this.numberService.generateRandom();
  }
}
