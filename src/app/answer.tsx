'use client';

var codeBefore:string = `
//Class Injected before User Solution
class MainGateLock {
  locked = true;
  insertKey(key) {
    if (key == "Blue") {
      this.locked = false;
    }
  }
  isLocked() {
    return this.locked;
  }
}

var maingatelock = new MainGateLock();
`

function createFunctionFromCode(codeToExecute:string) {
  return new Function(codeToExecute);
}

function attemptToUnlockTheDoor(codeToUnlockTheDoor:string)
{
    console.log("Code To Unlock The door: " + codeToUnlockTheDoor);
    var codeToExecute = codeBefore + "\n" + codeToUnlockTheDoor + "\nreturn maingatelock.isLocked();";
    console.log(codeToExecute);
    var returnValue=false;
    var isMainGateLocked=createFunctionFromCode(codeToExecute);
    try
    {
      returnValue=!isMainGateLocked();
    }
    catch(e){
      console.log("Exception: " + e);
    }

    console.log("Did the door unlock: " + returnValue);
    return returnValue;
}

var codeToUnlockTheDoor:string=`maingatelock.insertKey('Blue');`;

function runCodeClicked() {
  console.log("Run Code Clicked");
  //var codeToUnlockTheDoor=document.getElementById("scripttoexecute").value;
  console.log(codeToUnlockTheDoor);
  var result = attemptToUnlockTheDoor(codeToUnlockTheDoor);
  console.log(result);
  //todo: Put errors here for the user
  //document.getElementById("javascript-errors").innerHTML = result;
  
  if ( result == true)
  {
    //Open the gate
    var frontGateAnimation = document.getElementById("frontgate-animation"); 
    //if(frontGateAnimation!=null) 
      //frontGateAnimation.play();
  }
  else {
    //Todo:  Fill this with three or more answers that come at random
    //document.getElementById("javascript-errors").innerHTML = "Your code failed to open the door, please try again"
  }
}

export function Answer() {
    return (
      <div>
        <div></div>
          <textarea id="scripttoexecute" onChange={e=>codeToUnlockTheDoor=e.target.value} defaultValue={codeToUnlockTheDoor}></textarea>
        <div>
          <button onClick={runCodeClicked}>Attempt To Open Gate</button>
        </div>
      </div>
    );
  }
