import React, { createContext, useContext, useState, useEffect } from 'react'
import { useFrappeAuth, useFrappeGetCall, useFrappePostCall, useFrappeGetDoc  } from 'frappe-react-sdk';

const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {
    const [ userdata, setUserdata ] = useState([]);
    const [products, setProducts] = useState([])
    const [gifts, setGifts] = useState([]);
    const [giftCards, setGiftCards] = useState([]);
    const [newP, setNewP] = useState(null)
    const { currentUser, updateCurrentUser } = useFrappeAuth();
    
    useEffect(() => {
        updateCurrentUser();
      }, [currentUser]);

    useFrappeGetCall('erpnext.e_commerce.api.get_product_filter_data', {
        name: newP,
        query_args: { "field_filters": {}, "attribute_filters": {}, "item_group": null, "start": null, "from_filters": false }
    }, `products-${newP}`, {
        isOnline: () => products.length === 0,
        onSuccess: (data) => setProducts(data.message.items)
    }, true)

    useFrappeGetCall('erpnext.e_commerce.api.get_product_filter_data', {
        query_args: { "field_filters": {}, "attribute_filters": {}, "item_group": "Gift Card", "start": null, "from_filters": false }
    }, `products-gift-cards`, {
        onSuccess: (data) => setGiftCards(data.message.items)
    })

    useFrappeGetCall('erpnext.e_commerce.api.get_product_filter_data', {
        query_args: { "field_filters": {}, "attribute_filters": {}, "item_group": "Gift", "start": null, "from_filters": false }
    }, `products-gifts`, {
        onSuccess: (data) => setGifts(data.message.items)
    })

    useFrappeGetCall('headless_e_commerce.api.get_profile', {}, 'user-profilez', {
        onSuccess: (data) => setUserdata(data.message)
    })



    const get = (name) => {
        // if product is already in the list, return it & refetch it in the background
        const p = products.find((product) => product.name === name)
        // if product is not in the list, return null & fetch it in the background
        if (!p) {
            setNewP(name)
        }
        return p
    }

    const getByItemCode = (itemCode) => {
        // if product is already in the list, return it & refetch it in the background
        const p = products.find((product) => product.item_code === itemCode)
        return p
    }
    


    return (
        <ProductsContext.Provider value={{ products, setProducts, get, getByItemCode, gifts, giftCards,userdata }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)
