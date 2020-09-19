import React from 'react';

const SortHeader = ({ sortItems, sortString, text, sortType, objectKeys, styleClasses }) => {
  return (
    <th
      className={`hidden font-light md:table-cell pointer-cursor ${styleClasses}`}
      aria-sort={
        sortType === `${sortString}_DESC`
          ? `${text} descending`
          : sortType === `${sortString}_ASC`
          ? `${text} ascending`
          : 'none'
      }
      onClick={() => {
        if (sortType !== `${sortString}_DESC`) {
          sortItems(`${sortString}_DESC`, objectKeys);
        } else {
          sortItems(`${sortString}_ASC`, objectKeys);
        }
      }}>
      <span className='sort-content block'>
        {text}
        <span
          className={`sort-span ${sortType === `${sortString}_DESC` && 'chevron bottom'} ${
            sortType === `${sortString}_ASC` && 'chevron'
          }`}></span>
      </span>
    </th>
  );
};

export default SortHeader;
