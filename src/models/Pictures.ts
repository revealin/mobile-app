export class Pictures {

    constructor(
        base64: string,
        order: number
    ) {
        this.base64 = base64;
        this.order = order;
    }

    base64: string;
    order: number
}