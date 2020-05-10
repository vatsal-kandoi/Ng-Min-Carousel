/**
 * Service for left, or right movement bindings from other components.
 * 
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Direction } from './_types/direction';

@Injectable()
export class NgCarouselService {
  /** Subject which specifies direction of movement */
  move: any;

  constructor() {
    this.move = new BehaviorSubject<Direction>({ direction: "none" });
  }
  /** Move left */
  public left() {
    this.move.next({ direction: 'left' })
  }
  
  /** Move right */
  public right() {
    this.move.next({ direction: 'right' })
  }

  /** Returns an Observable of Direction which can be subscribed to */
  public get moveStatus() : Observable<Direction> {
    return this.move.asObservable();
  }
}
