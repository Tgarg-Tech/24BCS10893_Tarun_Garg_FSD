import FoodMenu from './FoodMenu';

function Restaurant({ restaurantUser }) {
  return (
    <>
      <FoodMenu foodUser={restaurantUser} />
    </>
  );
}

export default Restaurant;
