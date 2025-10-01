import { Component, getNgModuleById, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';
import { FooterComponent } from './footer/footer.component';
import * as L from 'leaflet';
import * as geojson from 'geojson';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'AngularCli + MapLibre GL JS';
  public map: maplibregl.Map | undefined;
  public marke: maplibregl.Marker | undefined;
  public imagen: any;

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.createBaseMap();
    this.addBookmark();
    this.addGeolocationCntrols();
    this.loadRealData();
    this.changeBaseStyleMap();
    this.addGeoJsonFeatures();
    if (this.map) {
      this.map.on('load', async () => {
        this.map?.addSource('xample_points', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/geoinnova/Points/master/points.json'
        });
          this.imagen = await this.map?.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/osgeo-logo.png');
          
          console.log('rrr',this.imagen);
          
          this.map?.addImage('custom-marker', this.imagen.data);
        
        this.map?.addLayer({
          'id': 'xample_points',
          'type': 'circle',
          'source': 'xample_points',

          'paint': {
            'circle-radius': 8,
            'circle-color': '#B42222'
          },

        });
      });
    }
  }

  //Crear mapa base
  createBaseMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx', // stylesheet location
      center: [-76.6361969, 2.4482548], // starting position [lng, lat]
      zoom: 1 // starting zoom
    });
  }

  //Agregar marcador
  addBookmark() {
    this.marke = new maplibregl.Marker({ color: "#7c2828ff" })
      .setLngLat([-76.6361969, 2.4482548])
      .addTo(this.map!);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([-76.6361969, 2.4682548])
      .addTo(this.map!);

    new maplibregl.Marker({ color: "#8fc933ff" })
      .setLngLat([-76.6361958, 2.44482548])
      .addTo(this.map!);


    new maplibregl.Marker({ color: "#7e1588ff" })
      .setLngLat([-76.5361958, 1.44582548])
      .addTo(this.map!);
 

  }

  // Añadir controles de navegación, geolocalización y escala
  addGeolocationCntrols() {
    // Controles de zoom y rotación
    if (this.map) {
      // If you want to add an attribution control with compact mode, use the following:
      this.map.addControl(new maplibregl.AttributionControl({
        compact: true
      }));

      this.map.addControl(
        new maplibregl.NavigationControl(), 'top-right'
      );
      this.map.addControl(
        new maplibregl.GlobeControl()
      );

      // Geolocalización del usuario
      this.map.addControl(new maplibregl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }), 'top-right');

      // Escala métrica
      this.map.addControl(new maplibregl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      }), 'bottom-left');

      /**Logotipo de MapLibre
       * A LogoControles un control que agrega la marca de agua.
       */
      this.map.addControl(new maplibregl.LogoControl({ compact: false }));

    }

    var geojsonPoint: geojson.Point = {
      type: "Point",
      coordinates: [5.9, 43.13],
    };
    var marker = L.geoJSON(geojsonPoint, {
      pointToLayer: (point,latlon)=> {
        return L.marker(latlon, )
      }
    });


  }

  //Cargar datos reales 
  loadRealData() {
    // Evento load 
    const sourceId = 'xample_points';
    const layerId = 'xample_points-layer';
    if (this.map) {
      this.map.on('load', (e) => {
        /**          
         * const radius = 1; // kilometer
         * const options = {
           steps: 104,
           units: 'kilometers'
         };
         const circle = turf.circle([-76.6361969, 2.4482548], radius);
          */

        this.map?.addSource(sourceId, {
          type: 'geojson',
          // data: circle

          data: 'https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es'
        });
        this.map?.addLayer({
          id: layerId,
          type: 'fill',
          source: sourceId,
          paint: {
            'fill-color': '#ff1c15ad',
            'fill-opacity': 0.5,
            'fill-outline-color': '#071224ff'
          }
        });
      });
    }

    //Eventos de click  mostrar información básica al pulsar sobre una provincia
    if (this.map) {
      this.map.on('click', layerId, (e) => {
        if (e.features && e.features.length > 0) {
          if (e.features[0].properties) {
            const props = e.features[0].properties;
            new maplibregl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(`
            <h4>${props['prov_name'] || 'Provincia desconocida'}</h4><br/>
           <h6> Código: ${props['prov_code']}<br/></h6><br/>
            Comunidad: ${props['acom_name']}<br/>
            Año: ${props['year']}
          `)
              .addTo(this.map!);
            new maplibregl.Marker({ color: "#152688ff" })
              .setLngLat([-73.5361958, 1.44582548])
              .addTo(this.map!);
          }
        }
      });
      this.map.on('mouseenter', layerId, () => {
        if (this.map) {
          this.map.getCanvas().style.cursor = 'pointer';
        }
      });
      this.map.on('mouseleave', layerId, () => {
        if (this.map) {
          this.map.getCanvas().style.cursor = '';
        }
      });
    }
  }

  //Cambiar estilos del mapa 
  changeBaseStyleMap() {
    const estilosElement = document.getElementById('estilos');
    if (estilosElement) {
      estilosElement.addEventListener('change', (e: Event) => {

        console.log('eer', e);

        const target = e.target as HTMLSelectElement;
        if (target && target.value && this.map) {
          this.map.setStyle(target.value);
        }
      });
    }
  }
 /**Agregar múltiples funciones de una colección de funciones
Puedes usar geojson para crear tu propia colección y jugar con esta funcionalidad.
*/
 addGeoJsonFeatures() {
    var geoJsonFeatures: geojson.FeatureCollection = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "circle-stroked",
            "population": 123456
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              6.134490966796874,
              49.61649369617232
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              5.887298583984375,
              49.48240137826932
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [
              6.179809570312499,
              49.453842594330716
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                5.4107666015625,
                49.586677749628784
              ],
              [
                5.71014404296875,
                49.616048816070425
              ],
              [
                5.78155517578125,
                49.47883244071047
              ],
              [
                5.696411132812499,
                49.37969064441394
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  5.2789306640625,
                  49.7173764049358
                ],
                [
                  5.295410156249999,
                  49.61070993807422
                ],
                [
                  5.532989501953125,
                  49.63117246129088
                ],
                [
                  5.604400634765625,
                  49.74045665339642
                ],
                [
                  5.601654052734375,
                  49.82558098327032
                ],
                [
                  5.329742431640625,
                  49.82469504231389
                ],
                [
                  5.2789306640625,
                  49.7173764049358
                ]
              ]
            ]
          }
        }
      ]
    };

    console.log('qqqqq', geoJsonFeatures);
    
  }

  ngOnDestroy() {
    this.map?.remove();
  }

}


