/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSiteManager = /* GraphQL */ `
  subscription OnCreateSiteManager {
    onCreateSiteManager {
      id
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
    }
  }
`;
export const onUpdateSiteManager = /* GraphQL */ `
  subscription OnUpdateSiteManager {
    onUpdateSiteManager {
      id
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
    }
  }
`;
export const onDeleteSiteManager = /* GraphQL */ `
  subscription OnDeleteSiteManager {
    onDeleteSiteManager {
      id
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
      id
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
      id
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit {
    onCreateVisit {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit {
    onUpdateVisit {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit {
    onDeleteVisit {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage {
    onCreateLanguage {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage {
    onUpdateLanguage {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage {
    onDeleteLanguage {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhrase = /* GraphQL */ `
  subscription OnCreatePhrase {
    onCreatePhrase {
      id
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePhrase = /* GraphQL */ `
  subscription OnUpdatePhrase {
    onUpdatePhrase {
      id
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePhrase = /* GraphQL */ `
  subscription OnDeletePhrase {
    onDeletePhrase {
      id
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
      createdAt
      updatedAt
    }
  }
`;
