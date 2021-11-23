const UseImperativeHandle = props => {
  const { id } = props
  return <h1>{id}</h1>
}

export default UseImperativeHandle

export const getServerSideProps = async context => {
  const { params } = context
  const { uid } = params

  return {
    props: {
      id: `userid-${uid}`
    }
  }
}