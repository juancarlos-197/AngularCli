import { Component, getNgModuleById, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
/**Importa maplibregl */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';
import { FooterComponent } from './footer/footer.component';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import * as turf from "@turf/turf";
import { circle } from "@turf/circle";
import { MatCardModule } from '@angular/material/card';
/**Importa Angular Material Car  */
import { Signal, computed, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import {FormControl,FormGroupDirective,NgForm,Validators,FormsModule} from '@angular/forms';
/**Importar Form  */
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
/**Importar Input  */
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup,ReactiveFormsModule} from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { debounceTime } from 'rxjs';
import { Mapa } from './interfaces/mapa';
import { TaskService } from './services/task.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatButtonModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public title = 'AngularCli + MapLibre GL JS';
  public map: maplibregl.Map | undefined;
  public marke: maplibregl.Marker | undefined;

  //La base de datos de puntos con GeoJSON
  public newPoint: Mapa[] = []
  public form!: FormGroup; // The main reactive form instance
 public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
public matcher = new MyErrorStateMatcher();


  constructor(private fb: FormBuilder, private taskService: TaskService) {

    this.newPoint = this.taskService.getAllNewPoint()
    console.log('Base de datos', this.newPoint);

  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    this.createBaseMap();
    this.loadRealData();
    this.changeBaseStyleMap();
    this.cregarPoint();
    this.addGeoJsonFeatures();
var geojsonPoint: geojson.Point = {
      type: "Point",
      coordinates: [5.9, 43.13],
    };

    console.log('yyyyyyy',geojsonPoint);
    
    var marker = L.geoJSON(geojsonPoint, {
      pointToLayer: (point, latlon) => {
        return L.marker(latlon,)
      }
    });


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

    

  }

  //Cargar datos reales 
  loadRealData() {
    // Evento load 
    const sourceId = 'xample_points';
    const layerId = 'xample_points-layer';
    if (this.map) {
      this.map.on('load', async (e) => {
        this.addGeolocationCntrols();
        this.addBookmark();
        this.map?.addSource(sourceId, {
          type: 'geojson',
          data: 'https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es'
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
    if (this.map) {
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
              .setLngLat([longitude, latitude])
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

  // Agregar nuevos puntos al mapa al hacer clic
  newPointAdded() {
    // Ejemplo de un controlador de eventos click

    if (this.map) {

      this.map.on('click', function (e) {

        // Obtener las coordenadas del clic
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        // Crear una nueva entidad de punto (marcador)
        const newPoint =
        {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  longitude,
                  latitude]
              },
              "properties": {
                "name": "Plaza de Armas",
                "category": "landmark",
                "marker-color": "#7e7e7e",
                "marker-size": "medium",
                "marker-symbol": "circle-stroked",
                "population": 123456
              }
            },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  longitude,
                  latitude
                ]
              },
              "properties": {
                "name": "Parque Bicentenario",
                "category": "park"
              }
            }
          ]
        }
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
        console.log(`Nuevo punto creado en: ${longitude}, ${latitude}`);


        new maplibregl.Marker({ color: "#7e1588ff" })
          .setLngLat([longitude, latitude])
          .addTo(e.target);

        console.log('nuevo punto', newPoint.features[0].properties['marker-color']);


        //const nombre,categoria,color,tamaño,símbolo,población
        const name = newPoint.features[0].properties
        const category = newPoint.features[0].properties
        const color = newPoint.features[0].properties['marker-color']
        const size = newPoint.features[0].properties['marker-size']
        const symbol = newPoint.features[0].properties['marker-symbol']
        const population = newPoint.features[0].properties['population']
        const name1 = newPoint.features[1].properties
        const category2 = newPoint.features[1].properties

        new maplibregl.Popup({ closeOnClick: false })
          .setLngLat([longitude, latitude])
          .setHTML(`
            <samp> Sitios públicos para pasearse</samp>

            <h6> ${name['name'] || 'Nombre'} </h6>
            <p>Categoria: ${category['category'] || 'Categoria'}  -
               Color: ${color} -  Tamaño: ${size} - Símbolo: ${symbol} - Población: ${population} 
            </p>        
            <h6>${name1['name'] || 'Nombre'}</h6>
            <p>Categoria: ${category2['category'] || 'Categoria'} </p>     
            Nuevo punto creado en: (Lng,Lat): ${longitude}Latitud: ${latitude}
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
  /**
   * Simulates fetching form configuration from an API.
   * In a real application, this would be an HTTP request.
   */
  async fetchFormConfig() {
    // Simulate API call
    return {
      fields: [
        { label: "Username", type: "text", required: true },
        { label: "Age", type: "number", required: false },
        {
          label: "Gender",
          type: "select",
          options: ["Male", "Female"],
          required: true,
        },
      ],
    };
  }

  /**
   * Dynamically creates the form controls based on the fetched configuration.
   */
  buildForm(fields: any[]) {
    const controls: any = {};
    fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      controls[field.label] = ["", validators];
    });
    this.form = this.fb.group(controls);
  }

  /**
   * Handles form submission, logging the form value to the console.
   */
  submitForm() {
    console.log(this.form.value);
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

  }

  ngOnDestroy() {
    this.map?.remove();
  }

}


