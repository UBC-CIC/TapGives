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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($IDNumber: ID!) {
    getCustomer(IDNumber: $IDNumber) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $IDNumber: ID
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      IDNumber: $IDNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        IDNumber
        siteID
        site {
          id
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
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVisit = /* GraphQL */ `
  query GetVisit($id: ID!) {
    getVisit(id: $id) {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const listVisits = /* GraphQL */ `
  query ListVisits(
    $id: ID
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVisits(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        customerID
        siteID
        timeStamp
        createdAt
        updatedAt
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
        IDNumber
        siteID
        site {
          id
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
      nextToken
    }
  }
`;
export const visitByCustomerID = /* GraphQL */ `
  query VisitByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        siteID
        timeStamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const visitBySite = /* GraphQL */ `
  query VisitBySite(
    $siteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitBySite(
      siteID: $siteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        siteID
        timeStamp
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
