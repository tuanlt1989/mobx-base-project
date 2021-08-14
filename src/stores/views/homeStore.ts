import { makeAutoObservable } from 'mobx';

// @serializeAll
export class HomeStore {
  // @serializable
  name = 'xin chao';
  // @serializable
  alo: number = 2;

  addAlo() {
    this.alo = this.alo + 1;
  }

  
  
  constructor() {
    makeAutoObservable(this);
  }
}
