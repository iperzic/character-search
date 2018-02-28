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
}

export default TestStore;
