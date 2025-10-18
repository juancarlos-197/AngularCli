
export type ColumnKeys<T> = Array<keyof T>;

export interface Heroes {
    id: number;
    title: string;
    body: string;
    action: string;

}
