/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */
import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item)
        
    }

    removeItem(id) {
        const getItem = this.items.filter( data => data.id != id )
        this.items = getItem
    }

    listItems() {
        let getItem = [];
        this.items.forEach ( data => {
            const item = new Item(data.id, data.name, data.quantity, data.price)
            getItem.push(item.displayDetails())
        })

        return getItem
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
