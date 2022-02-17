/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSiteManager = /* GraphQL */ `
  query GetSiteManager($id: ID!, $siteID: ID!) {
    getSiteManager(id: $id, siteID: $siteID) {
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
      nextToken
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        siteSiteManagersId
      }
      nextToken
    }
  }
`;
export const customerByID = /* GraphQL */ `
  query CustomerByID(
    $id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByID(
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
        siteID
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
      nextToken
    }
  }
`;
export const customerBySiteSubscription = /* GraphQL */ `
  query CustomerBySiteSubscription(
    $siteSubscriptionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerBySiteSubscription(
      siteSubscriptionID: $siteSubscriptionID
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
