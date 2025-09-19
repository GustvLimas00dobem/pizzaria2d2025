import axios from "axios"
import { useState, useEffect } from "react"
const Produtos = () => {
    const [pizzas, setPizzas] = useState([])
    // Objeto com a lista de pizzas 
    useEffect(()=>{
    axios.get("https://viacep.com.br/ws/01010000/json")
    .then(Response=>{
        setPizzas(Response.data.data)
    })
}, [])

    // Interação da lista de pizzas 
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos
