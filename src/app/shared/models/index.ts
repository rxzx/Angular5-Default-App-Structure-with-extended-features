
export * from './user';

export interface RequestError {
    error?: string;
    headers?:any;
    message?:string;
    name:string;
    ok:boolean;
    status:number;
    statusText:string;
    url:string;
}