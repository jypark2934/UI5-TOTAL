sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        // onInit : function() { // 초기환경구성 - UI5 구조 상 화면이 실행될때 최초 1번 수행하는 펑션
        //     var oData = {
        //         recipient : {
        //            name : "World"
        //         }
        //     };
        //     var oModel = new JSONModel(oData);

        //     this.getView().setModel(oModel); // MVC pattern 의 Model 로 사용가능

        //     // set i18n model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
        //     }); // ResourceModel 은 i18n 다국어모델을 위해서 주로 사용
        //         // 실제로는 이렇게 직접 리소스모델을 생성하지 않고 manifest.json 에 세팅
        //     this.getView().setModel(i18nModel, "i18n");
        // },

        // onShowHello : function () {
        //     // read msg from i18n model
        //     var oBundle = this.getView().getModel("i18n").getResourceBundle();
        //     // sRecipient - JSONModel 의 /recipient/name 값을 읽어옴
        //     var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //     var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //     // show message
        //     MessageToast.show(sMsg);
        // }
    });
 });