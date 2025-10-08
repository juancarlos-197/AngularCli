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

To work with the Angular interface, the main requirement is to have Node.js installed, as the Angular CLI and tool ecosystem run in this environment.
Below are the environment requirements and recommended versions for the most recent configuration.

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Environment requirements</h2>
  </a>
</p>
- Operating System: The Node.js and Angular CLI installation is compatible with most common operating systems, including Windows, macOS, and Linux.
- Memory (RAM): It is recommended to have at least 4 GB of RAM available.
- Disk Space: Minimum 10 GB of free hard drive space for installation and projects.

### Node.js versions

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center"> Node js </h2>
  </a>
</p>
It's crucial to use a compatible and stable version of Node.js.
Angular requires an active or maintained LTS version of Node.js.

- Compatibility: The Node.js version must be compatible with the Angular version you plan to use. For example, Angular 17 requires Node.js v18.13 or higher.
  Version manager: To avoid compatibility issues between different projects, it's recommended to use a Node.js version manager.

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Installing the environment</h2>
  </a>
</p>

### Install Node.js and npm

Download: Visit the official Node.js website and download the LTS version recommended for your operating system. The installation package includes Node.js and its package manager, npm.
Verification: Open a terminal or command line and verify the installation with the following commands:
node -v (displays the Node.js version)
npm -v (displays the npm version).

### Additional considerations

- Code editor: Although not an environment requirement, it's recommended to use a modern editor or IDE for Angular development. Popular options include Visual Studio Code, WebStorm, and Atom.

- Updates: Compatibility between Angular CLI and Node.js evolves with each release, so it's important to keep both up to date. If you're working with older projects, make sure you're using a version of Node.js that's compatible with your project.

### Setting Up a Project

When building an application with Angular CLI, MapLibre GL JS, and GeoJSON, there are several architectural decisions and trade-offs to be made. The approach will depend on the size of the GeoJSON dataset, the complexity of the visualization, and the application's performance needs.

### Key architectural decisionsMapLibre Integration in Angular:

- Direct: You can import maplibre-gl directly into an Angular component. This offers complete control and is simple for small applications.

- With an Angular wrapper: You can use the ngx-maplibre-gl library, which provides Angular components for MapLibre. This facilitates integration with Angular's lifecycle and change detection, but adds an additional dependency.

- GeoJSON Data Management:
  In-memory: For small datasets, GeoJSON can be loaded as an in-memory object at application startup. This allows for faster access, but consumes more browser memory.

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

### Import

```html
<script>
  import { Component, OnInit } from "@angular/core";
  /**Importa maplibregl */
  import { Map, NavigationControl, Marker, Popup, GeoJSONFeatureId, MapGeoJSONFeature } from "maplibre-gl";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import "leaflet/dist/leaflet.css";
  import * as geojson from "geojson";

  /**Importa FooterComponent */
  import { FooterComponent } from "./footer/footer.component";

  /**Importa HttpClient para del Core de Angular */
  import { HttpClient, HttpClientModule } from "@angular/common/http";

  /**Importa Angular Material Car  */
  import { FormsModule } from "@angular/forms";
  /**Importar Form  */
  import { MatInputModule } from "@angular/material/input";
  /**Importar generador de formularios  */
  import { Mapa } from "./interfaces/mapa";
  import { TaskService } from "./services/task.service";
</script>
```

##### app.routes.ts

```html
<script>
  import { Routes } from "@angular/router";
  export const routes: Routes = [];
</script>
```

##### app.config.ts

```html
<script>
  import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
  import { provideRouter } from "@angular/router";
  import { provideHttpClient } from "@angular/common/http";
  import { routes } from "./app.routes";
  import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
  export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimationsAsync()],
  };
</script>
```

### app.component.html

Use it in your html

