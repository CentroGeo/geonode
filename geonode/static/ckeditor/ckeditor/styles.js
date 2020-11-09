/**
 * Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

CKEDITOR.stylesSet.add( 'default', [
	/* Block Styles */

	// These styles are already available in the "Format" combo ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' },
	*/

	{ name: 'Titulo', element: 'p', attributes: { 'class': 'narTitle' } },
	{ name: 'Subtitulo', element: 'p', attributes: { 'class': 'narStitle' } },
	{ name: 'Parrafo', element: 'p', attributes: { 'class': 'narStext' } },
	{ name: 'Cita', element: 'p', attributes: { 'class': 'narCite' } },
	{ name: 'Link', element: 'span', attributes: { 'class': 'narToolip'} },
    { name: 'Inner link', element: 'span', attributes: { 'class': 'narTooliptext' } },

	// { name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },
	// { name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
	{
		name: 'Titulo con fondo 1',
		element: 'h3',
		attributes: { 'class': 'sectionline1' }
	},
	{
		name: 'Titulo con fondo 2',
		element: 'h3',
		attributes: { 'class': 'sectionline2' }
	},
	{
		name: 'Titulo con fondo 3',
		element: 'h3',
		attributes: { 'class': 'sectionline3' }
	},
	{
		name: 'Seccion 1',
		element: 'div',
		attributes: { 'class': 'sectionwhite' }
	},
	{
		name: 'Contenido especial 1',
		element: 'div',
		attributes: { 'class': 'highlight1' }
	},
	{
		name: 'Contenido especial 2',
		element: 'div',
		attributes: { 'class': 'highlight2' }
	}

	// /* Inline Styles */

	// // These are core styles available as toolbar buttons. You may opt enabling
	// // some of them in the Styles combo, removing them from the toolbar.
	// // (This requires the "stylescombo" plugin)
	// /*
	// { name: 'Strong',			element: 'strong', overrides: 'b' },
	// { name: 'Emphasis',			element: 'em'	, overrides: 'i' },
	// { name: 'Underline',		element: 'u' },
	// { name: 'Strikethrough',	element: 'strike' },
	// { name: 'Subscript',		element: 'sub' },
	// { name: 'Superscript',		element: 'sup' },
	// */

	// { name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },

	// { name: 'Big',				element: 'big' },
	// { name: 'Small',			element: 'small' },
	// { name: 'Typewriter',		element: 'tt' },

	// { name: 'Computer Code',	element: 'code' },
	// { name: 'Keyboard Phrase',	element: 'kbd' },
	// { name: 'Sample Text',		element: 'samp' },
	// { name: 'Variable',			element: 'var' },

	// { name: 'Deleted Text',		element: 'del' },
	// { name: 'Inserted Text',	element: 'ins' },

	// { name: 'Cited Work',		element: 'cite' },
	// { name: 'Inline Quotation',	element: 'q' },

	// { name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
	// { name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },

	// /* Object Styles */

	// {
	// 	name: 'Styled image (left)',
	// 	element: 'img',
	// 	attributes: { 'class': 'left' }
	// },

	// {
	// 	name: 'Styled image (right)',
	// 	element: 'img',
	// 	attributes: { 'class': 'right' }
	// },

	// {
	// 	name: 'Compact table',
	// 	element: 'table',
	// 	attributes: {
	// 		cellpadding: '5',
	// 		cellspacing: '0',
	// 		border: '1',
	// 		bordercolor: '#ccc'
	// 	},
	// 	styles: {
	// 		'border-collapse': 'collapse'
	// 	}
	// },

	// { name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	// { name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' } }
] );

