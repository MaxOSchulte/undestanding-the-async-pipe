import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Mutable} from './Mutable';

export interface Immutable {
  doNotMutate: { value: number };
}

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  value$ = new BehaviorSubject<number>(1);
  immutableValue$ = new BehaviorSubject<Immutable>({doNotMutate: {value: 1}});
  private mutable = {mutable: {stillMutable: {value: 1}}};
  mutableValue$ = new BehaviorSubject<Mutable>(this.mutable);

  setup(): void {
    setInterval(() => this.generateRandom(), 2000);
  }

  generateRandom(): void {
    this.value$.next(Math.random());

    // mutate
    this.mutable.mutable.stillMutable.value = Math.random();
    this.mutableValue$.next(this.mutable);

    // im-mutate
    this.immutableValue$.next({doNotMutate: {value: Math.random()}});
  }
}
