/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator {
    onCreateAdministrator {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSiteManager = /* GraphQL */ `
  subscription OnCreateSiteManager {
    onCreateSiteManager {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSiteManager = /* GraphQL */ `
  subscription OnUpdateSiteManager {
    onUpdateSiteManager {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSiteManager = /* GraphQL */ `
  subscription OnDeleteSiteManager {
    onDeleteSiteManager {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
      id
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
      id
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateManagerSiteLinker = /* GraphQL */ `
  subscription OnCreateManagerSiteLinker {
    onCreateManagerSiteLinker {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateManagerSiteLinker = /* GraphQL */ `
  subscription OnUpdateManagerSiteLinker {
    onUpdateManagerSiteLinker {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteManagerSiteLinker = /* GraphQL */ `
  subscription OnDeleteManagerSiteLinker {
    onDeleteManagerSiteLinker {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomerSiteLinker = /* GraphQL */ `
  subscription OnCreateCustomerSiteLinker {
    onCreateCustomerSiteLinker {
      id
      customerID
      siteID
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomerSiteLinker = /* GraphQL */ `
  subscription OnUpdateCustomerSiteLinker {
    onUpdateCustomerSiteLinker {
      id
      customerID
      siteID
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomerSiteLinker = /* GraphQL */ `
  subscription OnDeleteCustomerSiteLinker {
    onDeleteCustomerSiteLinker {
      id
      customerID
      siteID
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSub = /* GraphQL */ `
  subscription OnCreateSub {
    onCreateSub {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSub = /* GraphQL */ `
  subscription OnUpdateSub {
    onUpdateSub {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSub = /* GraphQL */ `
  subscription OnDeleteSub {
    onDeleteSub {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage {
    onCreateLanguage {
      id
      code
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage {
    onUpdateLanguage {
      id
      code
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage {
    onDeleteLanguage {
      id
      code
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePhrase = /* GraphQL */ `
  subscription OnCreatePhrase {
    onCreatePhrase {
      id
      code
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePhrase = /* GraphQL */ `
  subscription OnUpdatePhrase {
    onUpdatePhrase {
      id
      code
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePhrase = /* GraphQL */ `
  subscription OnDeletePhrase {
    onDeletePhrase {
      id
      code
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
