import { Fragment } from 'react';
import Head from 'next/head';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <div>
        <h1>The home page</h1>
      </div>
    </Fragment>
  );
}

export const getStaticProps = () => {

  return {
    props: {
      posts: [],
    },
  };
}

export default HomePage;
