export interface IData {
    count:    number;
    next:     null;
    previous: null;
    results:  IResult[];
}

export interface IResult {
    name: string;
    url:  string;
}