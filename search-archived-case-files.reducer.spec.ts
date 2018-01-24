import { archivedCaseFileData } from './../../../../testing/fixtures/casefile';
import { SearchArchivedCaseFileAction, SearchArchivedCaseFileSuccessAction } from './../../actions/search/search-archived-case-files.actions';
import { archivedCaseFileInitialState } from './search-archived-case-files.reducer';
import { searchArchivedCaseFileReducer } from 'app/store/reducers/search/search-archived-case-files.reducer';

describe('archivedCaseFileSearch: reducer', () => {
    const search = 'surname=spinks&archived=true'

    it('should set loading to true on search query', () => {
        const state = searchArchivedCaseFileReducer(archivedCaseFileInitialState, new SearchArchivedCaseFileAction(search));
        expect(state.loading).toBeTruthy();
        expect(state.error).toBeNull();
        expect(state.query).toEqual(search);
        expect(state.entities.hasMoreItems).toBeFalsy();
        expect(state.entities.numItems).toEqual(0);
        expect(state.entities.results).toEqual([]);
    });

    it('should return a list of archived case files from search query', () => {
        const state = searchArchivedCaseFileReducer(archivedCaseFileInitialState, new SearchArchivedCaseFileSuccessAction(archivedCaseFileData));
        expect(state.entities.results).toEqual(archivedCaseFileData[2]);
    });


});
