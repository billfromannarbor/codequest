import Storypanel from './../../storypanel';

var firstQuestion: string = `There is an Object called TrunkLock with a method InsertKey.  To open the trunk, insert a string with the value “Blue” into the TrunkLock.`

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <div>
            <p>“Sam, Tabby, and I are going to camp out back of Tabby's grandfather's place tonight.”, I yelled to my parents as I went down the basement stairs to my room.The door to the basement was only a few feet from the front door, so most times, I could make it down the stairs before my parents realized I was home.This time, though, I needed to get moving quickly.Might as well get the story out there first.Everything depended on the three of us making it to the site before sundown.</p>
            <p>“Hi, Cat, glad you're home,” my mother yelled from somewhere vaguely upstairs. “It's been a long time since you three went camping,”I was still halfway down the stairs and stopped.I couldn't tell my parents the real reason.They are both such nice people; they might smile and nod or lock me in a nuthouse. Instead, I told them a little white lie.“Tab just broke up with Jess,” I said, though that had happened almost two weeks before. I wasn't much of a sharer, so I was sure I hadn't told my parents.Especially since their breakup had involved Jess trying to kill her.As I said, my parents are nice people, so I wasn't going to worry them with our life and death struggles. There was nothing they could do, but they wouldn't see it that way. Knowing would just put them in danger.</p>
            <p>“I'm so sorry,” my mother said, rounding the corner and standing at the top of the stairs.Her curly brown hair was mussed.In the middle of making dinner, she was wearing a blue apron with a duck on it.My little brother had bought it for her for Christmas. “How is she doing?” she asked, her eyes wide, her mouth making a frown of concern.</p>
            <p>Now I could smell the onions that she was cooking. My stomach rumbled, thinking of all the possible dinners she might make. But I had no time; I would have to forgo food for a little while longer and sleep.God, I needed just 30 minutes to sleep.Instead, I try to put on a brave face. “She's doing good, Mom, just a little sad.Jess turned out to not be a nice person”, I said; that was honest, at least, given the knife and the attempted stabbing.</p>
            <p>My mother looked in the direction of the kitchen. “I've got to stir the onions. Are you going to stay for dinner?” she said, disappearing from view.I wanted to.I was so hungry and tired. I just wanted my normal life back.</p>
            <p>“No, thanks, Mom, but Tab said she wants to binge, so I'm picking up junk food!” I yelled up the stairs as I continued descending them.</p>
            <p>“OK,” my mom said, probably from the kitchen now. She said something else, but I missed it. Finally, reaching the bottom of the stairs.I made my way to my room next to the furnace.I closed and locked my door.Under my bed was The Trunk. It had taken the three of us months to find it.After we had cleaned the mud off, it revealed a green surface.The material is something I've never seen or felt.It feels like fuzzy leather and smells wonderful, like when it stops raining on a warm summer day. At first, I thought it was something in the mud we washed off, but it never seems to lose that smell, no matter how long it's been down here.The green skin is marred in more places than I can possibly count.I think it's from years of attempts to open the trunk forcefully, but I don't know.I hope that I won't become so desperate.I pull out the words that Tab risked her life to get from Jess.</p>
      </div>
      <div>
        <Storypanel chapterTitle="The Magic begins" chapterImage={"/cute-blue-dragon.png"}
          chapterImageDescription={"cute blue dragon"} chapterAnimation="/OpenGardenGate.mp4"
          chapterQuestion={firstQuestion} />
      </div>
    </main>
  );
}