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

        return BaseController.extend("sap.sync.practice1.controller.View4", {
            /**
             * onInit 함수 
             * @param
             */
            onInit: function () {
                // 화면제어용 JSONModel 생성
                var oData = {
                    bEditable   : true,
                    bEnabled    : true,
                    bBusy       : false,    //이게 false라서 이것만 처음에 꺼진상태로나오는거
                    bVisible    : true,
                    check : {
                        bEditable   : true,
                        bEnabled    : true,
                        bBusy       : true,
                        bVisible    : true,
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "view");
                
            },

            // 이벤트 호출 함수들은 객체의 이벤트로 함수가 호출되면 첫번째 파라미터에
            // 이벤트 객체가 전달됨
            onSubmit: function (oEVent) {
                MessageToast.show("submit 이벤트");
                // 사용자가 인풋에 커서가 있을때 Enter 키를 누르면 발동
            },

            onChange: function(oEVent) {
                MessageToast.show("change 이벤트");
                // (전제조건) 값이 변경되서 나서
                // Enter or 커서가 인풋창을 빠져 나갈때
            },

            onLiveChange: function(oEVent) {
                MessageToast.show("liveChange 이벤트");
                // 값이 수정될 때마다 발동
            }

        });
    });
