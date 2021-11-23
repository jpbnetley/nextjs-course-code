import Link from 'next/link'
import readDataFromFile from '../util/read-data-from-file'

function HomePage(props) {
  const { products } = props

  return (
    <>
      <ul>
        {products.map(({ id, title }) =>
          <li key={id}>
            <Link href={`/products/${id}`}>{title}</Link>
          </li>
        )}
      </ul>
    </>
  );
}


export default HomePage;


export const getStaticProps = async () => {

  const data = await readDataFromFile()

  if (!data) {
    return {
      redirect: {
        destination: '/not-found'
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products
    }
  }
}