/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSiteManager = /* GraphQL */ `
  subscription OnCreateSiteManager {
    onCreateSiteManager {
      id
      siteID
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
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
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
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
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
      siteSiteManagersId
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      siteID
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      siteSubscriptionID
      siteSubscription {
        id
        siteID
        pricePerMonth
        site {
          id
          siteSubscriptions {
            nextToken
          }
          siteManagers {
            nextToken
          }
          name
          description
          serviceRadius
          latitude
          longitude
          averageWait
          averageLine
          online
          estimatedDaily
          createdAt
          updatedAt
        }
        name
        expectedJerrycans
        createdAt
        updatedAt
        siteSiteSubscriptionsId
      }
      validSubscription
      pin
      phoneNumber
      name
      language
      createdAt
      updatedAt
      customerSiteSubscriptionId
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      siteID
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      siteSubscriptionID
      siteSubscription {
        id
        siteID
        pricePerMonth
        site {
          id
          siteSubscriptions {
            nextToken
          }
          siteManagers {
            nextToken
          }
          name
          description
          serviceRadius
          latitude
          longitude
          averageWait
          averageLine
          online
          estimatedDaily
          createdAt
          updatedAt
        }
        name
        expectedJerrycans
        createdAt
        updatedAt
        siteSiteSubscriptionsId
      }
      validSubscription
      pin
      phoneNumber
      name
      language
      createdAt
      updatedAt
      customerSiteSubscriptionId
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      siteID
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      siteSubscriptionID
      siteSubscription {
        id
        siteID
        pricePerMonth
        site {
          id
          siteSubscriptions {
            nextToken
          }
          siteManagers {
            nextToken
          }
          name
          description
          serviceRadius
          latitude
          longitude
          averageWait
          averageLine
          online
          estimatedDaily
          createdAt
          updatedAt
        }
        name
        expectedJerrycans
        createdAt
        updatedAt
        siteSiteSubscriptionsId
      }
      validSubscription
      pin
      phoneNumber
      name
      language
      createdAt
      updatedAt
      customerSiteSubscriptionId
    }
  }
`;
export const onCreateSiteSubscription = /* GraphQL */ `
  subscription OnCreateSiteSubscription {
    onCreateSiteSubscription {
      id
      siteID
      pricePerMonth
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
      expectedJerrycans
      createdAt
      updatedAt
      siteSiteSubscriptionsId
    }
  }
`;
export const onUpdateSiteSubscription = /* GraphQL */ `
  subscription OnUpdateSiteSubscription {
    onUpdateSiteSubscription {
      id
      siteID
      pricePerMonth
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
      expectedJerrycans
      createdAt
      updatedAt
      siteSiteSubscriptionsId
    }
  }
`;
export const onDeleteSiteSubscription = /* GraphQL */ `
  subscription OnDeleteSiteSubscription {
    onDeleteSiteSubscription {
      id
      siteID
      pricePerMonth
      site {
        id
        siteSubscriptions {
          items {
            id
            siteID
            pricePerMonth
            name
            expectedJerrycans
            createdAt
            updatedAt
            siteSiteSubscriptionsId
          }
          nextToken
        }
        siteManagers {
          items {
            id
            siteID
            name
            createdAt
            updatedAt
            siteSiteManagersId
          }
          nextToken
        }
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
      }
      name
      expectedJerrycans
      createdAt
      updatedAt
      siteSiteSubscriptionsId
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      siteSubscriptions {
        items {
          id
          siteID
          pricePerMonth
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          expectedJerrycans
          createdAt
          updatedAt
          siteSiteSubscriptionsId
        }
        nextToken
      }
      siteManagers {
        items {
          id
          siteID
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite {
    onUpdateSite {
      id
      siteSubscriptions {
        items {
          id
          siteID
          pricePerMonth
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          expectedJerrycans
          createdAt
          updatedAt
          siteSiteSubscriptionsId
        }
        nextToken
      }
      siteManagers {
        items {
          id
          siteID
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite {
    onDeleteSite {
      id
      siteSubscriptions {
        items {
          id
          siteID
          pricePerMonth
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          expectedJerrycans
          createdAt
          updatedAt
          siteSiteSubscriptionsId
        }
        nextToken
      }
      siteManagers {
        items {
          id
          siteID
          site {
            id
            name
            description
            serviceRadius
            latitude
            longitude
            averageWait
            averageLine
            online
            estimatedDaily
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      online
      estimatedDaily
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
