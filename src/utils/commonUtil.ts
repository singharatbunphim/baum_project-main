

import {Configuration} from "../configuration";
import {environment} from "../environments/environment";




export class CommonUtil
{


  private static getJWT(){

    return localStorage.getItem("jwt") || "";
  }

  static getApiConfig = () => {





    const cfg = new Configuration({

      accessToken: CommonUtil.getJWT(),
      apiKeys : {
        Authorization : `Bearer ${CommonUtil.getJWT()}`
      },
      basePath : environment.apiBasePath,
      withCredentials : false,
    });




    return cfg;

  }

  static setRequestToken = (serviceObject : any) => {

    serviceObject.defaultHeaders.set(
        "Authorization",
        `Bearer ${CommonUtil.getJWT()}`);
  }

  static getDefaultImage = () => {

      return environment.defaultImage;
  }



  static getLocationNames : () => Promise<string[]> = async () => {

    const code : any = await new Promise((resolve) => {


      navigator.geolocation.getCurrentPosition(function (position) {

        resolve({
          lat : position.coords.latitude,
          lng : position.coords.longitude,
        });
      })

    });


    // @ts-ignore
    const map : any = new google.maps.Map(<HTMLElement>document.createElement("div")  , {
      center: { lat: code.lat, lng: code.lng },
      zoom: 8,
    });

    // @ts-ignore
    const pyrmont = new google.maps.LatLng(code.lat,code.lng);

    // @ts-ignore
    const request : { location: google.maps.LatLng; radius: string; type: string[] } = {
      location: pyrmont,
      radius: '5000',
      type: ['hospital'],

    };

    // @ts-ignore
    const service : any = new google.maps.places.PlacesService(map);
    const locationNames : string[] = await new Promise((resolve) => {

      service.nearbySearch(request, function callback(results : any, status: any) {

        const arrData : string[] = [];
        if (status == "OK") {

          for (let ie of results){

            arrData.push(ie.name);
          }
        }
        resolve(arrData);
      });

    });


    return locationNames;
  }

}

