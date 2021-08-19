import React from 'react';
import intl from 'react-intl-universal';

import { TitleWrapper } from './styles';

interface Props {
  status: string;
}

const Error: React.FC<Props> = ({ status }) => {
  const page = status === '404' ? 'msg404' : 'msg500';

  return (
    <TitleWrapper>
      <h1>{`${status}!`}</h1>
      <p>{intl.get(`errors.${page}`)}</p>
    </TitleWrapper>
  );
};

export default Error;
