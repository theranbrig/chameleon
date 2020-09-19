import React from 'react';

const MemberStatistics = ({ memberList, totalInvites, totalCampaigns, recentMember }) => {
  return (
    <div className='flex flex-col lg:flex-row justify-around w-11/12 lg:w-4/5 mx-auto font-sans my-4 text-base lg:text-lg text-center'>
      <p className='standard-text'>
        Team Members: <strong className='strong-text'>{memberList.length}</strong>
      </p>
      <p className='standard-text'>
        Latest Member Added On: <strong className='strong-text'>{recentMember}</strong>
      </p>
      <p className='standard-text'>
        Total Users Invited: <strong className='strong-text'>{totalInvites}</strong>
      </p>
      <p className='standard-text'>
        Total Published Campaigns: <strong className='strong-text'>{totalCampaigns}</strong>
      </p>
    </div>
  );
};

export default MemberStatistics;
