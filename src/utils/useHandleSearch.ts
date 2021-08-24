import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state/reducers';
import { Product } from './common';

interface Response {
  result: Array<Product>;
  searchText: string;
  handleSearch(event: React.FormEvent<HTMLInputElement>): void;
}

const useHandleSearch = (): Response => {
  const products = useSelector((state: State) => state.product);

  const [searchText, setSearchText] = useState<string>('');
  const [result, setResult] = useState<Array<Product>>([]);

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      let value = event.currentTarget.value;
      setSearchText(value);

      setResult(
        products?.filter((product: Product) =>
          product?.name?.toLocaleLowerCase().includes(value)
            ? product
            : undefined,
        ),
      );
    },
    [products],
  );

  return { result, searchText, handleSearch };
};

export default useHandleSearch;
