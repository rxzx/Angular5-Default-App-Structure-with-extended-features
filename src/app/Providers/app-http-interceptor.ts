import { RequestError } from '../shared/models/index';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class AppHttpInterceptor {
    constructor(
        private toastr: ToastrService,
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        // console.log("intercepted request ... ");

        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });
       
        // console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console
                let requestError: RequestError = error;
                if (requestError.status === 404) {
                    this.toastr.error("Request " + requestError.statusText, "Error");
                } else {
                    this.toastr.error("Api Failled", "Error");
                }
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }

}
