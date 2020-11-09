(function() {
    
	var pluginName = 'documentos';

	CKEDITOR.plugins.add(pluginName, {
        lang : 'en,es',
		init : function(editor) {

			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'documentos' ));

			CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/documentos.js' );

			editor.ui.addButton('documentos', {
				label : editor.lang.documentos.label,
				command : pluginName,
				icon : this.path + 'icon.png'
			});
		}
	});
    
})();
