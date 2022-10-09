import React from 'react';
import { useState } from 'react';

const Laundrygo = ({ menuConfig }) => {
  const [isOpended, setIsOpened] = useState('');

  return (
    <div>
      {menuConfig.map((menu) => (
        <div
          key={menu.title}
          data-test-id={`first-level-${menu.title.toLowerCase()}`}
        >
          {menu.title}{' '}
          {!!menu.subItems && (
            <button
              onClick={() =>
                setIsOpened((prev) => (prev !== menu.title ? menu.title : ''))
              }
              data-test-id={`button-${menu.title.toLowerCase()}`}
            >
              {isOpended === menu.title ? 'Hide' : 'Expand'}
            </button>
          )}
          {!!menu.subItems && isOpended === menu.title && (
            <ul data-test-id={`ul-${menu.title.toLowerCase()}`}>
              {menu.subItems.map((item) => (
                <li
                  key={item}
                  data-test-id={`li-${menu.title.toLowerCase()}-${item.toLowerCase()}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Laundrygo;
