import { useState,useEffect } from "react"
import Card from "../../Components/card"
import Layout from "../../Components/Layout"
function Home() {
 
 const [items,setItem] = useState(null)
 
 useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data => setItem(data))
 },[])
 
   return( 

    <Layout>
hola Home
   <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
      items?.map(item => (<Card key={item.id} data={item}/>))
      }
      </div>

    </Layout>
 )
  
}

export default Home
