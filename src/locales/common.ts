export default interface Common {
  home: {
    title: string;
    subtitle: string;
    toStart: string;
  };

  dashboard: {
    title: string;
    placeholder: string;
    toBuy: string;
    empty: string;
    found: string;
  };

  cart: {
    title: string;
    subtitle: string;
    total: string;
    toFinish: string;
    empty: string;
  };

  product: {
    title: string;
    toBuy: string;
    details: string;
    vendor: string;
    brand: string;
  };

  confirm: {
    title: string;
    subtitle: string;
    details: string;
    total: string;
    thanks: string;
    toFinish: string;
  };

  routes: {
    home: string;
    dashboard: string;
    product: string;
    confirm: string;
    error: string;
  };

  errors: {
    msg404: string;
    msg500: string;
  };
}
