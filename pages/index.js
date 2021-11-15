import { Fragment } from 'react';

function HomePage(props) {
  const { products } = props

  return (
    <Fragment>
      <ul>
        {products.map(({ id, title }) =>
          <li key={id}>{title}</li>
        )}
      </ul>
    </Fragment>
  );
}


export default HomePage;


export const getStaticProps = async () => {
  return {
    props: {
      products: [{ id: 'p1', title: 'Product 1' }]
    }
  }
}