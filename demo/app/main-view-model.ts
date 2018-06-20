import { Observable } from 'tns-core-modules/data/observable';
import { Autotextsizing } from 'nativescript-autotextsizing';

export class HelloWorldModel extends Observable {
  public message: string;
  private autotextsizing: Autotextsizing;

  constructor() {
    super();

    this.autotextsizing = new Autotextsizing();
    this.message = this.autotextsizing.message;
  }
}
