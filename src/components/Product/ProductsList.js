import {
    Button,
    Card,
    CardHeader,
    Row
  } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router";
import { pagination } from "utils/tableUtils";
import { ToggleProductActiveStatus } from './ToggleProductActiveStatus.js';

const { SearchBar } = Search;
  
export const ProductsList = ({products, setProducts}) => {
  const history = useHistory();

  const goToProductDetails = e => {
    const { id } = e.target;
    history.push(`/admin/products/products-details/${id}`);
  };

  /* Not clear for now, whether it's needed or not */
  const removeProduct = e => {
    const { id } = e.target;
    setProducts(products.filter(product => product.id !== parseInt(id)));
    // TODO call service to remove or deactivate
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={goToProductDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        {/* Not clear for now, whether it's needed or not */}
        {/* <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={removeProduct}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button> */}
      </>
    );
  };

  const formatToggleActive = (cell, row) => {
    const currentProduct = products.find(product => product.id === row.id);
    return (
      <ToggleProductActiveStatus
        productId={row.id}
        products={products}
        setProducts={setProducts}>
      </ToggleProductActiveStatus>
    );
  };

  return (
    <>
      <Row>
        <div className="col">
          <Card>
            <CardHeader>
              <h3 className="mb-0">Products</h3>
            </CardHeader>
            {
              products.length > 0 &&
              <ToolkitProvider
                data={products}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "product_name",
                    text: "Product name",
                    sort: true,
                  },
                  {
                    dataField: "product_brand",
                    text: "Product brand",
                    sort: true,
                  },
                  {
                    dataField: "sku",
                    text: "SKU",
                    sort: true,
                  },
                  {
                    dataField: "product_category",
                    text: "Product category",
                    sort: true,
                  },
                  {
                    dataField: "product_cost_price",
                    text: "Cost price",
                    sort: true,
                  },
                  {
                    dataField: "product_retail_price",
                    text: "Retail_price",
                    sort: true,
                  },
                  {
                    dataField: "isActive",
                    text: "Is active?",
                    formatter: formatToggleActive,
                  },
                  {
                    dataField: "stock",
                    text: "Stock",
                    sort: true,
                  },
                  {
                    dataField: "minimum_stock_level",
                    text: "MIN Stock level",
                    sort: true,
                  },
                  {
                    dataField: "reorder_quantity",
                    text: "Reorder quantity",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
              {props => (
                <div className="py-4 table-responsive">
                  <div
                    id="datatable-basic_filter"
                    className="dataTables_filter px-4 pb-1"
                  >
                    <label>
                      Filter:
                      <SearchBar
                        className="form-control-sm"
                        placeholder=""
                        {...props.searchProps}
                      />
                    </label>
                  </div>
                  <BootstrapTable
                    {...props.baseProps}
                    bootstrap4={true}
                    pagination={pagination}
                    bordered={false}
                    deleteRow={true}
                  />
                </div>
              )}
              </ToolkitProvider>
            }
            {
              !products.length &&
              <small className="text-center px-4 py-4 no-data-message text-uppercase text-muted font-weight-bold">No products to show</small>
            }
          </Card>
        </div>
      </Row>
    </>
  );
};
  