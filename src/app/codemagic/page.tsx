import { promises as fs } from 'fs';

export default async function Home() {
  const title = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/title.txt', 'utf8');
  const storytext = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/text.txt', 'utf8');
  const question = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/question.txt', 'utf8');
  const hint1 = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/hint1.txt', 'utf8');
  const hint2 = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/hint2.txt', 'utf8');
  const answer = await fs.readFile(process.cwd() + '/content/codemagic/chapter1/answer.txt', 'utf8');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <p className="text-3xl font-bold underline">
            {title}
      </p>
      <p className="text-2xl">
            {storytext}
      </p>
      <p>
        {question}
      </p>
      <div>
        <div></div>
          <textarea id="scripttoexecute"></textarea>
        <div>
          <button>Execute the code</button>
        </div>
      </div>
      <p>
        {hint1}
      </p>
      <p>
        {hint2}
      </p>
      <p>
        {answer}
      </p>
      <div id="javascript-errors" className="alert alert-success" role="alert"></div>
    </main>
  );
}