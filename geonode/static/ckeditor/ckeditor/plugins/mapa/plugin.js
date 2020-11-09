(function() {
    
	var pluginName = 'mapa';

	CKEDITOR.plugins.add(pluginName, {
        lang : 'en,es',
		init : function(editor) {

			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'mapa' ));

			CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/mapa.js' );

			editor.ui.addButton('mapa', {
				label : editor.lang.mapa.label,
				command : pluginName,
				icon : this.path + 'icon.png'
			});
		}
	});
    
})();