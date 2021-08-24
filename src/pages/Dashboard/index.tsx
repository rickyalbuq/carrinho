import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../state/actionCreators';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import { Container } from '../../styles/common';
import SearchResult from '../../components/SearchResult';
import ProductList from '../../components/ProductList';
import useHandleSearch from '../../utils/useHandleSearch';

const Dashboard: React.FC = () => {
  const { result, searchText, handleSearch } = useHandleSearch();
  const dispatch = useDispatch();
  const getList = bindActionCreators(getProducts, dispatch);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <Container>
      <Header hasSearchBar onTyping={handleSearch} />
      {result && searchText ? (
        <SearchResult products={result} search={searchText} />
      ) : (
        <ProductList />
      )}
    </Container>
  );
};

export default Dashboard;
