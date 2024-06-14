// import React from 'react'
// import useAxiosPublic from '../../../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../../hooks/useAuth';
// import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
// import axios from 'axios';

// export default function DelivermanHome() {
//    const { user } = useAuth();
//    const { data: stats = {} } = useQuery({
//     queryKey: ['admin-stats'],
//     queryFn: async () => {
//       const res = await axios.get('https://bistro-boss-server-ten-psi.vercel.app/delivery-stats');
//       return res.data;
//     }
//   });
//   return (
//      <div>
        
//   <h2 className="text-3xl">
//                 <span>Hi, Welcome </span>
//                 {
//                     user?.displayName ? user.displayName : 'Back'
//                 }
//             </h2>
//             <div className="stats shadow">

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <FaDollarSign className='text-3xl'></FaDollarSign>
//                     </div>
//                     <div className="stat-title">Total Revenue</div>
//                     <div className="stat-value">${stats.paidc + stats.paid}</div>
//                     <div className="stat-desc">Jan 1st - Feb 1st</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <FaUsers className='text-3xl'></FaUsers>
//                     </div>
//                     <div className="stat-title">Money Recieved</div>
//                     <div className="stat-value">{stats.paid}</div>
//                     <div className="stat-desc">↗︎ 400 (22%)</div>
//                 </div>


//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <FaBook className='text-3xl'></FaBook>
//               </div>
              
//                     <div className="stat-title">Order Remaining</div>
//                     <div className="stat-value">{stats.orderremainig}</div>
//                     <div className="stat-desc">↗︎ 400 (22%)</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
//                     </div>
//                     <div className="stat-title">Order Delivered</div>
//                     <div className="stat-value">{stats.orderdelivered}</div>
//                     <div className="stat-desc">↘︎ 90 (14%)</div>
//                 </div>



//         </div>
//         </div>
//   )
// }
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DelivermanHome() {
  const { user } = useAuth();
  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axios.get('https://bistro-boss-server-ten-psi.vercel.app/delivery-stats');
      return res.data;
    }
  });

  const barData = {
    labels: stats.last7DaysData?.map(item => item._id) || [],
    datasets: [
      {
        label: 'Total Price',
        data: stats.last7DaysData?.map(item => item.totalPrice) || [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        color: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Order',
        data: stats.last7DaysData?.map(item => item.count) || [],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        color: '#f0ff',
      }
    ]
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Last 7 Days Order Additions',
        color: 'rgba(255, 99, 132, 1)',
         
      }
    }
  };

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : 'Back'}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className='text-3xl'></FaDollarSign>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value">${stats.paidc + stats.paid}</div>
          <div className="stat-desc">pending and delivered </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className='text-3xl'></FaUsers>
          </div>
          <div className="stat-title">Money Received</div>
          <div className="stat-value">{stats.paid}</div>
          <div className="stat-desc">after delivered</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className='text-3xl'></FaBook>
          </div>
          <div className="stat-title">Order Knocking</div>
          <div className="stat-value">{stats.orderremainig}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
          </div>
          <div className="stat-title">Order Delivered</div>
          <div className="stat-value">{stats.orderdelivered}</div>
          <div className="stat-desc"></div>
        </div>
      </div>

      <div className="mt-8 text-white">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
