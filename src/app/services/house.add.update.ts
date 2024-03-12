export class HouseAddUpdate {
    private _id: number;
    private _numurs: number;
    private _iela: string;
    private _pilseta: string;
    private _valsts: string;
    private _pastaIndekss: string;

    constructor(
        id: number,
        numurs: number,
        iela: string,
        pilseta: string,
        valsts: string,
        pastaIndekss: string
    ) {
        this._id = id;
        this._numurs = numurs;
        this._iela = iela;
        this._pilseta = pilseta;
        this._valsts = valsts;
        this._pastaIndekss = pastaIndekss;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get numurs(): number {
        return this._numurs;
    }
    set numurs(value: number) {
        this._numurs = value;
    }

    get iela(): string {
        return this._iela;
    }
    set iela(value: string) {
        this._iela = value;
    }

    get pilseta(): string {
        return this._pilseta;
    }
    set pilseta(value: string) {
        this._pilseta = value;
    }

    get valsts(): string {
        return this._valsts;
    }
    set valsts(value: string) {
        this._valsts = value;
    }

    get pastaIndekss(): string {
        return this._pastaIndekss;
    }
    set pastaIndekss(value: string) {
        this._pastaIndekss = value;
    }
}
