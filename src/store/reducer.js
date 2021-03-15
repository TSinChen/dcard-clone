import * as constants from './constants';

const defaultState = {
	hotForums: [],
	featuredForums: [],
	currentTag: {
		home: '熱門',
	},
	hotPosts: [],
	forumPosts: [],
	currentForum: {},
	categories: [],
	forums: [],
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
		case constants.SET_FORUM_POSTS:
			return {
				...state,
				forumPosts: action.forumPosts,
			};
		case constants.SET_CURRENT_FORUM:
			return {
				...state,
				currentForum: action.currentForum,
			};
		case constants.SET_CATEGORIES:
			return {
				...state,
				categories: action.categories,
			};
		case constants.SET_FORUMS:
			return {
				...state,
				forums: action.forums,
			};
		default:
			return state;
	}
};
