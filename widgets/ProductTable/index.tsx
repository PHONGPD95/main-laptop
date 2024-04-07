'use client';

import { AnyObject } from 'antd/es/_util/type';
import { ColumnType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import Empty from '@/components/Empty';
import ProductManagementCollapseItem from '@/components/ProductManagementCollapseItem';
import { PRODUCTS_COLUMN_DEFS } from '@/constants/columnDefs';
import {
    PRODUCT_ADDITIONAL_OPTIONS, PRODUCT_CATEGORIES, PRODUCT_MANAGEMENT_OPTIONS,
    PRODUCT_SELECT_OPTIONS, PRODUCT_SELLER_OPTIONS, PRODUCT_TYPE_OPTIONS, STOCK_STATUS_OPTIONS
} from '@/constants/options';
import products, { Product } from '@/db/product-managements';
import usePagination from '@/hooks/usePagination';
import FilterItem from '@/ui/FilterItem';
import Pagination from '@/ui/Pagination';
import Select, { Option } from '@/ui/Select';

import StyledTable from './styles';

const ProductTable = () => {
  const { width } = useWindowSize();
  const defaultFilters = {
    stockStatus: null,
    productCategory: null,
    productSeller: null,
    productType: null,
    additionalOptions: null,
  };
  const [category, setCategory] = useState('all');
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedAction, setSelectedAction] = useState<Option | null>(null);
  const [activeCollapse, setActiveCollapse] = useState('');

  const getQty = (category: string) => {
    if (category === 'all') return products.length;
    return products.filter((product) => product.status === category).length;
  };

  const handleFilterSelect = ({ value, label }: any, name: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { label, value },
    }));
  };

  const handleApplyFilters = () => {};

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  const dataByStatus = () => {
    if (category === 'all') return products;
    return products.filter((product) => product.status === category);
  };

  const pagination = usePagination(dataByStatus(), 8);

  // reset active collapse when page or window width changes
  useEffect(() => {
    setActiveCollapse('');
  }, [pagination.currentPage, width]);

  const handleCollapse = (sku: string) => {
    if (activeCollapse === sku) {
      setActiveCollapse('');
    } else {
      setActiveCollapse(sku);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-header">Products:</span>
        <div>
          {PRODUCT_MANAGEMENT_OPTIONS.map((option, index) => (
            <FilterItem
              key={`filter-${index}`}
              text={option.label}
              qty={getQty(option.value)}
              value={option.value}
              active={category}
              onClick={setCategory}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6">
        <Select
          options={STOCK_STATUS_OPTIONS}
          value={filters.stockStatus}
          placeholder="Stock Status"
          onChange={(e) => handleFilterSelect(e, 'stockStatus')}
        />
        <Select
          options={PRODUCT_CATEGORIES}
          value={filters.productCategory}
          placeholder="Product Category"
          onChange={(e) => handleFilterSelect(e, 'productCategory')}
        />
        <Select
          options={PRODUCT_SELLER_OPTIONS}
          value={filters.productSeller}
          placeholder="Product Seller"
          onChange={(e) => handleFilterSelect(e, 'productSeller')}
        />
        <Select
          options={PRODUCT_TYPE_OPTIONS}
          value={filters.productType}
          placeholder="Product Type"
          onChange={(e) => handleFilterSelect(e, 'productType')}
        />
        <Select
          options={PRODUCT_ADDITIONAL_OPTIONS}
          value={filters.additionalOptions}
          placeholder="Additional Options"
          onChange={(e) => handleFilterSelect(e, 'additionalOptions')}
        />
        <div className="grid grid-cols-2 gap-3">
          <button className="btn btn--secondary !gap-[5px]" onClick={handleApplyFilters}>
            Apply <i className="icon-chevron-right-regular text-sm" />
          </button>
          <button className="btn btn--outline blue !h-[44px]" onClick={handleClearFilters}>
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6">
        <p>View products: {pagination.showingOf()}</p>
        <div className="md:min-w-[280px]">
          <Select
            options={PRODUCT_SELECT_OPTIONS}
            value={selectedAction}
            placeholder="Select Action"
            onChange={(e) => setSelectedAction(e)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[22px]">
        {width >= 768 ? (
          <StyledTable
            columns={PRODUCTS_COLUMN_DEFS as ColumnType<AnyObject>[]}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record.sku}
            locale={{
              emptyText: <Empty text="No products found" />,
            }}
            rowSelection={{
              type: 'checkbox',
            }}
            pagination={false}
          />
        ) : (
          <div className="flex flex-col gap-5">
            {pagination.currentItems().map((product: Product, index: number) => (
              <ProductManagementCollapseItem
                key={`product-${index}`}
                product={product}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
              />
            ))}
          </div>
        )}
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  );
};

export default ProductTable;
