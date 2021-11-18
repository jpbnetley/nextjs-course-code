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

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false
  }
}

export default ProductDetailPage

