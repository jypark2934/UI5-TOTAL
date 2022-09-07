// 이건 걍 실습용이지 이렇게는 잘안씀
// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");  // <body id="content">(body tag) 내부에 배치
// 	});

// });  //기존 view를 직접만드는 방식에서 ComponentContainer에게 맡기는 방식

// index에 body에 div에 아래 내용 추가해서 이제 필요없음
// sap.ui.define([
// 	"sap/ui/core/ComponentContainer"
// ], function (ComponentContainer) {
// 	"use strict";

// 	new ComponentContainer({
// 		name: "sap.ui.demo.walkthrough",
// 		settings : {
// 			id : "walkthrough"
// 		},
// 		async: true
// 	}).placeAt("content");
// });
