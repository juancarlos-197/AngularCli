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

Para trabajar con la Interfaz de Angular, el requisito principal es tener instalado Node.js, ya que la Angular CLI y el ecosistema de herramientas se ejecutan sobre este entorno. 
A continuación, se detallan los requisitos del entorno y las versiones recomendadas para la configuración más reciente.

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Requisitos del entorno </h2>
  </a>
</p>

- Sistema operativo: La instalación de Node.js y la CLI de Angular es compatible con los sistemas operativos más comunes, como Windows, macOS y distribuciones de Linux.
- Memoria (RAM): Se recomienda tener al menos 4 GB de RAM disponibles.
- Espacio en disco: Un mínimo de 10 GB de espacio libre en el disco duro para la instalación y los proyectos. 

### Versiones de Node.js

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Node js </h2>
  </a>
</p>


Es crucial utilizar una versión compatible y estable de Node.js.
Angular requiere una versión LTS activa o en mantenimiento de Node.js. 

- Compatibilidad: La versión de Node.js debe ser compatible con la versión de Angular que se va a utilizar. Por ejemplo, Angular 17 requiere Node.js v18.13 o superior.
Gestor de versiones: Para evitar problemas de compatibilidad entre diferentes proyectos, se recomienda usar un gestor de versiones de Node.js. 
<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Instalación del entorno</h2>
  </a>
</p>


### 1. Instalar Node.js y npm
Descarga: Visita el sitio web oficial de Node.js y descarga la versión LTS recomendada para tu sistema operativo. El paquete de instalación incluye Node.js y su gestor de paquetes, npm.
Verificación: Abre una terminal o línea de comandos y verifica la instalación con los siguientes comandos:
node -v (muestra la versión de Node.js)
npm -v (muestra la versión de npm) 

### 2. Instalar Angular CLI
Una vez que tengas Node.js y npm instalados, puedes instalar la CLI de Angular de forma global en tu máquina ejecutando el siguiente comando en la terminal:

npm install -g @angular/cli 

### 3. Verificar la instalación de la CLI de Angular
Para asegurarte de que la CLI de Angular se instaló correctamente y verificar la versión, ejecuta el siguiente comando:
ng version 
### Consideraciones adicionales
- Editor de código: Aunque no es un requisito de entorno, se recomienda usar un editor o IDE moderno para el desarrollo con Angular. Opciones populares incluyen Visual Studio Code, WebStorm y Atom.

- Actualizaciones: La compatibilidad entre Angular CLI y Node.js evoluciona con cada versión, por lo que es importante mantener ambos actualizados. Si trabajas con proyectos antiguos, asegúrate de utilizar una versión de Node.js compatible con el proyecto. 
### Setting Up a Project
Al crear una aplicación con Angular CLI, MapLibre GL JS y GeoJSON, se deben tomar varias decisiones de arquitectura y asumir ciertos trade-offs (compromisos). El enfoque dependerá del tamaño del conjunto de datos GeoJSON, la complejidad de la visualización y las necesidades de rendimiento de la aplicación. 

### Decisiones clave de arquitectura
Integración de MapLibre en Angular:

- Directa: Se puede importar maplibre-gl directamente en un componente de Angular. Esto ofrece un control total y es sencillo para aplicaciones pequeñas.

- Con un wrapper de Angular: Se puede usar la biblioteca ngx-maplibre-gl, que ofrece componentes de Angular para MapLibre. Esto facilita la integración con el ciclo de vida y la detección de cambios de Angular, pero añade una dependencia adicional.

- Gestión de datos GeoJSON:
En memoria: Para conjuntos de datos pequeños, se puede cargar el GeoJSON como un objeto en memoria al inicio de la aplicación. Esto permite un acceso rápido, pero consume más memoria del navegador.

Angular Cli + MapJson brings the power of advanced customizable indoor navigation into the hands of your customers, elevating indoor mapping to a whole new level.
Minimum requirements to complete Angular CLI + MapJson.
Some experience with Angular. You don't need much experience, but you should be familiar with the basic concepts and workflow.
MapLibre GL JS. JavaScript library for creating web maps.
Node.js and npm. Required to run your Angular CLI + MapJson application locally. Node.js.
Angular CLI. You must have Angular CLI installed.
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


Create an Angular web application that allows you to:
### 1. Display a base map using MapLibre GL JS.
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
  <h1>{{ title }}</h1>
      <p>Mi equipo desarrolla una aplicación web que permite a clientes explorar y gestionar ubicaciones
        (puntos de interés) sobre un mapa interactivo.</p>
      <p>Angular Cli + MapJson lleva el poder de la navegación interior personalizable avanzada a las manos de tus
        clientes, elevando el mapeo de interiores a un nivel completamente nuevo </p>
      <p>Mapas </p>
      <!--Mapas --> 
      <select id="estilos">
        <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx">Calles - Claro
        </option>
        <option value="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json">Oscuro</option>
        <option value="https://api.maptiler.com/maps/satellite/style.json?key=R92AyDPGHtv4Pg0yOSsx">Satélite</option>
      </select>


      <div class="position">
        <div id='map' class="map"></div>

        <!-- Grupo de filtros  -
        <div id="filter-group" class="filter-group"></div>-->

        <!-- Entrada de filtro -->
        <div class="filter-ctrl">
          <input id="filter-input" type="search" name="filter" placeholder="Filtrar por nombre" />
        </div>

        <!-- Filtrar los símbolos de una capa  -->
        <fieldset class="filter">
          Filtrar por tipo
          <select name="type">
            <option value="" selected>Todos</option>
            <option value="lift">Moto</option>
            <option value="railway">Ferrocarril</option>
          </select>
        </fieldset>

        <!-- Botón Descargar GeoJSON -->
        <button type="button" id="downloadButton" class="btn btn-primary">Descargar GeoJSON</button>
        
        <!-- Botón Añadir/Emiminar -->
        <div id="controls">
          <button type="button" id="add-marker-btn" class="btn btn-primary">Añadir marcador</button>
          <button type="button" id="remove-marker-btn" disabled class="btn btn-danger">Eliminar marcador</button>
        </div>
      </div>

      
