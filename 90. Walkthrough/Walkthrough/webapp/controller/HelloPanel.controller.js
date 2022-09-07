sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      
      // pDialog : {},
      
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },

      onOpenDialog : function() {
         // create dialog lazily
			if (!this.pDialog) { // ! 논리식 반전
            // new Fragment (X)
            // "sap/ui/core/Fragment" <- loadFragment() 메소드 사용가능
				this.pDialog = this.loadFragment({
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
      },

      onCloseDialog : function() {
         console.log(this);
         // this.pDialog.close(); != Dialog 객체가 아님
         this.byId("helloDialog").close();
      }
   });
});