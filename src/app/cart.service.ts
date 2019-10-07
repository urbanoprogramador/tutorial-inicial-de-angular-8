import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2Y2JlYTc0ZDRkNGExOGEzOTQxMjg5ZmYyNDA0ODA0NTc2NWQwYzhmN2NhMmNkZjA5ODljNjcyYjE0ZWZhMzlkOGYyMzY0MThhOTg4ZDVmIn0.eyJhdWQiOiIxIiwianRpIjoiNDZjYmVhNzRkNGQ0YTE4YTM5NDEyODlmZjI0MDQ4MDQ1NzY1ZDBjOGY3Y2EyY2RmMDk4OWM2NzJiMTRlZmEzOWQ4ZjIzNjQxOGE5ODhkNWYiLCJpYXQiOjE1NzAyODQ3NDQsIm5iZiI6MTU3MDI4NDc0NCwiZXhwIjoxNjAxOTA3MTQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.h9LOHTIM2ajEOUszy9nvOW0H2rMr_S1fdV08UB9S7vocb1B89q8oMHWxzpaY_3kpuwDE63A75djK26raaRyhkzYLZpuXCvmQvOQjNL8aRrYUfz_28C8pUBHTqrF9nyLVYeeNnSQ3sKlq55EdwcETn9rpdgJ9ePUJrVI_XmSQkKXREC4CosBJxQN-2rUNIUAodroArA_kvGpZ2TowfH-awYK_7zySoRHgBAJVMCkrKY0C-ssxwM4UbWwtYiw_vDMKvAu_97sA53fh_y8s3cE-wPRxkBAHBGAkt-rqMLwU26phUmYb65hgewPphfvMcFivE6YYlnUFfHDgsT-rL8hUtV5HfoBDME5BaqJ2d2dp_q91sq2IvbSJl9DANvEKlb4bYAOP4aEB9aqTQ-95-u1LvZvpBKqUFn_walen9QTQYhNDY1xhd5D0IXmJbnkX7NI5FwlbYTeqeULbnXwWuaJyBHTOcBr6sywqyJti_GDdqhyAFCC6dgKVJd4aAsEtKn2IZp-qB2FnuXR0o5BC2CT9oidSpP2hC0eOZE6aYeHblIUF85wX0drT1aN8k9XXbM0TTxMYOV3yUHtK00GJPRhQeatVdK7PyKwHyhdpkR-HCmjchhxSUAYMZwpZuRwlly-tEDsV6GO-RXcL8ASfIUDqD2fo3-qjv7FaR2Pt0kDQgQ0'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  quitar(id) {
    this.items.splice(id , 1);
  }
  getRoll() {
/*     return this.http.get('http://top.test/api/rol/10',httpOptions).pipe(
      catchError(this.handleError)
    ); */
/*     httpOptions.headers=httpOptions.headers.set("Authorization", 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2Y2JlYTc0ZDRkNGExOGEzOTQxMjg5ZmYyNDA0ODA0NTc2NWQwYzhmN2NhMmNkZjA5ODljNjcyYjE0ZWZhMzlkOGYyMzY0MThhOTg4ZDVmIn0.eyJhdWQiOiIxIiwianRpIjoiNDZjYmVhNzRkNGQ0YTE4YTM5NDEyODlmZjI0MDQ4MDQ1NzY1ZDBjOGY3Y2EyY2RmMDk4OWM2NzJiMTRlZmEzOWQ4ZjIzNjQxOGE5ODhkNWYiLCJpYXQiOjE1NzAyODQ3NDQsIm5iZiI6MTU3MDI4NDc0NCwiZXhwIjoxNjAxOTA3MTQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.h9LOHTIM2ajEOUszy9nvOW0H2rMr_S1fdV08UB9S7vocb1B89q8oMHWxzpaY_3kpuwDE63A75djK26raaRyhkzYLZpuXCvmQvOQjNL8aRrYUfz_28C8pUBHTqrF9nyLVYeeNnSQ3sKlq55EdwcETn9rpdgJ9ePUJrVI_XmSQkKXREC4CosBJxQN-2rUNIUAodroArA_kvGpZ2TowfH-awYK_7zySoRHgBAJVMCkrKY0C-ssxwM4UbWwtYiw_vDMKvAu_97sA53fh_y8s3cE-wPRxkBAHBGAkt-rqMLwU26phUmYb65hgewPphfvMcFivE6YYlnUFfHDgsT-rL8hUtV5HfoBDME5BaqJ2d2dp_q91sq2IvbSJl9DANvEKlb4bYAOP4aEB9aqTQ-95-u1LvZvpBKqUFn_walen9QTQYhNDY1xhd5D0IXmJbnkX7NI5FwlbYTeqeULbnXwWuaJyBHTOcBr6sywqyJti_GDdqhyAFCC6dgKVJd4aAsEtKn2IZp-qB2FnuXR0o5BC2CT9oidSpP2hC0eOZE6aYeHblIUF85wX0drT1aN8k9XXbM0TTxMYOV3yUHtK00GJPRhQeatVdK7PyKwHyhdpkR-HCmjchhxSUAYMZwpZuRwlly-tEDsV6GO-RXcL8ASfIUDqD2fo3-qjv7FaR2Pt0kDQgQ0');
    httpOptions.headers=httpOptions.headers.set('X-Requested-With', 'XMLHttpRequest'); */
    
    console.log(httpOptions);
    return this.http.get('http://top.test/api/admin/users/5' , httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
