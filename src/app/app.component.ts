import { Component, getNgModuleById, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FooterComponent } from './footer/footer.component';
import * as turf from "@turf/turf";

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

  private http = inject(HttpClient);

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.createBaseMap();
    this.addBookmark();
    this.addGeolocationCntrols();
    this.loadRealData();
    this.changeBaseStyleMap();

    if (this.map) {

      this.map.on('load', async () => {
        this.map?.addSource('xample_points', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/geoinnova/Points/master/points.json'
        });
        if (this.map) {
          const image = await this.map.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/osgeo-logo.png');
          this.map?.addImage('custom-marker', image.data);
        }
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
 ngOnDestroy() {
    this.map?.remove();
  }

}