```html
<script>
    <style>
    :host {
      text-align: center;
      --bright-blue: oklch(51.01% 0.274 263.83);
      --electric-violet: oklch(53.18% 0.28 296.97);
      --french-violet: oklch(47.66% 0.246 305.88);
      --vivid-pink: oklch(69.02% 0.277 332.77);
      --hot-red: oklch(61.42% 0.238 15.34);
      --orange-red: oklch(63.32% 0.24 31.68);

      --gray-900: oklch(19.37% 0.006 300.98);
      --gray-700: oklch(36.98% 0.014 302.71);
      --gray-400: oklch(70.9% 0.015 304.04);

      --red-to-pink-to-purple-vertical-gradient: linear-gradient(180deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%);

      --red-to-pink-to-purple-horizontal-gradient: linear-gradient(90deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%);

      --pill-accent: var(--bright-blue);

      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }


    p {
      margin: 0;
      color: var(--gray-700);
    }

    main {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
      position: relative;
    }

    .angular-logo {
      max-width: 20.2rem;
    }

    .content {
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 700px;
      margin-bottom: 3rem;
    }

    .content h1 {
      margin-top: 1.75rem;
    }

    .content p {
      margin-top: 1.5rem;
    }
  </style>

  <main class="main">
    <div class="content">
      <div class="left-side">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982 239" fill="none" class="angular-logo">
          <g clip-path="url(#a)">
            <path fill="url(#b)"
              d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z" />
            <path fill="url(#c)"
              d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z" />
          </g>
          <defs>
            <radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="rotate(118.122 171.182 60.81) scale(205.794)"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF41F8" />
              <stop offset=".707" stop-color="#FF41F8" stop-opacity=".5" />
              <stop offset="1" stop-color="#FF41F8" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="b" x1="0" x2="982" y1="192" y2="192" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F0060B" />
              <stop offset="0" stop-color="#F0070C" />
              <stop offset=".526" stop-color="#CC26D5" />
              <stop offset="1" stop-color="#7702FF" />
            </linearGradient>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h982v239H0z" />
            </clipPath>
          </defs>
        </svg>
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
      </div>
    </div>
  </main>

  <app-footer></app-footer>
</script>
```

##### Use

Use it in its component

```html
<script>

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
</script>
```

### Import services/task.ts

```html
<script>
  import { Mapa } from "./../interfaces/mapa";
  import { ApiResponse } from "./../interfaces/apiResponse";
  import { HttpClient, HttpErrorResponse } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { catchError, map, Observable, throwError } from "rxjs";
  /**Importa interfaces  */
</script>
```

### Use services/task.ts

```html
<script>

  @Injectable({
    providedIn: 'root'
  })
  export class TaskService {
    /**Dependencias se va a inyectar desde en Root, muy importante entenderlo.
     * Niveles de inyección de dependencias en Angular como lo es Root como lo es Any o
     * como lo es componentes específico o también tenemos otra plataforma.
      // Inyecciób de servicios desde en inicio de la aplicación completa.
      // Este archiv de pruebas que angular lleva siempre ese conjunta de pruebas.
      // Dispunible en toda la aplicación.
      // Crear una nueva entidad de punto (marcador)**/

    /**Un arreglo de nuevo punto (Mapa). Variable privada  */
    private newPoin: any[] = [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                32.7,
                45.78]
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
                56,
                45
              ]
            },
            "properties": {
              "name": "Parque Bicentenario",
              "category": "park"
            }
          }
        ]
      }
    ]
    private newPoints: string = 'http://localhost:3000/data';//Un endpoint para consumir

    /**Crea una dependencia llamada HttpClient  */
    constructor(private http: HttpClient) { }
    getAllNewPoint(): Mapa[] {
      return this.newPoin
    }

    getNewPoint(): Observable<ApiResponse<Mapa[]>> {
      /**Un verbo de la API, son GET para CONSULTAR, POST para enviar, PUT y PATCH para actuakizar
       * y DELECT para borrar, en este caso CONSULTAR
        */
      return this.http.get(this.newPoints).pipe(
        map((data) => ({ data } as ApiResponse<Mapa[]>)),
        catchError(this.handleError)
      )
    }
    private handleError(error: HttpErrorResponse) {
      let errorMensage = 'Ocurrio un error';
      if (error.error instanceof ErrorEvent) {
        //Error del lado del cliente
        errorMensage = `Error`
      } else {
        errorMensage = `Código de error`
      }
      return throwError(() => new Error(errorMensage))
    }
  }
</script>
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
<p>Mi equipo desarrolla una aplicación web que permite a clientes explorar y gestionar ubicaciones (puntos de interés) sobre un mapa interactivo.</p>
<p>Angular Cli + MapJson lleva el poder de la navegación interior personalizable avanzada a las manos de tus clientes, elevando el mapeo de interiores a un nivel completamente nuevo</p>
<p>Mapas</p>
<!--Mapas -->
<select id="estilos">
  <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx">Calles - Claro</option>
  <option value="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json">Oscuro</option>
  <option value="https://api.maptiler.com/maps/satellite/style.json?key=R92AyDPGHtv4Pg0yOSsx">Satélite</option>
</select>

<div class="position">
  <div id="map" class="map"></div>

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

### app.component.css

```css
.position {
  position: relative;
  top: 20px;
}

