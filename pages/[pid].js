import readDataFromFile from '../util/read-data-from-file'

const ProductDetailPage = (props) => {

  const { loadedProduct } = props
  const { title, description } = loadedProduct

  return <>
    <h1>{title}</h1>
    <h1>{description}</h1>
  </>
}

export const getStaticProps = async context => {
  const { params } = context
  const { pid: productId } = params

  const data = await readDataFromFile()

  const product = data.products.find(({ id }) => productId === id)

  return {
    props: {
      loadedProduct: product
    }
  }

}

export default ProductDetailPage

