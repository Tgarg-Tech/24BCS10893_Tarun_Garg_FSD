import Restaurant from './Restaurant';

function Home({ homeUser }) {
  return (
    <>
      <Restaurant restaurantUser={homeUser} />
    </>
  );
}

export default Home;
