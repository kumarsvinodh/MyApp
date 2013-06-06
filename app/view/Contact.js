Ext.define("MyApp.view.Contact",{
	extend:'Ext.form.Panel',
	xtype:'contactform',
	
	config:{
		title:'Contact Us',
		iconCls:'user',
		url:'contact.php',
		items:[
			{
				xtype:'fieldset',
				title:'Contact Us',
				instructions:'(Email address can be blank)',
				items:[
							{
								xtype:'textfield',
								name:'name',
								label:'Name',
							},
							{
								xtype:'emailfield',
								name:'email',
								label:'Email'
							},
							{
								xtype:'textareafield',
								name:'message',
								label:'Message'
							}
						]
			},
			{
				xtype:'button',
				text:'Send',
				ui:'confirm',
				handler:function(){
					this.up('contactform').submit();
				}
			}
		]
	}
});