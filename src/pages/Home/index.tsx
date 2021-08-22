import React, { useContext, useEffect } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import intl from 'react-intl-universal';
import axios from 'axios';
import usePersistedState from '../../utils/usePersistedState';

import { TitleWrapper } from './styles';
import Button from '../../components/Button';
import IProduct from '../../utils/product';

interface Props {
  handleTheme(): void;
}

const Home: React.FC<Props> = ({ handleTheme }) => {
  const theme = useContext(ThemeContext);
  const [products, setProducts] = usePersistedState<Array<IProduct>>(
    'products',
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://gist.githubusercontent.com/viniciustodesco/e283682c99e38b7b8f09b6a44d1a3793/raw/84db85764c6a21ce8cfd67598e9afec258aeda45/products.json',
        );
        setProducts(response?.data?.products);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    })();
  }, [setProducts]);

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

      <Button
        type="cta"
        label={intl.get('home.toStart')}
        toGo={intl.get('routes.dashboard')}
      />
    </TitleWrapper>
  );
};

export default Home;
