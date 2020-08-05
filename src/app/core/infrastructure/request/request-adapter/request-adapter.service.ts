/**
 * @packageDocumentation
 * @module CoreModule/infrastructure
 * @author luchik
 */
/** */

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders/* , HttpParams */ } from '@angular/common/http';

import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

// import * as _ from 'lodash';

// Core Config
import { RouteEndPointsConfig } from '@app-core/config/route-end-points-config';

// Cote Infrastructure/Request
import { ResponseError } from '../response-error/response-error';

/**
 * Request Adapter
 */
@Injectable()
export class RequestAdapterService {

    /**
     * Route configuration
     */
    private routeEndPointsConfig: Array<any> = RouteEndPointsConfig;

    /**
     * @param HttpClient httpAdapter
     */
    constructor(
        private location: Location,
        private httpAdapter: HttpClient,
    ) {
    }

    /**
     * Get http url for endpoint by alias and params provided
     *
     * @param string alias
     * @param any params
     * @returns string
     */
    public getHttpUrl(name: string, params?: any): string {
        return this._getHttpUrl(name, params);
    }

    /**
     * Get url from params
     * @param string url
     * @param any params
     * @returns string
     */
    public decodUrl(alias: string, params: any): string {
        let i: string, url: string, urlParams: any;

        url = this._getHttpUrl(alias, params);
        urlParams = [];
        for (i in params) {
            if (!params.hasOwnProperty(i)) {
                continue;
            }
            urlParams.push(i + '=' + params[i]);
        }

        return decodeURIComponent(url + '?' + urlParams.join('&'));
    }

    /**
     * Perform request based on alias
     *
     * @param string alias
     * @param any queryParams
     * @returns Observable<any>
     * @throws Method $method requested in $alias does not exist
     */
    public request(alias: string, queryParams?: any): Observable<any> {
        const method: string = this._getMethod(alias);

        switch (method) {
            case 'POST':
                return this.post(alias, queryParams);
            case 'PUT':
                return this.put(alias, queryParams);
            case 'PATCH':
                return this.patch(alias, queryParams);
            case 'DELETE':
                return this.delete(alias, queryParams);
            case 'GET':
                return this.get(alias, queryParams);
        }
        return throwError('Method ' + method + ' requested in ' + alias + ' does not exist');
    }

    /**
     * Get method
     *
     * @param string alias
     * @param any queryParams
     * @param any requestHeaders
     * @returns Observable<any>
     */
    public get(alias: string, queryParams?: any, requestHeaders?: any): Observable<any> {
        const httpUrl: string = this._getHttpUrl(alias, queryParams);

        let headers: HttpHeaders,
            request: Observable<any>,
            key: string;

        headers = new HttpHeaders().set('Content-Type', 'application/json');
        if (requestHeaders) {
            for (key in requestHeaders) {
                if (!requestHeaders.hasOwnProperty(key)) {
                    continue;
                }
                headers.set(key, requestHeaders[key]);
            }
        }

        request = this.httpAdapter.get(httpUrl);
        return request
            .map((response: any) => {
                return response;
            })
            .catch(this._handleError);
    }

    /**
     * Post method
     *
     * @param string alias
     * @param any queryParams
     * @param any requestHeaders
     * @returns Observable<any>
     */
    public post(alias: string, queryParams?: any): Observable<any> {
        const httpUrl: string = this._getHttpUrl(alias, queryParams);
        let request: Observable<any>;

        request = this.httpAdapter.post(httpUrl, queryParams);
        try {
            this._saveToFile(httpUrl, queryParams);
        } catch (e) {
            return throwError(ResponseError.newFromConfig('ENTITY_NOT_EXISTS'));
        }
        return Observable.of(queryParams);
    }

    /**
     * Put method
     *
     * @param string alias
     * @param any queryParams
     * @param any requestHeaders
     * @returns Observable<any>
     */
    public put(alias: string, queryParams?: any): Observable<any> {
        const httpUrl: string = this._getHttpUrl(alias, queryParams);
        let request: Observable<any>;

        request = this.httpAdapter.put(httpUrl, queryParams);
        try {
            this._saveToFile(httpUrl, queryParams);
        } catch (e) {
            return throwError(ResponseError.newFromConfig('ENTITY_NOT_EXISTS'));
        }
        return Observable.of(queryParams);
    }

