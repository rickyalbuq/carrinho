import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';
import { Container } from '../../styles/common';
import IProduct from '../../utils/product';
import SearchResult from '../../components/SearchResult';
import AllResult from '../../components/AllResult';

const Dashboard: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Array<IProduct>>([]);
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const products = JSON.parse(localStorage.getItem('products') || '{}');

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      let value = event.currentTarget.value;

      setOnSearch(true);
      setSearchText(value);

      event.target.addEventListener('focus', () =>
        setOnSearch((prev) => !prev),
      );

      setSearchResult(
        products?.filter((product: IProduct) =>
          product?.name?.toLocaleLowerCase().includes(value)
            ? product
            : undefined,
        ),
      );
    },
    [setSearchResult, setSearchText, products],
  );

  return (
    <Container>
      <Header hasSearchBar onTyping={handleSearch} />
      {onSearch ? (
        <SearchResult products={searchResult} search={searchText} />
      ) : (
        <AllResult />
      )}
    </Container>
  );
};

export default Dashboard;
