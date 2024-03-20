import Storypanel from './../../storypanel';
import { promises as fs } from 'fs';

var firstQuestion: string = `There is an Object called TrunkLock with a method InsertKey.  To open the trunk, insert a string with the value “Blue” into the TrunkLock.`
console.log("Chapter 1 Page");
export default async function Home() {
  const chaptertext = await fs.readFile(process.cwd() + '/content/chapter1-text.txt', 'utf8');
  //console.log("File Contents: " + chaptertext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
     <div>
        <Storypanel chapterTitle="The Magic begins" chapterImage={"/cute-blue-dragon.png"}
          chapterImageDescription={"cute blue dragon"} chapterAnimation="/OpenGardenGate.mp4"
          chapterText={chaptertext} chapterQuestion={firstQuestion} />
      </div>
    </main>
  );
}