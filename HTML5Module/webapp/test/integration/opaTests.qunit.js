/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["com/managedhtml5userapiforcf-ui/test/integration/AllJourneys"],
    function () {
      QUnit.start();
    }
  );
});
