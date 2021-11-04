/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator {
    onCreateAdministrator {
      id
      name
      sites {
        items {
          id
          adminID
          pricePerJerryCan
          description
          serviceRadius
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
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
      sites {
        items {
          id
          adminID
          pricePerJerryCan
          description
          serviceRadius
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
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
      sites {
        items {
          id
          adminID
          pricePerJerryCan
          description
          serviceRadius
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
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
      weeklyJerryCans
      remainingJerryCans
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
      weeklyJerryCans
      remainingJerryCans
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
      weeklyJerryCans
      remainingJerryCans
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
      customer {
        id
        name
        weeklyJerryCans
        remainingJerryCans
        createdAt
        updatedAt
      }
      site {
        id
        administrator {
          id
          name
          createdAt
          updatedAt
        }
        adminID
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
      customer {
        id
        name
        weeklyJerryCans
        remainingJerryCans
        createdAt
        updatedAt
      }
      site {
        id
        administrator {
          id
          name
          createdAt
          updatedAt
        }
        adminID
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
      customer {
        id
        name
        weeklyJerryCans
        remainingJerryCans
        createdAt
        updatedAt
      }
      site {
        id
        administrator {
          id
          name
          createdAt
          updatedAt
        }
        adminID
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
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      administrator {
        id
        name
        sites {
          nextToken
        }
        createdAt
        updatedAt
      }
      adminID
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
      administrator {
        id
        name
        sites {
          nextToken
        }
        createdAt
        updatedAt
      }
      adminID
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
      administrator {
        id
        name
        sites {
          nextToken
        }
        createdAt
        updatedAt
      }
      adminID
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
