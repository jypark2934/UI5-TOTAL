// sap.ui.define([
//     "sap/ui/core/UIComponent"
//  ], function (UIComponent) {
//     "use strict";
//     return UIComponent.extend("", {
//         // init 어플리케이션(프로그램)이 구동될 때 최초로 1회 수행하는 펑션 
//        init : function () {
//           // call the init function of the parent
//           UIComponent.prototype.init.apply(this, arguments);
//        }
//     });
//  });

sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"

      },
      init: function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient: {
               name: "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // create the views based on the url/hash
         this.getRouter().initialize();
      }
   });
});
