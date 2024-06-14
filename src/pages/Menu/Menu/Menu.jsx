import { Helmet } from 'react-helmet-async';
import Covers from '../../../shares/covers/Covers';
import banner from '../../../assets/menu/menu-bg.jpg'
import PopularMenu from '../../Home/popularmenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../menucategory/MenuCategory';
export default function Menu() {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular")
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const drinks = menu.filter(item => item.category === "drinks")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const offered = menu.filter(item => item.category === "offered")
    
  return (
    <div>Menu

       <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Covers img={banner} title="our menu" > </Covers>
      <MenuCategory img={banner} title={"popular"} item={popular} />
      <MenuCategory img={banner} title={"desert"} item={dessert} />
      <MenuCategory img={banner} title={"pizza"} item={pizza} />
      <MenuCategory img={banner} title={"drinks"} item={drinks} />
      <MenuCategory img={banner} title={"soup"} item={soup} />
      <MenuCategory img={banner} title={"salad"} item={salad} />
     
    </div>
  )
}
