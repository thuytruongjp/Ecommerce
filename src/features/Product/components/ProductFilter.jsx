import React from 'react';

function ProductFilter({ onChange, params }) {
  const handleSaleClick = () => {
    if (!onChange) return;
    if (params['sort-by-sale'] === 'true') {
      const newParams = { ...params };
      delete newParams['sort-by-sale'];
      onChange(newParams);
    } else onChange({ ...params, 'sort-by-sale': true });
  };

  const handleNewProductClick = () => {
    if (!onChange) return;
    if (params['date-update'] === 'true') {
      const newParams = { ...params };
      delete newParams['date-update'];
      onChange(newParams);
    } else onChange({ ...params, 'date-update': true });
  };

  const handleSortASCClick = () => {
    if (!onChange) return;
    if (params.asc === 'true') {
      const newParams = { ...params };
      delete newParams.asc;
      onChange(newParams);
    } else {
      const newParams = { ...params };
      delete newParams.desc;
      onChange({ ...newParams, asc: true });
    }
  };

  const handleSortDESCClick = () => {
    if (!onChange) return;
    if (params.desc === 'true') {
      const newParams = { ...params };
      delete newParams.desc;
      onChange(newParams);
    } else {
      const newParams = { ...params };
      delete newParams.asc;
      onChange({ ...newParams, desc: true });
    }
  };

  return (
    <div className='product-filter'>
      <span>Ưu tiên xem: &nbsp;</span>
      <ul>
        <li
          className={params['sort-by-sale'] === 'true' ? 'active' : ''}
          onClick={handleSaleClick}
        >
          Khuyến Mãi
        </li>
        <li
          className={params['date-update'] === 'true' ? 'active' : ''}
          onClick={handleNewProductClick}
        >
          Hàng mới
        </li>
        <li
          className={params.asc === 'true' ? 'active' : ''}
          onClick={handleSortASCClick}
        >
          Giá Thấp
        </li>
        <li
          className={params.desc === 'true' ? 'active' : ''}
          onClick={handleSortDESCClick}
        >
          Giá Cao
        </li>
      </ul>
    </div>
  );
}

export default ProductFilter;
