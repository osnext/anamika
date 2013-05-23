/*global Ext:false */
Ext.onReady(function () {
    var resultsPanel = Ext.create('Ext.panel.Panel', {
        //title: 'Starting osnext',
        //titleAlign: 'center',
        width: 650,
        height: 406,
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            // Arrange child items vertically
            align: 'stretch',
            // Each takes up full width
            //padding: 5
        },
        items: [{ // Results grid specified as a config object with an xtype of 'grid'
            html:'<img src="resources/img/linux-penguin-jedi.jpg" width="650" height="406" />',
            xtype: 'panel'
        }]
    });
    resultsPanel.center();
});
