export interface ApiResponse<T> {
    //Que va a hacer ese App Respose? pues generico
    data: T,//Tipo generico
    message: string,//Para manejar los errores
    success: boolean// Un suceso, si ocurrió o no ocurrió 

}