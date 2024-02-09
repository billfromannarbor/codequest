//'use client'

import Image from "next/image";
import { useEffect } from 'react'
import { HintAndSolution } from "./hintandsolution";
import { Answer } from "./answer";
import { Question } from "./question";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p className="text-3xl font-bold underline">
			Welcome to CodeQuest!
			</p>
			<Image src="/cute-blue-dragon.png" alt="cute blue dragon" width={100} height={100}/>
			<Question/>
				<video id="frontgate-animation" src="/OpenGardenGate.mp4" >
				</video>
				<Answer/>
				<HintAndSolution/>
				
				<div id="javascript-errors" className="alert alert-success" role="alert"></div>
    </main>
  );
}



/*
<div id="welcome" class="container-fluid">
			<p class="codequest-plaintext lead">
			Welcome to CodeQuest!
			</p>
			<div>
				<img id="welcome-image" src="img/cute-blue-dragon.png" alt="Welcome to CodeQuest" width="10%" height="10%">
				<p class="codequest-plaintext lead">
					To Enter this website, you’ll need to go through the main gate.
				</p>
				<p class="codequest-plaintext lead">
					The main gate is locked, but as a developer, you have access to the object maingatelock, which has a method you need: insertKey.
				</p>
				<p class="codequest-plaintext lead">
					To open the gate, insert a string with the value “Blue” into the main gate lock.
				</p>
				<p class="codequest-plaintext lead">
					Good luck on your Code adventure!
				</p>
				
			</div>
			<video id="frontgate-animation">
				<source src="img/OpenGardenGate.mp4" type="video/mp4">
			</video>
			<div>
				<textarea id="scripttoexecute" rows="5" cols="30">
				
				</textarea>
				<button class="btn btn-default" type="button" id="btn-run-code">Run Code</button>
				<div id="javascript-errors" class="alert alert-success" role="alert"></div>
			</div>
			*/