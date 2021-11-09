/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator {
    onCreateAdministrator {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdministrator = /* GraphQL */ `
  subscription OnUpdateAdministrator {
    onUpdateAdministrator {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdministrator = /* GraphQL */ `
  subscription OnDeleteAdministrator {
    onDeleteAdministrator {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomerSiteLinker = /* GraphQL */ `
  subscription OnCreateCustomerSiteLinker {
    onCreateCustomerSiteLinker {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomerSiteLinker = /* GraphQL */ `
  subscription OnUpdateCustomerSiteLinker {
    onUpdateCustomerSiteLinker {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomerSiteLinker = /* GraphQL */ `
  subscription OnDeleteCustomerSiteLinker {
    onDeleteCustomerSiteLinker {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdminSiteLinker = /* GraphQL */ `
  subscription OnCreateAdminSiteLinker {
    onCreateAdminSiteLinker {
      id
      adminID
      siteID
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdminSiteLinker = /* GraphQL */ `
  subscription OnUpdateAdminSiteLinker {
    onUpdateAdminSiteLinker {
      id
      adminID
      siteID
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdminSiteLinker = /* GraphQL */ `
  subscription OnDeleteAdminSiteLinker {
    onDeleteAdminSiteLinker {
      id
      adminID
      siteID
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
