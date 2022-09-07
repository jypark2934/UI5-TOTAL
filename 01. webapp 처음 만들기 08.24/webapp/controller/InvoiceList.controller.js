sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter", // ../ 내 폴더위치보다 상위폴더
	"sap/ui/model/Filter", // 필터 - 필터객체를 만들어서 바인딩에 적용
	"sap/ui/model/FilterOperator" // 필터 연산자 - ex) EQ, NE, BT ...
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter1: formatter,
		//왼쪽은 여기 Contorller에서만든 formatter. View에서 호출하기위한 이름
		//오른쪽은 define에서 등록한 모듈명
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

			//var a = (10 < 1 || 10 < 2) ? true : false ; 	expression binding 설명내용 노상관임
		},

		onFilterInvoices: function (oEvent) {
			// 이벤트 펑션의 첫번쨰 파라미터로 이벤트객체가 들어옴
			// 이걸 이용해서 이벤트객체를 기능 구현에 이용

			// this.getView().byId("서치필드아이디").getValue() 3step
			// 얘는 이벤트 동작함수이기떄문에 이렇게 찾아올 필요가 없고
			// oEvent.getParameter("query") query 라는 파라미터에 1step
			// 사용자가 서치필드에 입력한 값이 들어있기 때문에 이렇게 값을 읽어옴	

			// build filter array
			var aFilter = [];
			// [필터적용 1단계] - 필터객체를 담아놓을 빈배열을 먼저 선언
			// 필터는 배열인 객체로 DataBinding 옵션값으로 추가시킴
			var sQuery = oEvent.getParameter("query"); // 사용자의 검색어
			// [필터적용 2단계] - 필터에 사용할 조건(검색어) 추출
			if (sQuery) { // [필터적용 3단계] - 필터객체를 만드는 조건은 검색어가 있을때만				
				aFilter.push(
					//new Filter("ProductName", FilterOperator.Contains, sQuery)
					new Filter(
						{
							path: "ProductName",
							operator: FilterOperator.Contains,
							value1: sQuery,
							caseSensitive: true
						}
					)

					// (path(필터를 적용할 데이터바인딩기준경로), operator(검색연산자), 검색조건)
				);
				// [필터적용 4단계] - sQuery(검색조건)을 이용해서 필터객체를 생성 + 배열에 넣어줌
			}

			// filter binding
			var oList = this.getView().byId("invoiceList"); //getView() 는 생략가능
			var oBinding = oList.getBinding("items");
			// [필터적용 5단계]
			// 리스트객체를 받아와서 리스트에 데이터바인딩 정보를 가지고 있는 객체를 가져옴			
			oBinding.filter(aFilter);
			// [필터적용6단계] - list 바인딩정보에 필터 속성도 추가
		},

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			// controller -> component -> router 객체접근
			var sValue = window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1));			
			console.log(sValue);
			oRouter.navTo("detailName", {
				invoicePath: sValue
			});
		}

	});
});