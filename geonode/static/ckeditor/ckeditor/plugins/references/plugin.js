(function() {
    
	var pluginName = 'references';

	CKEDITOR.plugins.add(pluginName, {
        lang : 'en,es',
		init : function(editor) {

			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'references' ));

			CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/references.js' );

			editor.ui.addButton('references', {
				label : editor.lang.references.label,
				command : pluginName,
				icon : this.path + 'icon.png'
			});
		}
	});
    
})();
