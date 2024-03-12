export class ResidentsAddUpdate {
    private _id: number;
    private _vards: string;
    private _uzvards: string;
    private _personasKods: string;
    private _dzimsanasDatums: Date;
    private _telefons: string;
    private _email: string;

    constructor(
        id: number,
        vards: string,
        uzvards: string,
        personasKods: string,
        dzimsanasDatums: Date,
        telefons: string,
        email: string
    ) {
        this._id = id;
        this._vards = vards;
        this._uzvards = uzvards;
        this._personasKods = personasKods;
        this._dzimsanasDatums = dzimsanasDatums;
        this._telefons = telefons;
        this._email = email;
    }


    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get vards(): string {
        return this._vards;
    }
    set vards(value: string) {
        this._vards = value;
    }

    get uzvards(): string {
        return this._uzvards;
    }
    set uzvards(value: string) {
        this._uzvards = value;
    }

    get personasKods(): string {
        return this._personasKods;
    }
    set personasKods(value: string) {
        this._personasKods = value;
    }

    get dzimsanasDatums(): Date {
        return this._dzimsanasDatums;
    }
    set dzimsanasDatums(value: Date) {
        this._dzimsanasDatums = value;
    }

    get telefons(): string {
        return this._telefons;
    }
    set telefons(value: string) {
        this._telefons = value;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
}
