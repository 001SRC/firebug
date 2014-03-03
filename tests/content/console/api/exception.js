function runTest()
{
    FBTest.openNewTab(basePath + "console/api/exception.html", function(win)
    {
        FBTest.openFirebug(function() {
            FBTest.enableConsolePanel(function(win)
            {
                var config = {tagName: "div", classes: "logRow logRow-errorMessage"};
                FBTest.waitForDisplayedElement("console", config, function(row)
                {
                    var reTextContent = new RegExp("ReferenceError: asdf is not defined\\s*asdf.asdf = 1;\\s*" +
                        FW.FBL.$STRF("Line", ["exception.html", 35]).replace(/([\\"'\(\)])/g, "\\$1"));
                    FBTest.compare(reTextContent, row.textContent, "The proper message must be displayed.");
                    FBTest.testDone("console.exception.DONE");
                });

                FBTest.click(win.document.getElementById("testButton"));
            });
        });
    });
}
