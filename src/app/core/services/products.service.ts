import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, take, BehaviorSubject, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _baseUrlTinpy: string = environment.apiTinpy;

  private _products = new BehaviorSubject<Product[]>([]);
  public products$ = this._products.asObservable();

  constructor(private http: HttpClient) { 
    this.getAllProducts().pipe(take(1)).subscribe();
  }

  totalProducts$: Observable<number> = this.products$.pipe(
      map( products => products.length)
    )

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this._baseUrlTinpy}productos/all`).pipe(
        tap((resp)=> this._products.next(resp)),
        tap(console.log),
      )
  }
}
