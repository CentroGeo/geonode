/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbar = 'MyToolbar';
 
	config.toolbar_MyToolbar =
	[
		{ name: 'styles', items : [ 'Styles', '-', 'Bold', 'Italic' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
		{ name: 'links', items : [ 'Link','Unlink' ] },
		{ name: 'insert', items : [ 'Image','Table','Iframe','Youtube' ] },
		{ name: 'geonode', items : [ 'mapa','documentos','references' ] },
		{ name: 'editing', items : [ 'Scayt' ] },
		{ name: 'document', items : [ 'Source','Preview' ] },
		{ name: 'tools', items : [ 'Maximize' ] }
	];
};
