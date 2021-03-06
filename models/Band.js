var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Band = new keystone.List('Band', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	defaultSort: '-title',
});

Band.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	author: { type: Types.Relationship, ref: 'User' },
	createdAt: { type: Date, default: Date.now },
	publishedAt: Date,
	image: {
		type: Types.CloudinaryImage,
		publicID: 'slug',
		autoCleanup: true,
	},
	content: {
		description: { type: Types.Text },
		lineup: { type: Types.Text },
		linktext: { type: Types.Text },
		link: { type: Types.Url },
		facebooklink: { type: Types.Url },
		instagramlink: { type: Types.Url },
	},
});

/**
 * Registration
 */
Band.defaultColumns = 'title, createdAt, publishedAt';
Band.register();
