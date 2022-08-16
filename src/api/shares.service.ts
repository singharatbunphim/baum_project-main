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

import { ApiResponse } from '../model/apiResponse';
import { Email } from '../model/email';
import { NoticePay } from '../model/noticePay';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SharesService {

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
     * Contact form
     * ติดต่อเรา
     * @param body order placed for purchasing the training
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendContactUs(body: Email, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sendContactUs(body: Email, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sendContactUs(body: Email, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sendContactUs(body: Email, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling sendContactUs.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/contact`,
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
     * ส่งจดหมายแจ้งเตือน
     * 
     * @param body order placed for purchasing the training
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendEmail(body: Email, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sendEmail(body: Email, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sendEmail(body: Email, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sendEmail(body: Email, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling sendEmail.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/email`,
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
     * แจ้งการชำระเงินจาก order id
     * แจ้งชำระเงิน
     * @param orderId 
     * @param body order placed for purchasing the training
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendNoticePay(orderId: string, body: NoticePay, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sendNoticePay(orderId: string, body: NoticePay, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sendNoticePay(orderId: string, body: NoticePay, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sendNoticePay(orderId: string, body: NoticePay, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling sendNoticePay.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling sendNoticePay.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/notice/${encodeURIComponent(String(orderId))}`,
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
     * อัพโหลดไฟล์ข้อมูลสื่อการสอนโดยอ้างอิงประเภทของสื่อได้
     * 
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadFile(additionalMetadata?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public uploadFile(additionalMetadata?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public uploadFile(additionalMetadata?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public uploadFile(additionalMetadata?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (additionalMetadata !== undefined) {
            formParams = formParams.append('additionalMetadata', <any>additionalMetadata) || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/uploadFiles`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * อัพโหลดโปรไฟล์รุปภาพ
     * 
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadImage(additionalMetadata?: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public uploadImage(additionalMetadata?: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public uploadImage(additionalMetadata?: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public uploadImage(additionalMetadata?: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let headers = this.defaultHeaders;

        // authentication (firebase) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (additionalMetadata !== undefined) {
            formParams = formParams.append('additionalMetadata', <any>additionalMetadata) || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/uploadImage`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}