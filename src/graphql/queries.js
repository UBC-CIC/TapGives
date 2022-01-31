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
      siteSubscriptionID
      siteSubscription {
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
        softCapVisits
        createdAt
        updatedAt
        siteSiteSubscriptionId
      }
      validSubscription
      pin
      phoneNumber
      name
      createdAt
      updatedAt
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
        }
        siteSubscriptionID
        siteSubscription {
          id
          siteID
          pricePerMonth
          name
          softCapVisits
          createdAt
          updatedAt
          siteSiteSubscriptionId
        }
        validSubscription
        pin
        phoneNumber
        name
        createdAt
        updatedAt
        customerSiteSubscriptionId
      }
      nextToken
    }
  }
`;
export const getSiteSubscription = /* GraphQL */ `
  query GetSiteSubscription($id: ID!) {
    getSiteSubscription(id: $id) {
      id
      siteID
      pricePerMonth
      site {
        id
        siteSubscription {
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
      softCapVisits
      createdAt
      updatedAt
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
        softCapVisits
        createdAt
        updatedAt
        siteSiteSubscriptionId
      }
      nextToken
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
          pricePerMonth
          name
          softCapVisits
          createdAt
          updatedAt
          siteSiteSubscriptionId
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
      phrase
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
        phrase
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
