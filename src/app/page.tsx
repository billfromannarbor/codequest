import Storypanel from './storypanel';


import { useEffect } from 'react'

var firstQuestion:string = `To Enter this website, you’ll need to go through the main gate.  
	The main gate is locked, but as a developer, you have access to the object maingatelock, which has a method you need: insertKey.
	To open the gate, insert a string with the value “Blue” into the main gate lock. Good luck on your Code adventure!`

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
	    <Storypanel chapterTitle="Welcome to CodeQuest!" chapterImage={"/cute-blue-dragon.png"}
        chapterImageDescription={"cute blue dragon"} chapterAnimation="/OpenGardenGate.mp4" 
        chapterQuestion={firstQuestion}/>
	</main>
  );
}