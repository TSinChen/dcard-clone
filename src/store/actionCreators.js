import * as constants from './constants';
import axios from 'axios';

export const fetchHotForums = () => {
	return async (dispatch) => {
		const res = await axios.get('/apis/forums.json');

		const forums = res.data.filter(
			(forum) => forum.subscriptionCount > 200000
		);

		if (forums.length > 8) {
			forums.splice(8);
		}

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
				forum.subscriptionCount <= 200000
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

		const posts = res.data;

		dispatch(setHotPosts(posts));
	};
};

const setHotPosts = (hotPosts) => ({
	type: constants.SET_HOT_POSTS,
	hotPosts,
});
