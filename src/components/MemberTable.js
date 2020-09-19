import React, { useState } from 'react';

import SortHeader from './SortHeader';
import TableRow from './TableRow';

var get = require('lodash.get');

const MemberTable = ({ memberList, setMemberList }) => {
  const [sortType, setSortType] = useState('DATE_ASC');

  const sortItems = (state, objectKeys) => {
    const sortedItems = memberList.sort((a, b) => {
      const aObject = state.includes('ASC') ? get(a, objectKeys) : get(b, objectKeys);
      const bObject = state.includes('ASC') ? get(b, objectKeys) : get(a, objectKeys);
      if (objectKeys === 'email' || objectKeys === 'style' || objectKeys === 'name') {
        return aObject.localeCompare(bObject);
      } else if (objectKeys === 'created_at') {
        return new Date(aObject) - new Date(bObject);
      } else {
        return aObject - bObject;
      }
    });
    setSortType(state);
    setMemberList([...sortedItems]);
  };

  return (
    <div className='w-full overflow-x-auto pb-12'>
      <table className='w-11/12 md:w-4/5 mx-auto rounded-t-lg'>
        <thead className='bg-tealCustom-400 text-white'>
          <tr className='head-row text-white'>
            <SortHeader
              sortItems={sortItems}
              sortString='NAME'
              text='Member'
              sortType={sortType}
              objectKeys='name'
              styleClasses='py-2 font-poppins text-left pl-6 font-light'
            />
            <SortHeader
              sortItems={sortItems}
              sortString='STATUS'
              text='Status'
              sortType={sortType}
              objectKeys='style'
            />
            <SortHeader
              sortItems={sortItems}
              sortString='EMAIL'
              text='Email'
              sortType={sortType}
              objectKeys='email'
            />
            <SortHeader
              sortItems={sortItems}
              sortString='INVITES'
              text='Invites'
              sortType={sortType}
              objectKeys='stats.invited_users_count'
            />
            <SortHeader
              sortItems={sortItems}
              sortString='CAMP'
              text='Campaigns'
              sortType={sortType}
              objectKeys='stats.published_campaigns_count'
            />
            <SortHeader
              sortItems={sortItems}
              sortString='DATE'
              text='Joined'
              sortType={sortType}
              objectKeys='created_at'
            />
          </tr>
        </thead>
        <tbody>
          {memberList.map((member) => (
            <TableRow member={member} key={member.id} objectKeys='name' />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
