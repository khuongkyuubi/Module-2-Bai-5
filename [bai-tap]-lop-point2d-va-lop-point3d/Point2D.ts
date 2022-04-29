export class Point2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getXY() :Point2D {
        return this;
    }
    setXY(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}