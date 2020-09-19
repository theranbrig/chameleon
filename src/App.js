import './styles/tailwind.css';

import React, { useEffect, useState } from 'react';

import MemberStatistics from './components/MemberStatistics';
import MemberTable from './components/MemberTable';
import logo from './logo.svg';

function App() {
  const [loading, setLoading] = useState(true);
  const [memberList, setMemberList] = useState([]);
  const [totalInvites, setTotalInvites] = useState(0);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [recentMember, setRecentMember] = useState('');
  const [error, setError] = useState(null);

  const calculateTotalInvites = (data) => {
    const invites = data.reduce((acc, member) => {
      return acc + member.stats.invited_users_count;
    }, 0);
    setTotalInvites(invites);
  };

  const calculateTotalCampaigns = (data) => {
    const campaigns = data.reduce((acc, member) => {
      return acc + member.stats.published_campaigns_count;
    }, 0);
    setTotalCampaigns(campaigns);
  };

  const sortMemberList = (data) => {
    const sortedList = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setRecentMember(sortedList[sortedList.length - 1].created_at.slice(0, 10));
    setMemberList(sortedList);
  };

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/example_data.json')
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((member) => {
          return {
            ...member,
            style: member.style.charAt(0).toUpperCase() + member.style.slice(1),
          };
        });
        calculateTotalInvites(formattedData);
        calculateTotalCampaigns(formattedData);
        sortMemberList(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className='flex flex-col items-center justify-center text-2xl min-h-screen'>
        <img className='w-2/3' src={logo} alt='logo' />
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className='flex flex-col items-center justify-center text-2xl min-h-screen'>
        <img className='w-2/3' src={logo} alt='logo' />
        <p>{error}</p>
      </div>
    );

  return (
    <>
      <div className='w-full'>
        <h1 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 text-sans mt-12 mb-8 text-center'>
          Chameleon Member List
        </h1>
        <MemberStatistics
          memberList={memberList}
          totalInvites={totalInvites}
          totalCampaigns={totalCampaigns}
          recentMember={recentMember}
        />
        <MemberTable memberList={memberList} setMemberList={setMemberList} />
      </div>
    </>
  );
}

export default App;
