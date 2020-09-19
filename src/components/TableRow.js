import React from 'react';

const TableRow = ({ member }) => {
  return (
    <tr className='py-3 border-b border-purple-400 hover:shadow-lg standard-transition hover:standard-transition text-sm lg:text-base'>
      <td className='text-center lg:text-left'>
        <img
          className='avatar shadow-lg rounded-full my-2 border-none inline-block lg:ml-6 standard-transition hover:standard-transition'
          src={member.cached_avatar}
          alt={`${member.name} avatar`}
        />
        <span className='ml-3 lg:ml-6 text-center'>{member.name}</span>
      </td>
      <td className='text-center'>
        <span className='capitalize'>{member.style}</span>
      </td>
      <td className='relative text-center'>
        <a
          className='py-1 px-4 rounded-md hover:shadow-md hover:bg-tealCustom-100 hover:text-tealCustom-400 standard-transition hover:standard-transition'
          href={`mailto:${member.email}`}>
          {member.email}
        </a>
      </td>
      <td className='text-center'>{member.stats.invited_users_count}</td>
      <td className='text-center'>{member.stats.published_campaigns_count ?? 0}</td>
      <td className='text-center'>{member.created_at.slice(0, 10)}</td>
    </tr>
  );
};

export default TableRow;
