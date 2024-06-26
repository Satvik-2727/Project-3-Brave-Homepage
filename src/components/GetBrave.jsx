import React from 'react';
import PropTypes from 'prop-types';

const GetBrave = ({ content }) => {
  return (
    <div className='flex text-white bg-custom-gradient px-32 py-4 rounded-full font-semibold text-lg'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
      >
        <path
          d="M22.869 24h-20c-1.103 0-2-.897-2-1.999v-5.998a.999.999 0 112 0v5.998h20v-5.998a.999.999 0 112 0v5.998a2.002 2.002 0 01-2 1.999zm-9.292-6.301a.99.99 0 01-.326.217.991.991 0 01-1.086-.213l-.002-.002-.002-.002-4.998-4.987a1 1 0 011.412-1.415l3.294 3.286V.999a.999.999 0 112 0v13.584l3.294-3.286a1 1 0 011.412 1.415l-4.998 4.987z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </svg>
      {content}
    </div>
  );
};

GetBrave.propTypes = {
  content: PropTypes.node.isRequired,
};

export default GetBrave;
