import axios from "axios";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import SectionTitle from "../../components/sectiontitle/SectionTitle";

export default function Delyverymaninf() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://bistro-boss-server-ten-psi.vercel.app/delivers')
      .then(response => {
        // Assuming 'orderCount' is the property representing the number of orders
        const sortedPeople = response.data.sort((a, b) => b.order - a.order);
        setPeople(sortedPeople);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <SectionTitle Heading="Most active man" />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {people.map(person => (
        <PersonCard key={person._id} person={person} />
      ))}
    </div></div>
  );
}
