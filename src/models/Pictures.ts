export class Pictures {

    constructor(
        _id: string,
        base64: string,
        order: number
    ) {
        this._id = _id,
        this.base64 = base64;
        this.order = order;
    }

    _id: string,
    base64: string;
    order: number
}