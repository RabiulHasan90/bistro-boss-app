import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAnxiosSecure';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function AdminDashboard() {
  const { user } = useAuth();
  const axiosPublic= useAxiosPublic();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosPublic.get('/admin-stats');
      return res.data;
    }
  });

  const categoryLabels = Object.keys(stats.categoryProductCounts || {});
  const categoryData = Object.values(stats.categoryProductCounts || {});

  const pieData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Food Count by Category',
        data: categoryData,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Food Count by Category',
        data: categoryData,
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Count by Category',
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Count by Category',
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : 'Back'}
      </h2>
      <div className="stats bg-[#7f7f07] flex flex-wrap">
        <div className="stat flex-1 min-w-[200px] p-4">
          <div className="stat-figure text-secondary ">
            <FaDollarSign className='text-3xl'></FaDollarSign>
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value text-white">${stats.price}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat flex-1 min-w-[200px] p-4">
          <div className="stat-figure text-secondary">
            <FaUsers className='text-3xl'></FaUsers>
          </div>
          <div className="stat-title text-white">Users</div>
          <div className="stat-value text-white">{stats.users}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat flex-1 min-w-[200px] p-4">
          <div className="stat-figure text-secondary">
            <FaBook className='text-3xl'></FaBook>
          </div>
          <div className="stat-title text-white">Menu Items</div>
          <div className="stat-value text-white">{stats.menuItem}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat flex-1 min-w-[200px] p-4">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
          </div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value text-white">{stats.order}</div>
          <div className="stat-desc"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 p-2">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}
