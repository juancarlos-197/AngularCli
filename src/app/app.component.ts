import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FooterComponent } from './footer/footer.component';
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
  public colombia: maplibregl.Marker | undefined;

  private http = inject(HttpClient);

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.createBaseMap();
    this.addBookmark();
    this.addGeolocationCntrols();
    this.loadRealData();
    this.changeBaseStyleMap();
  }

  //Crear mapa base
  createBaseMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx', // stylesheet location
      center: [-76.6361969, 2.4482548], // starting position [lng, lat]
      zoom: 4 // starting zoom
    });
  }

  //Agregar marcador
  addBookmark() {
    this.colombia = new maplibregl.Marker()
      .setLngLat([-76.6361969, 2.4482548])
      .addTo(this.map!);

  }

  // Añadir controles de navegación, geolocalización y escala
  addGeolocationCntrols() {
    // Controles de zoom y rotación
    if (this.map) {
      this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
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
    }
  }

  //Cargar datos reales 
  loadRealData() {
    // Evento load 
    const sourceId = 'xample_points';
    const layerId = 'xample_points-layer';
    if (this.map) {
      this.map.on('load', (e) => {
        console.log('eaaaa', this.map?.addSource('', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        }));

        this.map?.addSource(sourceId, {
          type: 'geojson',
          data: 'https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es'
        });
        this.map?.addLayer({
          id: layerId,
          type: 'fill',
          source: sourceId,
          paint: {
            'fill-color': '#000000ad',
            'fill-opacity': 0.3,
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
            <strong>${props['prov_name'] || 'Provincia desconocida'}</strong><br/>
            Código: ${props['prov_code']}<br/>
            Comunidad: ${props['acom_name']}<br/>
            Año: ${props['year']}
          `)
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
        const target = e.target as HTMLSelectElement;
        if (target && target.value && this.map) {
          this.map.setStyle(target.value);
        }
      });
    }
  }
}


