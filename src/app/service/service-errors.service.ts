import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ErrorsService{
  private URI = "https://4xm4hnghrd.execute-api.us-east-1.amazonaws.com/default/leer_errores?id_cliente=18XhQa8FE3jPCeQXZyn6bQ=="

  constructor( private http:HttpClient){}

  public getErrors():Observable<any>{
    return this.http.get(this.URI)
  }
}

/*export class ErrorsService {


  constructor(private httpClient: HttpClient) { }

  async getErrors(): Promise<any> {
    try {
      const response = await this.httpClient.get<any>(
        "https://4xm4hnghrd.execute-api.us-east-1.amazonaws.com/default/leer_errores?id_cliente=18XhQa8FE3jPCeQXZyn6bQ==");
      return response;
    } catch (error) {
      console.error('Error en leerErrores:', error);
      throw error;
    }
  }
}*/