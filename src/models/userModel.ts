import { makeAutoObservable } from "mobx";

export default class UserModel {
    id: number;
    constructor() {
        makeAutoObservable(this);
    } 
}