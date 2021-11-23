import readDataFromFile from '../../util/read-data-from-file'

const ProductDetailPage = (props) => {

  const { loadedProduct } = props

  if (!loadedProduct) return <p>Loading...</p>

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

  if (!product) return { notFound: true }

  return {
    props: {
      loadedProduct: product
    }
  }

}

export const getStaticPaths = async () => {
  const data = await readDataFromFile()
  const ids = data.products.map(({ id }) => id)

  const pathWithParams = ids.map(id => ({ params: { pid: id } }))

  return {
    paths: pathWithParams,
    fallback: true // or could be 'blocking'
  }
}

export default ProductDetailPage

