import { Injectable, Injector } from '@angular/core';

@Injectable()
export class StorageService {
    private baseUrl = '/';
    constructor(
    ) {
    }

    getPropertyFromLS(key) {
        JSON.stringify(window.localStorage.getItem(key));
    }

    setPropertyFromLS(key, value) {
        window.localStorage.setItem(key, JSON.parse(value));
    }

    removePropertyFromLS(key){
        window.localStorage.removeItem(key);
    }


}