.map {
  width: 800px;
  height: 400px;
  left: 0%;
}

.example-card {
  max-width: 300px;
}

.example-header-image {
  background-image: url("https://material.angular.dev/assets/img/examples/shiba1.jpg");
  background-size: cover;
}

.map-overlay {
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
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

input[type="number"] {
  width: 25%;
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

.filter-ctrl input[type="search"] {
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
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
  const sourceId = "xample_point";
  const layerId = "xample_points-layer";
  if (this.map) {
    // data a tu fuente GeoJSON inicial al mapa.
    //  Añadir el controlador de eventos de clic, datos de España
    this.map.on("load", async () => {
      this.addGeolocationCntrols();
      this.addBookmark();
      const img = new Image();
      img.onload = () => {
        this.map?.addImage("icono-personalizado", img);
        const a = this.map?.addSource(sourceId, {
          type: "geojson",
          data: "https://public.opendatasoft.com/explore/dataset/georef-spain-provincia/download/?format=geojson&timezone=Europe/Madrid&lang=es",
        });

        // 2. Crea una capa para mostrar los puntos
        this.map?.addLayer({
          id: layerId,
          type: "fill",
          source: sourceId,
          paint: {
            "fill-color": "#27ec48ad",
            "fill-opacity": 0.5,
            "fill-outline-color": "#071224ff",
          },
        });
      };
      img.src = "juan.jpg";
    });
  }
</script>
```

```html
<script></script>
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
  <option value="https://api.maptiler.com/maps/streets-v2/style.json?key=R92AyDPGHtv4Pg0yOSsx">Calles - Claro</option>
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

What's happening is that MapLibre GL JS replaces the entire map structure when changing the style using This behavior isn't a bug; it's the intended design of MapLibre/Mapbox GL JS, so we need to reload our province layer every time we change our styles.

Let's modify our code to adapt it to this need. First, let's encapsulate the loading functionality of our province layer in function. We call this function when the map has loaded and also when we change styles from the "select" function:


With this, we have a viewer capable of moving fluidly, showing the user's location, and adapting to different visual styles.

### 2 Upload (import) a GeoJSON point file (a sample file pois.sample.geojson will be attached).

GeoJSON is a very popular data format among many GIS technologies and services: it is simple, lightweight and straightforward, and MapLibre handles it very efficiently.
To add points to the map in MapLibre GL JS on click, you must use a map click event handler to get the click coordinates, then use map.getSource() to get your GeoJSON source and setData() to add a new point to that source. The new point must be in GeoJSON Point format and included in the existing data structure.

You can use Geojson to create your own collection and play with this functionality.

To load a GeoJSON file of points into MapLibre GL JS, you need to follow three main steps: load the file as a data source, add a layer that references that source, and optionally customize the style of the points.

```html
<script>
  // Espera a que el mapa cargue antes de añadir las fuentes y capas
  this.map.on("load", () => {
    // Añadir la fuente de datos GeoJSON
    const source = this.map?.addSource("places", {
      type: "geojson",
      //  Cargar datos GeoJSON
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "Plaza de Armas",
              category: "landmark",
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "circle-stroked",
              population: 123456,
            },
            geometry: {
              type: "Point",
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [-66.53063297271729, 49.18174077994108],
            },
          },

          {
            type: "Feature",
            properties: {
              name: "Parque Bicentenario",
              category: "park",
            },
            geometry: {
              type: "Point",
              coordinates: [-76.6361969, 2.4482548],
            },
          },
          {
            type: "Feature",
            properties: {
              name: "Parque Bicentenario",
              category: "park",
            },
            geometry: {
              type: "Point",
              coordinates: [-79.6361969, 13.4482548],
            },
          },
        ],
      },
    });

    // Añadir la capa para visualizar los puntos
    this.map?.addLayer({
      id: "xample_po",
      type: "circle", // Puedes usar 'circle' o 'symbol' para puntos
      source: "places", // ID de la fuente creada en el paso anterior
      paint: {
        "circle-color": "#008f07ff", // Color de los círculos
        "circle-radius": 10, // Radio de los círculos
        "circle-stroke-width": 2, // Ancho del borde
        "circle-stroke-color": "#ffffff", // Color del borde
      },
    });
  });
</script>
```

a. Add the GeoJSON file as a data source

```html
<script>
  const source = this.map?.addSource("places", {
    type: "geojson",
    //  Cargar datos GeoJSON
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Plaza de Armas",
            category: "landmark",
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "circle-stroked",
            population: 123456,
          },
          geometry: {
            type: "Point",
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-66.53063297271729, 49.18174077994108],
          },
        },

        {
          type: "Feature",
          properties: {
            name: "Parque Bicentenario",
            category: "park",
          },
          geometry: {
            type: "Point",
            coordinates: [-76.6361969, 2.4482548],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Parque Bicentenario",
            category: "park",
          },
          geometry: {
            type: "Point",
            coordinates: [-79.6361969, 13.4482548],
          },
        },
      ],
    },
  });
</script>
```

b. Add a layer to display GeoJSON points

```html
<script>
  // Añadir la capa para visualizar los puntos
  this.map?.addLayer({
    id: "xample_po",
    type: "circle", // Puedes usar 'circle' o 'symbol' para puntos
    source: "places", // ID de la fuente creada en el paso anterior
    paint: {
      "circle-color": "#008f07ff", // Color de los círculos
      "circle-radius": 10, // Radio de los círculos
      "circle-stroke-width": 2, // Ancho del borde
      "circle-stroke-color": "#ffffff", // Color del borde
    },
  });
</script>
```

c. Design the points

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

<p align="center">
  <a href="">
    <picture>
      <img  height="80">
    </picture>
    <h2 align="center">Code explanation</h2>
  </a>

map.on('load', ...):
This code snippet ensures that the function is executed only after the map has fully loaded, ensuring that all necessary resources are available.

map.addSource(): This method adds a new data source to the map.

- 'pois-source': It is the unique ID that you assign to this source to reference it later.
- type: 'geojson': Specifies that the data type is GeoJSON.
- data:

```html
<script>

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
</script>
```

Indicate the location of your GeoJSON file. If the file is on the same server as the application, you can use a relative path. If it's on an external server, you must provide the full URL.

map.addLayer(): This method adds a visual layer to the map that uses the data source you defined.

- id: 'xample_po': It is the unique ID of the layer.
- type: 'circle': Defines the visual representation style. For points, the 'circle' layer type is the most common, as it draws circles at each coordinate.
- source: 'xample_po': Link this layer to the GeoJSON data source you created in the previous step.
- paint: It is an object where you can define the visual style of the layer elements. The radius and color of the circles are configured.

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

Also with Api Rest service

```html
<script>
  npx json-server db.json
</script>
```

Data/DB.json Api Rest file

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

Also another service/task.service.ts

```html
<script>
  /**Un arreglo de nuevo punto (Mapa). Variable privada  */
   private newPoin: any[] = [
     {
       "type": "FeatureCollection",
       "features": [
         {
           "type": "Feature",
           "geometry": {
             "type": "Point",
             "coordinates": [
               32.7,
               45.78]
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
               56,
               45
             ]
           },
           "properties": {
             "name": "Parque Bicentenario",
             "category": "park"
           }
         }
       ]
     }
   ]
</script>
```

### 3.Show the Geojson points on the map.

To show points of a geojson file on a map using GL JS maple, you must follow the following steps: include the Maple Library, configure the base map and, then, add the geojson file as a source and a layer to display the points.

You must first create a map source using the Addsource () function and pass the Geojson data as a parameter. Then, to visualize those points, create a layer with Addlayer () and associate it to the previously created data source, specifying the type of geometry ("Point") and the style options for the points.

Detailed steps to show geojson points in Maplebre Gl JS
Create the data source (Source):

- Use the Map.addsource (sourceid, sourcedata) method.
- Sourceid: It is a unique identifier for this source (eg, "Places").
- Sourcedata: It is an object that contains the Geojson data. You can load this from a file or directly as a TypeScript object.
  Example of code (fragment):

```html
<script>
  // Añadir la fuente de datos GeoJSON
  const source = this.map?.addSource("places", {
    type: "geojson",
    //  Cargar datos GeoJSON
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Plaza de Armas",
            category: "landmark",
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "circle-stroked",
            population: 123456,
          },
          geometry: {
            type: "Point",
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-66.53063297271729, 49.18174077994108],
          },
        },

        {
          type: "Feature",
          properties: {
            name: "Parque Bicentenario",
            category: "park",
          },
          geometry: {
            type: "Point",
            coordinates: [-76.6361969, 2.4482548],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Parque Bicentenario",
            category: "park",
          },
          geometry: {
            type: "Point",
            coordinates: [-79.6361969, 13.4482548],
          },
        },
      ],
    },
  });
</script>
```

### Add the display layer (Layer):

- Use the map.addLayer(layerDefinition) method.
- layerDefinition: It is an object that describes how the layer will be rendered.
- Specify that the source is the source you created in the previous step (ex: source: 'places').
- Define type: 'symbol' to display points as symbols or icons, or type: 'circle' for circles.
- Within the paint object, you can set the color, size and shape of the dots.

Code example (snippet):

```html
<script>
  // Añadir la capa para visualizar los puntos
  this.map?.addLayer({
    id: "xample_po",
    type: "circle", // Puedes usar 'circle' o 'symbol' para puntos
    source: "places", // ID de la fuente creada en el paso anterior
    paint: {
      "circle-color": "#008f07ff", // Color de los círculos
      "circle-radius": 10, // Radio de los círculos
      "circle-stroke-width": 2, // Ancho del borde
      "circle-stroke-color": "#ffffff", // Color del borde
    },
  });
</script>
```

### Considerations:

GeoJSON Data: The GeoJSON file must contain a FeatureCollection object with features of type Point for them to display correctly.

### 4. Add a new point by clicking on the map.

To add a new point by clicking on a MapLibre map, you must use the click event on the map to get the coordinates of the click and then add a new point feature to your GeoJSON data, which you can display with a layer. This involves getting the coordinates of the click event, creating a GeoJSON object with those coordinates and adding it as a data source to the map, and finally creating a map layer to display it visually.

### Steps to add a point when clicking on the map

a. Configure the map: Make sure you have your MapLibre map initialized and configured to listen for click events.
b. Handle the map click event:

- Use map.on('click', function(e) { ... }); to run a function every time the user clicks on the map.
- Inside the function, you can access the click coordinates via e.lngLat.

c. Create a GeoJSON data source:

- If you already have a GeoJSON source in your map, you can add the new points to it.
- If not, create a new GeoJSON source with your point data.
- Use the map.addSource() method to add this source to the map.

d. Add a layer to show the points:

- Add a "symbol" or "circle" type layer to display the points on the map.
- Associate this layer with the GeoJSON source you created.

c. Add point feature:

- Creates a new GeoJSON object of type "Point" using the e.lngLat coordinates.
- Add this new point to your GeoJSON data. You can do this by getting the current source object and modifying it.
- Update the source in the map with the new GeoJSON data using map.getSource('your_source_id').setData(new_geojson_data).

```html
<script>

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
</script>
```

### 5.Delete an existing point.

To eliminate an existing marker (point) of a maplabre map using a TypeScript button, you must follow these steps:

- Store markers in a matrix: When creating a score, you must store it in a matrix (matrix) for subsequent reference.
- Access the score: By clicking on the Delete button you should be able to identify which of the markers you want to delete. A common way is to eliminate the last aggregate marker or all at once.
- Use the Marker.remove () method: the API GL JS Maple for markers includes a remote () method to remove them from the map.
- Link button to function: Configure the HTML button so that when you press, run the TypeScript function that eliminates the score.

```html
<script>
  /**Importa maplibregl */
  import { Map, NavigationControl, Marker, Popup, GeoJSONFeatureId, MapGeoJSONFeature } from "maplibre-gl";
</script>
```

```html
<script>
  <!-- Botón Añadir/Emiminar -->
        <div id="controls">
          <button type="button" id="add-marker-btn" class="btn btn-primary">Añadir marcador</button>
          <button type="button" id="remove-marker-btn" disabled class="btn btn-danger">Eliminar marcador</button>
        </div>


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
</script>
```

### 6.Export the result as a downloadable geojson file.

To export a MapLibre result to a downloadable GeoJSON file with a few buttons using TypeScript, you need to extract the data from the map source, convert it to a JSON string, and create a download link programmatically.

```html
<script>

    <!-- Botón Descargar GeoJSON -->
         <button type="button" id="downloadButton" class="btn btn-primary">Descargar GeoJSON</button>


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
         });
</script>
```
