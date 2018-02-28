class TestStore {
  static createDefaultAppStore() {
    return ({
      searchValue: '',
      error: '',
    });
  }

  static createQueriedAppStore(value) {
    return ({
      searchValue: value,
      error: '',
    });
  }

  static createErroredAppStore(error) {
    return ({
      searchValue: '',
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
