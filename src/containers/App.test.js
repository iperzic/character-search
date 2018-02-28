import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import App from './App';
import testStore from '../test-support/testStore';

describe('App', () => {
  let store;

  describe('when the there is no search query', () => {

    describe('and there is no bookmarks', () => {
      beforeEach(() => {
        store = configureStore()(testStore.createFreshStore());
      });

      it('should show empty search input and empty grid', () => {
        const appContainer = shallow(<App store={store} />).dive();

        expect(appContainer.getElement()).toMatchSnapshot();
      });
    });

    describe('and bookmarks exist', () => {
      beforeEach(() => {
        const id = 123;
        const byId = { [id]: { id, name: 'Deadpool', image: 'some-image.jpg' } };
        const characters = testStore.createCharacterStore(byId, undefined, [id]);
        const metadata = testStore.createMetadataStore();
        const app = testStore.createAppStore();
        store = configureStore()({ characters, metadata, app });
      });

      it('should show empty search input and grid with bookmarks', () => {
        const appContainer = shallow(<App store={store} />).dive();

        expect(appContainer.getElement()).toMatchSnapshot();
      });
    });
  });

  describe('when the search query is set', () => {
    beforeEach(() => {
      const id = 123;
      const byId = { [id]: { id, name: 'Deadpool', image: 'some-image.jpg' } };
      const characters = testStore.createCharacterStore(byId, [id]);
      const metadata = testStore.createMetadataStore();
      const app = testStore.createAppStore('Deadpool');
      store = configureStore()({ characters, metadata, app });
    });

    it('should show search input and grid with fetched characters', () => {
      const appContainer = shallow(<App store={store} />).dive();

      expect(appContainer.getElement()).toMatchSnapshot();
    });
  });

  describe('when the data is being fetched', () => {
    beforeEach(() => {
      const characters = testStore.createCharacterStore();
      const metadata = testStore.createMetadataStore();
      const app = testStore.createAppStore(undefined, undefined, true);
      store = configureStore()({ characters, metadata, app });
    });

    it('should show loading screen', () => {
      const appContainer = shallow(<App store={store} />).dive();

      expect(appContainer.getElement()).toMatchSnapshot();
    });
  })
});
