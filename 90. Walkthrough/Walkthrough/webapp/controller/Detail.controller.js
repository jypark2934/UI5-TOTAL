sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {   // onInit은 화면이 구현될 때 최초 1회만 구동
			var oRouter = this.getOwnerComponent().getRouter();
            // 매번 이 화면(경로)에 접근할 때마다 실행할 펑션을 세팅
			// oRouter.getRoute("detailName").attachPatternMatched(this._onObjectMatched, this);
            // 1-이 화면을 띄우는 루트 객체
            var oThisRoute = oRouter.getRoute("detailName");
            // 2-sap.ui.core.routing.Route 의 이벤트 patternMatched 에 펑션기능 추가
            // 이 이벤트에 우리가 화면에 들어올 때마다 실행시키고 싶은 펑션을 추가해줌
            oThisRoute.attachPatternMatched(this._onObjectMatched, this);
            // (추가할 펑션 , 그 펑션의 위치)

		},
        // patternMatched 이벤트에 등록한 함수, 이벤트 객채가 첫번째 파라미터로 들어옴
        // 이 함수는 이 경로에 들어올 때마다 동작함
        // (= 직접 onInit 같이 특정조건(화면에 들어올때마다)에서 자동으로 수행되게 만듬)
		_onObjectMatched: function (oEvent) {
            var oArg = oEvent.getParameter("arguments");
            var sPath = window.decodeURIComponent(oArg.invoicePath);
			this.getView().bindElement({
				path: "/" + sPath,
				model: "invoice"
			});
			console.log(this.getView().getModel("invoice"))
		},

        onNavBack: function () {
            // 라우팅 기록을 가지고 있는 history객체
			var oHistory = History.getInstance();
            // history 객체에서 이전 hash(url) 화면기록을 찾아옴
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {  // 이전 해쉬값을 가지고 있으면
                // 브라우저 화면의 window 객체가 가지고 있는 화면기록의 전단계로 이동
                // 가능한 이유는 전단계의 화면을 구현한 적이 있으니까 UI5의 전 view를 불어와도 문제가 없음
				window.history.go(-1);
			} else {    // 없으면 - 
                        // pattern : "" 최초화면이 아니면 
                        // 이 화면에서 새로고침을 하면 이전기록이 없어짐
                        // (UI5 프레임워크에서 관리하고 있는 hash 기록)
				var oRouter = this.getOwnerComponent().getRouter();
                // 이전 기록을 못찾으면 강제로 첫번째화면 or 이 화면의 전단계 화면으로 강제이동
				oRouter.navTo("overview", {}, true);
			}
		}
	});
});