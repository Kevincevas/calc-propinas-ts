export type MenuItem = {
    id: number,
    name: string,
    price: number,
}

// asignamos todo de MenuItem hacia OrderItem, y añadimos la cantidad
export type OrderItem = MenuItem & {
    quantity: number,
}