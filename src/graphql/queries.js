/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getAdministrator = /* GraphQL */ `
  query GetAdministrator($id: ID!) {
    getAdministrator(id: $id) {
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
export const listAdministrators = /* GraphQL */ `
  query ListAdministrators(
    $filter: ModelAdministratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncAdministrators = /* GraphQL */ `
  query SyncAdministrators(
    $filter: ModelAdministratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdministrators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getSiteManager = /* GraphQL */ `
  query GetSiteManager($id: ID!) {
    getSiteManager(id: $id) {
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
export const listSiteManagers = /* GraphQL */ `
  query ListSiteManagers(
    $filter: ModelSiteManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSiteManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
        name
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
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        pin
        phoneNumber
        name
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
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      description
      serviceRadius
      latitude
      longitude
      subs {
        nextToken
        startedAt
      }
      averageWait
      averageLine
      online
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
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
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
        name
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        online
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
export const getManagerSiteLinker = /* GraphQL */ `
  query GetManagerSiteLinker($id: ID!) {
    getManagerSiteLinker(id: $id) {
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
export const listManagerSiteLinkers = /* GraphQL */ `
  query ListManagerSiteLinkers(
    $filter: ModelManagerSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagerSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        siteManagerID
        siteID
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
export const syncManagerSiteLinkers = /* GraphQL */ `
  query SyncManagerSiteLinkers(
    $filter: ModelManagerSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManagerSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        siteManagerID
        siteID
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
export const getCustomerSiteLinker = /* GraphQL */ `
  query GetCustomerSiteLinker($id: ID!) {
    getCustomerSiteLinker(id: $id) {
      id
      customerID
      siteID
      weeklyJerryCans
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
export const listCustomerSiteLinkers = /* GraphQL */ `
  query ListCustomerSiteLinkers(
    $filter: ModelCustomerSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        siteID
        weeklyJerryCans
        remainingJerryCans
        sub
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
export const syncCustomerSiteLinkers = /* GraphQL */ `
  query SyncCustomerSiteLinkers(
    $filter: ModelCustomerSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomerSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customerID
        siteID
        weeklyJerryCans
        remainingJerryCans
        sub
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
export const getSub = /* GraphQL */ `
  query GetSub($id: ID!) {
    getSub(id: $id) {
      id
      name
      pricePerMonth
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      siteSubsId
    }
  }
`;
export const listSubs = /* GraphQL */ `
  query ListSubs(
    $filter: ModelSubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pricePerMonth
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        siteSubsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubs = /* GraphQL */ `
  query SyncSubs(
    $filter: ModelSubFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pricePerMonth
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        siteSubsId
      }
      nextToken
      startedAt
    }
  }
`;
