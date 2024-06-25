import React from 'react'
const product = [
    { item: 'apple', isFruit: true, id: 1 },
    { item: 'tomato', isFruit: false, id: 2 },
    { item: 'onion', isFruit: false, id: 3 },
    { item: 'orange', isFruit: true, id: 4 }

]
const Demo = () => {
    const ListofItems = product.map(prod => <li
        key={prod.id}
        style={{
            color: prod.isFruit ? "green" : "red"
        }}
    >{prod.item}</li>)
    return (
        <ul>{ListofItems}</ul>
    );
}

export default Demo