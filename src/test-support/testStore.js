class TestStore {
  static createFreshStore() {
    return ({
      app: TestStore.createAppStore(),
      characters: TestStore.createCharacterStore(),
      metadata: TestStore.createMetadataStore(),
    });
  }

  static createAppStore(searchValue = '', error = '') {
    return ({
      searchValue,
      error,
    });
  }

  static createCharacterStore(byId = {}, search = [], bookmarks = []) {
    return ({
      byId,
      search,
      bookmarks,
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
