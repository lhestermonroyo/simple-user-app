import React from 'react';
import { avatarGenerator } from '../../utils/avatarGenerator';

type AvatarProps = {
  name: string;
};

const Avatar = (props: AvatarProps) => {
  const { name } = props;

  const { nameInitial, color } = avatarGenerator(name);

  return (
    <div className="avatar" style={{ background: color }}>
      <p>{nameInitial}</p>
    </div>
  );
};

export default Avatar;
