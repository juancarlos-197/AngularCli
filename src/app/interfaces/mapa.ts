export interface Mapa {
/**Interfaces */
    type: string,
    geometry: {
        type: string,
        coordinates: [
            number,
            number]
    },
    properties: {
        name: string,
        category: string
    }


}