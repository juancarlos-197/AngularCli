# AngularCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

##

<p align="center">
  <a href="https://builderbot.vercel.app/">
    <picture>
      <img src="https://builderbot.vercel.app/assets/thumbnail-vector.png" height="80">
    </picture>
    <h2 align="center">AngularCli + MapLibre GL JS
</h2>
  </a>
</p>
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-dark-bg.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-light-bg.svg">
    <img alt="MapLibre Logo" src="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-light-bg.svg" width="200">
  </picture>
</p>

## Further help. Alcance funcional (MVP obligatorio)

### Setting Up a Project

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Angular CLI </h2>
  </a>
</p>
Install the Angular CLI :

The sources for this package are in the Angular CLI repository. Please file issues and pull requests against that repository.

Usage information and reference details can be found in repository README.

```
npm install -g @angular/cli
```

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">MapLibre GL JS </h2>
  </a>
</p>
Install the MapLiber :

MapLibre GL JS is an open-source library for publishing maps on your websites or webview based apps. Fast displaying of maps is possible thanks to GPU-accelerated vector tile rendering.

It originated as an open-source fork of mapbox-gl-js, before their switch to a non-OSS license in December 2020. The library's initial versions (1.x) were intended to be a drop-in replacement for the Mapbox’s OSS version (1.x) with additional functionality, but have evolved a lot since then.

```
npm i maplibre-gl@3.2.0-pre.2
```

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Json-server </h2>
  </a>
</p>

Create a db.json file or run json-server db.json to create one with some default resources

```
{
  "posts": [
    { "id": "1", "title": "string" },
    { "id": "2", "title": "some post" }
  ],
  "comments": [
    { "id": "1", "text": "some text", "postId": "1" },
    { "id": "2", "text": "some text", "postId": "1" }
  ]
}

```

```
npm i json-server@0.17.4
```

###

Create an Angular web application that allows you to:

1. Display a base map using MapLibre GL JS.
   In a previous post, we showed you how to create a web viewer with MapLibre GL JS and load a GeoJSON file with your data. Now we're going a step further: we're going to enhance this viewer by adding basic features that make it much more interactive and useful.

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Create the base map  </h2>
  </a>
</p>

We start from a simple viewer, and we center it to show it by default.

```html
<div id="map" class="map"></div>
<div class="position">
  <select id="estilos">
    <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx">Calles - Claro</option>
    <option value="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json">Oscuro</option>
    <option value="https://api.maptiler.com/maps/satellite/style.json?key=R92AyDPGHtv4Pg0yOSsx">Satélite</option>
  </select>
</div>

<script>

  //Crear mapa base
  createBaseMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx', // stylesheet location
      center: [-76.6361969, 2.4482548], // starting position [lng, lat]
      zoom: 1 // starting zoom
    });
  }
</script>
```

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Add navigation, geolocation, and scale controls  </h2>
  </a>
</p>
Adding Navigation, Geolocation, and Scale Controls
We already have our base map loaded, but we can't do much with it yet. Let's fix it by adding standard controls that allow us to interact with the viewer. MapLibre GL JS natively offers controls for zooming, rotating the map, returning to the north orientation, showing the user's current location (if the browser allows it), and displaying a metric scale that indicates distance on the ground. These elements significantly improve usability, especially on mobile devices or field viewers, and we can add them very easily:

```html
<script>
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
</script>
```


<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">  Load real data from an external GeoJSON</h2>
  </a>
  This is all very well, but without data, our viewer is useless. Let's use the dataset of provinces in Spain and Colombia in GeoJSON format. This dataset offers simplified polygons of the Spanish and Colombian provinces, making it ideal for our project.


```html
<script>

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
  }
</script>

```
