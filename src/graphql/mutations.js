/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSiteManager = /* GraphQL */ `
  mutation CreateSiteManager(
    $input: CreateSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    createSiteManager(input: $input, condition: $condition) {
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
export const updateSiteManager = /* GraphQL */ `
  mutation UpdateSiteManager(
    $input: UpdateSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    updateSiteManager(input: $input, condition: $condition) {
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
export const deleteSiteManager = /* GraphQL */ `
  mutation DeleteSiteManager(
    $input: DeleteSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    deleteSiteManager(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createSiteSubscription = /* GraphQL */ `
  mutation CreateSiteSubscription(
    $input: CreateSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    createSiteSubscription(input: $input, condition: $condition) {
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
export const updateSiteSubscription = /* GraphQL */ `
  mutation UpdateSiteSubscription(
    $input: UpdateSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    updateSiteSubscription(input: $input, condition: $condition) {
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
export const deleteSiteSubscription = /* GraphQL */ `
  mutation DeleteSiteSubscription(
    $input: DeleteSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    deleteSiteSubscription(input: $input, condition: $condition) {
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
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      id
      language
      createdAt
      updatedAt
    }
  }
`;
export const createPhrase = /* GraphQL */ `
  mutation CreatePhrase(
    $input: CreatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    createPhrase(input: $input, condition: $condition) {
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
export const updatePhrase = /* GraphQL */ `
  mutation UpdatePhrase(
    $input: UpdatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    updatePhrase(input: $input, condition: $condition) {
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
export const deletePhrase = /* GraphQL */ `
  mutation DeletePhrase(
    $input: DeletePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    deletePhrase(input: $input, condition: $condition) {
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
