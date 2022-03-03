/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSiteManager = /* GraphQL */ `
  query GetSiteManager($id: ID!, $siteID: ID!) {
    getSiteManager(id: $id, siteID: $siteID) {
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
        avgWaitMinute
        avgLineCount
        status
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
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
      nextToken
    }
  }
`;
export const siteManagerByID = /* GraphQL */ `
  query SiteManagerByID(
    $id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    siteManagerByID(
      id: $id
      sortDirection: $sortDirection
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
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
      nextToken
    }
  }
`;
export const siteManagerBySite = /* GraphQL */ `
  query SiteManagerBySite(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    siteManagerBySite(
      siteID: $siteID
      sortDirection: $sortDirection
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
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      governmentID
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
        avgWaitMinute
        avgLineCount
        status
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
      preferredLanguage
      subscriptionExpiration
      createdAt
      updatedAt
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
        governmentID
        siteID
        site {
          id
          name
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
        preferredLanguage
        subscriptionExpiration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerByGovernmentID = /* GraphQL */ `
  query CustomerByGovernmentID(
    $governmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByGovernmentID(
      governmentID: $governmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        governmentID
        siteID
        site {
          id
          name
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
        preferredLanguage
        subscriptionExpiration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerBySite = /* GraphQL */ `
  query CustomerBySite(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerBySite(
      siteID: $siteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        governmentID
        siteID
        site {
          id
          name
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
        preferredLanguage
        subscriptionExpiration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerByPhoneNumber = /* GraphQL */ `
  query CustomerByPhoneNumber(
    $phoneNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByPhoneNumber(
      phoneNumber: $phoneNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        governmentID
        siteID
        site {
          id
          name
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
        preferredLanguage
        subscriptionExpiration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerByFirstName = /* GraphQL */ `
  query CustomerByFirstName(
    $firstName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByFirstName(
      firstName: $firstName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        governmentID
        siteID
        site {
          id
          name
          nickname
          description
          serviceRadius
          latitude
          longitude
          avgWaitMinute
          avgLineCount
          status
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
        preferredLanguage
        subscriptionExpiration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
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
      avgWaitMinute
      avgLineCount
      status
      subscriptionFee
      expectedJerrycans
      createdAt
      updatedAt
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
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        avgWaitMinute
        avgLineCount
        status
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      id
      language
      createdAt
      updatedAt
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
        language
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhrase = /* GraphQL */ `
  query GetPhrase($id: ID!, $languageID: ID!) {
    getPhrase(id: $id, languageID: $languageID) {
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
export const listPhrases = /* GraphQL */ `
  query ListPhrases(
    $id: ID
    $languageID: ModelIDKeyConditionInput
    $filter: ModelPhraseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPhrases(
      id: $id
      languageID: $languageID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const phraseByLanguage = /* GraphQL */ `
  query PhraseByLanguage(
    $languageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPhraseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    phraseByLanguage(
      languageID: $languageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomerTransactions = /* GraphQL */ `
  query GetCustomerTransactions($id: ID!) {
    getCustomerTransactions(id: $id) {
      id
      userPhoneNumber
      fullName
      siteName
      siteID
      action
      collectedJerryCans
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerTransactions = /* GraphQL */ `
  query ListCustomerTransactions(
    $id: ID
    $filter: ModelCustomerTransactionsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomerTransactions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userPhoneNumber
        fullName
        siteName
        siteID
        action
        collectedJerryCans
        timeStamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerTransactionByPhoneNumber = /* GraphQL */ `
  query CustomerTransactionByPhoneNumber(
    $userPhoneNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerTransactionByPhoneNumber(
      userPhoneNumber: $userPhoneNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userPhoneNumber
        fullName
        siteName
        siteID
        action
        collectedJerryCans
        timeStamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerTransactionBySite = /* GraphQL */ `
  query CustomerTransactionBySite(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerTransactionBySite(
      siteID: $siteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userPhoneNumber
        fullName
        siteName
        siteID
        action
        collectedJerryCans
        timeStamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
