/**
 * Baum - OpenAPI 2.0
 * Baum API by Pcampus Studio (studio.pcampus.net)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: pcampus.network@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { MaterialOptions } from '../model/materialOptions';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MaterialService {

    protected basePath = 'https://api.baum.co.nz';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * เพิ่มรายการ  Materials ใหม่
     * Add New Material to material Options
     * @param body review course
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addMaterialOptions(body: MaterialOptions, observe?: 'body', reportProgress?: boolean): Observable<MaterialOptions>;
    public addMaterialOptions(body: MaterialOptions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialOptions>>;
    public addMaterialOptions(body: MaterialOptions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialOptions>>;
    public addMaterialOptions(body: MaterialOptions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addMaterialOptions.');
        }

        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<MaterialOptions>(`${this.basePath}/material`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ลบรายการที่เลือก
     * Add New Material to material Options
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteMaterialOptions(id: string, observe?: 'body', reportProgress?: boolean): Observable<MaterialOptions>;
    public deleteMaterialOptions(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialOptions>>;
    public deleteMaterialOptions(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialOptions>>;
    public deleteMaterialOptions(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteMaterialOptions.');
        }

        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<MaterialOptions>(`${this.basePath}/material/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * แสดง  Materials ที่มีทั้งหมด ใช้สำหรับตัวเลือกตอนสร้าง Course
     * Get all Trainings
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllMaterialOptions(observe?: 'body', reportProgress?: boolean): Observable<Array<MaterialOptions>>;
    public getAllMaterialOptions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<MaterialOptions>>>;
    public getAllMaterialOptions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MaterialOptions>>>;
    public getAllMaterialOptions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<MaterialOptions>>(`${this.basePath}/materials`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * แก้ไขรายการที่เลือก
     * Add New Material to material Options
     * @param id 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateMaterialOptions(id: string, body: MaterialOptions, observe?: 'body', reportProgress?: boolean): Observable<MaterialOptions>;
    public updateMaterialOptions(id: string, body: MaterialOptions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialOptions>>;
    public updateMaterialOptions(id: string, body: MaterialOptions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialOptions>>;
    public updateMaterialOptions(id: string, body: MaterialOptions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateMaterialOptions.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateMaterialOptions.');
        }

        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<MaterialOptions>(`${this.basePath}/material/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
