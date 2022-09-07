sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, MessageToast, JSONModel, History) {
        "use strict";

        return BaseController.extend("sap.sync.practice1.controller.View2", {
            /**
             * onInit 함수 
             * @param
             */
            onInit: function () {
                // 화면제어용 JSONModel 생성
                var oData = {
                   sUrl : '<iframe width="560" height="315" src="https://www.youtube.com/embed/2K4QgW1xLB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "viewModel");
                // this.getModel()
            },

            // onNavBack: function () {
            //     var oHistory = History.getInstance();
            //     var sPreviousHash = oHistory.getPreviousHash();
            //     var oRouter = this.getOwnerComponent().getRouter();

            //     if (sPreviousHash !== undefined) {
            //         window.history.go(-1);
            //     } else {
            //         oRouter.navTo("RouteView1");
            //     }
            // }
        });
    });
