/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSiteManager = /* GraphQL */ `
  query GetSiteManager($id: ID!, $siteID: ID!) {
    getSiteManager(id: $id, siteID: $siteID) {
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
export const listSiteManagers = /* GraphQL */ `
  query ListSiteManagers(
    $id: ID
    $siteID: ModelIDKeyConditionInput
    $filter: ModelSiteManagerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSiteManagers(
      id: $id
      siteID: $siteID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSiteManagers = /* GraphQL */ `
  query SyncSiteManagers(
    $filter: ModelSiteManagerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSiteManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!, $siteID: ID!) {
    getCustomer(id: $id, siteID: $siteID) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $id: ID
    $siteID: ModelIDKeyConditionInput
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      id: $id
      siteID: $siteID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        siteSubscription {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        siteSubscription {
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
      nextToken
      startedAt
    }
  }
`;
export const getSiteSubscription = /* GraphQL */ `
  query GetSiteSubscription($id: ID!) {
    getSiteSubscription(id: $id) {
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
export const listSiteSubscriptions = /* GraphQL */ `
  query ListSiteSubscriptions(
    $filter: ModelSiteSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSiteSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSiteSubscriptions = /* GraphQL */ `
  query SyncSiteSubscriptions(
    $filter: ModelSiteSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSiteSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSites = /* GraphQL */ `
  query SyncSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
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
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        language
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLanguages = /* GraphQL */ `
  query SyncLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLanguages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        code
        language
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPhrase = /* GraphQL */ `
  query GetPhrase($id: ID!) {
    getPhrase(id: $id) {
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
export const listPhrases = /* GraphQL */ `
  query ListPhrases(
    $filter: ModelPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhrases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPhrases = /* GraphQL */ `
  query SyncPhrases(
    $filter: ModelPhraseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPhrases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