<script>

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
  }
</script>
```

```css
.position {
    position: relative;
    top: 20px;
}

.map {
    width: 800px;
    height: 400px;
    left: 0%
}

.example-card {
    max-width: 300px;
}

.example-header-image {
    background-image: url('https://material.angular.dev/assets/img/examples/shiba1.jpg');
    background-size: cover;
}

.map-overlay {
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    position: absolute;
    width: 31.8%;
    top: 0;
    left: 0;
    padding: 10px;
}

.map-overlay .map-overlay-inner {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
}

.map-overlay input {
    margin: 2px;
}

input[type=number] {
    width: 25%
}

#filter-result {
    font-size: 8px;
    font-family: "Courier New";
}






.filter-ctrl {
    position: absolute;
    top: 10px;
    left: 40px;
    z-index: 1;
}

.filter-ctrl input[type='search'] {
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    border: 0;
    background-color: #fff;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 180px;
}




.filter {
    position: absolute;
    top: 60px;
    left: 40px;
    background-color: white;
    padding: 10px;
}



#downloadButton {
    position: absolute;
    bottom: 80px;
    left: 10px;
    z-index: 1;
    padding: 10px;
    font-family: sans-serif;
}




#controls {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 10;
    padding: 10px;
    background: white;
    border-radius: px;
}

button {
    font-size: 16px;
    padding: 8px 12px;
    cursor: pointer;
}
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

</script>
```

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">  Load real data from an external GeoJSON</h2>
  </a> 
   This is all very well, but without data, our viewer is useless. Let's use the dataset of provinces in Spain in GeoJSON format. This dataset offers simplified polygons of the Spanish provinces, making it ideal for our project.

```html
<script>
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
    }


</script>
```
```html
<script>
   
</script>
```

```html
<script>

</script>
```
<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Display contextual information with pop-ups</h2>
  </a>

Let's continue with the features of our viewer, for example, showing useful information about each province, such as its name, autonomous community, and code when clicked:

```html
<script>
 // Mostrar información del polígono al hacer clic España
    //Añade el manejador de eventos de clic al mapa
    //Eventos de click  mostrar información básica al pulsar sobre una provincia
    if (this.map) {
      // Configura un detector de eventos en el mapa.
      this.map.on('click', layerId, (e) => {
        console.log('uuuiii', e);
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
</script>
```

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">  Change the base style of the map</h2>
  </a>

Let's see how we can customize the styles of our base or background layer to adapt the display. In our HTML, we add a "select" control to choose between light and dark mode:

```html

 <!--Mapas --> 
      <select id="estilos">
        <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx">Calles - Claro
        </option>
        <option value="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json">Oscuro</option>
        <option value="https://api.maptiler.com/maps/satellite/style.json?key=R92AyDPGHtv4Pg0yOSsx">Satélite</option>
      </select>

<script>

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
</script>
```
Okay, it works, but... Where has the province layer gone?

What's happening is that MapLibre GL JS replaces the entire map structure when changing the style using  This behavior isn't a bug; it's the intended design of MapLibre/Mapbox GL JS, so we need to reload our province layer every time we change our styles.

Let's modify our code to adapt it to this need. First, let's encapsulate the loading functionality of our province layer in function. We call this function when the map has loaded and also when we change styles from the "select" function:

```html
<script>



  
</script>

```
With this, we have a viewer capable of moving fluidly, showing the user's location, and adapting to different visual styles.


### 2 Upload (import) a GeoJSON point file (a sample file pois.sample.geojson will be attached).


GeoJSON is a very popular data format among many GIS technologies and services: it is simple, lightweight and straightforward, and MapLibre handles it very efficiently.
To add points to the map in MapLibre GL JS on click, you must use a map click event handler to get the click coordinates, then use map.getSource() to get your GeoJSON source and setData() to add a new point to that source. The new point must be in GeoJSON Point format and included in the existing data structure.

You can use Geojson to create your own collection and play with this functionality.











Para cargar un archivo GeoJSON de puntos en MapLibre GL JS, debes seguir tres pasos principales: cargar el archivo como fuente de datos, agregar una capa que haga referencia a esa fuente y, opcionalmente, personalizar el estilo de los puntos. 







```html
<script>

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

        });

</script>

```

 a. Añade el archivo GeoJSON como una fuente de datos

```html
<script>

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
</script>

```

b. Añade una capa para mostrar los puntos del GeoJSON

```html
<script>
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
  
</script>

```
 c. Estiliza los puntos

```html
<script>
          'paint': {
            'circle-color': '#008f07ff', // Color de los círculos
            'circle-radius': 10, // Radio de los círculos
            'circle-stroke-width': 2,// Ancho del borde
            'circle-stroke-color': '#ffffff' // Color del borde
          },
  
</script>

```




```html
<script>

  
</script>

```







```html
<script>

  
</script>

```





```html
<script>

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

</script>

```



As we start our service, very easy, we say:

```html


<script>
  npx json-server db.json
</script>

```
Archivo data/db.json API Rest 

```html
<script>
{
  "type": "FeatureCollection",
  "features": [
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
        "name": "Plaza de Armas",
        "category": "landmark"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.615,
          -33.44
        ]
      },
      "properties": {
        "name": "Parque Bicentenario",
        "category": "park"
      }
    }
  ]
}

</script>


```

