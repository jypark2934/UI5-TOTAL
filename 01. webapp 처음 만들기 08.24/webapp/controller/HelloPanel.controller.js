sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"  //Fragment 사용하려면 여기정의필수,아래 펑션에도
 ], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
       
        // pDialog : {}, 눈에는 안보이지만 이렇게 pDialog가 생긴것!
       
        onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       },

       //step16에서 만든 버튼 이용 Fragment도 view처럼 객체화함
       onOpenDialog : function() {
        // create dialog lazily
			if (!this.pDialog) {    //! 논리식 반전
                //this.pDialog가 없으면 아래 로직 들어가고 
                //이후에는(있으면) 넘어가서 바로 켜주기만함open 
                // new Fragment : (X) Fragment자체를 객체로 쓰지않고 this에서 끌어다 쓰는거
                // "sap/ui/core/Fragment" <- loadFragment() 메소드 사용가능 
				// this.pDialog = ~ 이게 Controller에 붙는 변수를 선언한 것임               
                this.pDialog = this.loadFragment({ // pDialog : {}, 눈에는 안보이지만 이렇게 pDialog가 생긴것!
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
       },

       onCloseDialog : function() {
		console.log(this);	
        // this.pDialog.close(); != Dialog (Dialog가 아님) 객체가 아님  
        this.byId("helloDialog").close();
       }

    });
 });