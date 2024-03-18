import { HintAndSolution } from "./hintandsolution";
import { Answer } from "./answer";
import { Question } from "./question";
import Image from "next/image";
import { ReactElement } from "react";

export default function Storypanel({ chapterTitle, chapterImage, chapterImageDescription,chapterAnimation, chapterQuestion }:
     { chapterTitle: string, chapterImage: string, chapterImageDescription: string, chapterAnimation: string, chapterQuestion: string })
{
    return (
        <div>
            <p className="text-3xl font-bold underline">
                {chapterTitle}
            </p>
            <Image src={chapterImage} alt={chapterImageDescription} width={100} height={100}/>
            
            
            <Question chapterQuestion={chapterQuestion}/>
                <video id="frontgate-animation" src={chapterAnimation} >
                </video>
            <Answer/>
            <HintAndSolution/>
            
                    
			<div id="javascript-errors" className="alert alert-success" role="alert"></div>
        </div>
    )
}