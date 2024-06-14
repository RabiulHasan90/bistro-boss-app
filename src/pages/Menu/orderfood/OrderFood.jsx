import React, { useState } from 'react'
import banner from '../../../assets/home/banner.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Covers from '../../../shares/covers/Covers';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../menucategory/MenuCategory';
import FoodCard from './FoodCard';
import Ordertab from './Ordertab';
import { useParams } from 'react-router-dom';

export default function orderFood() {
  const [tabIndex, setTabIndex] = useState(0);
  const {category} = useParams();
  console.log(category);
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular")
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const drinks = menu.filter(item => item.category === "drinks")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const offered = menu.filter(item => item.category === "offered")

  return (
    <div>
      <Covers  img={banner}  />
      
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>popular </Tab>
        <Tab>Dessert</Tab>
        <Tab>pizza</Tab>
        <Tab>drinks </Tab>
        <Tab>soup</Tab>
        <Tab>salad</Tab>
      </TabList>
        <TabPanel >
         
            <Ordertab  items={popular}/>
     
        </TabPanel>
        <TabPanel>
           <Ordertab  items={dessert}/>
      </TabPanel>
      <TabPanel><Ordertab  items={pizza}/></TabPanel>
      <TabPanel><Ordertab  items={drinks}/></TabPanel>
      <TabPanel><Ordertab  items={soup}/></TabPanel>
      <TabPanel><Ordertab  items={salad}/></TabPanel>
    </Tabs>
    </div> 
  )
}
