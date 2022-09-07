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

        return BaseController.extend("sap.sync.practice1.controller.View3", {
            /**
             * onInit 함수 
             * @param
             */
            onInit: function () {
                // 화면제어용 JSONModel 생성
                var oData = {
                    bDeleteMode : false, // bDeleteMode 프로퍼티값을 반전()
                    bEditMode : false,
                    products : [
                        {
                            name     : '펜',
                            price    : 12,
                            quantity : 5

                        },
                        {
                            name     : 'A4',
                            price    : 5,
                            quantity : 23

                        },
                        {
                            name     : '지우개',
                            price    : 2,
                            quantity : 188

                        },
                        {
                            name     : '연필',
                            price    : 1,
                            quantity : 37

                        },
                        {
                            name     : '형광펜',
                            price    : 15,
                            quantity : 2

                        },
                        {
                            name     : '펜',
                            price    : 12,
                            quantity : 5

                        },
                        {
                            name     : 'A4',
                            price    : 5,
                            quantity : 23

                        },
                        {
                            name     : '지우개',
                            price    : 2,
                            quantity : 188

                        },
                        {
                            name     : '연필',
                            price    : 1,
                            quantity : 37

                        },
                        {
                            name     : '형광펜',
                            price    : 15,
                            quantity : 2

                        },
                        {
                            name     : '펜',
                            price    : 12,
                            quantity : 5

                        },
                        {
                            name     : 'A4',
                            price    : 5,
                            quantity : 23

                        },
                        {
                            name     : '지우개',
                            price    : 2,
                            quantity : 188

                        },
                        {
                            name     : '연필',
                            price    : 1,
                            quantity : 37

                        },
                        {
                            name     : '형광펜',
                            price    : 15,
                            quantity : 2

                        }

                    ]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "viewModel");
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
            // },

            onDelete: function() {
                //delete 버튼 안보이도록 -> cancel 버튼이 보이게
                // bDeleteMode 프로퍼티값을 반전
                var oModel = this.getModel("viewModel");
                var bDel = oModel.getProperty("/bDeleteMode");
                oModel.setProperty("/bDeleteMode", !bDel);  
                //setProperty를 하는 순간 없는 모델을 만들어줌?
                //내생각에는 setProperty를 하면 (버튼을 눌렀을때 반전의 값을 setting 해준다고 생각하면 될거같은데) 이게맞다함!

                // table mode -> Delete
                var oTable = this.byId("idProductsTable");
                oTable.setMode("Delete"); 
            },

            onCancel: function() {
                var oModel = this.getModel("viewModel");
                var bDel = oModel.getProperty("/bDeleteMode");
                var bEdit =  oModel.getProperty("/bEditMode");

                if(bDel){
                    oModel.setProperty("/bDeleteMode", !bDel);
                }else {
                    oModel.setProperty("/bEditMode", !bEdit);

                }

                // table mode -> None
                var oTable = this.byId("idProductsTable");
                oTable.setMode("None"); 
            },

            onDeleteButton : function (oEvent) {
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                var iIndex = parseInt(sPath.split("/")[2]);
                // /products/[index] "", products,  [index]
                // 내가 삭제할 대상의 경로를 알아내서
                // 그 경로를 지워줌
                var oModel = this.getModel("viewModel");
                

                var aProducts = oModel.getProperty("/products");

                // "/products"이렇게 쓰는것을 보아 aggregation binding을 갖고 있는 배열일것임
                var aResult = aProducts.filter(function(elem, index){
                     if(index !== iIndex){
                        return true;}
                     
                     }); // 펑션이 true인 배열의 요소만 필터링됨
                oModel.setProperty("/products", aResult); //framework 자동으로 이 바인딩을
                // 사용하는 화면요소에서 새로고침(갱신)을 시켜주므로 데이터가 화면에 바로 보임
                
                

                //iIndex에서 delete할 값의 인덱스를 지정해줌
                
                //aResult에서는 우리가 
            },

            onEdit : function () {
                var oModel = this.getModel("viewModel"); 
                var bEdit =  oModel.getProperty("/bEditMode");
                oModel.setProperty("/bEditMode", !bEdit ); //bEditMode -> true !bEdit를 하는 이유는?
                
                // 테이블 셀 text -> 

            }


        });
    });
