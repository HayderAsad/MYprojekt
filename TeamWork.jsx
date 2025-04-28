import React, { useState } from 'react';
import img1 from '../style/partion/img/img1.png';
import img2 from '../style/partion/img/img2.png';
import img3 from '../style/partion/img/img3.png';
import img4 from '../style/partion/img/img4.png';
import img5 from '../style/partion/img/img5.png';
import img6 from '../style/partion/img/img6.png';

function TeamWork() {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  const membersData = [
    {
      id: 1,
      name: 'Salvador Stewart Flynn Thomas Salva',
      description:
        `Leading specialist of the department o.
         JeromeKlarkaJeromeKlarka19233623. `,
        phone:'+38 (098) 278 76 24',
        image: img1,
    },
    {
      id: 2,
      name: 'Takamaru Ayako Jurrien',
      description:
        'Lead Independent Director  Takamuru@gmail.com ',
          phone:'+38 (098) 278 90 24',
        image: img2,
    },
    {
      id: 3,
      name: 'John',
      description:
        'Co-Founder and CEO Ilya_founder@gmail.com ',
          phone:'+38 (098) 235 44 24',
        image: img3,
    },
    {
      id: 4,
      name: 'Alexandre',
      description:
        `Lead Independent Director  
        Alexandr_develop@gmail.com  `,
          phone:'+38 (098) 198 44 24',
        image: img4,
    },
    {
      id: 5,
      name: 'Winny',
      description:
        `LFormer Senior Director 
         Winny_develop@gmail.com  `,
          phone:'+38 (098) 278 22 88',
        image: img5,
    },
    {
      id: 6,
      name: 'Simon',
      description:
        `President of Commerce  
        Simon@gmail.com  `,
          phone:'+38 (098) 278 44 00',
        image: img6,
    },
  ];

  const displayedMembers = showAll ? membersData : membersData.slice(0, 3);

  return (
    <div id='members' className="Teamwork-container">
      <h2>About our Teamwork</h2>
      <div className="Teamwork">
        <div className="Team-members">
          {displayedMembers.map((member, index) => (
            <div key={member.id} className={`members member-${index}`}>
              <img src={member.image} alt={member.name} />
              <div className='description'>
                 <p>{member.name}</p>  
                 <p>{member.description}</p>
                 <p>{member.phone}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn" onClick={toggleShow}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default TeamWork;
