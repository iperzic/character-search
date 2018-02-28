class TestStore {
  static createFreshStore() {
    return ({
      app: TestStore.createAppStore(),
      characters: {
        byId: {},
        search: [],
        bookmarks: [],
      },
      metadata: TestStore.createMetadataStore(),
    });
  }

  static createAppStore(searchValue = '', error = '') {
    return ({
      searchValue,
      error,
    });
  }

  static createMetadataStore(offset = 0, count = 0, total = 0) {
    return ({
      count,
      offset,
      total,
    });
  }
}

export default TestStore;
