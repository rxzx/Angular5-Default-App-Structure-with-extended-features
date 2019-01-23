import { Injectable, Injector } from '@angular/core';

@Injectable()
export class StorageServiceProvider {
    private baseUrl = '/';
    constructor(
    ) {
    }

    getPropertyFromLS(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    setPropertyFromLS(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    removePropertyFromLS(key){
        window.localStorage.removeItem(key);
        return true;
    }


}
