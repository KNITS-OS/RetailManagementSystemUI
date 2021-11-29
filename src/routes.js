/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//examples
import Buttons from "views/pages/examples/components/Buttons.js";
import Calendar from "views/pages/examples/components/Calendar.js";
import Cards from "views/pages/examples/components/Cards.js";
import Components from "views/pages/examples/forms/Components.js";
import Elements from "views/pages/examples/forms/Elements.js";
import Validation from "views/pages/examples/forms/Validation.js";
import Notifications from "views/pages/examples/components/Notifications.js";
import Timeline from "views/pages/examples/components/Timeline.js";
import Typography from "views/pages/examples/components/Typography.js";
import Pricing from "views/pages/examples/pages/Pricing.js";
import Profile from "views/pages/examples/pages/Profile.js";
import Icons from "views/pages/examples/components/Icons.js";

//demo pages
import CreateEmployeePage from "views/pages/employees/CreateEmployeePage";
import EmployeesPage from "views/pages/employees/EmployeesPage";
import EmployeeDetailsPage from "views/pages/employees/EmployeeDetailsPage";
import CreateGroupPage from "views/pages/groups/CreateGroupPage";
import GroupsPage from "views/pages/groups/GroupsPage";
import GroupDetailsPage from "views/pages/groups/GroupDetailsPage";
import ChartsPage from "views/pages/dashboards/ChartsPage";
import WorldOverviewPage from "views/pages/dashboards/WorldOverviewPage";

//RMS pages
import CreateRolePage from "views/pages/users/CreateRolePage";
import CreateUserPage from "views/pages/users/CreateUserPage";
import SearchUsersPage from "views/pages/users/SearchUsersPage";

import CreateDistributionCenterPage from "views/pages/locations/CreateDistributionCenterPage";
import CreateStorePage from "views/pages/locations/CreateStorePage";
import SearchDistributionCentersPage from "views/pages/locations/SearchDistributionCentersPage";
import SearchStoresPage from "views/pages/locations/SearchStoresPage";

import CreatePoRequisitionPage from "views/pages/procurement/CreatePoRequisitionPage";
import InvoicesPage from "views/pages/procurement/InvoicesPage";
import PurchaseOrderArchivePage from "views/pages/procurement/PurchaseOrderArchivePage";
import PurchaseOrdersPage  from "views/pages/procurement/PurchaseOrdersPage";



import CreateSupplierPage from "views/pages/suppliers/CreateSupplierPage";
import SearchSuppliersPage from "views/pages/suppliers/SearchSuppliersPage";

import CreateProductPage from "views/pages/products/CreateProductPage";
import SearchProductsPage from "views/pages/products/SearchProductsPage";
import CreateCustomerPage from "views/pages/sales/CreateCustomerPage";
import SearchCustomersPage from "views/pages/sales/SearchCustomersPage";
import SalesOrdersPage from "views/pages/sales/SalesOrdersPage";
import SalesDashboardPage from "views/pages/sales/SalesDashboardPage";



