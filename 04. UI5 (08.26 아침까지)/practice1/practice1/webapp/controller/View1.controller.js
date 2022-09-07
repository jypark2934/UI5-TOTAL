sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("sap.sync.practice1.controller.View1", {
            /**
             * onInit 함수
             * @param
             */
            onInit: function () {
                // 화면제어용 JSONModel 을 사용
                var oData = {
                    "inputValue1" : null,
                    inputValue2 : null,      //"inputValue1"이거나 inputValue1이나 상관없음
                    bSwitchOnOff : true,
                    sSelValue : null
                }; // JSONModel 구조를 객체변수로 먼저 선언
                var oModel = new JSONModel(oData);   // 그 구조대로 JSONModel 객체를 생성
                this.getView().setModel(oModel, "viewModel"); // "viewModel" - JSONModel을 View와 연결
                //oModel 의 이름을 "viewModel"로 한다

                
                var oSelectData = {
                    calc:{
                        operate : [
                            { id : "plus", ope : "+" },
                            { id : "min", ope : "-" },
                            { id : "mul", ope : "*" },
                            { id : "div", ope : "/" }
                        ]
                    }
                };
                var oSelModel = new JSONModel(oSelectData);
                this.getView().setModel(oSelModel, "selList");
            },
            /**
             * 계산기버튼 이벤트 함수
             */
            onPress: function() {
                // debugger; // console 창을 이 시점으로 보려고
                // var oInput = this.getView().getContent()[0].getContent()[0].getItems()[0].getItems()[0];

                // var oView = this.getView();
                // var oViewContent = oView.getContent(); // aggregation
                // var oPage = oViewContent[0]; // 여기선 메소드 사용안한거
                // var oFlexBox = oPage.getContent()[0]; // page는 getContent 메소드를 씀
                // var oVBox1 = oFlexBox.getItems()[0]; // vBox getItems 메소드를 씀
                // var oInput = oVBox1.getItems()[0];               
                
                //선생님 코드 
                 var oInput1 = this.getView().byId("input1");
                 var oInput2 = this.getView().byId("input2"); 
                 
                 var sValue1 = oInput1.getValue();
                 var sValue2 = oInput2.getValue();
                 // sap.m.Input의 메소드 value라는 프로퍼티의 값을 알려주는 기능을 사용
                 // sap.m.Input - value 프로퍼티는 'string 타입으로 값을 저장함
                 var iValue1 = parseInt(sValue1),
                     iValue2 = parseInt(sValue2);
                 var iResult;
                 
                 iResult = iValue1 + iValue2;
                 MessageToast.show("계산결과:"+ iResult);
                //문자열 + 숫자라 문자열의 합으로 계산이됨
                 
                //내가만든코드
                // var oInput1 = this.getView().byId("input1"); // getView() 생략가능
                // // 이렇게 하면 값에 접근한게 아니라 객체에 접근한것임!
                // var oInput2 = this.getView().byId("input2"); 
                // // getView()는 객체에 접근하는거고
                // // getValue()는 해당 프로퍼티의 값을 가져오는 거다! getView하고 값으로 뭘해볼라면 getValue 꼭 써야함!
                
                // // sap.m.Input의 메소드 value라는 프로퍼티의 값을 알려주는 기능을 사용
                
                // var oInput1 = parseInt(oInput1.getValue()); // getValue() 값을 가져와야한다!
                // var oInput2 = parseInt(oInput2.getValue()); // js는 기존 변수랑 같은 이름 변수 또 쓸수있다! 쓰면 자동으로 덮어쓰기됨 
                // // 이렇게 줄이는거보다 아래 선생님처럼 기능단위로 나누고 끊어놓는게 좋다고 함(라인이늘어난다해도)
                // var iResult;
                // // view 를 뒤지면서 이 id값을 가진 화면요소 객체를 값으로 되돌려줌
                
                // // xml에서id: "input1", "input2"
                // // oInput1.getValue() -> 인풋창에 입력된 [텍스트] -> parseInt([텍스트])
                // // 두 입력창의 숫자 입력값의 덧셈결과를 MessageToast로 출력
                // // MessageToast.show("계산결과:"+"결과");        
                // iResult = oInput1 + oInput2;
                // MessageToast.show("계산결과:"+ iResult);            

            },
            /**
             * 계산기 이벤트 함수 - 데이터 바인딩 방식
             */
            onPress2: function() {
                var oModel = this.getView().getModel("viewModel");
                    // view 에 연결된 모델을 읽어옴
                var iValue1 = oModel.getProperty("/inputValue1"); 
                    // binding 에서 type 을 지정했기때문에 'number' type의 값이
                    // 모델에 저장되어 있음
                var iValue2 = oModel.getProperty("/inputValue2");
                    // getProperty - JSONModel 도 JSON->JS object
                    // 모델의 내용은 프로퍼티
                    // 프로퍼티의 키 이름을 주소로 사용해 실제 값에 접근 // getValue랑 비슷한듯?
                    // { inputValue2 : [실제 값] }
                
                 // sap.m.Input의 메소드 value라는 프로퍼티의 값을 알려주는 기능을 사용
                // 혼자 계산기 만들려고 끄적였던거
                //var ope="{selList>/calc/operate/ope}"; 
                //var SelModel= this.getView().getModel("selList"); 
                // var ope1 = SelModel.getProperty("calc/operate",[ope1]);

                 var iResult;
                 var sKey= oModel.getProperty("/sSelValue");
                    // Select 에서 선택한 아이템의 key value           
                
                console.log(sKey);
                switch (sKey) {
                    case "+": //더하기 일때
                        iResult = iValue1 + iValue2;
                        break;                
                    case "-": //더하기 일때
                        iResult = iValue1 - iValue2;
                        break;
                    case "*": //더하기 일때
                        iResult = iValue1 * iValue2;
                        break;
                    case "/": //더하기 일때
                        iResult = iValue1 / iValue2;
                        break;
                        
                 }
                 MessageToast.show("계산결과:"+ iResult);

            },
            /**
             * 스위치 클릭 이벤트 함수 \n
             * 사용자가 스위치를 누를때마다 동작 <- change 이벤트의 발동 조건
             */
            onSwitchClick: function(oEvent) {
                // 모든 이벤트는 이벤트 정보를 가지고 있는 이벤트 객체가 있고,
                // 첫번쨰 파라미터로 그 객체를 이벤트 함수에 전달하는 구조
                // 이벤트 정보를 담은 이 객체를 통해서 이벤트에 대한 상세정보를 확인할 수 있음
                // oEvent.getSource() // 이벤트의 출처 - 이벤트가 일어난 화면 객체
                // oEvent.getParameters() // 이벤트와 관련된 파라미터 값들을 리턴해줌
                var bState = oEvent.getParameter("state"); //"state" 하나불러오니 getParameter!

                var oInput1 = this.getView().byId("input1");
                oInput1.setEditable(bState);
                var oInput2 = this.getView().byId("input1");
                oInput2.setEditable(bState);
            }
        });
    });
