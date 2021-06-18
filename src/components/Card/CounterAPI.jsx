import axios from 'axios';
import React, {useEffect, useState} from 'react'

function CounterAPI({countView}) {

    const [product, setProduct] = useState(0);

    useEffect(() => {
        axios.get(countView)
        .then(res => {
            setProduct(res.data)
        })
    }, [countView])

    return (
        <div key={product.key}>
            <p>Customer View #: {product.value}</p>
        </div>
    )
}

export default CounterAPI
