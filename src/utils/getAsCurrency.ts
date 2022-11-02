export function getAsCurrency(value: number): string {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(value);
}
  