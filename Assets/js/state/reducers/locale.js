import { produce } from 'immer';
import { LOCALE } from '../actions';

const locale = (state = '', action) =>
    produce(state, draft => {
        switch (action.type) { // eslint-disable-line default-case
            case LOCALE: {
                draft.locale = action;
                return;
            }
        }
    });

export default locale;
