import ShopProductInfo from "../shop.product-info/shop.product-info.component"
import ShopProductType from "../shop.product-type/shop.product-type.component"
import "../shopping.styles.scss"

const Mens = ({products,handleCount,addProducts}) => {
    const ceket = []
    let sorgu = "Mens"
    products.forEach((product) => {
        if(product.type === sorgu){
            ceket.push(<ShopProductType type = {product.type}/>)
            sorgu = null
        }
        if(product.type === "Mens"){
            ceket.push(<ShopProductInfo  name = {product.name} price = {product.price} img = {product.img} handleCount={handleCount} addProducts={addProducts} id={product.id}/>)
        }
    })
  return (
    <div className="products-container">{ceket}</div>
  )
}
export default Mens