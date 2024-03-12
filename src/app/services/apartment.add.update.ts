export class ApartmentAddUpdate {
    private _id: number; 
    private _numurs: string;
    private _stavs: number;
    private _istabuSkaits: number;
    private _iedzivotajuSkaits: number;
    private _pilnaPlatiba: number;
    private _dzivojamaPlatiba: number;
    private _majaId: number;

    constructor(
        id: number,
        numurs: string,
        stavs: number,
        istabuSkaits: number,
        iedzivotajuSkaits: number,
        pilnaPlatiba: number,
        dzivojamaPlatiba: number,
        MajaId: number
    ) {
        this._id = id;
        this._numurs = numurs;
        this._stavs = stavs;
        this._istabuSkaits = istabuSkaits;
        this._iedzivotajuSkaits = iedzivotajuSkaits;
        this._pilnaPlatiba = pilnaPlatiba;
        this._dzivojamaPlatiba = dzivojamaPlatiba;
        this._majaId = MajaId;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get numurs(): string {
        return this._numurs;
    }
    set numurs(value: string) {
        this._numurs = value;
    }

    get stavs(): number {
        return this._stavs;
    }
    set stavs(value: number) {
        this._stavs = value;
    }

    get istabuSkaits(): number {
        return this._istabuSkaits;
    }
    set istabuSkaits(value: number) {
        this._istabuSkaits = value;
    }

    get iedzivotajuSkaits(): number {
        return this._iedzivotajuSkaits;
    }

    set iedzivotajuSkaits(value: number) {
        this._iedzivotajuSkaits = value;
    }
    get pilnaPlatiba(): number {
        return this._pilnaPlatiba;
    }

    set pilnaPlatiba(value: number) {
        this._pilnaPlatiba = value;
    }

    get dzivojamaPlatiba(): number {
        return this._dzivojamaPlatiba;
    }
    set dzivojamaPlatiba(value: number) {
        this._dzivojamaPlatiba = value;
    }

    get majaId(): number {
        return this._majaId;
    }
    set majaId(value: number) {
        this._majaId = value;
    }
}
