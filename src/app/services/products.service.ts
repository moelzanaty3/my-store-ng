import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Product } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.BASE_URL}/products`)
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.BASE_URL}/products/${id}`)
  }
}
