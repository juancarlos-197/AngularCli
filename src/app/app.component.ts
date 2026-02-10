import { Component, OnInit } from '@angular/core';
/**Importa maplibregl */
import { Map, NavigationControl, Marker, Popup, GeoJSONFeatureId, MapGeoJSONFeature } from 'maplibre-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';
import * as geojson from 'geojson';

/**Importa FooterComponent */
import { FooterComponent } from './footer/footer.component';

/**Importa HttpClient para del Core de Angular */
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**Importa Angular Material Car  */
import {FormsModule } from '@angular/forms';
/**Importar Form  */
import { MatInputModule } from '@angular/material/input';
/**Importar generador de formularios  */
import { Mapa } from './interfaces/mapa';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent, FormsModule, MatInputModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public title = 'AngularCli + MapLibre GL JS';
  public map: Map | undefined;
  public marke: Marker | null = null;

  //La base de datos de puntos con GeoJSON pruebas
  public newPoin1: Mapa[] = [];

  //Api Rest endpoint
  public newPoint2: Mapa[] = [];
  public loading: boolean = false;
  public error: string | null = null;
 
  /**El ciclo de vida de Angular , nosotros tenemos que definirle al componente, que estamos trabajando en este 
   * caso componente principal, que vamos a hacer un consumo de esa Api, por lo dando vamos a tener
   * que hacer uso de algunos de los HOOKS que tiene Angular disponible. Vamos a hacer uso del HOOK ng init
   * iniciando ngOnInit 
    */

  constructor(private taskService: TaskService) {
    this.newPoin1 = this.taskService.getAllNewPoint()
    console.log('Base de datos pruebas', this.newPoin1);

  }

  ngOnInit() {
    /**Api Rest endpoint para consumir */
    this.taskService.getNewPoint().subscribe({
      next: (response) => {
        console.log('Base de datos API Rest', response);
        this.newPoint2 = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message
      }
    })
    this.loading = true;
    this.error = null;

  }


  ngAfterViewInit(): void {
    this.visualizarMapa();
    this.mostrarMapasGeoJSON();
    this.agregarNuevoMapa();
    this.eliminarMarcador();
    this.imagenFondo();
    this.filtrarEstado();
    this.changeBaseStyleMap();
    this.filtado();
    this.addGeoJsonFeatures();
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  //Crear mapa base, Inicializa un objeto MapLibre
  visualizarMapa() {

    // Constantes para las claves de localStorage
    const MAP_ZOOM_KEY = 'mapZoom';


    this.map = new maplibregl.Map({
      // Identificador del contenedor HTML
      container: 'map',
      // URL del estilo del mapa base
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx', // stylesheet location
      // Coordenadas del punto central [longitud, latitud]
      center: [-76.6361969, 2.4482548],
      // Nivel de zoom inicial
      zoom: getStoredMapZoom() || 1 // Cargar el zoom o usar el predeterminado

    });


    /**
 * Recupera el nivel de zoom desde localStorage.
 * @returns {number|null} - El nivel de zoom o null.
 */
    function getStoredMapZoom() {
      const storedZoom = localStorage.getItem(MAP_ZOOM_KEY);
      return storedZoom ? parseFloat(storedZoom) : null;
    }
  }



  mostrarMapasGeoJSON() {

    if (this.map) {
      // Añadir una fuente GeoJSON con algunos datos de ejemplo (por ejemplo, puntos, el nonbre, como Plaza de Armas)
      const geojsonData = {
        "type": "FeatureCollection",
        "features":
          [
            {
              "type": "Feature",
              "properties": {
                "name": "Plaza de Armas",
                "category": "landmark",
                "marker-color": "#7e7e7e",
                "marker-size": "medium",
                "marker-symbol": "circle-stroked",
                "population": 123456
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  -76.53063297271729,
                  39.18174077994108
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "name": "Parque Bicentenario",
                "category": "park"
              }, "geometry": {
                "type": "Point",
                "coordinates": [
                  -66.53063297271729,
                  49.18174077994108
                ]
              }
            }
          ]

      }

      // Espera a que el mapa cargue antes de añadir las fuentes y capas
      this.map.on('load', () => {
        // Añadir la fuente de datos GeoJSON
        const source = this.map?.addSource('places', {
          type: 'geojson',
          //  Cargar datos GeoJSON
          data:
          {
            "type": "FeatureCollection",
            "features":
              [
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Plaza de Armas",
                    "category": "landmark",
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "circle-stroked",
                    "population": 123456
                  }
                  ,
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -76.53063297271729,
                      39.18174077994108
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {},
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -66.53063297271729,
                      49.18174077994108
                    ]
                  }
                },

                {
                  "type": "Feature",
                  "properties": {
                    "name": "Parque Bicentenario",
                    "category": "park"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -76.6361969,
                      2.4482548]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Parque Bicentenario",
                    "category": "park"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -79.6361969,
                      13.4482548]
                  }
                }

              ]
          }
        });



        // Añadir la capa para visualizar los puntos
        this.map?.addLayer({
          'id': 'xample_po',
          'type': 'circle',// Puedes usar 'circle' o 'symbol' para puntos
          'source': 'places', // ID de la fuente creada en el paso anterior
          'paint': {
            'circle-color': '#008f07ff', // Color de los círculos
            'circle-radius': 10, // Radio de los círculos
            'circle-stroke-width': 2,// Ancho del borde
            'circle-stroke-color': '#ffffff' // Color del borde
          },
        });
        if (source) {
          //  Obtener los datos actuales de la fuente
          // (Generalmente, querrás mantener un estado con tus puntos)
          const data = geojsonData;

          //  Filtrar o encontrar el punto que deseas eliminar.
          // En este ejemplo, se elimina el punto por su ID.
          const nuevasFeatures = data.features.filter(feature => feature.properties.name !== 'punto-1');

          // Actualizar la data de la fuente
          data.features = nuevasFeatures;
          // Actualizar la fuente con los nuevos datos
          ///source.setD(data.features);

        }

        const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
        // Añadir el evento click al botón
        downloadButton.addEventListener('click', async () => {
          // Obtener los datos de la fuente GeoJSON
          const source = this.map?.getSource('places') as maplibregl.GeoJSONSource;
          const data = await source.getData();

          // Convertir el objeto GeoJSON a una cadena JSON
          const dataStr = JSON.stringify(data, null, 2);

          // Crear un blob y un objeto URL
          const blob = new Blob([dataStr], { type: 'application/geo+json' });
          const url = URL.createObjectURL(blob);
          // Crear un elemento <a> para la descarga
          const link = document.createElement('a');
          link.href = url;
          link.download = 'datos-exportados.geojson';


          // Simular el clic en el enlace y liberar el objeto URL
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

        })
      });
    }
  }


  //Cargar datos reales 
  agregarNuevoMapa() {
    //  point sourceId , points layerId
    const sourceId = 'xample_point';
    const layerId = 'xample_points-layer';
    if (this.map) {

      // data a tu fuente GeoJSON inicial al mapa.
      //  Añadir el controlador de eventos de clic, datos de España
      this.map.on('load', async () => {
        this.addGeolocationCntrols();
        this.addBookmark();
        const img = new Image();
        img.onload = () => {
          this.map?.addImage('icono-personalizado', img);
          const a = this.map?.addSource(sourceId, {
            type: 'geojson',
            data: 'https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es'
          });

          // 2. Crea una capa para mostrar los puntos
          this.map?.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            paint: {
              'fill-color': '#27ec48ad',
              'fill-opacity': 0.5,
              'fill-outline-color': '#071224ff'
            },
          });
        }
        img.src = 'juan.jpg';
      });
      // llamar a la funcion para agregar nuevos puntos al mapa
      this.newPointAdded();
    }


    // Mostrar información del polígono al hacer clic España
    //Añade el manejador de eventos de clic al mapa
    //Eventos de click  mostrar información básica al pulsar sobre una provincia
    if (this.map) {
      // Configura un detector de eventos en el mapa.
      this.map.on('click', layerId, (e) => {
        // Obtiene las coordenadas del clic
        const longitude = e.lngLat.lng;
        const latitude = e.lngLat.lat;
        if (e.features && e.features.length > 0) {
          if (e.features[0].properties) {
            const props = e.features[0].properties;
            new Popup()
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


      // Cambia el cursor a un puntero cuando el mouse está sobre la capa de estados.
      this.map.on('mouseenter', layerId, (e) => {
        if (this.map) {
          this.map.getCanvas().style.cursor = 'pointer';
        }
      });

      // Cámbielo nuevamente a un puntero cuando se vaya.
      this.map.on('mouseleave', layerId, () => {
        if (this.map) {
          this.map.getCanvas().style.cursor = '';
        }
      });
    }
  }

  // Agregar nuevos puntos al mapa al hacer clic
  newPointAdded() {
    // Controlador de eventos click
    if (this.map) {
      this.map.on('click', (e) => {
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
        console.log('gg', newPoint.features.find(f => f.properties.category[0]));
        new Marker({ color: "#7e1588ff" })
          .setLngLat([longitude, latitude])
          .addTo(e.target);

        //const nombre,categoria,color,tamaño,símbolo,población
        const name = newPoint.features[0].properties
        const category = newPoint.features[0].properties
        const color = newPoint.features[0].properties['marker-color']
        const size = newPoint.features[0].properties['marker-size']
        const symbol = newPoint.features[0].properties['marker-symbol']
        const population = newPoint.features[0].properties['population']
        const name1 = newPoint.features[1].properties
        const category2 = newPoint.features[1].properties
        //Ventana emergente
        let popup = new Popup()
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
      // Cambia el cursor a un puntero cuando el mouse
      this.map.on('mouseenter', 'xample_points-layer', (e) => {
        if (this.map) {
          this.map.getCanvas().style.cursor = 'pointer';
        }
      });
      // Cámbielo nuevamente a un puntero cuando se vaya.
      this.map.on('mouseleave', 'xample_points-layer', () => {
        if (this.map) {
          this.map.getCanvas().style.cursor = '';
        }
      });
    }
  }


  // Añadir controles de navegación, geolocalización y escala
  addGeolocationCntrols() {
    // Controles de zoom y rotación
    if (this.map) {
      // Si desea agregar un control de atribución con modo compacto, utilice lo siguiente: AttributionControl
      this.map.addControl(new maplibregl.AttributionControl({
        compact: true
      }));
      this.map.addControl(
        new NavigationControl(), 'top-right'
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

  //Agregar marcador
  addBookmark() {
    this.marke = new Marker({ color: "#7c2824ff" })
      .setLngLat([-76.677887766, 5.4482548])
      .addTo(this.map!);
    new Marker({ color: "#FF0000" })
      .setLngLat([-76.6361969, 2.4682548])
      .addTo(this.map!);
    new Marker({ color: "#8fc933ff" })
      .setLngLat([-76.6361958, 2.44482548])
      .addTo(this.map!);
    new Marker({ color: "#7e1588ff" })
      .setLngLat([-76.5361958, 1.44582548])
      .addTo(this.map!);


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


  filtado() {

    //Filtrar con Datos
    const places = {

      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'icon': 'theatre'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.038659, 38.931567]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'icon': 'theatre'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.003168, 38.894651]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'icon': 'bar'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.090372, 38.881189]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'icon': 'bicycle'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.052477, 38.943951]
          }
        }
      ]
    };
    // Espera a que el mapa cargue
    this.map?.on('load', () => {
      // Una fuente GeoJSON que contenga coordenadas e información del lugar.
      this.map?.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'icon': 'theatre'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.038659, 38.931567]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'icon': 'theatre'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.003168, 38.894651]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'icon': 'bar'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.090372, 38.881189]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'icon': 'bicycle'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.052477, 38.943951]
              }
            }
          ]
        }
      });

      const layerIDs = ['']; // Tus IDs de capa
      places.features.forEach((feature) => {
        const symbol = feature.properties['icon'];
        const layerID = `poi-${symbol}`;

        //(Grupo de filtros -1 )
        const filterGroup = document.getElementById('filter-group') as HTMLInputElement;;

        // Agregue una capa para este tipo de símbolo si aún no se ha agregado.
        if (this.map?.getLayer(layerID)) {
          this.map.addLayer({
            'id': layerID,
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': `${symbol}_11`,
              'icon-overlap': 'always',
              'text-field': symbol,
              'text-font': ['Noto Sans Regular'],
              'text-size': 11,
              'text-transform': 'uppercase',
              'text-letter-spacing': 0.05,
              'text-offset': [0, 1.5]
            },
            'paint': {
              'text-color': '#202',
              'text-halo-color': '#fff',
              'text-halo-width': 2
            },
            'filter': ['==', ['get', 'icon'], symbol]
          });

          layerIDs.push(layerID);
        }
      });

      //( Entrada de filtro -2 )
      const filterInput = document.getElementById('filter-input') as HTMLInputElement;
      filterInput.addEventListener('keyup', (e) => {
        const value = (e.target as HTMLInputElement).value.trim().toLowerCase();
        layerIDs.forEach((layerID) => {
          this.map?.setLayoutProperty(
            layerID,
            'visibility',
            layerID.indexOf(value) > -1 ? 'visible' : 'none'
          );
        });
      });



    })

  }

  filterIntoLayer() {
    const data = {};

    this.map?.on('load', () => {
      // Agregar una fuente de GeoJson agrupada para un conjunto de terremotos de muestra
      this.map?.addSource('earthquakes', {
        'type': 'geojson',
        'data':
          'https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson'
      });
      // terremotos de círculo básico y símbolos
      this.map?.addLayer({
        'id': 'earthquakes',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
          'circle-color': '#ff0000'
        }
      });
    });
  }


  filtrarEstado() {
    this.map?.on('load', () => {
      this.map?.addSource('railways_and_lifts', {
        type: 'geojson',
        data: 'https://maplibre.org/maplibre-gl-js/docs/assets/funicolares-and-funivias-como.json'
      });

      this.map?.addLayer({
        id: 'railways_and_lifts_labels',
        type: 'symbol',
        source: 'railways_and_lifts',
        layout: {
          'text-field': '{name}',
          'text-font': ['Open Sans Semibold'],
          'text-offset': [0, 1],
          'text-anchor': 'top'
        },
        paint: {
          'text-color': '#000000',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2
        },
        filter: [
          'case',
          ['==', ['to-string', ['global-state', 'type']], ''],
          true,
          ['==', ['get', 'type'], ['global-state', 'type']]
        ]
      });
      this.map?.addLayer({
        type: 'circle',
        id: 'railways_and_lifts_points',
        source: 'railways_and_lifts',
        paint: {
          'circle-radius': 5,
          'circle-color': '#000000',
        },
        filter: [
          'case',
          ['==', ['to-string', ['global-state', 'type']], ''],
          true,
          ['==', ['get', 'type'], ['global-state', 'type']]
        ]
      });

      const select = document.querySelector('select[name="type"]') as HTMLSelectElement;
      this.map?.setGlobalStateProperty('type', select.value);

      select.addEventListener('change', (e) => {
        const value = (e.target as HTMLSelectElement).value;
        this.map?.setGlobalStateProperty('type', value);
      });
    });
  }

  imagenFondo() {

    this.map?.on('load', async () => {
      // Add an image to use as a custom marker
      const image = await this.map?.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/osgeo-logo.png');
      this.map?.addImage('custom-marker', image!.data);
      // Add a GeoJSON source 
      this.map?.addSource('conferences', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [100.4933, 13.7551]
              },
              'properties': { 'year': '2004' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [6.6523, 46.5535]
              },
              'properties': { 'year': '2006' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-123.3596, 48.4268]
              },
              'properties': { 'year': '2007' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [18.4264, -33.9224]
              },
              'properties': { 'year': '2008' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [151.195, -33.8552]
              },
              'properties': { 'year': '2009' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [2.1404, 41.3925]
              },
              'properties': { 'year': '2010' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-104.8548, 39.7644]
              },
              'properties': { 'year': '2011' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-1.1665, 52.9539]
              },
              'properties': { 'year': '2013' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-122.6544, 45.5428]
              },
              'properties': { 'year': '2014' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [126.974, 37.5651]
              },
              'properties': { 'year': '2015' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [7.1112, 50.7255]
              },
              'properties': { 'year': '2016' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-71.0314, 42.3539]
              },
              'properties': { 'year': '2017' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [39.2794, -6.8173]
              },
              'properties': { 'year': '2018' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [26.0961, 44.4379]
              },
              'properties': { 'year': '2019' }
            },
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-114.0879, 51.0279]
              },
              'properties': { 'year': '2020' }
            }
          ]
        }
      });

      // Add a symbol layer
      this.map?.addLayer({
        'id': 'conferences',
        'type': 'symbol',
        'source': 'conferences',
        'layout': {
          'icon-image': 'custom-marker',
          // get the year from the source's "year" property
          'text-field': ['get', 'year'],
          'text-font': ['Noto Sans Regular'],
          'text-offset': [0, 1.25],
          'text-anchor': 'top'
        }
      });
    });

  }


  eliminarMarcador() {


    // Obtener los botones del DOM
    const addMarkerBtn = document.getElementById('add-marker-btn') as HTMLButtonElement;
    const removeMarkerBtn = document.getElementById('remove-marker-btn') as HTMLButtonElement;

    // Manejador para el botón "Añadir marcador"
    addMarkerBtn.addEventListener('click', () => {

      // Crea un nuevo marcador en una ubicación específica
      this.marke = new maplibregl.Marker({ color: '#e6ff09ff' })
        .setLngLat([-74.6361969, 2.8682548])
        .addTo(this.map!);

      // Habilitar el botón de eliminar una vez que el marcador se ha añadido.
      removeMarkerBtn.disabled = false;
      addMarkerBtn.disabled = true;
    });

    // Manejador para el botón "Eliminar marcador"
    removeMarkerBtn.addEventListener('click', () => {
      if (this.marke) {
        // Llama al método .remove() en la instancia del marcador.
        this.marke.remove();
        this.marke = null; // Elimina la referencia para que no se pueda eliminar dos veces.

        // Habilitar el botón de añadir y deshabilitar el de eliminar.
        removeMarkerBtn.disabled = true;
        addMarkerBtn.disabled = false;
      }
    });
  }

  /**Agregar múltiples funciones de una colección de funciones
     Puedes usar geojson para crear tu propia colección y jugar con esta funcionalidad.
     Carga o importar Data  una fuente para los marcadores de coordenadas
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


}


