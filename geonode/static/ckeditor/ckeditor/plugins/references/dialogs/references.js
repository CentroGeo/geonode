(function() {
	CKEDITOR.dialog.add("references", function(d) {
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
			title: "Referencias Modal",
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
							url: "/references/admin/list/"
						},
						label: "Seleccionar Referencia"
					},
					{
						id : 'newWindow',
						type : 'checkbox',
						'default' : false,
						label : "Abrir en nueva pestaña"
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
				var a = {};
				this.commitContent(a);
				var c = d.getSelection(),
					b = h.getLinkAttributes(d, a);
				var e = b.set;
				var str = a.url.url.split("?t=")[1];
				str = str.split("#")[0];
				b.set["title"] = 'Referencia: ' + str;
				b.set["target"] = "_blank";
				if ( this.getContentElement( 'info', 'newWindow' ).getValue() === false )
				{
					b.set["data-toggle"] = "modal";
					b.set["data-target"] = "#modal-ref";
					b.set["class"] = 'btn-modal';
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
					url = a.url.url,
					c.collapsed && (a = new CKEDITOR.dom.element("p"), a.appendText( decodeURIComponent(escape(str)) ), c.insertNode(a), c.selectNodeContents(a)),
					b = new CKEDITOR.style({element: "a", attributes: b.set }),
					b.type = CKEDITOR.STYLE_INLINE,
					b.applyToRange(c, d),
					c.select()
				)
			}
		}
	})
})();