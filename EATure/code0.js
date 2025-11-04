gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDenemiesObjects2_1final = [];

gdjs.GameCode.GDenemiesObjects3_2final = [];

gdjs.GameCode.GDfoodObjects1_1final = [];

gdjs.GameCode.GDfoodObjects2_1final = [];

gdjs.GameCode.GDfoodObjects2_2final = [];

gdjs.GameCode.GDfoodObjects3_2final = [];

gdjs.GameCode.GDeatureObjects1= [];
gdjs.GameCode.GDeatureObjects2= [];
gdjs.GameCode.GDeatureObjects3= [];
gdjs.GameCode.GDeatureObjects4= [];
gdjs.GameCode.GDeatureObjects5= [];
gdjs.GameCode.GDenemiesObjects1= [];
gdjs.GameCode.GDenemiesObjects2= [];
gdjs.GameCode.GDenemiesObjects3= [];
gdjs.GameCode.GDenemiesObjects4= [];
gdjs.GameCode.GDenemiesObjects5= [];
gdjs.GameCode.GDtext_9595scoreObjects1= [];
gdjs.GameCode.GDtext_9595scoreObjects2= [];
gdjs.GameCode.GDtext_9595scoreObjects3= [];
gdjs.GameCode.GDtext_9595scoreObjects4= [];
gdjs.GameCode.GDtext_9595scoreObjects5= [];
gdjs.GameCode.GDfoodObjects1= [];
gdjs.GameCode.GDfoodObjects2= [];
gdjs.GameCode.GDfoodObjects3= [];
gdjs.GameCode.GDfoodObjects4= [];
gdjs.GameCode.GDfoodObjects5= [];
gdjs.GameCode.GDeffect_9595exclaimObjects1= [];
gdjs.GameCode.GDeffect_9595exclaimObjects2= [];
gdjs.GameCode.GDeffect_9595exclaimObjects3= [];
gdjs.GameCode.GDeffect_9595exclaimObjects4= [];
gdjs.GameCode.GDeffect_9595exclaimObjects5= [];
gdjs.GameCode.GDbgObjects1= [];
gdjs.GameCode.GDbgObjects2= [];
gdjs.GameCode.GDbgObjects3= [];
gdjs.GameCode.GDbgObjects4= [];
gdjs.GameCode.GDbgObjects5= [];
gdjs.GameCode.GDbaitObjects1= [];
gdjs.GameCode.GDbaitObjects2= [];
gdjs.GameCode.GDbaitObjects3= [];
gdjs.GameCode.GDbaitObjects4= [];
gdjs.GameCode.GDbaitObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9964004);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbaitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbaitObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 400;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(400);
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 20;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(20);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbaitObjects2Objects = Hashtable.newFrom({"bait": gdjs.GameCode.GDbaitObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects2Objects = Hashtable.newFrom({"enemies": gdjs.GameCode.GDenemiesObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects1Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfoodObjects1Objects = Hashtable.newFrom({"food": gdjs.GameCode.GDfoodObjects1});
gdjs.GameCode.asyncCallback9974756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("text_score"), gdjs.GameCode.GDtext_9595scoreObjects2);

{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects2[i].setColor("255;255;255");
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(9974756, gdjs.GameCode.asyncCallback9974756);
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDtext_9595scoreObjects1) asyncObjectsList.addObject("text_score", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.GameCode.asyncCallback9974756(runtimeScene, asyncObjectsList)), 9974756, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);
{for(var i = 0, len = gdjs.GameCode.GDeatureObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDeatureObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDeatureObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDeatureObjects2[i].getBehavior("Animation").setAnimationSpeedScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 50);
}
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);
{for(var i = 0, len = gdjs.GameCode.GDeatureObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDeatureObjects2[i].setAnimationFrame(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDbaitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbaitObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(20);
}
{for(var i = 0, len = gdjs.GameCode.GDbaitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbaitObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(20);
}
{for(var i = 0, len = gdjs.GameCode.GDbaitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbaitObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDeatureObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDeatureObjects2[i].isTotalForceAngleAround(180, 180) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDeatureObjects2[k] = gdjs.GameCode.GDeatureObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDeatureObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDeatureObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDeatureObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDeatureObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDeatureObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDeatureObjects2[i].isTotalForceAngleAround(0, 90) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDeatureObjects2[k] = gdjs.GameCode.GDeatureObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDeatureObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDeatureObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDeatureObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDeatureObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbaitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbaitObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects2);
gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbaitObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects2);
gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects1);
gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.GameCode.GDfoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfoodObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects1[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDfoodObjects1[k] = gdjs.GameCode.GDfoodObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDfoodObjects1 */
gdjs.copyArray(runtimeScene.getObjects("text_score"), gdjs.GameCode.GDtext_9595scoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomInRange(1000, 5000));
}
{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects1[i].setColor("136;255;0");
}
}

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects2Objects = Hashtable.newFrom({"enemies": gdjs.GameCode.GDenemiesObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getY() == 200 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForce(gdjs.randomInRange(-(200), 200), gdjs.randomInRange(-(200), 200), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Opacity").setOpacity(144);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getY() == 200 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].setY(gdjs.randomInRange(10, 390));
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForce(gdjs.randomInRange(-(200), 200), 0, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Opacity").setOpacity(144);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getX() == 300 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].setX(gdjs.randomInRange(10, 590));
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForce(0, gdjs.randomInRange(-(200), 200), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Opacity").setOpacity(144);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getY() == 200 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].setY(gdjs.randomInRange(50, 350));
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForce(gdjs.randomInRange(-(200), 200), 0, 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Opacity").setOpacity(144);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("EllipseMovement").SetRadiusY(50, null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("EllipseMovement").SetLoopDuration(4, null);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDenemiesObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Animation").getAnimationIndex() == 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].addForce(gdjs.randomInRange(-(100), 100), gdjs.randomInRange(-(100), 100), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Opacity").setOpacity(144);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeffect_95959595exclaimObjects2Objects = Hashtable.newFrom({"effect_exclaim": gdjs.GameCode.GDeffect_9595exclaimObjects2});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3, gdjs.GameCode.GDenemiesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() <= -(32) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].addPolarForce(0, gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDenemiesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getX() >= 632 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addPolarForce(180, gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3, gdjs.GameCode.GDenemiesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getY() <= -(32) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].addPolarForce(90, gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDenemiesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getY() >= 432 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addPolarForce(-(90), gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3, gdjs.GameCode.GDenemiesObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() <= -(32) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].addPolarForce(0, gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].getBehavior("EllipseMovement").SetTurningLeft(false, null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDenemiesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getX() >= 632 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addPolarForce(180, gdjs.randomInRange(25, 150), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("EllipseMovement").SetTurningLeft(true, null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.GameCode.asyncCallback9997820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects4);

{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects4[i].addPolarForce(gdjs.randomInRange(0, 360), gdjs.randomInRange(0, 16), 1);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(9997820, gdjs.GameCode.asyncCallback9997820);
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDenemiesObjects3) asyncObjectsList.addObject("enemies", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 10)), (runtimeScene) => (gdjs.GameCode.asyncCallback9997820(runtimeScene, asyncObjectsList)), 9997820, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForceTowardPosition(gdjs.randomInRange(0, 600), gdjs.randomInRange(0, 400), gdjs.randomInRange(25, 150), 1);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects3[i].getBehavior("Animation").getAnimationIndex() == 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects3[k] = gdjs.GameCode.GDenemiesObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects3);
/* Reuse gdjs.GameCode.GDenemiesObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects3[i].addForceTowardObject((gdjs.GameCode.GDeatureObjects3.length !== 0 ? gdjs.GameCode.GDeatureObjects3[0] : null), gdjs.randomInRange(25, 150), 1);
}
}

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.GameCode.GDenemiesObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Animation").setAnimationSpeedScale((gdjs.GameCode.GDenemiesObjects2[i].getAverageForce().getLength()) / 50);
}
}
}

}


};gdjs.GameCode.asyncCallback10002548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("text_score"), gdjs.GameCode.GDtext_9595scoreObjects3);

{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects3[i].setColor("255;255;255");
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(10002548, gdjs.GameCode.asyncCallback10002548);
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDtext_9595scoreObjects2) asyncObjectsList.addObject("text_score", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.GameCode.asyncCallback10002548(runtimeScene, asyncObjectsList)), 10002548, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnEnemy");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnFood");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("scores", "high", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Edible Ethmoid.wav");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Edible Ethmoid.wav", true, 50, 1);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnEnemy") >= gdjs.randomInRange(1, 5 / ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 1000));
if (isConditionTrue_0) {
gdjs.GameCode.GDenemiesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects2Objects, 300, 200, "Spawner");
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnEnemy");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].isOnLayer("Spawner") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].isOnLayer("Spawner") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDenemiesObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);

{gdjs.GameCode.GDenemiesObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() <= -(32) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() >= 632 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3_2final, gdjs.GameCode.GDenemiesObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects2_1final.indexOf(gdjs.GameCode.GDenemiesObjects3[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects2_1final.push(gdjs.GameCode.GDenemiesObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);

{gdjs.GameCode.GDenemiesObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getY() <= -(32) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getY() >= 432 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3_2final, gdjs.GameCode.GDenemiesObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects2_1final.indexOf(gdjs.GameCode.GDenemiesObjects3[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects2_1final.push(gdjs.GameCode.GDenemiesObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2_1final, gdjs.GameCode.GDenemiesObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects2 */
gdjs.GameCode.GDeffect_9595exclaimObjects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].setLayer("");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeffect_95959595exclaimObjects2Objects, (( gdjs.GameCode.GDenemiesObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDenemiesObjects2[0].getPointX("")), (( gdjs.GameCode.GDenemiesObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDenemiesObjects2[0].getPointY("")), "");
}

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects2[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects2[k] = gdjs.GameCode.GDenemiesObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDenemiesObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);

{gdjs.GameCode.GDenemiesObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() <= -(40) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getX() >= 640 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3_2final, gdjs.GameCode.GDenemiesObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects2_1final.indexOf(gdjs.GameCode.GDenemiesObjects3[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects2_1final.push(gdjs.GameCode.GDenemiesObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects3);

{gdjs.GameCode.GDenemiesObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getY() <= -(40) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2, gdjs.GameCode.GDenemiesObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects4[i].getY() >= 440 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDenemiesObjects4[k] = gdjs.GameCode.GDenemiesObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects3_2final.indexOf(gdjs.GameCode.GDenemiesObjects4[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects3_2final.push(gdjs.GameCode.GDenemiesObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects3_2final, gdjs.GameCode.GDenemiesObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDenemiesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDenemiesObjects2_1final.indexOf(gdjs.GameCode.GDenemiesObjects3[j]) === -1 )
            gdjs.GameCode.GDenemiesObjects2_1final.push(gdjs.GameCode.GDenemiesObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDenemiesObjects2_1final, gdjs.GameCode.GDenemiesObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects2 */
gdjs.copyArray(runtimeScene.getObjects("text_score"), gdjs.GameCode.GDtext_9595scoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomInRange(100, 300));
}
{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects2[i].setColor("223;255;187");
}
}

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects1[i].getBehavior("Animation").getAnimationIndex() == 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects1[k] = gdjs.GameCode.GDenemiesObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDenemiesObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDenemiesObjects1[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDenemiesObjects1[k] = gdjs.GameCode.GDenemiesObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDenemiesObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDenemiesObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDenemiesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDenemiesObjects1[i].addForce(gdjs.randomInRange(0, 2), gdjs.randomInRange(0, 2), 1);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects3Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbaitObjects3Objects = Hashtable.newFrom({"bait": gdjs.GameCode.GDbaitObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects3Objects = Hashtable.newFrom({"eature": gdjs.GameCode.GDeatureObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects3Objects = Hashtable.newFrom({"enemies": gdjs.GameCode.GDenemiesObjects3});
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 40));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 20000);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bait"), gdjs.GameCode.GDbaitObjects3);
gdjs.copyArray(runtimeScene.getObjects("eature"), gdjs.GameCode.GDeatureObjects3);
gdjs.copyArray(runtimeScene.getObjects("enemies"), gdjs.GameCode.GDenemiesObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbaitObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDeatureObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDenemiesObjects3Objects, true, runtimeScene, false);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDtext_9595scoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects2[i].getBehavior("Text").setText("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + gdjs.evtTools.string.newLine() + "HIGH SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfoodObjects2Objects = Hashtable.newFrom({"food": gdjs.GameCode.GDfoodObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.GameCode.GDbgObjects2);
gdjs.copyArray(runtimeScene.getObjects("text_score"), gdjs.GameCode.GDtext_9595scoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDtext_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtext_9595scoreObjects2[i].getBehavior("Text").setText("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}
{gdjs.evtTools.advancedWindow.setMaximizable(false, runtimeScene);
}
{gdjs.evtTools.advancedWindow.maximize(false, runtimeScene);
}
{for(var i = 0, len = gdjs.GameCode.GDbgObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbgObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.GameCode.GDbgObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbgObjects2[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10000);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 20000);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(5);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(20000);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnFood") >= gdjs.randomInRange(12, 45 + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 1000));
if (isConditionTrue_0) {
gdjs.GameCode.GDfoodObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfoodObjects2Objects, 300, 200, "Spawner");
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnFood");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.GameCode.GDfoodObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects2[i].isOnLayer("Spawner") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDfoodObjects2[k] = gdjs.GameCode.GDfoodObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects2[i].getY() == 200 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDfoodObjects2[k] = gdjs.GameCode.GDfoodObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDfoodObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].addForce(gdjs.randomInRange(-(200), 200), gdjs.randomInRange(-(200), 200), 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].getBehavior("Opacity").setOpacity(144);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.GameCode.GDfoodObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects2[i].isOnLayer("Spawner") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDfoodObjects2[k] = gdjs.GameCode.GDfoodObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDfoodObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects3);

{gdjs.GameCode.GDfoodObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects4[i].getX() <= -(32) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects4[k] = gdjs.GameCode.GDfoodObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects3_2final.indexOf(gdjs.GameCode.GDfoodObjects4[j]) === -1 )
            gdjs.GameCode.GDfoodObjects3_2final.push(gdjs.GameCode.GDfoodObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects4[i].getX() >= 632 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects4[k] = gdjs.GameCode.GDfoodObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects3_2final.indexOf(gdjs.GameCode.GDfoodObjects4[j]) === -1 )
            gdjs.GameCode.GDfoodObjects3_2final.push(gdjs.GameCode.GDfoodObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects3_2final, gdjs.GameCode.GDfoodObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_1final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_1final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects3);

{gdjs.GameCode.GDfoodObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects4[i].getY() <= -(32) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects4[k] = gdjs.GameCode.GDfoodObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects3_2final.indexOf(gdjs.GameCode.GDfoodObjects4[j]) === -1 )
            gdjs.GameCode.GDfoodObjects3_2final.push(gdjs.GameCode.GDfoodObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2, gdjs.GameCode.GDfoodObjects4);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects4[i].getY() >= 432 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects4[k] = gdjs.GameCode.GDfoodObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects3_2final.indexOf(gdjs.GameCode.GDfoodObjects4[j]) === -1 )
            gdjs.GameCode.GDfoodObjects3_2final.push(gdjs.GameCode.GDfoodObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects3_2final, gdjs.GameCode.GDfoodObjects3);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_1final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_1final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2_1final, gdjs.GameCode.GDfoodObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDfoodObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].clearForces();
}
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].setLayer("");
}
}
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects2[i].addForceTowardPosition(gdjs.randomInRange(0, 600), gdjs.randomInRange(0, 400), gdjs.randomInRange(100, 300), 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.GameCode.GDfoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects1[i].isOnLayer("") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDfoodObjects1[k] = gdjs.GameCode.GDfoodObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDfoodObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects2);

{gdjs.GameCode.GDfoodObjects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects3[i].getX() <= -(40) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects3[k] = gdjs.GameCode.GDfoodObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_2final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_2final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects3[i].getX() >= 640 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects3[k] = gdjs.GameCode.GDfoodObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_2final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_2final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2_2final, gdjs.GameCode.GDfoodObjects2);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects1_1final.indexOf(gdjs.GameCode.GDfoodObjects2[j]) === -1 )
            gdjs.GameCode.GDfoodObjects1_1final.push(gdjs.GameCode.GDfoodObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects2);

{gdjs.GameCode.GDfoodObjects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects3[i].getY() <= -(40) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects3[k] = gdjs.GameCode.GDfoodObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_2final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_2final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1, gdjs.GameCode.GDfoodObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDfoodObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDfoodObjects3[i].getY() >= 440 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDfoodObjects3[k] = gdjs.GameCode.GDfoodObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDfoodObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects2_2final.indexOf(gdjs.GameCode.GDfoodObjects3[j]) === -1 )
            gdjs.GameCode.GDfoodObjects2_2final.push(gdjs.GameCode.GDfoodObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects2_2final, gdjs.GameCode.GDfoodObjects2);
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDfoodObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDfoodObjects1_1final.indexOf(gdjs.GameCode.GDfoodObjects2[j]) === -1 )
            gdjs.GameCode.GDfoodObjects1_1final.push(gdjs.GameCode.GDfoodObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDfoodObjects1_1final, gdjs.GameCode.GDfoodObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDfoodObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDfoodObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDfoodObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDeatureObjects1.length = 0;
gdjs.GameCode.GDeatureObjects2.length = 0;
gdjs.GameCode.GDeatureObjects3.length = 0;
gdjs.GameCode.GDeatureObjects4.length = 0;
gdjs.GameCode.GDeatureObjects5.length = 0;
gdjs.GameCode.GDenemiesObjects1.length = 0;
gdjs.GameCode.GDenemiesObjects2.length = 0;
gdjs.GameCode.GDenemiesObjects3.length = 0;
gdjs.GameCode.GDenemiesObjects4.length = 0;
gdjs.GameCode.GDenemiesObjects5.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects1.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects2.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects3.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects4.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects5.length = 0;
gdjs.GameCode.GDfoodObjects1.length = 0;
gdjs.GameCode.GDfoodObjects2.length = 0;
gdjs.GameCode.GDfoodObjects3.length = 0;
gdjs.GameCode.GDfoodObjects4.length = 0;
gdjs.GameCode.GDfoodObjects5.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects1.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects2.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects3.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects4.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects5.length = 0;
gdjs.GameCode.GDbgObjects1.length = 0;
gdjs.GameCode.GDbgObjects2.length = 0;
gdjs.GameCode.GDbgObjects3.length = 0;
gdjs.GameCode.GDbgObjects4.length = 0;
gdjs.GameCode.GDbgObjects5.length = 0;
gdjs.GameCode.GDbaitObjects1.length = 0;
gdjs.GameCode.GDbaitObjects2.length = 0;
gdjs.GameCode.GDbaitObjects3.length = 0;
gdjs.GameCode.GDbaitObjects4.length = 0;
gdjs.GameCode.GDbaitObjects5.length = 0;

gdjs.GameCode.eventsList15(runtimeScene);
gdjs.GameCode.GDeatureObjects1.length = 0;
gdjs.GameCode.GDeatureObjects2.length = 0;
gdjs.GameCode.GDeatureObjects3.length = 0;
gdjs.GameCode.GDeatureObjects4.length = 0;
gdjs.GameCode.GDeatureObjects5.length = 0;
gdjs.GameCode.GDenemiesObjects1.length = 0;
gdjs.GameCode.GDenemiesObjects2.length = 0;
gdjs.GameCode.GDenemiesObjects3.length = 0;
gdjs.GameCode.GDenemiesObjects4.length = 0;
gdjs.GameCode.GDenemiesObjects5.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects1.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects2.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects3.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects4.length = 0;
gdjs.GameCode.GDtext_9595scoreObjects5.length = 0;
gdjs.GameCode.GDfoodObjects1.length = 0;
gdjs.GameCode.GDfoodObjects2.length = 0;
gdjs.GameCode.GDfoodObjects3.length = 0;
gdjs.GameCode.GDfoodObjects4.length = 0;
gdjs.GameCode.GDfoodObjects5.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects1.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects2.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects3.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects4.length = 0;
gdjs.GameCode.GDeffect_9595exclaimObjects5.length = 0;
gdjs.GameCode.GDbgObjects1.length = 0;
gdjs.GameCode.GDbgObjects2.length = 0;
gdjs.GameCode.GDbgObjects3.length = 0;
gdjs.GameCode.GDbgObjects4.length = 0;
gdjs.GameCode.GDbgObjects5.length = 0;
gdjs.GameCode.GDbaitObjects1.length = 0;
gdjs.GameCode.GDbaitObjects2.length = 0;
gdjs.GameCode.GDbaitObjects3.length = 0;
gdjs.GameCode.GDbaitObjects4.length = 0;
gdjs.GameCode.GDbaitObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