    /**
     * Patch method
     *
     * @param string alias
     * @param any queryParams
     * @param any requestHeaders
     * @returns Observable<any>
     */
    public patch(alias: string, queryParams?: any): Observable<any> {
        const httpUrl: string = this._getHttpUrl(alias, queryParams);
        let request: Observable<any>;

        request = this.httpAdapter.patch(httpUrl, queryParams);
        try {
            this._saveToFile(httpUrl, queryParams);
        } catch (e) {
            return throwError(ResponseError.newFromConfig('ENTITY_NOT_EXISTS'));
        }
        return Observable.of(queryParams);
    }

    /**
     * Delete method
     * @param string alias
     * @param any queryParams
     * @param any requestHeaders
     * @returns Promise<any|T>
     */
    public delete(alias: string, queryParams?: any, requestHeaders?: any): Observable<any> {
        return Observable.of({ success: true });
    }

    /**
     * Trigger save
     * @param name
     * @param params
     */
    private _saveToFile(url: string, queryParams: any) {
        const uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(queryParams));
        const something = window.open(uri);
        // const uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(queryParams));
        // let a = <HTMLAnchorElement>document.getElementById('js-tstapp-download');
        // if (!a) {
        //     a = document.createElement('a');
        //     a.id = 'js-tstapp-download';
        //     a.className = 'tstapp-download';
        // }

        // a.href = uri;
        // a.innerHTML = `Right-click and choose 'save as...'`;
        // document.body.appendChild(a);
    }

    /**
     * Get http url for endpoint by alias and params provided
     *
     * @param string alias
     * @param any params
     * @returns string
     */
    private _getHttpUrl(name: string, params?: any): string {
        let httpUrl: any, i: number;
        const regExp = /{{(\w+?)}}/g;
        const endPoint = this.__getEndpoint(name);
        const paramsToRemove: Array<string> = [];

        httpUrl = endPoint['isMock'] ? endPoint['mock'] : endPoint['api_route'];

        if (params instanceof FormData) {
            httpUrl = httpUrl.replace(regExp, function (): any {
                paramsToRemove.push(arguments[1]);
                return params.get(arguments[1]) || null;
            });
            for (i = 0; i < paramsToRemove.length; i++) {
                params.delete(paramsToRemove[i]);
            }
        } else if ('object' === typeof params) {
            Object.keys(params).forEach((key: any) => {
                const partials = httpUrl.split('{{' + key + '}}');
                httpUrl = partials.join(params[key]);
                if (partials.length > 1) {
                    params[key] = undefined;
                    delete params[key];
                }
            });
        }
        httpUrl = httpUrl.replace(/(\/?{{\w+?}})/g, ''); // remove empty params

        return httpUrl;
    }

    /**
     * Get endpoint method by route name
     *
     * @param string name
     * @returns string
     * @throws Enpoint $name is not valid. Please provide method
     */
    private _getMethod(name: string): any {
        const endPoint = this.__getEndpoint(name);

        if (!endPoint['method']) {
            throw new Error('Enpoint ' + name + ' is not valid. Please provide method');
        }

        return endPoint['method'].toUpperCase();
    }

    /**
     * Handle request errors
     *
     * @param any error
     * @returns Observable<any>
     */
    private _handleError(errorResponse: any): Observable<ResponseError> {
        let errorPayload: ResponseError;
        errorPayload = new ResponseError(
            errorResponse.error && errorResponse.error.errors ? errorResponse.error.errors : errorResponse.statusText,
            errorResponse.status,
            errorResponse.statusText);

        return throwError(errorPayload);
    }

    /**
     * Get endpoint by route name
     *
     * @param string name
     * @returns any
     * @throws Endpoint was not found by the name: $name
     */
    private __getEndpoint(name: string): any {
        const result = this.routeEndPointsConfig.find((endPoint: any) => {
            if (endPoint['name'] !== name) {
                return false;
            }
            return true;
        });

        if (!result) {
            throw new Error('Enpoint was not found by the name: ' + name);
        }

        return result;
    }
}
