(function() {
	CKEDITOR.dialog.add("mapa", function(d) {
		var h = CKEDITOR.plugins.link,
			e = !1,
			j = function(a) {
				var c = new Image;
				c.onload = function() {
					e = !0;
				};
				c.onerror = function() {
					e = !1
				};
				c.src = a
			},
			g = d.lang.common,
			i = d.lang.link;
		return {
			title: "Composición",
			minWidth: 150,
			minHeight: 80,
			contents: [{
				id: "info",
				label: i.info,
				title: i.info,
				elements: [{
					type: "vbox",
					id: "urlOptions",
					children: [{
						type: "hbox",
						widths: ["15%", "55%"],
						children: [{
							type: "text",
							id: "url",
							hidden: true,
							label: d.lang.mapa.url,
							required: !0,
							onLoad: function() {
								this.allowOnChange = !0
							},
							onKeyUp: function() {
								this.allowOnChange = !1;
								var a = this.getValue();
								/^((javascript:)|[#\/\.\?])/i.test(a);
								j(a);
								this.allowOnChange = !0
							},
							onChange: function() {
								if (this.allowOnChange) this.onKeyUp()
							},
							setup: function(a) {
								this.allowOnChange = !1;
								a.url && this.setValue(a.url.url);
								this.allowOnChange = !0
							},
							commit: function(a) {
								this.onChange();
								a.type = "url";
								a.url || (a.url = {});
								a.url.protocol = "";
								a.url.url = this.getValue();
								this.allowOnChange = !1
							}
						}],
						setup: function() {
							this.getDialog().getContentElement("info", "linkType") || this.getElement().show()
						}
					}, {
						type: "button",
						id: "browse",
						hidden: "true",
						filebrowser: {
							action: "Browse",
							target: "info:url",
							url: "/ms/maps/"
						},
						label: "Agregar Mapa"
					},
					{
						id : 'fWindow',
						type : 'checkbox',
						'default' : false,
						label : "Modo pantalla completa"
					}]
				}]
			}],
			onShow: function() {
				var a = this.getParentEditor(),
					c = a.getSelection(),
					b = null;
				(b = h.getSelectedLink(a)) && b.hasAttribute("href") ? c.getSelectedElement() || c.selectElement(b) : b = null;
				a = h.parseLinkAttributes(a, b);
				this._.selectedElement = b;
				e = !0;
				this.setupContent(a)
			},
			onOk: function() {
    			var res = {};
    			var mapid = {};
    			var style_class = 'iframe-nw';
				var a = {};
				this.commitContent(a);
				var c = d.getSelection(),
					b = h.getLinkAttributes(d, a);
				var e = b.set;
				mapid = a.url.url.split("/maps/")[1];
				mapid = mapid.split("/")[0];
				res = a.url.url;
				if ( this.getContentElement( 'info', 'fWindow' ).getValue() === true )
				{
					b.set["class"] = "iframe-fw";
					style_class = 'iframe-fw';
				}
				this._.selectedElement ? (
					a = this._.selectedElement,
					e = a.data("cke-saved-href"),
					f = a.getHtml(),
					a.setAttributes(b.set),
					a.removeAttributes(b.removed),
					e == f && (a.setHtml(b.set["data-cke-saved-href"]), c.selectElement(a)),
					delete this._.selectedElement
				) : (
					c = c.getRanges()[0],
					c.collapsed && (a = new CKEDITOR.dom.element("iframe"), a.setAttribute( 'class', style_class), a.setAttribute( 'width', 900), a.setAttribute( 'height', 600), a.setAttribute( 'src', res), c.insertNode(a), c.selectNodeContents(a)),
					b = new CKEDITOR.style({element: "div", attributes: b.set }),
					b.type = CKEDITOR.STYLE_INLINE,
					b.applyToRange(c, d),
					c.select()
				)
			}
		}
	})
})();