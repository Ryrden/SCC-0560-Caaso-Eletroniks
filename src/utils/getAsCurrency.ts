export function getAsCurrency(value: number | string | undefined): string {
    if (typeof value === "string") {
        value = parseFloat(value);
    }
    if (typeof value === "undefined") {
        value = 0;
    }
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(value);
}
