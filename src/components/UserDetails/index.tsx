import React from 'react';
import Avatar from '../Avatar';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

type UserDetailsProps = {
  userDetails: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
};

const UserDetails = (props: UserDetailsProps) => {
  const { userDetails } = props;
  return (
    <div className='user-details-card'>
      <div className='user-details-action'>
        <a
          title={`Send email to ${userDetails.email}`}
          href={`mailto:${userDetails.email}`}
        >
          <MailOutlined className='user-details-action-icon' />
        </a>
        <a
          title={`Call ${userDetails.phone}`}
          href={`tel:+${userDetails.phone}`}
        >
          <PhoneOutlined className='user-details-action-icon' />
        </a>
      </div>
      <Avatar name={userDetails.name} />
      <h3>{userDetails.name}</h3>
      <p>
        <strong>{`@${userDetails.username}`}</strong>
      </p>
      <p>
        {`${userDetails.email}`} &bull; {userDetails.phone}
      </p>
    </div>
  );
};

export default UserDetails;
