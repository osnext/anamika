/*global Ext:false */
Ext.onReady(function () {
    launchStartupScreen();
});

function launchStartupScreen()
{
    var startingPanel = Ext.create('Ext.panel.Panel', {
        title: 'Starting osnext ...',
        titleAlign: 'center',
        width: 650,
        height: 456,
        border: false,
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        items: [{
            html:'<img src="resources/img/linux-penguin-jedi.jpg" width="650" height="451" />',
            xtype: 'panel'
        }]
    });
    startingPanel.center();
    setTimeout(function() {
        // hide the starting panel.
        startingPanel.hide();
        //launchLoadingScreen();
        launchMostUsedScreen();
    },1000);
}

function launchLoadingScreen()
{
    // now create and launch the booting panel.
    var Runner = function(){
        var f = function(v, pbar, count, cb){
            return function(){
                if(v > count){
                    cb();
                }else{
                    var i = v / count;
                    pbar.updateProgress(i, Math.round(100 * i) + '% completed...');
                }
           };
        };
        return {
            run : function(pbar, count, cb) {
                var ms = 5000 / count;
                for(var i = 1; i < (count + 2); i++) {
                   setTimeout(f(i, pbar, count, cb), i * ms);
                }
            }
        };
    }();

    //==== Progress bars ====
    var pbar1 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar1',
        cls:'left-align'
    });

    var pbar2 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar2',
        cls:'left-align'
    });

    var pbar3 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar3',
        cls:'left-align'
    });

    var pbar4 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar4',
        cls:'left-align'
    });

    var pbar5 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar5',
        cls:'left-align'
    });

    var pbar6 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar6',
        cls:'left-align'
    });

    var pbar7 = Ext.create('Ext.ProgressBar', {
        text:'Loading ...',
        id:'pbar7',
        cls:'left-align'
    });

    var loadingPanel = Ext.create('Ext.panel.Panel', {
        title: 'Loading osnext ...',
        titleAlign: 'center',
        width: 650,
        height: 456,
        border: false,
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            align: 'stretch',
            padding: 5
        },
        items: [
            {
                xtype: 'panel',
                title: 'ui',
                titleAlign: 'center',
                flex: 1,
                items: [
                    pbar1
                ]
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'panel',
                title: 'services',
                titleAlign: 'center',
                flex: 1,
                items: [
                    pbar2
                ]
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'panel',
                title: 'saved content',
                titleAlign: 'center',
                flex: 1,
                items: [
                    pbar3
                ]
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                    padding: 5
                },
                items: [
                    {
                        xtype: 'panel',
                        title: 'clock',
                        titleAlign: 'center',
                        flex: 1,
                        items: [
                            pbar4
                        ]
                    },
                    {
                        xtype: 'splitter'
                    },
                    {
                        xtype: 'panel',
                        title: 'udev',
                        titleAlign: 'center',
                        flex: 1,
                        items: [
                            pbar5
                        ]
                    }
                ]
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'panel',
                title: 'kernel',
                titleAlign: 'center',
                flex: 1,
                items: [
                    pbar6
                ]
            },
            {
                xtype: 'splitter'
            },
            {
                xtype: 'panel',
                items: [
                    pbar7
                ]
            },
        ]
    });
    loadingPanel.center();

    Runner.run(pbar6, 12, function() {
        var i = 1 / 5;
        pbar6.updateText('Done.');
        pbar7.updateProgress(i, Math.round(100 * i) + '% completed...');

        Runner.run(pbar5, 6, function() {
            pbar5.updateText('Done.');
        });

        Runner.run(pbar4, 6, function() {
            pbar4.updateText('Done.');
            i = 2 / 5;
            pbar7.updateProgress(i, Math.round(100 * i) + '% completed...');

            Runner.run(pbar3, 8, function() {
                pbar3.updateText('Done.');
                i = 3 / 5;
                pbar7.updateProgress(i, Math.round(100 * i) + '% completed...');

                Runner.run(pbar2, 7, function() {
                    pbar2.updateText('Done.');
                    i = 4 / 5;
                    pbar7.updateProgress(i, Math.round(100 * i) + '% completed...');

                    Runner.run(pbar1, 20, function() {
                        pbar1.updateText('Done.');
                        i = 5 / 5;
                        pbar7.updateProgress(i, Math.round(100 * i) + '% completed...');

                        loadingPanel.hide();
                        launchMostUsedScreen();
                    });
                });
            });
        });
    });
}

