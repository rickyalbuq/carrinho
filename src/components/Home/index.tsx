import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import intl from 'react-intl-universal';

import { TitleWrapper } from './styles';

interface Props {
  handleTheme(): void;
}

const Home: React.FC<Props> = ({ handleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <TitleWrapper>
      <h1>{intl.get('home.title')}</h1>
      <p>{intl.get('home.subtitle')}</p>

      <Switch
        onChange={handleTheme}
        checked={theme.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onHandleColor={theme.colors.txtHigh}
        onColor={theme.colors.txtMedium}
        offHandleColor={theme.colors.bgHigh}
        offColor={theme.colors.bgMedium}
      />
    </TitleWrapper>
  );
};

export default Home;