const routes = [
  /* Users */
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-circle-08 text-info",
    state: "userCollapse",
    views: [
      {
        path: "/create-employee",
        name: "Create User",
        miniName: "CE",
        component: CreateUserPage,
        layout: "/admin",
      },
      {
        path: "/search-employees",
        name: "Search Users",
        miniName: "SE",
        component: SearchUsersPage,
        layout: "/admin",
      },
      {
        path: "/create-group",
        name: "Create Group",
        miniName: "CG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: "/search-groups",
        name: "Search Groups",
        miniName: "SC",
        component: GroupsPage,
        layout: "/admin",
      },
    ],
  },

  /* Dashboard */
  {
    collapse: true,
    name: "Procurement",
    icon: "ni ni-chart-pie-35 text-info",
    state: "ProcurementCollapse",
    views: [    
      {
        path: "/purchase-orders",
        name: "Purchase Orders",
        miniName: "SC",
        component: PurchaseOrdersPage,
        layout: "/admin",
      }, 
      {
        path: "/invoices",
        name: "invoices",
        miniName: "SC",
        component: InvoicesPage,
        layout: "/admin",
      }, 
      {
        path: "/search-purchase-orders-product",
        name: "Archive",
        miniName: "SC",
        component: PurchaseOrderArchivePage,
        layout: "/admin",
      },   
    ],
  },

  {
    collapse: true,
    name: "Products",
    icon: "ni ni-chart-pie-35 text-info",
    state: "ProductsCollapse",
    views: [     
      {
        path: "/create-product",
        name: "Create Product",
        miniName: "SC",
        component: CreateProductPage,
        layout: "/admin",
      }, 
      {
        path: "/search-products",
        name: "Search Products",
        miniName: "SC",
        component: SearchProductsPage,
        layout: "/admin",
      },  
    ],
  },
 
  {
    collapse: true,
    name: "Locations",
    icon: "ni ni-chart-pie-35 text-info",
    state: "LocationsCollapse",
    views: [     
      {
        path: "/create-distribution-center",
        name: "New Distribution Center",
        miniName: "SC",
        component: CreateDistributionCenterPage,
        layout: "/admin",
      }, 
      {
        path: "/search-distribution-center",
        name: "Search Distribution Centers",
        miniName: "SC",
        component: SearchDistributionCentersPage,
        layout: "/admin",
      }, 
      {
        path: "/create-store",
        name: "Create Store",
        miniName: "SC",
        component: CreateStorePage,
        layout: "/admin",
      }, 
      {
        path: "/search-stores",
        name: "Search Stores",
        miniName: "SC",
        component: SearchStoresPage,
        layout: "/admin",
      }, 
    ],
  },

  {
    collapse: true,
    name: "Suppliers",
    icon: "ni ni-chart-pie-35 text-info",
    state: "SuppliersCollapse",
    views: [     
      {
        path: "/create-suppliers",
        name: "Create Suppliers",
        miniName: "SC",
        component: CreateSupplierPage,
        layout: "/admin",
      }, 
      {
        path: "/search-suppliers",
        name: "Search Suppliers",
        miniName: "SC",
        component: SearchSuppliersPage,
        layout: "/admin",
      },  
    ],
  },

  {
    collapse: true,
    name: "Sales",
    icon: "ni ni-chart-pie-35 text-info",
    state: "SalesCollapse",
    views: [   
      {
        path: "/register-customer",
        name: "Register Customer",
        miniName: "SC",
        component: CreateCustomerPage,
        layout: "/admin",
      }, 
      {
        path: "/search-customers",
        name: "Search Customers",
        miniName: "SC",
        component: SearchCustomersPage,
        layout: "/admin",
      }, 
      {
        path: "/sales-orders",
        name: "Sales Orders",
        miniName: "SC",
        component: SalesOrdersPage,
        layout: "/admin",
      }, 
      {
        path: "/sales-dashboard",
        name: "Sales Dashboard",
        miniName: "SC",
        component: SalesDashboardPage,
        layout: "/admin",
      }, 
    ],
  },


  /* Details Routes*/
  {
    collapse: false,
    global: true,
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    path: "/groups/group-details/:id",
    component: GroupDetailsPage,
    layout: "/admin",
  },
  /* Examples */
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-briefcase-24 text-info",
    state: "exampleCollapse",
    layout: "/admin",
    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "NB",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-view",
        name: "World Overview",
        miniName: "WV",
        component: WorldOverviewPage,
        layout: "/admin",
      },
      {
        path: "/buttons",
        name: "Buttons demo",
        miniName: "NB",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/calendars",
        name: "calendars",
        miniName: "WV",
        component: Calendar,
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "cards",
        miniName: "WV",
        component: Cards,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "components",
        miniName: "WV",
        component: Components,
        layout: "/admin",
      },
      {
        path: "/elements",
        name: "elements",
        miniName: "WV",
        component: Elements,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "validation",
        miniName: "WV",
        component: Validation,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "notifications",
        miniName: "WV",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/timeline",
        name: "timeline",
        miniName: "WV",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "typography",
        miniName: "WV",
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "icons",
        miniName: "WV",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/comparePage",
        name: "compare page",
        miniName: "WV",
        component: Pricing,
        layout: "/admin",
      },
      {
        path: "/profilePage",
        name: "profile",
        miniName: "WV",
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];

export default routes;
