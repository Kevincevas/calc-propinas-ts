import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void

}

export default function MenuItems({item, addItem}: MenuItemProps) {

    return (
        <button 
            onClick={ () => addItem(item) } 
            className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-lg"
        >
            <h1>{item.name}</h1>
            <h1 className="font-black">${item.price}</h1>
            
        </button>
    )
}
