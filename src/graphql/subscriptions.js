/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSiteManager = /* GraphQL */ `
  subscription OnCreateSiteManager {
    onCreateSiteManager {
      id
      siteID
      site {
        id
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      siteSubscription {
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
          _version
          _deleted
          _lastChangedAt
        }
        name
        pricePerMonth
        weeklyJerryCans
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        siteSiteSubscriptionId
      }
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      siteSubscription {
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
          _version
          _deleted
          _lastChangedAt
        }
        name
        pricePerMonth
        weeklyJerryCans
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        siteSiteSubscriptionId
      }
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      siteSubscription {
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
          _version
          _deleted
          _lastChangedAt
        }
        name
        pricePerMonth
        weeklyJerryCans
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        siteSiteSubscriptionId
      }
      pin
      phoneNumber
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerSiteSubscriptionId
    }
  }
`;
export const onCreateSiteSubscription = /* GraphQL */ `
  subscription OnCreateSiteSubscription {
    onCreateSiteSubscription {
      id
      siteID
      site {
        id
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      siteSiteSubscriptionId
    }
  }
`;
export const onUpdateSiteSubscription = /* GraphQL */ `
  subscription OnUpdateSiteSubscription {
    onUpdateSiteSubscription {
      id
      siteID
      site {
        id
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      siteSiteSubscriptionId
    }
  }
`;
export const onDeleteSiteSubscription = /* GraphQL */ `
  subscription OnDeleteSiteSubscription {
    onDeleteSiteSubscription {
      id
      siteID
      site {
        id
        siteSubscription {
          nextToken
          startedAt
        }
        siteManagers {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      siteSiteSubscriptionId
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite {
    onCreateSite {
      id
      siteSubscription {
        items {
          id
          siteID
          name
          pricePerMonth
          weeklyJerryCans
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteSubscriptionId
        }
        nextToken
        startedAt
      }
      siteManagers {
        items {
          id
          siteID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteManagersId
        }
        nextToken
        startedAt
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
      siteSubscription {
        items {
          id
          siteID
          name
          pricePerMonth
          weeklyJerryCans
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteSubscriptionId
        }
        nextToken
        startedAt
      }
      siteManagers {
        items {
          id
          siteID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteManagersId
        }
        nextToken
        startedAt
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
      siteSubscription {
        items {
          id
          siteID
          name
          pricePerMonth
          weeklyJerryCans
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteSubscriptionId
        }
        nextToken
        startedAt
      }
      siteManagers {
        items {
          id
          siteID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          siteSiteManagersId
        }
        nextToken
        startedAt
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