function launchMostUsedScreen()
{
    var windowHeight = 200;
    var windowWidth = 220;
    var x = 50;
    var y = 50;
    var spacing = 10;

    Ext.create('Ext.data.Store', {
        storeId: 'mostUsedApps',
        fields: ['appname', 'lastused'],
        data: [{
            appname: "App1",
            lastused: "01/10/2004"
        }, {
            appname: "App2",
            lastused: "02/10/2004"
        }, {
            appname: "App3",
            lastused: "03/10/2004"
        }, {
            appname: "App4",
            lastused: "04/10/2004"
        }, {
            appname: "App5",
            lastused: "05/10/2004"
        }]
    });

    Ext.create('Ext.data.Store', {
        storeId: 'mostUsedContent',
        fields: ['contentname', 'lastused'],
        data: [{
            contentname: "abc.xls",
            lastused: "01/10/2004"
        }, {
            contentname: "data.db",
            lastused: "02/10/2004"
        }, {
            contentname: "todo.txt",
            lastused: "03/10/2004"
        }, {
            contentname: "blah.ppt",
            lastused: "04/10/2004"
        }, {
            contentname: "book.pdf",
            lastused: "05/10/2004"
        }]
    });

    Ext.create('Ext.data.Store', {
        storeId: 'mostUsedTags',
        fields: ['tagname', 'lastused'],
        data: [{
            tagname: "Personal/proj1",
            lastused: "01/10/2004"
        }, {
            tagname: "Office/docsX",
            lastused: "02/10/2004"
        }, {
            tagname: "kids/pics",
            lastused: "03/10/2004"
        }, {
            tagname: "travel/vegas",
            lastused: "04/10/2004"
        }, {
            tagname: "travel/nyc",
            lastused: "05/10/2004"
        }]
    });

    Ext.create('Ext.window.Window', {
        title: 'Apps',
        height: windowHeight,
        width: windowWidth,
        x: x,
        y: y,
        layout: 'fit',
        items: {
            xtype: 'grid',
            border: false,
            columns: [{
                text: 'Name',
                dataIndex: 'appname'
            },
            {
                text: 'Last Used',
                dataIndex: 'lastused'
            }
            ],
            store: Ext.data.StoreManager.lookup('mostUsedApps')
        }
    }).show();

    x = x + windowWidth + spacing;
    Ext.create('Ext.window.Window', {
        title: 'Content',
        height: windowHeight,
        width: windowWidth,
        x: x,
        y: y,
        layout: 'fit',
        items: {
            xtype: 'grid',
            border: false,
            columns: [{
                text: 'Name',
                dataIndex: 'contentname'
            },
            {
                text: 'Last Used',
                dataIndex: 'lastused'
            }
            ],
            store: Ext.data.StoreManager.lookup('mostUsedContent')
        }
    }).show();

    x = x + windowWidth + spacing;
    Ext.create('Ext.window.Window', {
        title: 'Tags',
        height: windowHeight,
        width: windowWidth,
        x: x,
        y: y,
        layout: 'fit',
        items: {
            xtype: 'grid',
            border: false,
            columns: [{
                text: 'Name',
                dataIndex: 'tagname'
            },
            {
                text: 'Last Used',
                dataIndex: 'lastused'
            }
            ],
            store: Ext.data.StoreManager.lookup('mostUsedTags')
        }
    }).show();
}
