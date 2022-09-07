sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, History) {
        "use strict";

        return Controller.extend("sap.sync.practice1.controller.View2", {
            /**
             * onInit 함수 
             * @param
             */
            onInit: function () {
                // 화면제어용 JSONModel 생성
                var oData = {
                    sUrl : '<iframe width="560" height="315" src="https://www.youtube.com/embed/k67vx_s5bsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                };  // JSONModel 내용을 객체변수로 먼저 선언
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "viewModel");
                    // "viewModel"-JSONModel을 View와 연결
                    // MVC pattern 의 진짜 [Model] 로 사용가능해짐

            },

            onNavBack: function() {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                var oRouter = this.getOwnerComponent().getRouter();

                if(sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    oRouter.navTo("RouteView1");
                }
            }
        });
    });
