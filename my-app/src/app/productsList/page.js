async function productList(){
     let data = await fetch("https://dummyjson.com/products?limit=10")
     data = await data.json()
     return data.products

}






export default async function Product()
{
    let products = await productList();
    console.log(products)
    return(
        <div>
      <h2>items</h2>
      {
        products.map((items)=>{
            return(
                <div>
                    <ul>
                        <li>{items.title}</li>
                    </ul>
                </div>
            )
        })
      }
        </div>
    )
}