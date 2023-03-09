'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './textlogo.css';

const TextLogoBox = ({ mainText, detailText, color = 'light', faIcon }) => {
  const bgColor = color === 'dark' ? 'bg-slate-700' : 'bg-white';
  const textColor = color === 'dark' ? 'text-gray-300' : 'text-slate-900';
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className={`shadow-lg ${bgColor} rounded-lg cursor-pointer mainDiv`} onClick={toggleShowMore}>
      <div className={` p-6`}>
        <h3 className={`${textColor} text-base`}>{mainText}</h3>
        <p className={`${textColor} text-sm tracking-normal`}>
          {showMore ? detailText : `${detailText.split(' ').slice(0, 20).join(' ')}...`}
          <br />
          <br />
          <button onClick={toggleShowMore} className='text-gray-400'>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </div>
      <div className='tinyDiv'>
        <FontAwesomeIcon icon={faIcon} className='rounded-full p-2 bg-slate-50 text-slate-800 border border-slate-900' />
      </div>
    </div>
  )
}

export default TextLogoBox;
