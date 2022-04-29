export class Circle {
    private _radius: number;
    private _color: string;
    private static PI: number = Math.PI;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }

    get color(): string {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }

    getArea(): number {
        return Circle.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Circle.PI * this.radius;
    }
}