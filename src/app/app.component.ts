import { Component, getNgModuleById, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';
import { FooterComponent } from './footer/footer.component';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import * as turf from "@turf/turf";
import { circle } from "@turf/circle";


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


  ngOnInit() { }

  ngAfterViewInit(): void {
    this.createBaseMap();
    this.addBookmark();
    this.addGeolocationCntrols();
    this.loadRealData();
    this.changeBaseStyleMap();
    this.cregarPoint();
    this.addGeoJsonFeatures();


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
      pointToLayer: (point, latlon) => {
        return L.marker(latlon,)
      }
    });


  }

  //Cargar datos reales 
  loadRealData() {
    // Evento load 
    const sourceId = 'xample_points';
    const layerId = 'xample_points-layer';
    if (this.map) {
      this.map.on('load', async (e) => {
        this.map?.addSource(sourceId, {
          type: 'geojson',
          data: 'https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es'
          //Base de datos
          /**   
          data: {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          -76.53063297271729,
                          39.18174077994108
                      ]
                  }
              }]
          }
        */
        });
        this.map?.addLayer({
          id: layerId,
          type: 'fill',
          source: sourceId,
          paint: {
            'fill-color': '#00460cad',
            'fill-opacity': 0.5,
            'fill-outline-color': '#071224ff'
          },

        });
      });

    }

    //Eventos de click  mostrar información básica al pulsar sobre una provincia
    if (this.map ) {
      this.map.on('click', layerId, (e) => {
       const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        if (e.features && e.features.length > 0) {
          if (e.features[0].properties) {

            console.log('ttt', e.features[0].properties)
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
              .setLngLat([longitude  , latitude])
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


    // llamar a la funcion para agregar nuevos puntos al mapa
    this.newPointAdded();
  
    
  }

  // Agregar nuevos puntos al mapa al hacer clic
  newPointAdded() {
    // Ejemplo de un controlador de eventos click
    if (this.map) {
      this.map.on('click', function (e) {

        if (e) {
          console.log('n', e.lngLat.lng);

        }

        // Obtener las coordenadas del clic
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;

        // Crear una nueva entidad de punto (marcador)
        const newPoint =
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.6483,
              -33.4569
            ]
          },
          "properties": {
            "name": "Plaza de Armas",// Puedes añadir más propiedades aquí
            "category": "landmark"
          }
        };
        // Añadir el punto al mapa
        // Esto depende de cómo gestiones tus fuentes de datos en Maplibre
        // Por ejemplo, si usas una fuente de datos GeoJSON:
        // map.getSource('your-geojson-source').setData({
        //    'type': 'FeatureCollection',
        //    'features': [
        //        ...map.getSource('your-geojson-source')._data.features,
        //        newPoint
        //    ]
        // });

        // O si estás gestionando una capa de fuentes de datos de forma diferente
        console.log(`Nuevo punto creado en: ${longitude}, ${latitude}`);
        new maplibregl.Marker({ color: "#7e1588ff" })
          .setLngLat([longitude, latitude])
          .addTo(e.target);

        console.log('nuevo punto', newPoint);


        console.log('vvvvvv', newPoint.properties);
        //const nuevo = newPoint.properties
        const nuevo = newPoint.properties

        new maplibregl.Popup({ closeOnClick: false })
          .setLngLat([longitude, latitude])
          .setHTML(`
            <h4>${nuevo['name'] || 'Provincia desconocida'}</h4><br/>
           <h6> Código: ${nuevo['name']}<br/></h6><br/>
          
          `)
          .addTo(e.target);

      });
    }
  }


  //Cambiar estilos del mapa 
  changeBaseStyleMap() {
    const estilosElement = document.getElementById('estilos');
    if (estilosElement) {
      estilosElement.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        if (target && target.value && this.map) {
          this.map.setStyle(target.value);
        }
      });
    }
  }

  cregarPoint() {
    //Puntos a punto
    if (this.map) {
      this.map.on('load', () => {
        this.map?.addSource('xample_points', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/geoinnova/Points/master/points.json'
        });
        this.map?.addLayer({
          'id': 'xample_points1',
          'type': 'circle',
          'source': 'xample_points1',
          'paint': {
            'circle-radius': 8,
            'circle-color': '#085519ff'
          },

        });
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

    console.log('Base de datos', geoJsonFeatures);

  }

  ngOnDestroy() {
    this.map?.remove();
  }

}


