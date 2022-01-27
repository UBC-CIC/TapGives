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
export const createSiteSubscription = /* GraphQL */ `
  mutation CreateSiteSubscription(
    $input: CreateSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    createSiteSubscription(input: $input, condition: $condition) {
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
export const updateSiteSubscription = /* GraphQL */ `
  mutation UpdateSiteSubscription(
    $input: UpdateSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    updateSiteSubscription(input: $input, condition: $condition) {
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
export const deleteSiteSubscription = /* GraphQL */ `
  mutation DeleteSiteSubscription(
    $input: DeleteSiteSubscriptionInput!
    $condition: ModelSiteSubscriptionConditionInput
  ) {
    deleteSiteSubscription(input: $input, condition: $condition) {
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
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
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
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
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
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
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
export const createPhrase = /* GraphQL */ `
  mutation CreatePhrase(
    $input: CreatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    createPhrase(input: $input, condition: $condition) {
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
export const updatePhrase = /* GraphQL */ `
  mutation UpdatePhrase(
    $input: UpdatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    updatePhrase(input: $input, condition: $condition) {
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
export const deletePhrase = /* GraphQL */ `
  mutation DeletePhrase(
    $input: DeletePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    deletePhrase(input: $input, condition: $condition) {
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
