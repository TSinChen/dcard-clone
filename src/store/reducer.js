import * as constants from './constants';

const defaultState = {
	hotForums: [],
	featuredForums: [],
	currentTag: {
		home: '熱門',
	},
	hotPosts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.SET_HOT_FORUMS:
			return {
				...state,
				hotForums: action.hotForums,
			};
		case constants.SET_FEATURED_FORUMS:
			return {
				...state,
				featuredForums: action.featuredForums,
			};
		case constants.SET_HOT_POSTS:
			return {
				...state,
				hotPosts: action.hotPosts,
			};
		default:
			return state;
	}
};
