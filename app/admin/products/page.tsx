'use client';

import { useState } from 'react';
import { CSVLink } from 'react-csv';

import PageHeader from '@/layout/PageHeader';
import Search from '@/ui/Search';
import ProductTable from '@/widgets/ProductTable';

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['John', 'Doe', 'johndoe@domain.com'],
  ['Jane', 'Doe', 'janedoe@domain.com'],
];

const ProductsManagement = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <PageHeader title="Products Management" />

      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <button className="btn btn--primary">
            Add new product <i className="icon-circle-plus-regular" />
          </button>

          <CSVLink className="btn btn--outline blue !h-[44px]" data={csvData}>
            Export CSV <i className="icon-file-export-solid" />
          </CSVLink>
        </div>

        <Search wrapperClass="lg:w-[326px]" placeholder="Search Product" query={query} setQuery={setQuery} />
      </div>
      <ProductTable />
    </>
  );
};

export default ProductsManagement;
