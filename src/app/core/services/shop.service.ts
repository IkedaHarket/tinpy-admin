import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, take, map, filter } from 'rxjs';
import { RespShops, Shop } from '../interfaces/negocios.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private _baseUrlTinpy: string = environment.apiTinpy;

  private _shops = new BehaviorSubject<Shop[]>([]);
  public shops$ = this._shops.asObservable();

  constructor(private http: HttpClient) { 
    this.getAllShops().pipe(take(1)).subscribe();
  }

  totalShops$ : Observable<number> = this.shops$.pipe(
    map( (shops) => shops.length )
    );
  totalShopsVerified$: Observable<number> = this.shops$.pipe(
      map( shops => shops.filter(shop => shop.verificado).length )
    )
  totalShopsBanned$: Observable<number> = this.shops$.pipe(
      map( shops => shops.filter(shop => !shop.estado).length )
    )
  changeShopVerify(id:string){
    this._shops.next([...this._shops.value.map((s)=>{
      if(s._id == id) s.verificado = !s.verificado
      return s
    })])
  }

  changeShopBaned(id:string){
    this._shops.next([...this._shops.value.map((s)=>{
      if(s._id == id) s.estado = !s.estado
      return s
    })])
  }

  getAllShops():Observable<RespShops>{
    return this.http.get<RespShops>(`${this._baseUrlTinpy}negocios/all`).pipe(
        tap((resp)=> this._shops.next(resp.negocios)),
        tap(console.log),
      )
  }

}
