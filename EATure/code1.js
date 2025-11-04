gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDbgObjects1= [];
gdjs.Game_32OverCode.GDbgObjects2= [];
gdjs.Game_32OverCode.GDgoObjects1= [];
gdjs.Game_32OverCode.GDgoObjects2= [];
gdjs.Game_32OverCode.GDbuttonObjects1= [];
gdjs.Game_32OverCode.GDbuttonObjects2= [];
gdjs.Game_32OverCode.GDtextObjects1= [];
gdjs.Game_32OverCode.GDtextObjects2= [];
gdjs.Game_32OverCode.GDtext_9595scoreObjects1= [];
gdjs.Game_32OverCode.GDtext_9595scoreObjects2= [];
gdjs.Game_32OverCode.GDbaitObjects1= [];
gdjs.Game_32OverCode.GDbaitObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("scores");
}
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Game_32OverCode.GDbuttonObjects1});
gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Game_32OverCode.GDbuttonObjects1});
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("scores", "high", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Game_32OverCode.GDbgObjects1);
gdjs.copyArray(runtimeScene.getObjects("go"), gdjs.Game_32OverCode.GDgoObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_score"), gdjs.Game_32OverCode.GDtext_9595scoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbgObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbgObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDgoObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDgoObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDgoObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDgoObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDtext_9595scoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDtext_9595scoreObjects1[i].getBehavior("Text").setText("FINAL SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + gdjs.evtTools.string.newLine() + "HIGH SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Game_32OverCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Game_32OverCode.GDtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDbuttonObjects1[i].getZOrder() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDbuttonObjects1[k] = gdjs.Game_32OverCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDtextObjects1[i].getZOrder() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDtextObjects1[k] = gdjs.Game_32OverCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDtextObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDbuttonObjects1 */
/* Reuse gdjs.Game_32OverCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbuttonObjects1[i].setX(390);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDtextObjects1[i].setX(430);
}
}

{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Game_32OverCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Game_32OverCode.GDtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDbuttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDbuttonObjects1[i].getZOrder() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDbuttonObjects1[k] = gdjs.Game_32OverCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDtextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDtextObjects1[i].getZOrder() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDtextObjects1[k] = gdjs.Game_32OverCode.GDtextObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDtextObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDbuttonObjects1 */
/* Reuse gdjs.Game_32OverCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbuttonObjects1[i].setX(400);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDtextObjects1[i].setX(440);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.Game_32OverCode.GDbaitObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDbaitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbaitObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDbaitObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbaitObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDbgObjects1.length = 0;
gdjs.Game_32OverCode.GDbgObjects2.length = 0;
gdjs.Game_32OverCode.GDgoObjects1.length = 0;
gdjs.Game_32OverCode.GDgoObjects2.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects1.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects2.length = 0;
gdjs.Game_32OverCode.GDtextObjects1.length = 0;
gdjs.Game_32OverCode.GDtextObjects2.length = 0;
gdjs.Game_32OverCode.GDtext_9595scoreObjects1.length = 0;
gdjs.Game_32OverCode.GDtext_9595scoreObjects2.length = 0;
gdjs.Game_32OverCode.GDbaitObjects1.length = 0;
gdjs.Game_32OverCode.GDbaitObjects2.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
gdjs.Game_32OverCode.GDbgObjects1.length = 0;
gdjs.Game_32OverCode.GDbgObjects2.length = 0;
gdjs.Game_32OverCode.GDgoObjects1.length = 0;
gdjs.Game_32OverCode.GDgoObjects2.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects1.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects2.length = 0;
gdjs.Game_32OverCode.GDtextObjects1.length = 0;
gdjs.Game_32OverCode.GDtextObjects2.length = 0;
gdjs.Game_32OverCode.GDtext_9595scoreObjects1.length = 0;
gdjs.Game_32OverCode.GDtext_9595scoreObjects2.length = 0;
gdjs.Game_32OverCode.GDbaitObjects1.length = 0;
gdjs.Game_32OverCode.GDbaitObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
