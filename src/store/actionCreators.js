import * as constants from './constants';
import axios from 'axios';

export const fetchHotForums = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forums.json');

		const forums = res.data.filter(
			(forum) => forum.subscriptionCount > 180000
		);

		dispatch(setHotForums(forums));
	};
};

const setHotForums = (hotForums) => ({
	type: constants.SET_HOT_FORUMS,
	hotForums,
});

export const fetchFeaturedForums = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forums.json');

		const forums = res.data.filter(
			(forum) =>
				forum.subscriptionCount > 140000 &&
				forum.subscriptionCount <= 180000
		);

		dispatch(setFeaturedForums(forums));
	};
};

const setFeaturedForums = (featuredForums) => ({
	type: constants.SET_FEATURED_FORUMS,
	featuredForums,
});

export const fetchHotPosts = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/hotPosts.json');

		dispatch(setHotPosts(res.data));
	};
};

const setHotPosts = (hotPosts) => ({
	type: constants.SET_HOT_POSTS,
	hotPosts,
});

export const fetchCurrentForum = (currentForumAlias) => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forums.json');

		const currentForum = res.data.find((forum) => {
			return forum.alias === currentForumAlias;
		});

		dispatch(setCurrentForum(currentForum));
	};
};

export const setCurrentForum = (currentForum) => ({
	type: constants.SET_CURRENT_FORUM,
	currentForum,
});

export const fetchForumPosts = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/posts.json');

		dispatch(setForumPosts(res.data));
	};
};

const setForumPosts = (forumPosts) => ({
	type: constants.SET_FORUM_POSTS,
	forumPosts,
});

export const fetchCategories = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forumsCategory.json');

		dispatch(setCategories(res.data));
	};
};

const setCategories = (categories) => ({
	type: constants.SET_CATEGORIES,
	categories,
});

export const fetchForums = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forums.json');

		dispatch(setForums(res.data));
	};
};

const setForums = (forums) => ({
	type: constants.SET_FORUMS,
	forums,
});
