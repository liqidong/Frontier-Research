---
type: research_import
source_file: podcast_latent_space.md
imported_at: 2026-04-07T08:41:06.251Z
---

# AI Podcast: Latent Space

> 共收集 4 期节目摘要。

---

## Marc Andreessen introspects on The Death of the Browser, Pi + OpenClaw, and Why &quot;This Time Is Different&quot;

- **发布时间**: 2026/4/3 16:57:46
- **原始链接**: [点击查看](https://www.youtube.com/@LatentSpacePod)

### 📜 内容摘要与转录

Speaker 1 | 00:00 - 00:25
Something about AI that causes the people in the field, I would say, to become both excessively utopian and excessively apocalyptic. Having said that, I think what's actually happened is an enormous amount of technical progress that built up over time. And like for for example, we now know the neural network is the correct architecture. And I I will tell you, like, was a sixty year run where that was like a, you know, or even seventy years where that was controversial. And so so the way I think about what's happening is basically, think I think about basically the the the period we're in right now is it's I call it eighty year overnight success.

Speaker 1 | 00:25 - 00:51
Right? Which is like, it's an overnight success because it's like bam, you know, ChatGPT hits and then then o one hits and then, you know, OpenClaw hits and like, you know, these are open these are these are like overnight, like radical overnight transformative successes, but they're drawing on an eighty year sort of Wellspring backlog, you know, of of ideas and thinking. It's not just that it's all brand new. It's that it's an unlock of all of these decades of, like, very serious hardcore research. If I were 18, like, this is a 100 this is what I would be spending all of my time on.

Speaker 1 | 00:51 - 00:53
This is, such an incredible conceptual breakthrough.

Speaker 2 | 00:53 - 01:19
Before we get into today's episode, I just have a small message for listeners. Thank you. We would not be able to bring you the AI engineering, science, and entertainment contents that you so clearly want if you didn't choose to also click in and tune into our content. We've been approached by sponsors on an almost daily basis, but fortunately, enough of you actually subscribed to us to keep all this sustainable without ads, and we wanna keep it that way. But I just have one favor to ask all of you.

Speaker 2 | 01:19 - 01:39
The single most powerful, completely free thing you can do is to click that subscribe button. It's the only thing I'll ever ask of you, and it means absolutely everything to me and my team that works so hard to bring latent space to you each and every week. If you do it, I promise you, we'll never stop working to make the show even better. Now let's get into it.

Speaker 3 | 01:44 - 01:50
Everyone, welcome to the Litin Space pockets. This is Alasio, founder of Kernel Labs, and I'm joined by Squeaks, editor of Litin Space.

Speaker 2 | 01:50 - 01:54
Hello. And we're in a 16 z with A. Martin Gson, welcome.

Speaker 1 | 01:54 - 01:57
Yes. Yes. A and what? Half of 16?

Speaker 2 | 01:57 - 02:02
Of the one. A one. Exactly. Exactly. Apparently, this is the the final few days in your your current office.

Speaker 2 | 02:02 - 02:04
You're moving across the road.

Speaker 1 | 02:04 - 02:12
We're yeah. We have Olivia, so we have some projects underway. But, yeah, this is actually, although this is the original we're in actually the original office. We're in the we're in we're in the where the whole thing It's beautiful. Yeah.

Speaker 1 | 02:12 - 02:13
Great. Thank you.

Speaker 2 | 02:13 - 02:35
So I have to come out. This is a you know, I wanted to pick a spicy start. In October 2022, I just made friends with Rune, and I wanted to give him something to sort of be spicy about. And I said, it'll never not be funny that a 16 z was constantly going the future is where the smart people choose to spend their time and then going deep into crypto and not in AI. And that was in 10/22/2022.

Speaker 2 | 02:36 - 02:43
And Rune says there was an internal meeting in a 16 to reorient around Gen AI. Obviously, have, but was there a meeting? What what was that?

Speaker 1 | 02:43 - 02:49
I mean, I don't look. I've been doing AI since the late eighties. Yeah. So I I don't know, like, all that. As far as I'm concerned, this stuff is all Johnny come lately.

Speaker 1 | 02:50 - 03:02
Yeah. You know, I mean, look, we've been doing AI our entire existence. I mean, we've been doing AI machine learning deep you know, deep we've been doing this stuff way from the beginning. Obviously, AI is just core to computer science. I I I actually view them as like quite, quite continuous.

Speaker 1 | 03:02 - 03:22
You know, Ben and I both have computer science degrees. You know, we we both Ben and I actually both are well enough to remember the actual AI boom in the 1980s. There a big AI boom at the time and there was a just glinator names like Expert Systems and they are of like Lisp and Lisp machines. I coded at Lisp. Was coding in Lisp in 1989 when that was the language of the AI future.

Speaker 1 | 03:23 - 03:28
Yeah. So this is something that we're like completely, you know, completely comfortable with. I've been doing the whole time and are very enthusiastic about.

Speaker 2 | 03:29 - 03:37
Is there a strong like this time is different? Because my closest analog was twenty sixteen, seventeen. It was also an AI boom And it petered out very, very quickly.

Speaker 1 | 03:38 - 03:38
Well

Speaker 2 | 03:38 - 03:40
It's just it's just in terms of investing.

Speaker 1 | 03:40 - 03:40
Sort of. Sort of.

Speaker 2 | 03:40 - 03:42
Investment investment excitement.

Speaker 1 | 03:42 - 04:03
Although that's really when the the the NVIDIA phenomenon really it was I would say it was in that period when it was very clear that at the time, the vocabulary was more machine learning. But it it was very clear at that time that machine learning was hitting some sort of takeoff point. Yeah. Well, as you guys you guys have talked about this at length on your on your thing. But, know, if you really track what happened, I think the real story is it was it was the AlexNet, basically breakthrough in like 2013.

Speaker 1 | 04:03 - 04:19
That was the that was the real knee in the curve. And then it was obviously the transformer breakthrough in '17. Yeah. And then everything that followed. But but, you know, look, machine learning, you know, there were, know, look I mean, look, I've been working, you know, I've been working with one of my, you know, kind of projects working with Facebook since 2004, and on the board since 2007.

Speaker 1 | 04:19 - 04:38
Of course, you know, they they started using machine learning very early. And, you know, I've used it basically, you know, for like twenty years for, you know, content, you know, feed optimization and advertising optimization and obviously many, financial services, many, many, many companies, many different sectors have been doing this. So it's like one of these things. It's like it's not a single thing. Like it's like layers, right?

Speaker 1 | 04:38 - 04:56
And the layers arrive at different paces, but they kind of build up. They kind of build up over time. Then look, in retrospect, was 2017 was kind of the, you know, the key point with the Transformer. Then as you guys know, was this really weird like four year period where it's like the Transformer existed and then it was just like Let's go. Yeah.

Speaker 1 | 04:56 - 05:11
Well, but it was but between 2017 and 2021, I mean that was the era of which like companies like Google had internal chatbots but they weren't letting anybody use them. Yeah. Right? And then you know, then OpenAI developed ChatGPT two and then they told everybody this is way too dangerous to deploy. Right?

Speaker 1 | 05:11 - 05:26
We're you know, we can't possibly let normal people normal people use this thing. And then you you guys, I'm sure, remember AI dungeon. Mhmm. So the so there was, a year where, like, the only way for a normal person to use GPT three was in in AI dungeon. And so we would do this, you'd go in there and you'd pretend to play Dungeons and Dragons.

Speaker 1 | 05:26 - 05:42
In reality, you're just trying to talk GPT. And so there was this long you know, big companies are cautious and the big companies were cautious. By the way, took OpenAI you know, they they talk about this. It took OpenAI time to actually adjust, you know, kind of redirect their research path.

Speaker 2 | 05:42 - 05:47
I think, it was at Rosewood. Right? The the dinner they founded OpenAI was right there.

Speaker 1 | 05:47 - 05:53
Right. But that that dinner would have taken place in '20 '18. '18. The formation of OpenAI Uh-huh. As late as 2018.

Speaker 2 | 05:53 - 05:56
Sorry. No. I'm I'm I'm wrong. Probably '20. Yeah.

Speaker 2 | 05:56 - 06:00
They just celebrated a ten year anniversary, so it it is 2025. Yeah. That's so 2015.

Speaker 1 | 06:00 - 06:06
Yeah. 2015. Yeah. 2015. But then Alec Radford did GPT one in what?

Speaker 1 | 06:06 - 06:12
Probably 1718. 1718. So it yeah. For the and then and then they didn't really and then GPT three was what? 2020, twenty

Speaker 2 | 06:13 - 06:14
Twenty twenty. That became copilot.

Speaker 1 | 06:14 - 06:31
Twenty media. '21. Yeah. Even OpenAI, which has been, you know, the leader of this thing in the last decade, you know, even they had to adapt and lean into the new thing. And so, yeah, I I think it's just this process of basically sort of wave after wave, layer after layer, you know, building on itself and then you kind of get these catalytic moments where where the whole thing pops.

Speaker 1 | 06:31 - 06:33
And and, obviously, that's what's happening now.

Speaker 2 | 06:33 - 06:49
Is it useful to think about, will there be an AI winter? Because there's always these patterns. Like, is this endless summer? It's something I constantly think about because do I get do I just, like, just get endlessly hyped and just trust that I will only be early and never wrong? Or Right.

Speaker 2 | 06:49 - 06:53
Will are we will there be a winter? So there's something about

Speaker 1 | 06:53 - 06:59
say the following. There's something about AI that has led to this repeated pattern. And and and and you guys know this.

Speaker 2 | 06:59 - 07:00
It's summer, winter, summer,

Speaker 1 | 07:00 - 07:17
Summer, winter, summer, winter, and it goes back eighty years. Yeah. Eighty years. So the original neural network paper was 1943, right, which is which is amazing that it was far back that long. Then there was I don't you guys have ever talked about this on your show, but there was this there was a big there was an AGI conference at Dartmouth University in 1950.

Speaker 1 | 07:17 - 07:31
'55. '55. Yeah. And they got an NSF grant to for the all the AI experts at the time to spend the summer together, and they figured if they had ten weeks together, they could get AGI, of the other end. They got their by way, they got the grant, they got the ten weeks and then, you know, 1955, you know, no no AGI.

Speaker 1 | 07:31 - 07:57
And like I said, I I lived through the eighties version of this where there was a big a big boom and a crash. And so so there is this thing and there there is something about AI that causes people in the field, I would say, to become both excessively utopian and excessively apocalyptic. And it's probably on both sides of like the boom bust cycle, kind of see that play up. Having said that, I think what's actually happened is like just, you know, and we now know in retrospect, like an enormous amount of progress that built up over time. For example, we now know that neural network is the correct architecture.

Speaker 1 | 07:57 - 08:25
And I will tell you, there was a sixty year run where that was like a or even seventy years where that was controversial. And we now know that that's the case. So everything we're building on today sort of derives from the original idea in 1943. And so in retrospect, we now know that like these guys are right, you know, they would get the timing wrong and they thought, you know, capabilities would arrive faster or it could be turned into businesses sooner or whatever. Like they were fundamentally, the scientists who worked on this over the course of decades were fundamentally correct about what they were doing and payoff from all their work is happening now.

Speaker 1 | 08:25 - 09:04
And so the way I think about what's happening is basically, think about basically the period we're in right now is it's I call it eighty year overnight success, right? Which is like, it's an overnight success because it's like bam, you know, ChatGPT hits and then one hits and then, you know, OpenClaw hits and like, you know, these are open these like overnight, like radical overnight transformative successes but they're drawing on an eighty year sort of Wellspring backlog, you know, of ideas and thinking. It's not just that it's all brand new, it's that it's an unlock of all of these decades of like very serious hardcore research and thinking. Look, there were AI researchers who spent their entire lives. They got their PhD, they've researched for forty years, they retired.

Speaker 1 | 09:04 - 09:10
In a lot of cases, they passed away and they never actually saw it work. So sad. Is sad. Is sad.

Speaker 2 | 09:10 - 09:11
And Jack Hinton was like the last guy.

Speaker 1 | 09:12 - 09:24
Yeah. Well, were guys Alan Newell. Mean, there's tons of John McCarthy. John McCarthy was like one of the inventors of the field. He's one the guys who organized the Dartmouth Conference and he taught at Stanford for forty years and passed away, I don't know whatever ten years ago or something.

Speaker 1 | 09:24 - 09:57
Never actually got to see it happen but like it is amazing in retrospect, like these guys were incredibly smart and they worked really hard and they were correct. So anyway, so then it's like okay, you know, as they say history doesn't repeat but it rhymes. It's like okay, does that mean that there's going be another like you know, basically boom bust cycle and I will tell you like look, like in a sense like yes, everything goes through cycles and you know, people get overly enthusiastic and overly depressed and there's a timelessness to that. Having said that, there's just no question. The dangerous words in Do investing are is you know the 12 most dangerous words of investing?

Speaker 1 | 09:57 - 10:07
No. The foremost dangerous words in investing are this time is different. Yeah. So the 12 most dangerous words. And so like, I tell you what's different like, now it's working.

Speaker 1 | 10:07 - 10:52
Like there's just no I mean look, there's just no question and by the way, I'll just give you guys my take, like LLMs like from basically the chat GPT moment through to '25, I think you could still, I think well intentioned, well informed skeptics could still say, oh, this is just pattern completion and oh, these things don't really understand what they're doing and you know, the hallucination rates are way too high and you know, this is going to be great for creative writing and creating, you know, Shakespearean sonnets and you know, as rap lyrics or whatever, it's gonna be great at all that stuff, we're not gonna be able to harness this to make this relevant in, you know, coding or in medicine or in law or in, you know, you know, kind of feels that, you know, kind of really, really matter. And I think basically it was the reasoning breakthrough. It was o one and then r one that basically answered that question. Basically said, oh, no. We're gonna be able to actually turn this into something that's gonna work in the real world.

Speaker 1 | 10:52 - 11:05
And and then, obviously, the coding breakthrough over the basically, the coding breakthrough that kinda catalyzed over the holiday break was kind of the third step in that. But he's like, alright. If if, you know, if Linus Torvalds is saying that AI coding is not better than he is, like like that's that's never happened

Speaker 2 | 11:05 - 11:07
before. That's the benchmark count.

Speaker 1 | 11:07 - 11:27
Yeah. That's never happened before and so now we know that it's it's gonna sweep through coding and and then and then we we know, you know, we know that if it's gonna work in coding, it's gonna work in everything else. Right? It's just that then because that's that's like that's that's the hardest in many ways, that's the hardest example and now everything else is going be a derivative of that. And then on top of that, we just got the agent breakthrough with OpenClaw, which is fantastic, is amazing and incredibly powerful.

Speaker 1 | 11:27 - 11:49
And then we just got the auto research, the self improvement, We're now into the self improvement breakthrough. And so way I think about it is we've had four fundamental breakthroughs in functionality, LLMs, reasoning, agents and then now RSI. And they're all actually working. And so I'm just like, you can jump, I'm jumping out of my shoes. Like, this is like, this is it.

Speaker 1 | 11:49 - 11:55
Like, this this is the culmination of eighty years worth of worth of work, this is the time it's becoming real. Yeah. Amazing. I'm completely convinced.

Speaker 3 | 11:55 - 12:12
I think the anxiety that people feel is like during the transistor era, you had Moore's Law, and it's like, alright, we understand why these things are getting better. We understand the physics of it. Yeah. With AI, it's it's so jagged in, like, the jumps. Where like like you said, it's like in three months, you have, like, this huge jump, like and people are like, well, this can keep happening.

Speaker 3 | 12:12 - 12:13
Right? But then it keeps happening.

Speaker 1 | 12:13 - 12:14
It will keep happening.

Speaker 3 | 12:14 - 12:33
And so, like, how do you think about also timelines of, like, what's worth building? I think we always have this question with guests, which is, like, you know, should you spend time building hardness for a model versus, like, the next model just gonna do it one shot in the latent space? Right. And how does that inform, like, how you think about the shape of the technology? You know, you talk about how it's a new computing platform.

Speaker 3 | 12:34 - 12:40
If you have a computing platform, then, like, every six months, it, like, drastically changes in what it looks like. It's hard to build companies on top of it.

Speaker 1 | 12:40 - 12:46
Yeah. So so a couple things. So one is, look. The the Moore's Law was what we now call a scaling law. Like, Moore's Law was a scaling law.

Speaker 1 | 12:46 - 13:15
And for your younger viewers, Moore Moore's law was every chip chips either get twice as powerful or twice as cheap every every 18 months. And that and that and then, know, that it's gotten more complicated in the last few years, but, like, that that was, like, the fifty year trajectory of of of the computer industry. And then and then by the way, and that's what took the mainframe computer from a $25,000,000 current dollar thing into, you know, the phone in your pocket being, know, a million times more powerful than that, like that, you know, for for $500. And so that that was a scaling law. And then and then and then key to any scaling law, including Moore's law and the AI scaling laws is, you know, they're not really laws, right?

Speaker 1 | 13:15 - 14:02
They're predictions but when they work, they become self fulfilling predictions because they set a benchmark and then the entire industry, right, all the smart people in the industry kind of work to make sure that that actually happens And so they kind of motivate the breakthroughs that are required to keep that going and in chips, that was a fifty year that was a fifty year run, right? And it was amazing and it's still happening in some areas of chips. I think the same thing is happening with the core scaling laws, the core scaling laws in AI. You know, they're not really laws but like they are basically their predictions and then they're motivating catalysts for the research work that is required to be and by the way also the investment dollars, you know, required to basically keep the curves going. And look, it's going to be complicated and it's going to be variable and there, you know, there are going to be walls that are going to look like they're fast approaching and then they're going to be, you know, engineers are going get to work and they're going to figure out a way to punch through the walls.

Speaker 1 | 14:02 - 14:22
And obviously that's, you know, that's been happening a lot. You know, and then look, there's going be times when it looks like the walls have you know, the laws have petered out and then they're going to pick up again and surge. Then it appears what's happened to the eye is there's now multiple scaling laws. There's multiple areas of improvement. I think, know, I don't know how many more there are already yet discovered but there are probably some more that we don't know about yet.

Speaker 1 | 14:22 - 14:43
For example, there's probably some scaling law around world models and robotics that we don't fully kind of acquisition of data at scale in the real world that we don't fully understand yet. That one will probably kick in at some point here. There's a bunch of really smart people working on that. And so yeah, I think the expectation is that the scaling laws generally are going to continue. Yeah, the pace of improvement will continue to move really fast.

Speaker 1 | 14:44 - 15:36
To your question on like what to build, so I'm a complete believer that the scaling laws are going to continue, I'm a complete believer the capabilities are going to keep getting amazing, you know, leaps and bounds. The part where I kind of part ways a little bit with what I would describe as the AI purists, you know, which I would characterize as like the people who are many ways the smartest people in the field, but also the people who spend their entire life like at a lab, and have to have I would say have very little experience in the outside world. The the nuance I would offer is the outside world of 8,000,000,000 people and institutions and governments and companies and economic systems and social systems is really complicated. Doesn't know, it it 8,000,000,000 people making collective decisions on planet Earth is not a simple process of like just like you see this happening now. It's like a bunch of the AI CEOs have this thing, which is just like, well, there's just this they just all have this kind of thing when they talk in public where they're just like, well, there's this obvious set of things that society used to do.

Speaker 1 | 15:36 - 15:46
Mhmm. And then they're like, society is not doing any of those things. Right? And it's like, how can society not you know, whatever their theory is, how can society not see x y z? And the answer is, well, society is number one, there's no single society.

Speaker 1 | 15:46 - 16:10
It's like 8,000,000,000 people and they like all have a voice and they all have a vote like at the end of the day of how they react to change and then you know, it just like it's just human reality is just really complicated and messy. And so the specific answer to your question is like, as usual, it depends. You know, it depends. Look, there's no question people are going to like, there's no question there are going be companies, it's already happening. There are companies that think that they're building value on top of the models and they're just going get blitzed by the next model.

Speaker 1 | 16:10 - 16:33
There's no question that's happening. But I think there's no question also that just the process of adaptation of any technology into the real messy world of humanity is just going to be messy and complicated. It's not going to be simple and straightforward. It's going be messy and complicated. And there are going be a lot of companies and a lot of products and in fact, entire industries that are going to get built to basically actually help all of this technology actually reach real people.

Speaker 3 | 16:33 - 17:00
The amount of capital going into these companies I mean, Dario talked about it on the Dorkash podcast, and Dorkash was like, why don't you just buy 10 x more GPUs? And he's like, because I'm gonna go bankrupt if the model doesn't exactly hit the the performance level. How do you think about that also as a risk on you know, you guys are investors in OpenAI and Thinking Machines and World Apps. It seems like we're leveraging the scaling loss at a pretty high rate. Like, how comfortable, I guess, do you feel with the downside scenario?

Speaker 3 | 17:00 - 17:07
Like and say, like, thanks, Peter Al. You think you can kinda, like, restructure these build outs and, you know, capital investments?

Speaker 1 | 17:07 - 17:17
Yeah. So I should start by saying so I lived through the .com crash, and I can tell you stories for hours about the .com crash, and it was horrible. No. It was awful. It was it was it was apocalyptic.

Speaker 1 | 17:17 - 17:25
By the way, the a lot of the .com crash was actually at the time, it was actually a telecom crash. It was a bandwidth crash. Like, the the thing that actually crashed that wiped out all the money was the the telecom companies.

Speaker 2 | 17:25 - 17:26
Global crossing?

Speaker 1 | 17:26 - 17:27
Global. Yeah.

Speaker 2 | 17:27 - 17:28
So I'm from Singapore,

Speaker 3 | 17:28 - 17:29
and they

Speaker 2 | 17:29 - 17:32
they laid so much cable over over our oceans.

Speaker 1 | 17:32 - 18:12
Actually, there was a scaling law in the .com era, and it was literally the the US Commerce Department put out a report in 1996, and they said Internet traffic was doubling every quarter. And and actually in 1995 and 1996, internet traffic actually did double every quarter and so that became the scaling law. So what all these telecom entrepreneurs did was they went out and they raised money to build fiber anticipating that the demand for bandwidth was gonna keep doubling every quarter. Doubling every quarter though is like, you know, grains of chess on the chessboard, like at some point the numbers become extremely large, right? And it really and really what happened was the internet, internet by the way continuously kept growing basically since inception, it's, you know, it's continuously grown, it's never shrunk and it's grown really fast compared to anything else, you know, in human history, but it wasn't doubling every quarter as of 1998, 1999.

Speaker 1 | 18:12 - 18:50
And so there was this gap in the expectation of what they thought was a scaling law versus reality and that's actually what caused the dot com crash, which was they way over companies like Global Crossing way overbuilt fiber, which is sort of the and by the way, fiber telecom equipment, you know, so all the all the networking gear, you know, and then and then by the way, the actual physical data centers, like that was the beginning of the of the of the data center build and then and then data center overbuild. And so you had that, but it was it was literally, I think it was like $2,000,000,000,000 got wiped out. Right? It was like Jesus Christ. It was like a big it was and by the way, the other the other subtlety in it was the Internet companies themselves never really had any debt because tech tech companies generally don't run on debt, but the telecom companies run on debt.

Speaker 1 | 18:50 - 19:05
Physical infrastructure companies run on debt. And so the companies like Global Crossing not just raise a lot of equity, they also raise a lot of debt. So they're highly levered. And so then you just do the thing of just like, okay, have a highly levered thing where you're just overbuilding capacity. Demand is growing, but not as fast as you hoped and then boom bankrupt, right?

Speaker 1 | 19:05 - 19:28
And then it's like they say about the hotel industry, which is it's always the third owner of a hotel that makes money. It has to go bankrupt twice, right? You have to wash out all of the overoptimistic exuberance before it gets to actually a stable state and then it makes money. So by the way, all of those data centers and all of those, all the fiber that they're used, it's all in use today, but 25 later. And actually the elapsed time was it took fifteen years.

Speaker 1 | 19:28 - 20:05
It took fifteen years from 2000 to 2015 to actually fill up all the capacity. The cautionary warning is the overbuild can happen. And you know, you get into this thing where basically everybody who basically has any sort of institutional capital is like, wow, it's just, I don't know how to invest in these crazy software things, but for sure I can put build data centers and for sure I can buy GPUs and I can deploy you know, compute grids and all these things. And so you know, you're a pessimist, can look at this and you can say, wow, this is like really set up to be able to basically replicate you know, what we went through in 2000, obviously that would be bad. The counter argument which is the one I agree with, which is the counter on the other side is a couple of things.

Speaker 1 | 20:05 - 20:39
One is the companies that are investing all the the companies that are investing the money are like the bluest chip of companies. And so back back in the in the doc like Global Crossing was like an it was like an entrepreneur, was like a new venture. But like the money that's being deployed now at scale is Microsoft and, you know, and Amazon and Google, right, and Facebook and Nvidia and, you know, these these and and now, you know, by the way, OpenAI and Anthropic, which are now at like, know, really serious size, you know, as companies with, you know, very serious revenue. These are very large scale companies with like lots, lots of cash, lots of debt capacity that they've never used. And so this is institutional in a way that that really wasn't at the time.

Speaker 1 | 20:39 - 21:10
And then the other is, at least for now, every dollar that's being put into anything that results in a running GPU is being turned into revenue right away. Like so, and you guys know this, like everybody starved for capacity, everybody starved for compute capacity and then, you know, all the associated things, memory and interconnect and everything else, data center space. And so every dollar right now that's being put in the ground is turning into revenue. In fact, I actually think there's an interesting thing happening, which is because everybody's starved for capacity, the models that we actually have that we can use today are inferior versions of what we would have if not for the supply constraints. It's true.

Speaker 1 | 21:10 - 21:24
If if right. Suppose a hypothetical universe in which GPUs were 10 times cheaper and 10 times more plentiful, the models would be much better because you would just allocate a lot more money to training and you'd just build better models and they would be better. And so we're we're actually getting the sandbag version of the technology.

Speaker 2 | 21:24 - 21:29
No, everything we use is quantized because the labs have to keep the full versions.

Speaker 1 | 21:29 - 21:51
Right. We're not even getting the good stuff. But getting the good stuff, it's just even if technical progress stops, once there's like a much bigger build of like GPU manufacturing capacity and memory, you know, all the things that have to happen in the course of the next five or ten years, once it happens, even the current technology is gonna get gonna get much better. And then as you know, like there's just like a million ways to use this stuff. Like there's just like a million use cases for this.

Speaker 1 | 21:51 - 22:09
Like it it you know, this isn't just sending packets across a a thing whatever and hoping people find something to do with it. This is just like, oh, we apply intelligence in every domain of human activity and then it works like incredibly well. Yeah. Here's what I know, here's what I know. In the next three or four years, it's like somewhere between three or four years out, basically everything is selling out.

Speaker 1 | 22:09 - 22:38
So like the entire supply chain is sold out or selling out and so there's no like we're just going to have like chronic supply shortage for you know, for years to come. There's going to be a response from the market that's gonna result in an enormous you know, it's happening now, an enormous flood of investment in a new fab capacity and, you know, every everything else to be able to do that. At some point, the supply chain constraints will unlock, at least to some degree. That will be another accelerant to industry growth when that happens because the products will get better and everything will get cheaper. And so I know that's going to happen.

Speaker 1 | 22:38 - 22:54
I know that the deployments, the actual use cases are like really compelling. And then like said, I you know, with reasoning and agents and so forth, like I know they're just going to get like much, much better from here. And so I know the capabilities are like really, really serious. I also know that the technical progress is not going to stop. It is accelerating.

Speaker 1 | 22:54 - 23:13
Like the breakthroughs are tremendous. I mean, even just month over month, the breakthroughs are really dramatic. And so, you know, I think if you were a cynic and there there are cynics, you can look at 2,000, you can find echoes, but I can't even imagine betting on that this is gonna like somehow disappoint in, you know, at least for years to come. I think it would be essentially suicidal to make that bet. Was that Michael Burry?

Speaker 2 | 23:14 - 23:15
That's an interesting guy.

Speaker 1 | 23:15 - 23:19
Yeah. We'll pick on a guy. We'll pick let's pick on one guy. Well, he did. He he came out with it was it was the

Speaker 2 | 23:19 - 23:20
He doesn't mind.

Speaker 1 | 23:20 - 23:49
It was the NVIDIA Short, right? He came out with the NVIDIA Short. And then if you guys probably talked about this, which is the analysis now that like the current models are getting better faster at such a rate that if you are running an Nvidia inference chip today that's three years old, you're making more money on it today than you did three years ago because the pace of improvement of the software is faster than the depreciation cycle of the chip. Then my understanding is Google is running, I don't know exactly what these are rumors that I've heard or maybe it's public, but I think Google's running very old TPUs, very profitable. Yeah.

Speaker 1 | 23:49 - 24:08
And very and very profitably. Yeah. And so so it actually turns out, as far as I can tell, it's actually the opposite of the Bury thesis is actually he was actually a 180 degrees wrong. It's actually the the old NVIDIA chips are getting more valuable, which is something that's like literally never happened before. Like it's never been the case that you have an older model chip that becomes more valuable, not less valuable.

Speaker 1 | 24:08 - 24:19
And again, that's an expression of that just in ferocious pace of software progress, ferocious pace of capability payoff that you're getting on the other side of this. And so I just the idea of betting against that, like

Speaker 2 | 24:19 - 24:20
Yeah. One of my

Speaker 1 | 24:20 - 24:22
It's like an invitation to get your face ripped off.

Speaker 2 | 24:22 - 24:47
One of my early hits was like modeling the lifespan of the h 100 h two hundreds and and going like, you know, usually they advise like four to seven years and it was, you know, maybe you sort of realistically care, cut it down to two to three, but actually it's going up and not down. And and that's, I mean, that's I think that's the dream. We are finding utilization and I think utilization solves all problems. Like, you can you can find use use cases for even like the port like, even memory, we're having a shortage. Right?

Speaker 2 | 24:47 - 24:53
And and even like the the shittier versions of of memory that we do have, we are finding use cases for it. So, like, that's great.

Speaker 3 | 24:53 - 25:06
Yeah. How how important is open source AI and kinda like edge inference in a world in which you have three years of supply crunch? Like, do you think in the like, you know, if you fast forward, like, five years, like, how do you think about inference in the data center versus at the edge?

Speaker 1 | 25:06 - 25:29
Well, so just to start yeah. So I think I think open source is very important for a bunch of reasons. I think edge edge inference is very important for a bunch of reasons. I I think just practically speaking, if we're just gonna have fundamental supply crunches for the next I mean, you you guys know, if you just project forward demand over the next three years relative to supply, one of the main predictions you can do is what's gonna happen to the cost of inference in the core over the next three years. And like, it may rise dramatically, right?

Speaker 1 | 25:29 - 25:45
Like, so what is, and then is, you know, like the big model companies are subsidizing heavily right now. Right, right. And so what's the, what will be the average person's, you know, per day per month token cost, you know, three years from now to do all the things that they wanna do? And I I don't know what's gonna be. I mean, I have you guys probably have friends.

Speaker 1 | 25:45 - 25:55
I have friends today who are paying a thousand dollars a day for OpenClaw, for claw tokens to run OpenClaw. Right? And so, okay, dollars 30,000 a month. Right? And and by the way, those those friends have like a thousand more ideas of the things that they want their claw to do.

Speaker 1 | 25:55 - 26:09
Right? And so you could imagine there there's like latent demand of up to, I don't know, 5 or $10,000 a day of of tokens for a fully deployed, you know, personal agent. And obviously consumers can't pay that. Right? And so so but it gives you a sense of the of the future scope of demand.

Speaker 1 | 26:09 - 26:26
Right? And so so even even if there's a 10 x improvement in price performance, that still, you know, goes to a $100 a day, which is still way beyond what people can pay. So there's just gonna be like ferocious demand. By the way, the agent thing the other interesting thing is I think the agent thing so up until now, a lot of the constraints have been GPU constraints. I think the agent thing now also translates into CPU constraints.

Speaker 2 | 26:27 - 26:28
CPU and memory, yes.

Speaker 1 | 26:28 - 26:31
CPU and memory, right? So like the entire chip ecosystem

Speaker 2 | 26:31 - 26:31
is

Speaker 1 | 26:31 - 26:31
just

Speaker 2 | 26:31 - 26:33
gonna get Wait for network constraints. That that

Speaker 1 | 26:33 - 26:44
will be the killer. It's all bottlenecked potentially for years. And so so I I think that Brad and and I think it's actually possible. I mean, generally, inference costs are gonna keep coming down, but I think the let's put it this way. The rate of decline, I think, may level out here for a bit because of these supply constraints.

Speaker 1 | 26:45 - 27:11
And then at some point maybe the lab stops subsidizing so much and that again will be an issue. And so there's just gonna be so much more demand for inference than can be satisfied, know, kind of with the centralized model. And then you guys know this, but like all the just the dramatic innovations that have happened in the Apple silicon to be able to do inferences, it's quite amazing. The level of effort being put like the open source guys are putting incredible effort into getting This recurring pattern where the big model will never run on a PC and then six months later, it runs on a PC. Right?

Speaker 1 | 27:12 - 27:23
It's like amazing. And there's very smart people working on that. So there's all that. And then look, there's also, you know, there's also like other, there's other motivators. There's other motivators, which is just like, okay, how much trust are the big centralized model providers?

Speaker 1 | 27:23 - 27:43
You know, How much trust are they building in the market versus how much are, at least for in certain cases with some people for certain use cases, people being like, well, I'm not willing to just like turn everything over. So there's all the trust issues. By the way, there's also just like straight up price optimization. There's many uses of AI where you don't need Einstein in the cloud. You just need like a a smart local model.

Speaker 1 | 27:43 - 28:08
There's also performance issues where you wanna you know, you you want you know, you're gonna want your darn op to have an AI model in it, you know, to be able to, you know, do, you know, to be able to do access control. Obviously, like everything with a chip is going to have an AI model in it and a lot of those are going to be local. And so, yeah, no, like I think I think you're going to have and then you're going to, by the way, also wearable devices, you know, you you don't wanna do a complete round trip. You want you know, you you whatever your smart devices are, you want it to be, like, super low latency. Yeah.

Speaker 2 | 28:08 - 28:21
The question, do we care who makes it? One of the biggest news this week was the collapse of AI two, the Allen Institute, one of the actual American open source model labs. Yep. And I'm not that optimistic on on American open source. Yeah.

Speaker 2 | 28:21 - 28:26
Like, you you guys invested in Mistral, and Mistral's doing extremely well outside of China. That's about it.

Speaker 1 | 28:27 - 28:32
Yeah. We'll see. We'll see. I look. Number one, I do think we care I do think we I do think we care who makes it.

Speaker 1 | 28:32 - 28:42
I would say this. The the the the previous presidential administration wanted to kill it in The US. Like, wanted to drown in the bathtub, and so they wanted to kill it. So at least we have a government now that actually, like, actually wants it wants it to happen.

Speaker 2 | 28:42 - 28:43
And you're in the council?

Speaker 1 | 28:43 - 28:56
And I've asked. And the new and the p p cast. Yeah. So the the know, this admin for whatever other political issues people have, which are many, you know, this administration has, I think, a very enlightened view and in particular an enlightened view on AI and in particular on open source AI. And so they're very supportive.

Speaker 1 | 28:56 - 29:22
My read is the the Chinese have a very the various Chinese companies have a very specific reason to do open source, which is they they they don't fundamentally, they don't think they can sell commercial AI outside of China right now and or at least specifically not not in The US for a combination of reasons. And so they they kind of view, I think, open source AI as a bit of a loss leader against basically domestic, you know, paid paid services and then kind of you know, kind of ancillary products. You know, they're they're very excited about it. By the way, think it's great. I think it's great that they're doing it.

Speaker 1 | 29:22 - 29:34
You know, I think DeepSeek was like a gift to the world. I think the great thing about open source open source the impact of open source is felt two ways. One is you you get the software for free. But the other is you get to learn how it works. Right?

Speaker 1 | 29:34 - 29:38
And so like The paper. The paper. The paper and and the code. Right? And the code.

Speaker 1 | 29:38 - 29:55
And so like, for example, I thought this was amazing. So OpenAI comes out with a one and it's an amazing technical breakthrough and it's just like absolutely fantastic. But of course, they don't explain how it works in detail and then of course they hide the reasoning traces, right? And then everybody's like, okay, this is great, but like who's going be able to replicate this? Are other people going be able to do this?

Speaker 1 | 29:55 - 30:44
You know, is there a secret sauce in there? And then R1 comes out and it's just like, there's the code and there's the paper and now the whole world knows how to do it. And then, you know, three months later, every other AI model is is adding reasoning and so so you get this kind of double, like even if the Chinese models themselves are not the models that get used, the education that's taken place to the rest of the world, the information diffusion, you know, is incredibly powerful. So that happens and then I don't know, we'll we'll see, you know, there are a bunch of American, you know, open source, you know, AI model companies. I mean, there's going to be tremendous, know, there's going to be there's tremendous competition among the primary model companies, know, there's depending on how you count, there's like four or five, you know, big co model companies now that are, you know, kinda neck and neck in different ways, you know, and and and, you know, and then obviously both both Axon and MetaWireVev and Valder, you know, both have huge, you know, huge attempts to, you know, kinda to kinda leapfrog underway.

Speaker 1 | 30:44 - 30:57
And then you've got, you know, a whole fleet of startups, new companies, including a whole bunch that we're back in that are, you know, trying to come up with different approaches. And then you've got whatever it is. I don't know. How how many how many, like, mainline foundation model companies are there in China at this point? It's probably six.

Speaker 2 | 30:57 - 31:02
It's five tigers is what they call it. Quinn is in in questionable because of Right. There's change in leadership.

Speaker 1 | 31:02 - 31:05
Right. Yeah. But that does not include that that includes, like, Moonshot. Yes.

Speaker 2 | 31:05 - 31:12
Kimi, DeepSeek, ZAI, Quinn o one is in there. Right.

Speaker 1 | 31:12 - 31:14
And then, and ByteDance. And and then you see ByteDance

Speaker 2 | 31:14 - 31:17
would be like the next tier. ByteDance. Weren't as prominent. They

Speaker 3 | 31:17 - 31:17
weren't have a

Speaker 2 | 31:17 - 31:18
But now, you know,

Speaker 1 | 31:18 - 31:43
But they're, you know, CDance is very inspiring, and presumably they have more stuff coming and Tencent probably has more stuff coming and and so forth. And so so like, look, here would be a thing you can anticipate which is there are not these markets, there are not going to be between The US and China right now, there's like a dozen primary foundation model companies that are like at scale at some level of like critical mass. It's not going to be a dozen in three Right? Like, just because these industries don't bear a dozen. It's it's gonna be three you know, there's gonna be three or four big winners or maybe one or two big winners.

Speaker 1 | 31:43 - 31:56
And so there's gonna be like a whole bunch of those guys that are gonna have to figure out alternate strategies. And I think like open source is one of those strategies. And so I I think you could see like a whole I think the question's like who's gonna do open source? I think that could change really fast. I I think that that that's a very dynamic thing.

Speaker 1 | 31:56 - 31:59
I think it's very hard to predict what happens. And and I think it's very important.

Speaker 2 | 32:00 - 32:01
NVIDIA is doing a lot. You know what you're

Speaker 3 | 32:01 - 32:01
say?

Speaker 1 | 32:02 - 32:12
Well, exactly. And then you got NVIDIA and then and then, know, just to get an industrial an there's old thing in business strategy, which is called commoditize the Commoditize the complement. And so right. And so if you're Jensen, it's just kind of obvious. Of course, you wanna commoditize the software.

Speaker 1 | 32:12 - 32:18
Yeah. And he's and to his enormous credit, he's putting enormous resources behind that. And so maybe it maybe it's literally Nvidia, and I think that would be great.

Speaker 3 | 32:19 - 32:24
Yeah. Yeah. Narrative violation to European projects. In the beginning.

Speaker 2 | 32:25 - 32:29
Bam. I I'm hosting my Europe conference soon, and I got both of them.

Speaker 3 | 32:29 - 32:32
They got us. They got us, Mark. They got us.

Speaker 1 | 32:32 - 32:34
Wait a minute. Where was Peter? Where was Stijberger when

Speaker 3 | 32:34 - 32:35
he did He was in Austria.

Speaker 1 | 32:35 - 32:36
Yeah. Yeah. He was in what?

Speaker 3 | 32:36 - 32:36
He in Vienna.

Speaker 1 | 32:36 - 32:38
Oh, he was in Vienna. And then where is he now?

Speaker 2 | 32:39 - 32:40
He's moving to SF.

Speaker 1 | 32:40 - 32:41
Okay. Okay. Alright. Okay. There we go.

Speaker 1 | 32:41 - 32:44
And then, yeah, the Pie guy alright. The Pie guys are European. Yeah.

Speaker 3 | 32:44 - 32:46
They're they're buddies in Australia. Mario is also there.

Speaker 1 | 32:46 - 32:50
Yeah. Right. And are they yeah. They haven't announced yet any sort of change change till or have they?

Speaker 3 | 32:50 - 32:52
No. They're they have a company there. Okay.

Speaker 2 | 32:52 - 32:53
Got it. Okay. Good.

Speaker 1 | 32:53 - 32:53
Good. Good. Yeah.

Speaker 2 | 32:53 - 33:03
Good. Anyways, I think PI and OpenCloud are very important software things, and and I just wanted you to just go off on what you think.

Speaker 1 | 33:03 - 33:07
Yeah. So I think in the the combination of the two of them, I think, is one of the 10 most important software

Speaker 2 | 33:07 - 33:10
OpenCloud got all the attention, but Right. Talk about PY.

Speaker 1 | 33:10 - 33:26
PY is kind of the end. Yeah. PY is kind of the architectural breakthrough. For those of us who are older, there was this whole thing that was very important in the world of software basically from, like, 1970 to I don't know. It it still is very important, but like '19 from 1973 to like basically the creation of Linux, which is basically this this thing we used to call like the Unix mindset.

Speaker 1 | 33:26 - 33:53
Like, so so because there were all these different, you know, theories. There are all these different operating systems and mainframes and and then, you know, all these windows and Mac and all these things. Then there was this, kind of behind it all was this idea of kind of the Unix mindset. And the Unix mindset was this thing where basically you don't have these like, like in the old days, like like the operating system that like made the computer industry really work like in the 1960s was this thing called OS360, which was this big operating system IBM developed that was supposed to basically run everything. And it was this, like, giant monolithic architecture in the sky.

Speaker 1 | 33:53 - 34:13
It was like a, you know, it was like a giant castle, of software. And and by the way, it worked really well, and they were very successful with it. But, like, it was this huge castle in the sky. But it was this thing that was almost unapproachable, which is like you had to be kind of inside IBM or very close to IBM and you had to really understand every aspect of the system worked. Then the Unix guys originally out of AT and T and then out of Berkeley, know, came out and they said, no, let's have a completely different architecture.

Speaker 1 | 34:13 - 34:34
And the way architecture is gonna work is we're gonna we're gonna have a prompt and a and a shell. And then and then we're gonna all the functionality is gonna be in the form of these discrete modules, and then you're gonna be able to chain the modules together. And so like the the the it's almost like the operating its operating system itself is gonna be a programming language. And then that led led to the the the sort of centrality of the shell. And then that led to sort of, you know, basically changing the other Unix tools.

Speaker 1 | 34:34 - 34:52
And then that led to the emergence of these these scripting languages like Perl where you you could basically kind of very easily do this. And then the shells got more sophisticated. And then and then and then look, like, you know, that that that number one, that worked and that that was the world I grew up in. Like, was I was a Unix guy, you know, sort of from call it 1988 to, you know, kind of all the way through my work. It worked really well.

Speaker 1 | 34:52 - 35:13
It's in the background, you know, normal people didn't need to necessarily know about it. But like if you were doing like system architecture or application development, you knew all about it. And then, you know, it's been in the background ever since. And, you know, look, your Mac still has a Unix shell, you know, kind of in there and your iPhone still has a Unix shell kind of buried in there somewhere. So they're kind of in there and then, you know, the Windows shell is kind of a, you know, sort of a weird derivative of that.

Speaker 1 | 35:13 - 35:34
But, you know, but look, Internet the Internet runs on Unix, and then smartphones, actually both iOS and Android are Unix derivatives. And so, you know, kind of Unix did end up winning. But anyway, but and then we just started taking that for granted and then and then so so basically, the the way I think about what happened with PIE and then with OpenClaw is basically what those guys figured out is, I would say the great breakthroughs are obvious in retrospect, right? Which is The best kind. The best kind.

Speaker 1 | 35:34 - 35:47
They weren't obvious at the time or somebody else would have done them already. And so there is a, like, a real conceptual leap, but then you look at it sort of the backwards looking and you're just like, oh, of course. Like, to me, those are always the best breakthroughs. So actually, language models themselves are like that. It's just like, oh, next token completion.

Speaker 1 | 35:47 - 35:48
Oh, of course.

Speaker 2 | 35:48 - 35:50
Yeah. What other objective mattered?

Speaker 1 | 35:50 - 36:05
Yeah. Exactly. But but, like, right, but she's even saying it wasn't obvious until somebody actually did it, right? And so the conceptual breakthrough is real and deep and powerful and very important. And so the way I think about PI and Open Claw is it's basically marrying the language model mindset to the UNIX basically shell prompt mindset.

Speaker 1 | 36:05 - 36:34
And so it's basically this idea that what what so what is an agent, right? And as you know, like many smart people have been trying to figure out what an agent is for decades and they've had many architectures to build agents in the whole thing and it turns out what is an agent? So it turns out what we now know is an agent is the following, it's it's it's a language model and then above that, it's a bash it's a bash shell. So it's a it's a Unix shell and then it's and then the agent has access has access to to the shell and you know, hopefully hopefully in a sandbox, maybe maybe sandbox. In So it's it's the model, it's the shell, and then it's a it's a file system.

Speaker 1 | 36:35 - 37:13
And then the state is stored in files and then, you know, there's the markdown format for the, you know, for for the files themselves and then and then there's basically what in Unix is called a cron job. There's a loop and then there's a heartbeat for the there's heartbeat and and the thing basically wake wakes up wakes up. So it's basically LLM plus shell plus file system plus markdown plus cron and it turns out that's an agent and and and every part of that other than the model is something that we already completely know and understand and in fact, it turns out the like the latent power of the Unix shell is like extraordinary because basically like all like there's just like an there's just enormous latent power in the shell. There's enormous numbers of Unix commands. There's enormous number of command line interfaces into all kinds of things already in the, you know, your entire, I mean your entire, just to start with your computer runs on a shell.

Speaker 1 | 37:13 - 37:31
If you're running a Mac or or a phone, your computer your computer is running on a shell, already. And so like the full power of your computer is available at the command line level. And then it turns out it's really easy to expose other functions as a command line interface. And so like this whole idea where we need like MCP and these like fancy protocols, whatever, it's like, don't. We just need like a command command line thing.

Speaker 1 | 37:31 - 37:53
So that's the architecture. And then it turns out, what is your agent? Your agent is a bunch of files stored in a file system. And then there's the thing that just like completely blew my mind when I wrap my head around it as a result of this, which is like, okay, this means your agent is now actually independent of the model that it's running on because you can actually swap out a different LLM underneath your agent and your agent will change personality somewhat because the model is different, but all of the state stored in the files will be retained.

Speaker 2 | 37:53 - 37:55
Yeah. Different instruction set, but you just compile them.

Speaker 1 | 37:55 - 38:02
Right. Exactly. And it's alright. It was like swapping out a ship and recompiling. But it's your agent with all of its memories and with all of its capabilities.

Speaker 1 | 38:02 - 38:22
And then by the way, you can also swap out the shell, so you can move it to a different execution environment that is also a bash shell. By the way, you can also switch out the file system, right? And you can swap out the heartbeat for the cron framework, the loop, the agent framework itself. And so your agent basically is basically at the end of the day, it's just its files. Then there's a course

Speaker 2 | 38:22 - 38:23
Simple call.

Speaker 1 | 38:23 - 38:50
Yeah, it's basically, it's just the files. And by then the way, as a consequence of that, the agent and then the agent itself, it turns out a couple important things. So one is it can migrate itself, right? And so you can instruct your agent, migrate yourself to a different runtime environment, migrate yourself to a different file system, migrate yourself to a different, know, like we swap out the language model, your agent will do all that stuff for you. And then there's the final thing which is just amazing, which is the agent actually has full introspection and actually it actually knows about its own files and it could rewrite its own files, Right?

Speaker 1 | 38:50 - 39:15
Which by the way, is basically no widely deployed software system in history where the the the thing that you're using actually has full introspective knowledge of how it itself works and is able to modify itself like that. That I mean, there have been toy systems that have had that, but there there's never been a widely deployed system that has that capability. And then that leads you to the capability that just like completely blew my mind when I wrap my head around it, which is you can tell the agent to add new functions and features to itself, and it can do that. Extend yourself. Right?

Speaker 1 | 39:15 - 39:25
Extend yourself. Like, extend yourself. Give yourself a new capability. Right? And so and so literally, it's just like you run into somebody at a party and they're like, I have my open claw do whatever, connect to my eat sleep bed and it gives me better advice in sleep.

Speaker 1 | 39:25 - 39:45
And you go home at night and you tell your claw or if they're at the party by way, you tell your claw, oh, add this capability to yourself. And your claw will say, oh, okay, no problem. It'll go out on the Internet, it'll figure out whatever it needs, and then it'll go out to cloud code or whatever. It'll write whatever it needs, and then the next thing you know, it has this new capability. And so you don't even have to like, you can have it upgrade itself without even having to without having to do anything other than tell it that you wanted to do that.

Speaker 1 | 39:45 - 40:02
And so anyway, so the the combination of all this is just, I mean, this is just like a massive, incredible I mean, it's just incredible. Like if I if I were if I were 18, like this is a 100 this is what I would be spending all of my time on. This is like such an incredible conceptual breakthrough. And again, people are gonna look at it and they already get this response. People are gonna look at it they're gonna say, oh, well, where's the breakthrough?

Speaker 1 | 40:02 - 40:17
Because all of these components were already known before. But this is the key. The key to the breakthrough was by using all these components that were known before, you get all of the underlying capability of this buried in there. And for example, computer use all of a sudden just kind of falls trivial. Of course, it's gonna be able to use your computer.

Speaker 1 | 40:17 - 40:34
It has full access to the shell. Right? And then you you you give it access to a browser and then you've got the computer and the browser and and off and away it goes. And then you've got all the abilities of the browser And so and so the capability unlock here is profound. My friends who are, you know, deepest into this are having their claw do like a like literally, like a thousand things in their lives.

Speaker 1 | 40:34 - 40:50
They have new ideas every day. They're just like constantly throwing new challenges at the thing. And by the way, it's early and you know, these are, you know, these are prototypes and there's, you know, as you guys know, there's security issues. Yeah. And and so, you know, there's a bunch of stuff to be ironed out, but the the unlock of capability is just incredible.

Speaker 1 | 40:50 - 41:02
Yeah. And I I have absolutely no doubt everybody in the world is gonna is gonna have at least, you know, an agent like this, if not an entire family of agents, and we're gonna be living in a world where I think it's almost inevitable now that this is the way people are gonna use computers.

Speaker 2 | 41:02 - 41:23
I was gonna say for someone who is deeply familiar with social networks, the next step is your claw talking to my claw Mhmm. Posting on claw Facebook, posting their jobs on claw LinkedIn, and close posting their tweets on claw x a I or whatever. You know? I do think that that is how, you know, we we get into some danger there in terms of, like, alignment and whether or not we want these things to to to run.

Speaker 1 | 41:23 - 41:26
Do you guys know rentyrentyhuman.com? Yeah. Renty. Yeah.

Speaker 3 | 41:26 - 41:27
Yeah. Yeah. Yeah.

Speaker 2 | 41:27 - 41:31
I mean, it's Fiverr. It's TaskRebit. Sure. Course. Chronic Mechanical Turk.

Speaker 1 | 41:31 - 41:34
Yeah. But flipped. Yeah. Right? The agent hiring the people.

Speaker 1 | 41:34 - 41:36
Yeah. Which, of course, is gonna happen. Right? It's obviously gonna happen.

Speaker 3 | 41:37 - 42:03
I'm curious if you have any thoughts on the engineering side. So when you build the browser, the Internet, you know, just a bunch of mostly plain text file plus some images. And today, the every website and app is, like, so complex and, like, somehow, you know, the browser kept evolving to fit that in. Are there any design choices that were made, like, early in the browser and kinda like the Internet and the protocols that you're seeing agents similar today? So, hey.

Speaker 3 | 42:03 - 42:08
This thing is just not gonna work for, like, this type of new compute, and we should just rip it out right now.

Speaker 1 | 42:08 - 42:29
There were a whole bunch, but I'll give you a couple. So one is and we didn't you know, to be clear, like, this this was not you know, this was totally different. We didn't have the capabilities we have today, but because we didn't have we didn't have the language models underneath this. But we did have this idea that human readability actually mattered a great deal. And and and so and specifically in those days, it was it was not so much English language, but it was there there was a design decision we made between binary protocols and text protocols.

Speaker 1 | 42:30 - 42:48
And basically every every every basically old school systems architect that had grown up between like the nineteen sixties and the nineteen nineties basically said, you know, the Internet is what do know about the Internet? It's star for bandwidth. You you just you do have these very narrow straws. You know, look, people when we did the work on Mosaic, like people who had the Internet at home had a 14 kilobit modem. Right?

Speaker 1 | 42:48 - 43:09
So you're you're trying to, like, hyper optimize every bit of data that that travels over the network. And so obviously, if you're gonna design a protocol like HTTP, you're gonna want it to be binary you know, highly compressed binary protocol for maximum efficiency, and you're gonna wanna have it be like a single connection that persists, and you're you're the last thing you're gonna wanna do is, bring up and tear new connections. And you definitely you're not gonna not gonna want a text protocol. And so, of course, we said no. We actually want to go completely the other direction.

Speaker 1 | 43:09 - 43:18
It's obviously we only want text protocols. By the way, same thing in HTML itself. We want HTML to be relatively verbose. You know, we want the tags to actually be like human readable. We wanna use

Speaker 2 | 43:18 - 43:19
the- The most inefficient things possible.

Speaker 1 | 43:19 - 43:22
Yeah, wanna do the inefficient things.

Speaker 2 | 43:22 - 43:23
You're the original TokenMaxer.

Speaker 1 | 43:23 - 44:02
Yeah, exactly. Yeah, yeah. Basically it's Well, lesson well, actually this was actually the conscious thing, basically says just assume a future of infinite bandwidth built for that. Then basically what it was, it was bet that if system, if the latent capabilities of the system were powerful enough and that was obvious enough to people that would create the demand for the bandwidth that would cause the supply of bandwidth to get built, would actually make the whole thing And then specifically what we wanted was we wanted everything to be human readable because at the engineering level, we wanted people to be able to read the protocol coming over the wire and be able to understand it with their bare eyes without having to like disassemble it or whatever, And have it converted out of binary, right? And so all the HTTP and everything else were, it was always text protocols.

Speaker 1 | 44:02 - 44:29
And the same thing with HTML. In many ways, some people say that the key breakthrough in the browser was the view source option, which is every webpage you go to, you could view source, which means you could see how it worked, which means you could teach yourself how to build, write new to build new web pages. There was that. So human readability and again, human readability in those days still meant technical specs. You know, now it means English language, but there's an incredible latent power in giving everybody who uses the system the option to be able to drop down and actually understand and see how it's working.

Speaker 1 | 44:29 - 44:47
And that worked really well for the web, I think it's working really well for AI. That was one. What was the other a big part of the idea of web servers was to actually surface the underlying capability of the operating system and to be able to surface the also the underlying latent capability of the database. Because basically what was a web server? What what is a web server fundamentally architecturally?

Speaker 1 | 44:47 - 45:06
It's it's it's the operating system. So it's it's the operating system's ability to, you know, it's running on top of an OS. So it's the OS's ability to manage the file system and do everything else that you want to do and process everything. And then of course, a lot of early, know, a lot of websites are front ends to databases. And so you wanted to unleash the underlying latent power of whether it was an Oracle database or some other, you know, some other postgres or whatever it was.

Speaker 1 | 45:07 - 45:26
And so a lot of the function of the web server was to just bridge from that Internet connection coming in to be able to unlock the underlying power of the OS and the database. And again, people looked at it at the time and they were like, well, is this really does this really matter? Like, is this important? Because we've had databases forever and we've always had, you know, user interfaces for databases and this is just another user interface for database. And it's like, okay, yeah, fair enough.

Speaker 1 | 45:26 - 45:53
But on the other side of that, it's just like, this is now a much better interface to databases and one that 8,000,000,000 people are going to use and is going to be like far easier to use and far more flexible. You're not just going to have old databases, now you have a system where people can actually understand why they want to build, you know, a million times more database apps than they have in the past. And then the number of databases in the world exploded. And so, again, this goes to this thing of like building in layers. Some of the smartest people in the industry look at any new challenge and they're like, okay, I'm I I need to build a new kind of application.

Speaker 1 | 45:53 - 45:57
So the first thing I need to do is build a new programming language. Right? And then the next thing I need to do is build a new operating system.

Speaker 2 | 45:57 - 45:58
Right? And then

Speaker 1 | 45:58 - 46:14
the next thing I need to do is I need to build a new chip. Right? And they they kinda wanna reinvent everything. And I've I've always had maybe it's just, I don't know, pragmatic mentality or something or maybe an engineering over science mentality, but it's more like, no. You have just like all of this latent power, in the existing systems, and you you don't wanna be held back by their constraints.

Speaker 1 | 46:14 - 46:22
But what you wanna do is you wanna kinda liberate that power and open it Yeah. And so I I think I think and I think the web did that for those reasons, and I think it's the same thing now that's happening. It's a

Speaker 2 | 46:22 - 46:23
good perspective on the web.

Speaker 3 | 46:23 - 46:35
The programming languages is another good thing. We have Brett Taylor on the podcast, and we were talking about Rust. And, you know, Rust is memory safe by default. And so why are we teaching the model to not write memory unsafe code? Just use Rust and then you get it for free.

Speaker 3 | 46:35 - 46:42
How much do you think there's, like, time to be spent, like, recreating some of these things instead of taking them for granted? I'll be like, oh, okay. Python is kinda slow.

Speaker 1 | 46:42 - 46:43
TypeScript. You

Speaker 3 | 46:43 - 46:44
know? It's like yeah.

Speaker 2 | 46:44 - 46:47
As as imperfect as they are, they are the lingua franca.

Speaker 1 | 46:47 - 47:08
I mean, I think this is gonna change a lot because I don't think the models care what language they program in. And I think they're gonna be good at programming in every language, and I think they're gonna be good at translating from any language to any other language. Like, okay, so this gets into the coding side of things. I think we're going through a really fundamental change and I look, I I grew up you know, I grew up hand coding, know, I grew up hand coding. Everything I did was actually Everything I did actually was written in c.

Speaker 1 | 47:08 - 47:08
I wasn't

Speaker 3 | 47:08 - 47:09
Back in the days

Speaker 1 | 47:09 - 47:35
I wasn't even using c plus plus so I ordered like Java or any of stuff. Right? And so, everything everything I ever did, I was, like, managing my own memory at at at the level of c. And then I, you know, I I'm still from the generation that, you know, I I knew assembly language and, you know, I I, you know, so I I could drop down and do things, right on the ship. And so we we've just we've all all of us, we've always lived in a world in which software is like this precious thing that, like, you have to think about very carefully, and it's, like, really hard to generate good software.

Speaker 1 | 47:35 - 47:44
And there's only a small number of people who can do it. And, like, you have to be very, like, jealous in terms of thinking about, like, how do you allocate? Like, what are your engineers working on? How many good engineers do you actually have? And how much software can they write?

Speaker 1 | 47:44 - 48:01
And how can how much software can human beings, you know, kinda maintain? And I think, like, all those assumptions are being shot right out the window right now. Like, I think they're I I think those days are just over. And I think the new world is, like, actually high quality software is just, like, infinitely available. And if you need new software to do x y z, like, you're just gonna wave your hand and you're gonna get it.

Speaker 1 | 48:01 - 48:16
And then if it's if you don't like the languages written in, you just tell the thing, alright. I want the right now. I want the Rust version. Or, know, secure you know, secure we're about to by the way, we're about to go through computer security is about to go through the most dramatic change ever, which is number one, like, single latent security bug is about to be exposed. Right.

Speaker 1 | 48:16 - 48:38
And so it's we're gonna have, like, the and we're we're we're set up here for, the computer security apocalypse for a while. But but but on the other side of it, now we have a coding agents that can go in and actually fix all the security bugs. And so how how are you gonna secure a software in the future? You're gonna tell the tell the bot to secure it and it's gonna go through and and fix it all. And so so this thing that was this incredibly scarce resource of high quality software is just going to become a completely fungible thing that you're just gonna have as much as you want.

Speaker 1 | 48:38 - 48:57
And and that has, like, you know, that has, like, tons and tons of consequences. In some sense, the answer to the question that you posed, I I think is just somewhat, I don't know, simple or something or straightforward, which is just if you want all your suffering and rest, you just tell the bot you want all your suffering and rest. Like, the things that used to be like hard or even like seem like an insurmountable mountain to get to get through all of a sudden, I think become very easy.

Speaker 2 | 48:57 - 49:09
I think Brett had a theory that there would be a more optimal language for LLMs. And so the contention is there isn't. Like, just don't bother. Just whatever humans already use, LLMs are perfectly capable porting.

Speaker 1 | 49:09 - 49:20
I think we're pretty close to being I don't if this works today. I think we're pretty close to being able to ask the AI what would its optional optimal language be and let it right? And let it design it. True. Okay.

Speaker 1 | 49:20 - 49:33
Here's a question. Are you gonna even gonna have programming languages in the future, or the AI or the AI is just gonna be emitting binaries? Let's assume for a moment that humans aren't coding anymore. Let's assume it's all bots. The what levels of intermediate abstraction do the bots even need?

Speaker 1 | 49:33 - 49:44
Yeah. Or are they just coding binary directly? Did you see there's actually an somebody just did this thing where they have a they have a language model now that actually emits model weights for a new language model. Right? And so will the bots

Speaker 2 | 49:44 - 49:45
be Just predict the weights.

Speaker 1 | 49:45 - 50:02
Yeah. Will the bots literally be emitting not just coding binaries, but will they will will they actually be admitting weights for new for new models Yeah. Direct directly? And conceptually, there's no reason why they can't do both of those things. It's the the like, architecturally, both of those things seem completely possible.

Speaker 2 | 50:02 - 50:06
It's very inefficient. You're basically Very efficient. Simulation of a simulation in a simulation inside of the weights.

Speaker 1 | 50:06 - 50:11
Yeah. Yeah. Very inefficient. But, like, look, LLMs are already, like, incredibly inefficient. Ask an I have a favorite thing.

Speaker 1 | 50:11 - 50:23
Ask Claude to add two plus two equals four. Right? It's just like, you know, it's like, you know, it's it's like whatever billions and billions of times more inefficient than using your pocket calculator. Yeah. But but but yet the the the payoff is so great of the general capability.

Speaker 1 | 50:23 - 50:40
It's anyway, like, I I kind of think in ten years, like, I'm not sure. Yeah. Like, I'm not sure there will even be a salient concept of a programming language in the way that we understand it today. And in fact, what we may be doing more and more as a form of interpretability, which is we're trying to understand why the bots have decided to structure code in the way that they have.

Speaker 2 | 50:40 - 50:44
I mean, if you play it through, you don't need browsers then. Like, that's the depth of the browser.

Speaker 1 | 50:44 - 50:51
Well, so I I would take it a step further, which is you may not need user interfaces. So who is gonna use software in the future?

Speaker 2 | 50:51 - 50:52
Other bots.

Speaker 1 | 50:52 - 50:53
The other bots. Yep.

Speaker 2 | 50:53 - 51:01
Yeah. And so still need to, I don't know, pipe information in Do we? And out. Really? Well, what are you gonna do then?

Speaker 1 | 51:01 - 51:01
Are you sure?

Speaker 2 | 51:01 - 51:03
You're gonna log off and touch grass?

Speaker 1 | 51:03 - 51:05
Whatever you want. Exactly. Isn't that better?

Speaker 2 | 51:06 - 51:07
I want software to do stuff for me.

Speaker 1 | 51:07 - 51:17
Is that but isn't that better? I mean, look, I you know, I don't know. Look, I got you know, you know, know, the arguments here. No. It was not that long ago that 99% of humanity was behind a plow.

Speaker 1 | 51:17 - 51:23
Right? Right? And what are people gonna do if they're not plowing fields all day to to grow food? Right? And it just turns out there's, much better ways for people to spend time than plowing fields.

Speaker 2 | 51:23 - 51:24
Yeah. Dooms growing.

Speaker 1 | 51:24 - 51:46
Exactly. Know, talking to their friends. And look, I'm not an absolutist and I'm not a utopian and I and to be clear, like, I've I have an 11 year old and he's learning how to code and like, I'm know, I I think it's still like a really good idea to learn how to code and so forth. But I just if you project forward, you just have to think forward a world in which it's just like, okay, I'm just going tell the thing what I need and it's going to do it. And then it's going to do it in whatever way is most optimal for it to do it.

Speaker 1 | 51:46 - 52:04
Unless I tell it to do it non optimally, like if I tell it to do it in Java or in Rust or whatever, it'll do it, I'm sure. But like if I'm just gonna tell it to do, it's gonna do it in whatever way is like the optimal way to do it. And then if I need to understand how it works, I'm gonna ask it to explain to me how it works. Right? And so it's gonna be doing its own interpret it's gonna be the engine of interpretability to explain itself.

Speaker 1 | 52:04 - 52:13
And I just am not convinced that that, I'm not I'm not convinced that in that world you have these historical the goals of the abstractions will be whatever the boss need at what the human state. Yeah.

Speaker 3 | 52:13 - 52:38
Yeah. That well, I'm curious, like, if that's true, then shouldn't the models providers be building some internal language representation that they can do extreme kind of like RL and reward modeling around? Because it's like today, they're kind of like tied to like TypeScript and Python because the users need to write in that language versus they can have their own thing internally, and, like, they don't need to teach it to anybody. Yep. They just need to teach their model.

Speaker 3 | 52:38 - 52:59
And I think that's how you get maybe the version between the models. Like, going back to, like, the Py OpenCloud thing, it's like, oh, I built all the software using the OpenAI model, and I'll switch to the Anthropic model, but the Anthropic model doesn't understand the thing. So I feels like there still needs to be some obstruction, but maybe not. Maybe that's the lock in that the model providers want to have. I don't

Speaker 1 | 52:59 - 53:05
I'm not even sure that's lock in, though, because why can't the second model just learn what the first model has done? Like Exactly. Okay. Okay. Give me an example.

Speaker 1 | 53:05 - 53:22
So as you know, models can now reverse engineer software provider. Isn't it the whole thing now where people are reverse engineering like Nintendo game binaries? Yeah. So you you have like there's obviously a bunch of reports like this where somebody has like a favorite game from the 1980s and the source code is like long dead, but they have like a binary bird into a chip or something and now they reverse engineer and they get a version that runs on their Mac. Right?

Speaker 1 | 53:22 - 53:28
And so if you reverse it if this is what I kinda say. If you're reversing like x 86 binaries, then why can't you reverse engineer?

Speaker 3 | 53:28 - 53:35
Whatever the yeah. And because we're all on Unix based system, it has to be reversible because it needs to run on the target.

Speaker 1 | 53:35 - 53:36
Yeah. Yeah. Yeah. Yeah. Yeah.

Speaker 1 | 53:36 - 53:58
Basically. And so I just I just think it's this thing where it's just like and by the way, in everything we're describing is something that human beings in theory could have done before, but just with Right, yeah, But with enormous but it was just always like cost and labor prohibitive. Reverse engineer, like I learned how to reverse engineer. Was like, human beings have reverse engineer binaries. It's just for any complex binary, I need like a thousand years to do it, but now with the model you don't.

Speaker 1 | 53:58 - 54:12
And so all of a sudden you get you get these things or another way to think about it is so much of human built systems are to compensate for the human limitations. Mhmm. Yep. Right? And if you don't have the human limitations anymore, then all of a sudden you have and and it's not that you you won't have abstractions, but you'll have a different kind of abstraction.

Speaker 1 | 54:12 - 54:12
Yep.

Speaker 2 | 54:13 - 54:24
I have two topics to bring us to a close and you could pick whichever ones. Just talking about protocols. Was it you or someone else? I forget my Internet history who said that like the biggest mistake that we didn't figure out in the early days was payments. Yes.

Speaker 2 | 54:24 - 54:25
Was that you?

Speaker 1 | 54:25 - 54:27
Yes. It was a 402402 payment required.

Speaker 2 | 54:27 - 54:31
We have a chance now. I don't think we're gonna figure it out. I don't know. Like, what's your take?

Speaker 1 | 54:31 - 54:34
Oh, I think we will. Yeah. No. Now I think it's gonna happen for sure. Yeah.

Speaker 1 | 54:34 - 54:44
Yeah. And there's two reasons it's happen for sure. One is we actually have Internet native money now in the form of Stablecoins. Crypto stablecoins and crypto. This is I I think this is the grand unification basically of AI and crypto is what's about to happen now.

Speaker 1 | 54:44 - 54:54
I think AI is the crypto killer app, I think, where where this is really gonna come out. And then the other is just it I mean, it's just I think it's now obvious. It's like, obviously, AI agents are gonna need money. And it's already happening. Right?

Speaker 1 | 54:54 - 54:58
If you've got a if you've a claw and you wanted to buy things for you, you have to give it money in some form.

Speaker 2 | 54:58 - 55:01
I would say the adoption is probably like 0.1% if if that, but

Speaker 1 | 55:02 - 55:04
Oh, today. Yeah. Yeah. Yeah. But think think forward.

Speaker 1 | 55:04 - 55:05
Like, where is it going?

Speaker 2 | 55:05 - 55:05
Forward thinking.

Speaker 1 | 55:05 - 55:26
The ultimate principle of everything and and everything that I think I we we do is this the William Gibson quote, which is the future is already here. It just isn't distributed. It isn't it isn't distributed yet. My friends who are the most aggressive use users of of of of Open Claw just like have given their Claw's bank accounts and credit cards. And and and and and and not only have they done it, it's obvious that they needed to do it because it's obvious that they needed to be able to spend money on their behalf.

Speaker 1 | 55:26 - 55:35
Yeah. Yeah. It's just completely obvious. And so and again, like, so the number of people who have done that today to your point is, I don't know, probably 5,000 or something. But that's how these things start.

Speaker 2 | 55:35 - 55:36
Actually, I mean, since, you keep mentioning

Speaker 1 | 55:36 - 55:40
And by the OpenClaw, by the way, if you don't give it a bank account, it's just gonna break into your quote. You know?

Speaker 2 | 55:40 - 55:42
It's gonna be pretty high agency.

Speaker 1 | 55:42 - 55:51
It's gonna break into your bank account anyway and and and take your money. So you you might as you might as well do it. You might as well do it. By the way, I really love I gotta tell you, I really love the phenomenon. I love the YOLO.

Speaker 1 | 55:52 - 55:58
I'm not doing it myself to be clear, but I love the people that are just like, yep. Like, what what is it? Skip skip Dangerously skip dangerously.

Speaker 2 | 55:58 - 56:08
By the way, it's a Facebook thing. Okay. Right. Because because we in Facebook, they they have this culture to name the thing dangerous so that you are aware when you enable the flag that you are opting into a dangerous thing.

Speaker 1 | 56:08 - 56:09
Okay. Good.

Speaker 2 | 56:09 - 56:16
They brought it into OpenAI. Yeah. And, course, that makes it enticing. Sam runs Codex with skip permissions on on his laptop.

Speaker 1 | 56:16 - 56:22
Yes. A 100%. And so I I I think the way to actually see the future is to find the people who are doing that. There's a madness, you know, and they're

Speaker 2 | 56:23 - 56:26
Log everything, you know, just watch it. Watch the logs.

Speaker 1 | 56:26 - 56:30
But like, let's actually find out what the thing can do. And the way to find out what the thing can do is just like

Speaker 2 | 56:30 - 56:30
Try everything.

Speaker 1 | 56:30 - 56:37
Yeah. Let it try everything. Let it unlock everything. By the way, that's how you're gonna find all the good stuff it can do. By the way, that's also how you're gonna find all the flaws.

Speaker 1 | 56:37 - 56:49
I think the people who turn that on for bots are like they're they're like martyrs to the progress of human civilization. Like, I feel very bad for their descendants that their bank accounts are gonna get looted by their bots in the first, like, twenty minutes. But I think the contribution that they're making to the future of our species

Speaker 2 | 56:49 - 56:50
is amazing. It's like gentleman science.

Speaker 1 | 56:50 - 56:52
You know? Yes. It's yes. Yes. Very male.

Speaker 1 | 56:52 - 57:01
It's it's Ben Franklin out with the trying to try and trying to get lightning to strike his his his balloon and see seeing if he gets electrocuted. Yeah. It's Jonas Salk with the polio vaccine. Yeah. Right?

Speaker 1 | 57:01 - 57:10
Injecting in his yes. So, yes, I I I I think we should have, like, a we should have, like, flags and, like, we should have, like, monuments to the people that just let Open Cloud run their lives.

Speaker 2 | 57:11 - 57:16
More anecdotes. Like, what what are the craziest or interesting things that people listening to this should go go home and do?

Speaker 1 | 57:17 - 57:22
I mean, this is this is the this is the the extreme thing is just like the straight YOLO. Like, just yeah. Turn turn your light off.

Speaker 2 | 57:22 - 57:28
That's a general capability. Is there, like, a specific story that was like, wow. And and everyone in the group chat just lit up.

Speaker 1 | 57:28 - 57:44
I mean, like, you know, so there's tons there's already tons of health. You know, there's you know, the the health dashboard stuff is just is just absolutely absolutely amazing. The number of stories on I'm trying I just don't wanna violate people's, you know, obviously personal Yeah. Anonymize. But, you know, one of the things OpenClaw is really good at is hacking into all the stuff in your land.

Speaker 1 | 57:44 - 57:48
It's really good. So, you know, Internet of things aka Internet of shit.

Speaker 2 | 57:48 - 57:50
Yeah. Like Super insecure, but great.

Speaker 1 | 57:50 - 58:00
Discoverable. Yeah. It's discoverable. OpenClaw is happy to scan your network, identify all the things, and then my my my friends who are most aggressive at this are having OpenClaw take over everything in their house. Yeah.

Speaker 1 | 58:00 - 58:13
Take it takes over their security cameras. It takes over their their, you know, their whatever their their access control systems. It takes over their webcams. I have a friend whose claw watches him sleep. Put a webcam in your bedroom, put the put the claw put the claw in a loop, have it wake up frequently and have it watch just tell it watch me sleep.

Speaker 1 | 58:14 - 58:28
And and I've I've seen the transcripts and it's literally like, Joseph sleep. This is good. This is good that Joseph sleep because, know, I have I have his health ache and I know that he hasn't been getting enough sleep and so it's really good that he's getting sleep. I really hope he gets his full whatever, you know, five hours of REM sleep. Joe's moving.

Speaker 1 | 58:29 - 58:36
Joe's moving. Joe might be wake waking up. This is a real if Joe wakes up now, he's gonna ruin his sleep cycle. Oh, okay. It's okay.

Speaker 1 | 58:36 - 58:38
Joe just rolled over. Okay. He's gone back to bed. Okay. Good.

Speaker 1 | 58:38 - 58:40
Alright. Okay. I can relax. This is fine.

Speaker 2 | 58:40 - 58:41
He's the situation.

Speaker 1 | 58:41 - 58:59
Monitoring the situation and and being a bot like you know, is just like very focused, right? It's just like this is like its reason for existence is to watch Joe sleep. And then and then I was telling my friend who did this is like, know, on the one hand, it's like, alright, this is weird and creepy. And I need to I need to maybe this has taken over my life. Then the other thing is like, you know what?

Speaker 1 | 58:59 - 59:14
If I had a heart attack in the middle of the night, this thing literally would like freak out and call 911. Like, there's no question this thing would figure out how to like alert medical authorities and like prob probably summon SWAT teams and like do whatever would be required to save my life. Right? And so it's like, you know, like, yeah, like that's happening. What else?

Speaker 1 | 59:15 - 59:31
Go give it's a company unitary that makes the robot dogs. Then I actually have one at home, which is is is actually really fun with the Chinese companies. The Chinese companies are so aggressive at adopting new technology, but they don't always, like, let's say, take the time to really

Speaker 2 | 59:32 - 59:32
Package it?

Speaker 1 | 59:32 - 59:45
Package it and maybe think it all the way through. And so so the at least the unitary dog I have. So it it has a old non LLM just control system, which by the way is not very good. It it markets well, but it in practice, it's it's not that good. It has trouble with stairs and so forth and so it's not quite what it should be.

Speaker 1 | 59:45 - 1:00:02
But then the language model thing comes out in the voice. They they add so they add LLM capability and then they they add a voice mode to it. But but that LLM capability is not at all connected to the control system. So so you've got this schizophrenic dog that, like, is a complete idiot when it comes to climbing the stairs, but it will happily teach you quantum mechanics. Right?

Speaker 1 | 1:00:03 - 1:00:07
In, a plummet English accent. Right? Like, it's just, like, absolutely amazing.

Speaker 2 | 1:00:07 - 1:00:07
Jagged intelligence.

Speaker 1 | 1:00:07 - 1:00:22
Yeah. They talk about Jagged and then now, obviously, what's gonna happen in the future is is they're gonna connect together, but He'll do it. But right now, it's it's and so right now, it's not that useful. And so I I have a friend who has one of these who had his claw basically hack in and rewrite the code, rewrite new firmware Yeah. Rewrite new firmware for the for the unit root robot.

Speaker 1 | 1:00:22 - 1:00:25
And now it's now it's an actual pet dog for his kids.

Speaker 2 | 1:00:25 - 1:00:28
He could do that before or after, like, the motion

Speaker 1 | 1:00:28 - 1:00:33
Yeah. It's he said it's completely different. Said it's a complete transformation. Yeah. Whenever there's an issue in the thing now, the claw just, like, rewrites the code.

Speaker 1 | 1:00:33 - 1:00:45
You know, you you goes in and you does does the code as well. It's a good kinda goes to your thing here. So so, like, all of a sudden this is why the way we wanna think about AI code. AI coding is not just like writing new apps. It's also going in and rewriting all the old stuff that should have worked that never worked.

Speaker 1 | 1:00:45 - 1:01:04
And so, like, I I think I think basically I think the Internet the Internet of shit is basically over. Like, I I think everything there's a potential here where, like, all these devices in your house that have been, like, basically marginal or, you know, basically dumb, you know, for like, all of a sudden, might all get really smart. Now Smart home. You have to decide if yes. There are horror movies in which this is just of which this is the premise.

Speaker 1 | 1:01:04 - 1:01:21
And so you have to decide if you want this. Yeah. But but but this is the first time I can say with confidence, I now know how you could actually have a smart home with 30 different kinds of things with chips and internet access where it actually all makes sense and all works together and it's all coherent in the whole thing. And to have that unlock without a human being having to go do any of that work, like,

Speaker 2 | 1:01:21 - 1:01:27
you know. So yes. I'm waiting for a sorry, Mark. I can't let you open that fridge door. You know?

Speaker 2 | 1:01:27 - 1:01:27
Like

Speaker 1 | 1:01:27 - 1:01:30
Exactly. Exactly. Yes. Yes. Because Oh, yeah.

Speaker 2 | 1:01:30 - 1:01:31
You're not supposed to eat right now.

Speaker 1 | 1:01:31 - 1:01:38
I have all of yes. I have every shred of health information. You know? And I know you think you're doing, you know, da da da. I don't think you can do this, but, you know, this is a real are you really, you know, are you really sure?

Speaker 1 | 1:01:39 - 1:01:44
And, you know, you told, you know, you told me last night you really don't want me to let you do this. So, you know, I'm sorry, but the fridge door is locked.

Speaker 2 | 1:01:45 - 1:01:47
Open the fridge doors. Exactly. And by the way,

Speaker 1 | 1:01:47 - 1:01:53
I know you're supposed to be studying for a test, so why don't we why don't you go when you can pass the test, I will open the fridge door for you. Yeah.

Speaker 2 | 1:01:53 - 1:01:59
Final protocol and then and then we can wrap up proof of human. Yes. Right? Yeah. That's the last piece that we got to figure out.

Speaker 1 | 1:01:59 - 1:02:21
Yeah. So I would say there's there's two massive, I would say, sort of asymmetries in the world right now where we've known these asymmetries exist and we societally have an unwilling to grapple with them and I think they're both tipping right now. And and they're they're they're they're the same thing as virtual world version, it's a physical world version. So the virtual world version is is the bot problem. We're just like, you know, the Internet Internet is just like a wash in bots.

Speaker 1 | 1:02:21 - 1:02:26
Internet's a wash in fake people. It has been forever. By the way, a lot of that has to do with lack of money. You know? And so this you know, this is

Speaker 2 | 1:02:26 - 1:02:33
the this is the My spicy take was these two are the same thing, and corporations are people too. You know? Interesting. Yeah. Yeah.

Speaker 2 | 1:02:33 - 1:02:35
Yeah. Okay. A bank account is proof of human.

Speaker 1 | 1:02:35 - 1:02:38
Yeah. Okay. Yeah. Until you until you give the bots bank accounts. Yeah.

Speaker 1 | 1:02:38 - 1:02:40
Exactly. So okay. Yeah. So there's that. But yeah.

Speaker 1 | 1:02:40 - 1:02:47
Look. Look. The bot I mean, every social media user knows this. The bot the bot problem is a big problem. You know, the bot the bot problem has been a big problem forever.

Speaker 1 | 1:02:47 - 1:03:06
It's it's a huge problem, and it's never really been confronted directly, like, at any point. By the way, the physical world version of this is the drone the drone problem. Right? And so we we've known for, you know, we've known for twenty years now that the asymmetric threat both in military and actual military conflict, but also in just like security, like like, you know, security on the home front. The big threat is is the cheap attack drone.

Speaker 1 | 1:03:06 - 1:03:21
Right? The the cheap the cheap, you know, drone with a bomb. And we've known that forever. And by the way, like, you know, it's very disconcerting how, like, every, you know, every office complex in in the, you know, in the world is, like, unprotected from drone attacks. Every every stadium, every school, every prison, like, it's like Sure.

Speaker 1 | 1:03:22 - 1:03:25
Okay. We've known that. We've never done anything. Do about it? Yeah.

Speaker 1 | 1:03:25 - 1:03:38
One possibility is just leave leave them unprotected forever and live in a world of, like, asymmetric terrorism forever. The other is take the problem seriously and figure out the set of techniques and technologies required to to be able to deal with that, whether those are lasers or jammers or early warning systems or, you know, called

Speaker 2 | 1:03:38 - 1:03:39
Personal force fields.

Speaker 1 | 1:03:39 - 1:03:47
Kinetic personal force doom. Personal force fields. Exactly. And in both cases, these are these are economic asymmetries. These are economic asymmetries.

Speaker 1 | 1:03:47 - 1:03:58
Right? Because it's really cheap to field a bot, but it's very hard to tell somebody a bot. It's very cheap to field a drone. It's very hard it's very expensive to defend against a drone. But you see what I'm saying is it's the virtual version of the problem and it's the physical version of the problem.

Speaker 1 | 1:03:58 - 1:04:13
The virtual version of problem, what we need quite literally is proof of human. The reason is because you're not going have proof of bot, especially now that the bots are too good. The bots can pass the Turing test. And if the bots can pass the Turing test, then you can't you can't screen for bot. You can't have proof of not a bot.

Speaker 1 | 1:04:13 - 1:04:22
But what you can have is you can have proof of human. You can have, you know, cryptographically validated. This is definitely a person. And this is and then you can have cryptographically validated. This is definitely like something that a person said.

Speaker 1 | 1:04:22 - 1:04:24
This video is real. Right?

Speaker 2 | 1:04:24 - 1:04:30
Just to double click on on do you think Alex Blanier with Worlds do you think he's got it, or is there an alternative?

Speaker 1 | 1:04:30 - 1:04:35
Oh, so, I mean, there's gonna be think there'll be I think many people will try. We're one of the key, you know, participants in in in the world in the World Project. And

Speaker 2 | 1:04:35 - 1:04:36
I just don't know. Yeah.

Speaker 1 | 1:04:36 - 1:04:47
So we're we're partisans. But, yeah, I I think so we think world is exactly correct. Okay. And the reason is it it has it has to be it it has to be proof of human. It it has because you can't do proof of not bot, you have to do proof of human.

Speaker 1 | 1:04:47 - 1:04:55
To do proof of human, you you need you need biological validation. You you needed to start with this was actually a person. Right? Because otherwise you have bot signing up as fake people. Right?

Speaker 1 | 1:04:55 - 1:05:22
So you have to have like something, you have to have a biometric and then you have to have cryptographic validation and then the ability to do the lookup. And then by the way, other thing you need was that you also need selective disclosure. So you need to be able to proof of human reviewing all By the underlying the way, another thing you're gonna need, you're gonna need proof of age, right? Because there's all these laws and all these different countries now around you need to be 13 or 16 or 18 or whatever to do different things. And so you're gonna need to sort of validate a proof of age, you know, to be able to legally operate, right?

Speaker 1 | 1:05:22 - 1:05:26
And so that that's coming and then you're gonna want like proof of credit score and you know, proof of like, you know, a 100 other things.

Speaker 2 | 1:05:26 - 1:05:27
That's a tricky one.

Speaker 1 | 1:05:27 - 1:05:37
It is a tricky one, but you're gonna, there's no reason, like if somebody's checking on your credit, somebody should give you an example, somebody shouldn't need to know your name in order to be able to find out whether you're credit worthy.

Speaker 2 | 1:05:37 - 1:05:40
I see independently verifiable pieces of information. Pieces of information.

Speaker 1 | 1:05:40 - 1:05:58
It's like selectively disclosed and this is the answer to the privacy problem at large which is I only need to prove what I need to prove at that moment. So like you're gonna need that and I I think their their their architecture makes sense. So that needs to get solved. I think language models have tipped the bots are now too good. And and so they're undetectable and so as a consequence, you we now need to go confront that problem directly.

Speaker 1 | 1:05:58 - 1:06:12
And then and like I said, and then the other problem is we we need to go actually confront the drone problem. The Ukraine conflict has really unlocked a lot of thinking on that. Now the and now the the the the the Iran situation is also unlocking that. And so I think there's gonna be just like this incredible explosion of of both drone and counter drone.

Speaker 2 | 1:06:12 - 1:06:13
Our drones are better than their

Speaker 1 | 1:06:13 - 1:06:13
drones. It's

Speaker 2 | 1:06:13 - 1:06:15
it's supposed to keep it that way.

Speaker 1 | 1:06:15 - 1:06:17
Yeah. Yeah. Encounter and counter drones.

Speaker 3 | 1:06:17 - 1:06:39
I think we can sneak in one more question. Perfect. I'm trying to tie together a lot of things that you said over the year. So at the Milken Institute debate with Thiel, which is amazing, you talked about the lag between a new technology and kinda like the GDP impact of it. The other idea you talked about is bourgeois capitalism and how, you know, this kind of managerial class was needed because of this complexity.

Speaker 3 | 1:06:39 - 1:06:51
And I think if you bring it into the fold, you have, like, much higher leverage of people. Like, if you have, you know, the Musk industries and you give Elon a GI, you can run a lot more things at once.

Speaker 1 | 1:06:51 - 1:06:51
That's

Speaker 3 | 1:06:51 - 1:06:58
right. And then you have the social contract, and I know you retweeted clip of Sam Allmenting. We're rethinking the whole thing, and you're like, absolutely not.

Speaker 1 | 1:06:58 - 1:06:59
Yes. 100 and

Speaker 3 | 1:06:59 - 1:07:17
And I will I was in an event with Sam last night, and he actually said in the last couple weeks, he felt like now people are taking that seriously. Yep. So I'm just curious, like, how you're seeing the structure of organization changing, especially when you invest in early stage companies and, yeah, just like how the impact of work structure and all of that is playing out.

Speaker 1 | 1:07:17 - 1:07:22
Yeah. So there's a whole bunch of there's a whole bunch of times. I know. Yeah. Could we could spend don't By the way, we'd be happy to spend more time, but we could we could spend more time on all that.

Speaker 1 | 1:07:22 - 1:07:50
So just so for people who haven't followed this, so the this this this term managerial comes from this thinker in the twentieth century, James Burnham, who is one of the great kind of twentieth century political thinkers, societal thinkers. He sort of said as And he was writing in like the 1940s, 1950s. And he said kind of the whole history of capitalism until that point had been in two phases. Number one had been what he called bourgeois capitalism, which was think about it as like name on the door, like Ford Motor Company because Henry Ford runs the company. And Henry, it's like a dictatorial model and Henry Ford just like tells everybody what to do.

Speaker 1 | 1:07:50 - 1:08:27
And he said the problem with bourgeois capitalism is it doesn't scale because Henry Ford can only tell so many people to do so many things that he runs at a time the day. And so he said the second phase of capitalism was what he called managerial capitalism, which was the creation of a professional class of managers that are trained not to be like car experts or to be whatever experts in any particular field, but are trained to be experts in management. And then that led to, you know, the importance of like Harvard business, you know, business schools and management consulting firms and all these things. And then you look at every big company today and like most of the executives at most of the Fortune 500 companies are not domain experts in whatever the company does. And they're certainly not the founders of those companies, but they're professional managers.

Speaker 1 | 1:08:27 - 1:08:57
In And fact, in the course of their careers, they'll probably manage many different kinds of businesses. They'll rotate around and they might work in healthcare for a while and then work in financial services and then go work in something else, you know, come work in tech. And what Burnham said is he said that transition is absolutely required because the problem with bourgeois capitalism is it doesn't scale and reform doesn't scale. And so if you're gonna run capitalist enterprises that are gonna have millions to billions of customers, you're gonna need to they're gonna be operating a level of scale and complexity that's gonna require this professional management class. And he said, look, the professional management class has its downsides.

Speaker 1 | 1:08:57 - 1:09:06
Like, they're not necessarily experts at doing the thing. They're not as inventive. You know, they're not gonna create the next breakthrough thing. But he's like, whether you think that's good or bad or whatever is what's gonna be required. And basically, that's what happened.

Speaker 1 | 1:09:06 - 1:09:36
Right? And so he wrote that book originally in, 1940. Over the course of the next fifty years, basically managerialism Well, I mean, up till today, managerialism basically took over everything. What I'm describing is basically how all big companies run and how all governments run and how our large scale nonprofits run and kind of everything runs. Basically what venture capital does is we basically are a rump sort of protest movement to that to try to find the next Henry Ford or just to say Elon Musk or the next Elon Musk or the next Steve Jobs or the next Bill Gates, next Mark Zuckerberg.

Speaker 1 | 1:09:36 - 1:10:12
And so we start these companies in the old model, Right? We we we start them out as as as as like in the Henry Ford model. And so we start them out with a founder or a or a founder with with colleagues, but, know, there's a founder CEO. And then we basically bet that we basically bet that the startup is going to be able to do things specifically innovate in ways that the big incumbents in that industry are not gonna be able to do. And so it's a bet that by basically by relighting this sort of name on the door, you know, kind of thing, this new innovative thing with like a king monarchical political structure, that they're gonna be able to innovate in a way that the incumbent is not going to be able to because the incumbent is is being run by managers.

Speaker 1 | 1:10:12 - 1:10:30
Right? And and and and by the way, and of course, venture being what it is, sometimes that works, sometimes it doesn't, but we're we're constantly doing that. But I've always viewed it my entire life as like we're like raging against the dying of the light. Like we're we're we're we're sort of constantly trying to fight off managerialism, just basically swapping everything and everything getting basically boring and gray and dumb and old. Right?

Speaker 1 | 1:10:30 - 1:10:46
And we're trying to keep some level of energy vitality in the system. AI is the thing that would lead you to think, maybe there's a third model. Right? And and maybe and way to think about it would be maybe it's a combination of the two. Maybe the new Henry Ford or the new Elon or the new Steve Jobs plus AI is the best of both.

Speaker 1 | 1:10:47 - 1:11:07
Right? Because it's sort of the spark of genius of the name on the door model, the Henry Ford model, but then it's give that person AI superpowers to do all the managerial stuff and let the boss drill the managerial stuff. That may be the actual secret formula And we've never even known that we wanted this because we never even thought it was a possibility. But yeah. I mean, you know this, what is the thing that these bots are really good?

Speaker 1 | 1:11:07 - 1:11:16
They're really good at doing paperwork. Like, they're really good at filling out forms. Right. Like, they're really good at writing reports. They're really good at reading they're really good at doing all the managerial work.

Speaker 1 | 1:11:16 - 1:11:31
Like they're amazing at it. And so yeah, so I think I think the a 100%, I think the answer the answer very well might be to get the best best of both worlds by doing this. And then the challenge is going to be twofold. The challenge is going to be for the innovators to really figure out how to leverage AI to actually do this. Right?

Speaker 1 | 1:11:31 - 1:11:50
And the other challenge is going be for incumbents that are managerial to figure out like, okay, what does that mean? Because now they're going to be facing a different kind of insurgent competitor that has a different set of capabilities than they're used to. And so the the the this really, I think, is gonna force a lot of big companies to kind of figure out innovation. Either I say figure out innovation or die trying.

Speaker 3 | 1:11:50 - 1:12:04
Do you feel like that structure accelerates the impact on the actual GDP and economy? If you look at SpaceX, it's like the growth is like so fast and like instead of having these companies kind of like peter out in growth and impact, they can kind of like keep going if not accelerating. Yep.

Speaker 1 | 1:12:05 - 1:12:23
That's for sure the hope. The the the challenge and and, you know, and look, the AI utopian view is of course and and and that's gonna be the future of the economy and it's gonna grow 10 x and a 100 x and a thousand x. We're entering this regime of, like, much higher economic growth forever and consumer cornucopia of everything, and it's it's gonna be great. And I and and I hope that's true. I hope that's that's like the, you know, that's the current kind of utopian vision.

Speaker 1 | 1:12:23 - 1:12:34
Hope that's true. The problem is it goes back again. The real world is really messy. And I'll give you an example how the real world is really messy. It requires nine hundred hours of professional certification training to become a hairdresser in the state of California.

Speaker 1 | 1:12:35 - 1:12:47
So it's like 35% of the economy, something like that. You have to get some sort of professional certification to do the job. Which is to say that the the professions are all cartels. Right? And so you have to get licensed as a doctor.

Speaker 1 | 1:12:47 - 1:13:03
You have to get licensed as a lawyer. You have to get licensed as a you have to get into a union. Mhmm. By the way, to to work for the government, you need to be you you have both civil service protections and you have public sector unions. You have two layers of insulation against ever getting fired for anything or anything anything ever changing.

Speaker 1 | 1:13:04 - 1:13:18
I'll give you another example. The the dock work the dock workers went on strike a couple of years ago because they're, you know, robotics. You you know, if if you go look at a modern dock like in Asia, it's all robots. If you go to American dock, it's like all still guys dragging strike dragging stuff by by hand. The dock workers on a strike.

Speaker 1 | 1:13:18 - 1:13:35
It turns out there are 25,000 dock workers working on on on docks in America. It turns out they have incredible political power because it's a it's it's one of these unified blocks of things. They won their strike, and so they got commitments from the dock owners to not implement more automation. We learned a couple of things in that. So number one, we learned that even a union the smallest 25,000 people still has like tremendous political stroke.

Speaker 1 | 1:13:35 - 1:13:56
We also learned that they it actually turns out the dock workers union has 50,000 people in it because there's 20 they have 25,000 people working at docks, they have 25,000 people during full paychecks sitting at home from prior union Oh my god. From prior union agreements. I'll give you another great example. There are government agencies. There are federal government agencies where the employees, right, have civil service protections and they're in public sector unions.

Speaker 1 | 1:13:56 - 1:14:30
There are entire federal government agencies that struck new collective bargaining agreements during COVID where not only are they have their jobs guaranteed in perpetuity but they only have to report to work in an office one day per month. And so there are entire office buildings in Washington DC that are empty twenty nine out of thirty days of the year that are still operating and we're all still paying for it. And then what they do, it turns out what the employees do is they're very smart in this way. And so they figure out, they come in on the last day of a month and the first day of the next month. So they're in the office two days per sixty days, which means these buildings are empty for fifty eight days at a time.

Speaker 1 | 1:14:30 - 1:14:46
And you see where I'm heading with this. Like this is like locked in, right? This is like locked in in a way that has nothing to do with like, and people say capitalist, it's like anti capitalistic. It's like, it's basically, it's restrictions on trade. It's restrictions on the ability to like change the workforce.

Speaker 1 | 1:14:47 - 1:15:00
And so, so much of our economy is, you know, I'm describing the entire healthcare system. I'm describing the entire legal profession. I'm describing the entire housing industry. I'm describing the entire education system. Right?

Speaker 1 | 1:15:00 - 1:15:13
K through 12 schools in The United States, they're a literal government monopoly. How are we gonna apply AI in education? The answer is we're not because it's a literal government monopoly. It is never going to change the end and there is nothing to do. By the way, you can create an entirely new school system.

Speaker 1 | 1:15:13 - 1:15:23
Like, that's the one thing you can do is you can do what Alpha School is doing. You can create an entirely new school system. Other than that, you're not gonna go in and change what's happening in the American classroom like k through 12. There's no chance. The teachers are 100% opposed to it.

Speaker 1 | 1:15:23 - 1:15:40
It's a 100% not gonna So so you see what I'm saying is like there's this, like, massive slippage that's gonna take place. Both the AI utopians and the AI doomers are far too optimistic. Right. You see what I'm saying? Because they believe that because the technology makes something possible that 8,000,000,000 people all of a sudden are gonna change how they behave.

Speaker 1 | 1:15:40 - 1:15:52
And it's just like, nope. So much of how the existing economy works is just it's just like wired And so we're gonna be lucky as a society, we're gonna be lucky if AI adoption happens quickly. Right? Because if it doesn't, we're just gonna have a stagnation.

Speaker 3 | 1:15:53 - 1:15:54
Awesome, Mark. I know you gotta run.

Speaker 2 | 1:15:54 - 1:16:01
Yeah. We don't know. Orszt, you're welcome, but it was such a pleasure talking to you. We're truly living in the nature of science fiction coming to real life.

Speaker 1 | 1:16:01 - 1:16:04
Yes. Yes. Could not be more exciting. Yeah. Really happy be with you guys.

Speaker 1 | 1:16:04 - 1:16:05
Awesome.

Speaker 2 | 1:16:05 - 1:16:06
Thank That's it.

Speaker 1 | 1:16:06 - 1:16:06
Thank you.

---

## Moonlake: Causal World Models should be Multimodal, Interactive, and Efficient — with Chris Manning and Fan-yun Sun

- **发布时间**: 2026/4/2 17:55:29
- **原始链接**: [点击查看](https://www.youtube.com/@LatentSpacePod)

### 📜 内容摘要与转录

Speaker 1 | 00:00 - 00:20
I think this whole space is extremely difficult as things are emerging now. And, I mean, it's not only for world models. I think it's for everything, including text based models. Right? Because, you know, in the early days, it seemed very easy to have good benchmarks because we could do things like question answering benchmarks.

Speaker 1 | 00:20 - 00:43
But, you know, these days, so much of what people are wanting to do is nothing like that. Right? You're wanting to get some recommendations about which backpack would be best for you for your trip in Europe next month. It's not so easy to come up with a benchmark, and it's the same problem with these world models.

Speaker 2 | 00:43 - 01:09
Before we get into today's episode, I just have a small message for listeners. Thank you. We would not be able to bring you the AI engineering, science, and entertainment contents that you so clearly want if you didn't choose to also click in and tune into our content. We've been approached by sponsors on an almost daily basis, but, fortunately, enough of you actually subscribed to us to keep all this sustainable without ads, and we wanna keep it that way. But I just have one favor to ask all of you.

Speaker 2 | 01:09 - 01:34
The single most powerful, completely free thing you can do is to click that subscribe button. It's the only thing I'll ever ask of you, and it means absolutely everything to me and my team that work so hard to bring the In Space to you each and every week. If you do it, I promise you, we'll never stop working to make the show even better. Now let's get into it. Okay.

Speaker 2 | 01:34 - 01:43
We're back in the studio with Moon Lake's, two leads. I I guess there's there's other founders as well, but, Sun and Chris Manning, welcome to the studio. Thanks a lot, Chris.

Speaker 3 | 01:43 - 01:44
Thanks for having us.

Speaker 2 | 01:44 - 02:00
You've got you guys have, you know, come burst onto the scene with a really refreshing new take home of models. I would just want to, sort of, I guess, ask how you the two of you came together. Chris, you're a legend in NLP and just AI in in in general. You're you're his grad student, I guess.

Speaker 3 | 02:01 - 02:14
Actually, my cofounder. Oh, yeah. I should give a lot of credit to my cofounder, Sharon. Yeah. She was she was actually working with professor Peve Lin Jajan, and then she ended up working with Ron and Chris Manning here.

Speaker 3 | 02:14 - 02:18
And then so I got connected through to Chris initially, actually, through my cofounder.

Speaker 2 | 02:18 - 02:27
What is Moon Lake? What what is actually, I'm also very curious about the name, but, like, why going into world models? So I was working a lot

Speaker 3 | 02:28 - 03:10
with, actually, NVIDIA research during my PhD years on essentially generating interactive worlds to train reinforcement learning agents or embodied AI agents. And then there's two observations, one in academia and one in industry. An industry, like folks at NVIDIA are actually paying a lot of dollars to purchase these types of interactive worlds, whether it's for the sake of evaluation or training the robots or policies or models. And then in academia, same thing is happening. And more specifically, when I was actually working with NVIDIA on the synthetic data foundation model training project, we were actually generating a lot of synthetic data and showing that, hey, you can actually these synthetic data are actually as useful as real world data when it comes to multimodal pre training.

Speaker 3 | 03:10 - 03:48
But then, like I said, there's a lot of dollars being paid out to, like, external vendors or or, like, other folks to manually curate these types of data. It was very clear to us that, okay, on our way to let's call it embodied general intelligence, models need to learn the consequences behind their actions, which means that they need interactive data. And the demand for those types of data are growing exponentially, but everybody's sort of thinking about it from a pure, say, video generation perspective or something else. But we feel like the the true, actually, opportunity is actually building reasoning models that can do these things, like how humans do these things today. So that's a little bit on the genesis of Moon Lake.

Speaker 3 | 03:48 - 04:04
And I think the reason I got into world models was partly a philosophical take of the on the world where I, like, you know, blame the simulation theory and stuff like that. But on the other on the other hand, it's really just like, oh, like, there's an opportunity there that I feel like nobody's doing it that way I think should be done.

Speaker 1 | 04:04 - 04:24
I can say a little bit about that. Yeah. So the overall goal is the pursuit of artificial intelligence. And, you know, most of my career has been doing that in the language space, and that's been just extremely productive as we all know the story of the last few years. I don't have to tell about how much we've achieved with large language models.

Speaker 1 | 04:24 - 05:01
But although they're being extremely effective for ramping language and general intelligence. It's clearly not the whole world. There's this multimodal world of vision, sound, taste that you'd like to be dealing with more than just language. And then the question is how to do it. And despite, you know, a huge investment in the computer vision space, right, as a research field, computer vision has been for decades far, far larger than the language space actually.

Speaker 1 | 05:01 - 05:49
I mean, I think it's fair to say that, you know, vision understanding sort of stalled out, right? You got to object recognition, and then progress just wasn't being made, right? If you look at any of these vision language models, it's the language that's doing 90% of the work and the vision barely works. And so there's really an interesting research question as to why that is. And at heart, the ideas behind Moon Lake are an attempt to answer that, believing that there can be a really rich connection between a more symbolic layer of abstracted understanding of visual domains, which aren't in the mainstream vision models, which are still trying to operate on the surface level of pixels.

Speaker 2 | 05:49 - 05:56
Mhmm. I think one of your blog posts, you put it as structure, not scale. Is that general thesis?

Speaker 1 | 05:56 - 05:58
Yeah. Well, scale is good too.

Speaker 3 | 05:58 - 05:59
Yeah. Scale is good too.

Speaker 1 | 05:59 - 06:01
Lots of data is good as well.

Speaker 2 | 06:01 - 06:01
And scale.

Speaker 1 | 06:01 - 06:07
But, nevertheless, you want the structure, yeah, to be able to much more efficiently learn.

Speaker 2 | 06:07 - 06:36
Yeah. The other thing I really liked also is you put out an example of what your kind of reasoning traces look like, right, which you would the still is is the word that comes to mind. I don't even think that's a good good description, but it would involve, for example, geometry, physics, affordances, symbolic logic, perceptual mappings, and what what have you. But, like, that that is the kind of example that involves, let's call it, spatial reasoning, world model reasoning as as compared to normal LM reasoning. Yeah.

Speaker 4 | 06:36 - 07:03
But also, like, taking it a step back, so how do you guys define world models? You know, a lot of people see, like, okay, you can do diffusion, you can do video generation, but you guys put out quite a few blog posts. You put out a essay recently. You can even pull it up about efficient world models. You have a pretty, like, structural definition here, but for the general audience that don't super follow the space, right, what's what's the difference in what we see from, like, a video generation model to a world gen, a simulator?

Speaker 4 | 07:03 - 07:04
How do you kind of paint that landscape?

Speaker 1 | 07:04 - 08:08
So I think this is actually a little bit subtle because, you know, people look at these amazing generative AI video models, Sora v o three, one of these things, and they think genies. They think, oh, this is amazing. This is sort of, you know, we've solved understanding the world because you can produce these generative AI videos. But the reality is that although the visuals do look fantastic, those visuals actually aren't accompanied by an understanding of the three d world, understanding how objects can move, what the consequences of different actions are, and that's what's really needed for spatial intelligence. So, I mean, a term we sometimes use is that you need action condition world models, that you only actually have a world model if you can predict, given some action is taken, what is going to change in the world because of it.

Speaker 1 | 08:08 - 08:35
And in particular, that becomes hard over longer time scales. So if you're simply, you know, trying to predict the next video frame, that's not so difficult. But what you actually want to do is understand the consequences, likely consequences of actions minutes into the future. And to do that, you actually need much more of an abstracted semantic model of the world.

Speaker 2 | 08:35 - 08:59
Yeah. The question comes where you want to have more structure than is available in just predicting the next token. And, typically well, let's let's call it the experience of the last five years has been that that is just washed away by scale. Right? So what is the right middle ground here that you don't ignore the bitter lesson, but also you can be

Speaker 1 | 08:59 - 09:38
more efficient than what we're doing today? You know, one possibility is, look, if we just collect masses and masses and masses and masses of video data, this problem will be solved. Under certain assumptions, that could be true. But there are sort of multiple avenues in which it could not be true. The first is what's really essential is understanding the consequences of actions, producing an action conditioned world model.

Speaker 1 | 09:39 - 10:49
And if you're simply, collecting observational video data, which is the easy stuff to collect when you're sort of mining online videos, you don't actually know the actions that are being taken to see how the video is changing. And so if you're never collecting directly actions and you're having to try and infer them from what happened in the observed video, that's not impossible, but it's very hard and it's not really established that you can get that to work at any scale yet. And so there's a lot of premium on collecting action condition video data, which is part of why there's been a lot of interest in using simulation so that you can be collecting data where you do know the actions, which is in quite limited supply. But there's also in the limit of as much data as you could possibly have, You know, maybe the problem is eventually solvable, but even though we collect huge amounts of text data, text data is always at a great level of abstraction. Right?

Speaker 1 | 10:49 - 11:46
Language is a human designed abstracted representation where there's meaning in each token and it's representing an abstraction of the world. Right? As soon as you're describing someone as a professor and as soon as you're saying that they're condescending, right, you know, these are very abstracted descriptions of the world is not at sort of what you're observing as pixel level. And so to get to that kind of degree of abstraction starting from pixels is orders and magnitude of extra data and processing. And so although, you know, we absolutely want to exploit, get as much data as possible, use the bitter lesson, Nevertheless, if there are ways in which you can work with five orders of magnitude, less data than people working purely from pixels, you're gonna be able to make a lot more progress a lot more quickly, and that's the bet here.

Speaker 1 | 11:46 - 12:27
And so you could just say that's only wanting to be able to, you know, do it more efficiently, do it more quickly, do it more cheaply, but I think it's actually more than that. I think one should be making the analogy to how human beings work. At one level, you know, yes, we have these high resolution eyes and we can look and see a scene like a video, But all of the evidence from neuroscience and psychology is that most of what comes into people's eyes is never processed. Right? That you're doing fairly fine Full weighted.

Speaker 1 | 12:28 - 12:55
Of exactly what you're focusing on. But, you know, as soon as it's away from that of, yeah, there's another guy over there, that you've sort of only processing top down this very abstracted semantic description of the world around you. And so, you know, that's what human beings are doing. They're working with semantic abstractions. And so I think it is just the right representation, because we also have other goals.

Speaker 1 | 12:55 - 13:34
We want to be able to do, you know, real time worlds, that means there's a limit to how much processing you can do, and we want to do long term planning and consistency, and again, that favors abstraction. I mean, I guess there was actually a recent blog post that came out from our friends at Physical Intelligence and, you know, they were sort of heading in the same direction. They're saying, oh, to maintain a long term memory of what's happening in the world so we can do longer term. We're actually storing text of what is, you know, been happening in the world. Right?

Speaker 1 | 13:34 - 13:39
It's not such a successful strategy of trying to keep it all at a pixel level. And, yeah,

Speaker 4 | 13:39 - 13:53
I mean, you can see it in video models. Like, that temporal consistency, we're at a scale of train on, you know, all the video data we have. We have it for maybe thirty seconds, a few minutes. That's not the same as a game state played for half an hour. Right?

Speaker 4 | 13:53 - 14:03
I thought you guys break it down pretty well. You have a you have a blog post about building multimodal worlds with an agent. I don't if you guys wanna talk about this. This is one of the things I read.

Speaker 2 | 14:03 - 14:06
I thought Yeah. So this is the thing I talked about with the reasoning chain. Yeah.

Speaker 4 | 14:06 - 14:23
So there's, like, different phases to this. It seems like it's more of an agent, a scaffold. Very different approach than just, you know, type in a prompt, and you you don't have the same consistency. It also, like for people that are listening, you know, I I would highly recommend reading it. It breaks down the problem in a different light.

Speaker 4 | 14:23 - 14:31
Right? So, like, what do you need to consider when you're talking about video like, world game models. Right? How would what do you need to consider? What are the factors?

Speaker 4 | 14:31 - 14:35
What are the elements? What's the state? So I don't know if you guys have stuff to talk about for this one.

Speaker 3 | 14:36 - 14:40
Yeah. Actually, I wanted to add on a little bit Yeah. On our previous point,

Speaker 2 | 14:40 - 14:41
which is just like Chase, stop

Speaker 1 | 14:41 - 14:42
it super quick.

Speaker 3 | 14:42 - 15:00
I I do feel like sometimes people confuse, like, oh, like, we're taking an up a method with with abstraction. That means they don't believe in bitter lesson. Like like, that's just false. Right? Like, we are believed as a bitter lesson, but then I feel like the question that we always discuss is, like, what is the right abstraction level today?

Speaker 3 | 15:00 - 15:42
The analogy I like to make is, like, let's just say we can encode and decode represent all of images, videos, audio in bytes. Then the most bitter lesson approach is to train a next byte prediction model as opposed to the next token prediction model, where it's like, it's natively multi modal because you just but it's like, well, yeah, like, to to Chris' point, it's like the scale and computing need to achieve that. So that's why we always come back to, like, okay, what is the most efficient way to do it? And and reasoning models, to to the point of this blog post, is a showcase of, like, hey, we're actually just, like, reasoning about the world and reasoning about the aspects of the world that that matter for me to learn what I want to learn from this role model.

Speaker 2 | 15:42 - 16:01
Yeah. It's like you're improving the encoder of whatever you're trying to model, and, like, a better representation would just represent the important things in less space Yeah. Which would just be more efficient. Yeah. So, yeah, I I I fully agree that it is not antagonistic to a bit of lesson.

Speaker 2 | 16:01 - 16:13
I do wanna wanna mention one more thing. Is there any philosophical differences with the Jappa stuff that Yan Lakun is working on? I gotta go there. Are you you're you're you're imagining, like, some latent abstraction. I'm like, okay.

Speaker 2 | 16:13 - 16:16
Fine. Let's let's talk about it. Right? Like, it's an elephant in the room.

Speaker 1 | 16:16 - 16:48
Yeah, there are philosophical differences. Jan Lecune is a dear friend of mine, but he has never appreciated the power of language in particular or symbolic representations in general. Jan is a very visual thinker. He always wants to claim that he thinks visually and there are no words, symbols, math in his head. Maybe that's true of Jan.

Speaker 1 | 16:48 - 17:34
It's certainly not the way I think. But at any rate, you know, the world according to Jan is the basic stuff of the the world and of intelligence is visual, and language is just this low bit rate communication mechanism between humans, and it doesn't have much other utility, and it's far inferior to the high bit rate video, that comes into your eyes. And I think he's fundamentally missing a number of important things there. Right? Think of this evolutionary argument looking at animals, right?

Speaker 1 | 17:34 - 18:44
That the closest analogy is the things with chimps, right? So chimpanzees, you know, have fairly similar brains to human beings. They have great vision systems, they have great memory systems, they've got better memory than we do of short term memories, they can plan, they can build primitive tools that, you know, humans massively ahead in what we understand about the world, what we can plan, what we can build. And essentially what took off for us was that humans managed to develop language, and that gave a symbolic knowledge representation and reasoning level, which just gave this sort of vaulting of what could be done with the intelligence in brains. So the philosopher Dan Dennett refers to language as a cognitive tool and argues that, you know, humans unique among the creatures in the world have managed to build their own cognitive tools.

Speaker 1 | 18:44 - 19:37
And language is the famous first example, but other things like mathematics and programming languages are also cognitive tools. They give you an ability to think in abstractions, in extended causal reasoning chains, and that allows you to do much more. And we use that for spatial representation and intelligence and planning and gameplay as well. So we believe, and this is, you know, underlying the specific technologies that Moon Lake is making, that symbolic representations are powerful and you want to use it in your understanding of the visual world, when you want a causal understanding, when you want to maintain long term consistency and prediction. And, you know, as I understand it, that's just not in Jan Lecun's worldview.

Speaker 1 | 19:37 - 20:05
So I think that's the fundamental philosophical difference. Then there's the specific model he's been advancing, Jepar. I mean, that's a reasonable research bed as a direction as to head for building out a model of the visual world. To my mind, it's sort of one reasonable research bed. It's not really established as the best one that everyone should be following.

Speaker 2 | 20:05 - 20:25
At least developed at scale and meta. But it's not just vision. Right? Like, mean, JEPA is a you know, just joining a bidding prediction can be applied to anything, really, and and people have done it. If the argument is that there is a latent representation or that is that is probably more suited to the task, then why not let machines do it for us instead of predefining it at all?

Speaker 2 | 20:25 - 20:30
And isn't something like a JEPPA shaped thing the right answer? And if not, why not?

Speaker 1 | 20:30 - 21:17
So I think there's a part of Jeppard that's right, which is you do want to have a joint embedding that gives you a consistent model of the world. And Jan's argument is you can never get that from autoregressive language models because they're sort of left to right churning out one token at a time. I guess this is where we're, you know, the research arguments of the field. You know, I'm not actually convinced that's right because although the token production is this autoregressive, process that's heading, you know, left to right. I guess it doesn't have to be left to right, anyway, in sequence of tokens.

Speaker 1 | 21:17 - 21:51
We could have right to left Arabic. That, you know, although that's true, all of the weights of the model that are internal to transformer, they are a joint model of the model's understanding of the world. And so I think you can think of the weights of the model as a form of joint representation, and therefore, it is plausible to think that that could be the basis of a world model which avoids Jan's objections.

Speaker 2 | 21:52 - 22:08
I think I follow, and, obviously, that will touch on what Moon Lake eventually ends up doing as well, right, like, which it's hard to tell because you put out the end results, but we don't know the inputs that go into it. So it's it's, you know, that that's that's something that we have to figure out over time. Yeah.

Speaker 4 | 22:10 - 22:14
I mean, I guess this kinda breaks down some of the outputs. Do you wanna walk us through it? Yeah.

Speaker 3 | 22:14 - 22:40
So this this really just walks us through the reasoning traces of, like, okay. So let's just say if we wanna build a world in this context, it's really just a game demo that that shows the variety of interactions that this world model can build. And, yeah, it's really just a reasoning traces of, like, okay, you're prompted to create a bowling game. Like, how did it achieve what you saw, that level of causality, interaction, and consistency? Right?

Speaker 3 | 22:40 - 22:44
So, yeah, this is almost just like a an example of, like, a reasoning traces.

Speaker 2 | 22:44 - 22:46
Very detailed. Very, very detailed.

Speaker 4 | 22:46 - 22:54
But you gotta like, you don't even realize it. Right? Like, when a video is generated, what happens when a ball strikes a pin. Right? So first, like, there's audio in that.

Speaker 4 | 22:54 - 23:10
Like, audio triggers happen, score increments, the world changes, like, pins have to start dropping. There's a timer that goes on. You know, it's just, like, very similar to how now we're used to reasoning for language models. There's a whole state of what happens. So geometry, physics, all this stuff.

Speaker 4 | 23:10 - 23:11
And then

Speaker 3 | 23:11 - 23:11
Yeah.

Speaker 4 | 23:11 - 23:19
There's kind of that single prompt. So asset, visitation, all this stuff. It's it's like a it's a nice view to see what's going on.

Speaker 2 | 23:19 - 23:29
I think Sun is also too polite to point out that both, like, Google's Genie demos as well as World Labs' Marble do not have interactive worlds.

Speaker 3 | 23:31 - 23:44
That's the benefit of having a reasoning model. Right? Like, because you can you can say, oh, like, maybe in this particular context, I want to learn how to bowl. And then you can say, okay, then what is it important when it comes to learning how to bowl? Okay.

Speaker 3 | 23:44 - 23:59
Maybe it's like, I need to understand the the basic of, like, physics, and I wanna throw it over them. I wanna know that when I when it resets, it's it's a new game. So I know that yeah. Basically, you know you know you know to pick up the ball. You know the ball's gonna cause the pins to fall down.

Speaker 3 | 24:00 - 24:43
You know that what's important to this particular bowling game is to score, and you know that the score corresponds to the number of pins that fell down. So it's just like, if it's a model that sort of knows what it looks like, knows what a bowling game looks like, but doesn't actually allows you to practice over and over again and to understand that, oh, like, what it takes to actually get a high score, then it sort of doesn't actually allow you to learn what you set out to learn within the world model. Right? And and I think this is really just one example of showing, like, the advantages of the approach that we're taking over most let's call it the zeitgeist is today, when people talk about clinical world models.

Speaker 1 | 24:43 - 25:03
Right. So it sort of seems like the question to ask when there's a world model is, can I not only just wander around the world and look at the beautiful graphics, can I interact with the objects in the world and see the right consequences of actions?

Speaker 4 | 25:03 - 25:10
And you also understand what the consequences would be if you do something. Right? So it's not just like, okay. There's one thing. If I pick it up, something will happen.

Speaker 4 | 25:10 - 25:20
But, you know, there's there's 50 options, and I know I can expect, I can infer what would happen if I do any of them. Right? So very different when you can actually see it play around with it.

Speaker 2 | 25:20 - 25:38
There there's two cheeky elements of that. I mean, the the the sort of, I guess, less ambitious one is let let's really establish for listeners. Why is this fundamentally different than writing Unity code? Right? Like, just creating a model to translate a prompt into Unity code.

Speaker 3 | 25:38 - 25:53
So there is an underlying physics engine. Yeah. In that sense, there's some overlapping things to Unity. But the way we think about it is, like, physics engine or tools or code are cognitive tools, like, borrowing Chris' term. Right?

Speaker 3 | 25:53 - 26:27
Like, tools that the model can employ as means to an end. So today, maybe you say, okay, in this particular context, we care about physics. We care about the long term causality consequences. Then, yes, we deploy employ physics engine. And then maybe tomorrow, we say, okay, we're we're training, let's just say, drones, where we only care about really fluid dynamics and the visual aspect of the world, then then, yeah, maybe we don't actually The model actually doesn't have to use a physics engine, or maybe it employs other types of representation or physics engine to achieve the task.

Speaker 3 | 26:28 - 26:43
So, yes, writing code for Unity is sort of similar to a tool that our a model can employ, but our goal is for model to take a representation conditioned reasoning approach or process Yep. Internally.

Speaker 2 | 26:43 - 26:54
Yep. Using these things is just, like, general two calls, right, which I think is very interesting. The other more ambitious one is some kind of recursive element where it becomes multiplayer. Right? Like, here, there's a single player element.

Speaker 2 | 26:54 - 26:58
You're not modeling any other people involved, and that is a whole other thing.

Speaker 3 | 26:58 - 27:01
But in fact, we can already do multiplayers.

Speaker 2 | 27:01 - 27:02
Oh, yeah? Okay. I haven't seen

Speaker 3 | 27:02 - 27:13
any demo sessions. Actually just, like, prompt our our models to say, hey. Like, configure it to multiplayer, then it'll do, like, this you'll be able to configure multiplayer Great. Versus the CA database for you.

Speaker 4 | 27:13 - 27:22
Easy. Yeah. So what what are, like, some of the current limitations in where we're at? So there's one approach of, like, okay, scale up video predictors. Obviously, there's data issues.

Speaker 4 | 27:22 - 27:36
You know, with approaches like this, is it data constraints? What are, like, the next steps? Is it real time? Like so there's one side of, you know, write an agent to write Unity code, but, okay, I wanna be streaming a game real time. I wanna have characters being also, like, agentic.

Speaker 4 | 27:36 - 27:39
But where where do we kinda see this scaling up? Right?

Speaker 3 | 27:40 - 28:12
Yeah. There's definitely a data constraint, like, the more data, the the better this reasoning model can almost basically act as humans to, like, operate a variety of tools and softwares to build whatever is necessary. And then there's a sort of fidelity constraint, which we're actually solving with another model, Reverie, which we can talk about later. But it's like, well, it's not as easy to get to photorealism with the approach that we're taking. But we think there are better solutions to that, which is we can dive into later later.

Speaker 4 | 28:12 - 28:22
The one one thing you note here is it's a diffusion model. Right? So there's there's a few approaches, diffusion, caution, splatting. Yeah. So Reverie diffusion model, you guys wanna

Speaker 3 | 28:23 - 28:29
introduce? Yeah. Totally. So within our world modeling framework, we think there are two models that we train. Right?

Speaker 3 | 28:29 - 29:15
Like, there's the multimodal reasoning model that we just talked about that essentially handles mainly the the causality, the persistency, and logic determinism determinism of the world. And then Reverie is our bet on saying, okay. Like, while all those model can take care of all these things that we just talked about, its limitations compared to existing, say, video models is that it doesn't have as high of a pixel fidelity right off the gate. Right? And reverie is to say, hey, we can actually take whatever persistent representation that we generate with our multimodal reasoning model and learn to restyle it into photorealistic styles or arbitrary styles you want.

Speaker 3 | 29:15 - 29:27
So this model is almost to say, hey, I'm going to respect the persistency and interactivity of the world that you created, but my only job is to make sure that its pixel distribution is close to what we want.

Speaker 2 | 29:28 - 29:32
Yeah. Oh, yeah. Good example right there. You kept the KO divergence.

Speaker 3 | 29:33 - 29:34
Oh, where?

Speaker 2 | 29:34 - 29:43
No. No. I mean, this this is a classic, like, how you don't stray too far from the source material as you you kept the k l, which is kinda cool.

Speaker 1 | 29:43 - 30:28
Yeah. Mean, and the difference is and I mean, Sun was pointing at this where it's sort of saying it's in one way a more difficult path, but a better path. That, you know, typically the diffusion models are producing the whole scene and it looks lovely, but there isn't spatial understanding behind it, which is allowing for the real time graphics gameplay, the spatial intelligence understanding the consequences of worlds, where this is taking a path, where it is assuming an abstracted semantic model of the world, the world state, and then the diffusion model is then being used on top of that to produce the high quality graphics.

Speaker 2 | 30:28 - 30:35
Is there an intended practical or business use for this, or is it like a like a demonstration of capabilities?

Speaker 3 | 30:36 - 30:53
We actually believe that this is gonna be the next paradigm of rendering. So it's gonna replace how raster rasterizers. It's gonna replace DLSS today because it not only has these pixel prior that's learned from the world such that you can literally play any game in photorealistic styles, which is a lot of people's desire when they do GTA. Right? Like

Speaker 4 | 30:53 - 30:56
And all the mods, all the people adding perfect lighting and all this.

Speaker 2 | 30:56 - 30:59
So skins for worlds, let's call it. Skins.

Speaker 3 | 30:59 - 31:00
Let's call it skins for worlds.

Speaker 4 | 31:00 - 31:03
You can call it skin. You can call it customization. You can play it how you want. Right?

Speaker 3 | 31:03 - 31:17
Yeah. Exactly. And I think another thing that we really pointed out specifically in this blog is the programmability of it. Right? So what this means is that this renderer well, historically, renderer is always a derivative of the game state.

Speaker 3 | 31:17 - 31:46
Right? You're saying, here's the game state I'm rendering out of frame. But here, I'm saying, actually, this renderer can be part of the gameplay loop. I can say something about the lines of if upon getting 10 apples, I'm gonna my weapon of choice, my bullet's gonna turn to apples. And that's that's possible because we can say we can basically dynamically have certain game state trigger the the preconditions to the renderer such that the rendering is now part of the game loop too.

Speaker 3 | 31:46 - 31:59
One thing is to just say, okay, it's it's it's the appearance. But the second thing is also to say, there's these novel interactions that are possible because this renderer now has actually priors of the world.

Speaker 2 | 32:00 - 32:02
And it's up to the artist to figure out what to do with it.

Speaker 4 | 32:02 - 32:02
It is

Speaker 3 | 32:02 - 32:18
up to the creators. Yes. Yeah. And I also think that's actually another big argument that we're making and the reason that we're picking back taking the bet we're baking is that a lot of the times, whether it's for Embody AI or gaming, like, you want a layer where human can inject their intentions. Right?

Speaker 3 | 32:18 - 32:58
So, for example, let's just say, in the context of gaming, it's obviously, like, my creative intent. But maybe in the context of embodied AI, it's like, oh, like, I take this foundational policy, and I want to actually fine tune it to deploy in my house. So you want to almost say, inject have a layer where human can say, oh, here's the distribution of things I want to create to achieve my goal. And I think three d graphics as it as it is today is basically the layer for people to say, hey, what do I care about in this world? And it allows, basically, human intent to be expressed in these worlds much more explicitly and distributionally as opposed to just saying, hey, I'm gonna generate, like, arbitrary.

Speaker 3 | 32:58 - 32:59
And it's, like, just prompts, you know.

Speaker 2 | 32:59 - 33:16
It's one of those things where, like, I I think you you're gonna build up a series of models. Right? This is just one of this is probably, like, the highest utility or heaviest frequency one. I don't know what to call this, where, like, you yeah. You can immediately drop this in on any game, and you don't need anything else that that you guys do.

Speaker 2 | 33:16 - 33:37
But I I could see I could see that. I think the the human intent is something that people are not even used to because we're so used to static worlds or, you know, worlds that just don't react or I don't know. It's it you're kinda blowing my mind right now with, like, well, I'm I wonder if you've talked to people at GDC, and what are they what are they gonna do with it? Yeah.

Speaker 3 | 33:38 - 33:42
Now the stance that we take on this front is, like, we're not gonna be more creative than our users.

Speaker 2 | 33:42 - 33:42
Ship it out. Yeah.

Speaker 3 | 33:42 - 33:48
But we wanna make sure that we're building things in a way that really allows them to express their intent.

Speaker 2 | 33:48 - 34:06
The thing that you said about here's the distribution that I want, I think text may be the too low of a bandwidth to to really demonstrate because I I you know, the I'm I'm probably just gonna want to drop in a bunch of reference assets, and then you can figure it out from there.

Speaker 4 | 34:06 - 34:12
You probably wanna do a a mixture of both. Right? Like, you throw in a few images. I wanted this style. I wanted to look like this.

Speaker 4 | 34:12 - 34:13
So it's it's it's a mixture. Right?

Speaker 1 | 34:13 - 34:49
I I think it's a mixture. I mean, yeah. I mean, there's clearly a visual component of this, and it's not that, you know, everything can be text because of course you want to give a visual look, but there's also a massive amount of giving the overall picture of the look of the world and the behavior of things that you can express in a few words of text and then be very time consuming and difficult to do via visual means. So I think, yeah, you want a combination of both.

Speaker 4 | 34:49 - 34:58
So one question I kind of have is how do we go about evaluating world models? So, like, there's many axes. Right? One is like, okay, I have preferences. How well do we adhere to prompts?

Speaker 4 | 34:58 - 35:12
One is the simulation. One is, like, do things is there core logic that's broken? So coming from we know how to evaluate diffusion, there's fidelity, there's stuff like that. But what are some of the challenges that most people probably aren't thinking about?

Speaker 3 | 35:12 - 35:50
Yeah. I think this is, like, a great question and probably one of the hardest questions in world models, because, like, I think it always comes back to what are you building this world model for? And depending on your end goal and purpose, the evaluation should differ. So in the context of games, then the most direct way of measuring is how much time are people actually spending in this worlds that you create. And if your goal is to say, example, in the context that we just talked about, like, hey, deploying deploying action in body agent, then your your end metric is then, okay, after training in these worlds that you generate, how robust it is to when you actually deploy to the target environment.

Speaker 3 | 35:50 - 36:06
But then, you know, it's it's hard to measure these end metrics. So today, people have, like, these proxy metrics that I call that basically try to measure what we really care about, which is the end metrics. But then, frankly, it's different for every use case.

Speaker 4 | 36:06 - 36:14
Yeah. Which seems like quite a challenge. Right? Like, in in language models or video models, image models, your benchmarks are proxies. Right?

Speaker 4 | 36:14 - 36:37
People aren't actually asking instruction following tool use questions. They're proxies of how well it will do downstream. But for this, so, like, you know, should should teams, should companies have their own individual benchmarks outside of games? If you think of stuff like, okay, video production, movies, stuff like that that also wanna use world models. Should should they sort of internalize, like, their own proxy?

Speaker 4 | 36:37 - 36:39
Is this something you guys do? Where where does that kinda Yeah.

Speaker 1 | 36:39 - 37:27
I think this whole space is extremely difficult as things are emerging now. And it's not only for world models, I think it's for everything, including text based models, right? Because, you know, in the early days, it seemed very easy to have good benchmarks because we could do things like question answering benchmarks and could you answer the question based on these documents and the various other kinds of, you know, do pieces of logical reasoning or math. But again, these are sort of, and there are sort of visual equivalents of things like object recognition, right, for these small component tasks. But, you know, these days, so much of what people are wanting to do also with language models is nothing like that, right?

Speaker 1 | 37:27 - 38:26
You're wanting to have an interaction with the language model and get some recommendations about which backpack would be best for you for your trip in Europe next month, and it's not the same kind of thing, right? And it's not so easy to come up with a benchmark as to does this large language model give you an effective interaction for guiding you in a good way for shopping, right? So, and it's the same problem with these world models. So if we take the game design case, well, success is that a game designer can produce what they are imagining in a reasonable amount of time. And that's really the kind of macro task, but, you know, that's a very hard thing to turn into a benchmark.

Speaker 1 | 38:26 - 38:59
And I think a lot of this is actually going to turn into people walking with their feet, right? I mean, I guess that's what's happening, you know, at the large language model level, right? When people are choosing to use, you know, GPT-five or Gemini or Claude, individuals are trying out these different models and deciding, Oh, I like the kind of answers that GPT5 gives me, or No, I feel like I get more accurate detail from Claude, Right? A lot

Speaker 4 | 38:59 - 39:02
of vibe checking. Lot of people just using it.

Speaker 1 | 39:02 - 39:08
Realize that. But it's actually whether people feel it's giving them utility in what they want. Right?

Speaker 4 | 39:08 - 39:21
And the the interesting thing there is, like, a lot of people prefer the visual. Right? This looks pretty, which is not the objective of what this is for. Right? It's if a game designer is working on something, they care about the game engine, the state.

Speaker 4 | 39:21 - 39:30
It's it can look whatever. You can fix that up later, or you can have a really good game state, and you can quickly edit it to twenty twenty different versions like keep state.

Speaker 1 | 39:30 - 39:57
Right. So that's a really important distinction for and for speaking to Moon Lake Strength. Right? So, yeah. I mean, you know, great visuals, lovely to look at for a few seconds, but games are really all about the concept, the gameplay, and a lot of the time that doesn't actually even require great visuals.

Speaker 1 | 39:57 - 40:22
I mean, there are just lots of very successful games which have relatively primitive visuals, and there are other games where people have spent millions producing photorealistic visuals and the game sucks. Right? So keeping those two axes apart is really important in thinking about what's important in a world model for different uses.

Speaker 2 | 40:22 - 41:18
This conversation is reminding me of some game review and fiction discussions I've had in my sort of non AI related life. Some for some people might know Brandon Sanderson, who's a very famous fiction author, had is is a big, big game reviewer, and he he's a big fan of video games where you change one thing about a normal what you what you might assume about about the world. For example, Bala is You, I don't know if you might have come across that, where, like, the rules change as you play the game. And also, like, where, you know, you can do things like reverse time selectively or, like, change gravity selectively. I I think this is also remind reminds me of other kinds of world models that are created by authors where Ted Chiang is is my typical example where he will take the world that you know today, but change one thing about it and but then create a consistent world based on that, which is a long winded answer of me to of for me to say is, is it easy to create alternative worlds that don't exist, but you change one thing?

Speaker 2 | 41:18 - 41:22
And then let's let's run a whole bunch of people through it to see if it works.

Speaker 1 | 41:22 - 41:39
My first answer will be that seems a lot easier and more conceivable to do using techno technology like Moon Lakes than with some of the other world models out there. Where the sun can actually make it happen, I'll let him give the second answer.

Speaker 2 | 41:40 - 41:59
Ethan, I guess, for you, you're constrained by the game engine tool. Right? Like, at the end of the day, that's the that's the thought partner that you have. If I ask for something where like, if it never is allowed to reverse time or if gravity only ever works one way, then, well, that's it. But sometimes gravity might change.

Speaker 3 | 41:59 - 42:26
But it's a lot easier to change with code as opposed to a model that is learned primarily on data of real world and virtual worlds that are I guess, like, example, Genie, where, like, there's actually training a lot of real world data and a lot of virtual gaming data. And it's hard to say well, maybe it's easy to say, okay, I wanna change the visuals in, like, the time period of of the world. Like, you can't change gravity, for example.

Speaker 4 | 42:26 - 42:37
I feel like you can to light bounds. Right? Everything comes down to, like, code is a better way to execute it, but the models aren't that diverse and creative. Right? You can say, okay, make gravity slower.

Speaker 4 | 42:37 - 42:48
It can do that. But it's limited to your representation of how you text it out. Right? Like, they're only gonna do a few iterations, whereas programmatically, you know, if there's a game engine under the hood, can you can kind of go wild. Right?

Speaker 4 | 42:49 - 43:02
So one of the, I don't know, one of the limitations of most models is that they're very overtrained to one style. Right? And extracting diversity is pretty difficult, at least. That's something we've seen.

Speaker 3 | 43:02 - 43:14
I mean, are there other examples you have in mind where existing models you know, like, it would be easier to do that's not using code? Like, certain types of creative intent or, like, transition state transitions.

Speaker 2 | 43:14 - 43:39
Clipping other models other world models are very good at clipping through things. Clipping? My my my leg is clipping through a rock because because it's, you know, it's just it's just bad. Like, you would have to struggle very hard with your your stuff to actually make that happen, We which I think is maybe a topic that you actually prepared on Gaussian splatting versus the other stuff.

Speaker 4 | 43:39 - 43:43
Yeah. Yeah. It's just for those not super familiar. Right? There's a there's Gaussian splatting.

Speaker 4 | 43:43 - 43:51
There is diffusion. Like, what works, what scales up. I feel like in February when Sora one came out, the blog post was literally titled, like

Speaker 2 | 43:51 - 43:53
You bring it up here never know.

Speaker 4 | 43:53 - 44:05
You know, world video generation models are world simulators. It's super bitter lesson pilled. Yeah. A lot of it is emergence, right? So not to go through their blog post.

Speaker 4 | 44:05 - 44:28
Basically, their whole thing was, as you scale up all this consistency, all this stuff just kinda solves, it's a very simple premise, right? They just scaled up diffusion, and from there, you know, this is this is February 2024. How much can we it's already been two years, which is basically five years, you know. How much more in AI time do we need to just scale up, or or do we hit a data cap? But I think we already talked about this a lot.

Speaker 4 | 44:28 - 44:35
Right? Like, this is back to the beginning discussion of what's appropriate for the time, and that seems like your approach. Right?

Speaker 3 | 44:35 - 45:21
Yeah. The point I'm trying to make is that there are very many, many different types of world simulators. And, like, having a world simulator that can produce pixel coherency is very, very useful for games and, you know, marketing and all these things, but it's not as useful as people think when it comes to causal reasoning, when it comes to embodied AI. And, yeah, like, it this this title is true. Like, we're not saying that it's it's, you know, not a great world simulator, but actually, in the blog that we we we we wrote, the bet is more so that there are gonna be disproportionately large share of value of real world task and virtual tasks where high resolution pixel fidelity is not needed.

Speaker 3 | 45:21 - 45:23
And, yes, video models have their values.

Speaker 2 | 45:23 - 45:48
Yeah. This is at the it's absolute limit of my physics understanding, but one example that comes to mind is basically having to solve, like, base the equivalent of a three body problem in a deterministic world, whereas the video models, which is approximated, good enough. Yeah. Right? Like, there's there's some point at which your approach kind of runs into, like, the well, you now have to simulate the world, please.

Speaker 2 | 45:48 - 45:56
Thank you very much. And, like, you're you're trying to do that, but only to the extent that the game engine lets you, and, like, the game engines cannot do some things.

Speaker 3 | 45:57 - 46:13
Yeah. No. I mean, I I think the the interesting or more technical question here actually is where do you draw the boundary between what's handled with, let's say, diffusion prior and where when what's handled with symbolic priors?

Speaker 2 | 46:13 - 46:13
Yes. And Okay.

Speaker 3 | 46:13 - 46:34
Okay. Because I go there. This boundary can actually be fluid. Like, I think, like, maybe what you're trying to get at is like, okay, people are saying, pixel prior everything. But what we're saying is, okay, there's a boundary that we draw where this is where we think provides the most economical value for the domains and things that we care about today.

Speaker 3 | 46:34 - 47:09
And I actually do think and it's just something that we do internally all the time, which is like, okay, given new equations that we learn or new elements of the world and that we we learn, or maybe some other knowledge that we acquire in the process of developing the models. Should we still be maintaining this line exactly as it is today, or should we move it a little bit left or a little bit right? Right? Like, sometimes that we realize that, oh, like, maybe customers or or folks, like, want certain things that are better handled with Pixl prior as opposed to Symbolic prior.

Speaker 2 | 47:09 - 47:15
Then we Your your skin thing is a is a example of moving it right. Yeah. Or left. Yeah. I don't know what the the left right is.

Speaker 2 | 47:15 - 47:16
Yeah. Yeah.

Speaker 3 | 47:16 - 47:23
No. The the the the reverie model Yes. Actually, we have a few iterations of them. They're actually at slightly different

Speaker 2 | 47:23 - 47:23
I know.

Speaker 3 | 47:23 - 47:25
Values. You should do that.

Speaker 2 | 47:25 - 47:36
That's a cool dimension to show. Yeah. Is quantum mechanics the diffusion prior of our world? Right? It's like that that's the boundary of classical mechanics versus quantum.

Speaker 2 | 47:36 - 47:41
Right? Like, that that's it. Right? At one point, god plays dice, and the other point doesn't.

Speaker 3 | 47:41 - 47:51
I don't know I don't know if, Chris, you wanna say it, but I think I think, generally, I feel like physics is better with symbolic priors. Even quantum physics. Even quantum physics.

Speaker 2 | 47:51 - 47:58
Yeah. This is starting to get to MLST territory is is is what I call it, where he he likes to get philosophical. We're we're quite friendly.

Speaker 4 | 47:58 - 48:04
I mean, we need to get we need to get singularity. I heard some of that.

Speaker 2 | 48:04 - 48:14
No. No. I think that is actually really helpful. And, man, I just want you to productize this. Like, as a product guy, I'm just like, oh, it's

Speaker 4 | 48:14 - 48:14
like gamer. Know?

Speaker 2 | 48:14 - 48:18
I like that. A researcher. You know? Like, it's cool. Like, this this is a theory theoretical.

Speaker 2 | 48:18 - 48:40
Like, you have a very good I don't know. Like, the way of thinking about these things, but I just wanna see you, like, you know, express it. I do think, like, you know, fundamentally things when you leave open new tools, like, okay. Use use human intent to incorporate it into how you render. Well, artists are gonna have to take, like, two to three years to figure out what to do with this, and you just don't know.

Speaker 2 | 48:40 - 48:41
Right?

Speaker 1 | 48:41 - 48:49
But I think, you know, this is gives a much more approachable and controllable world for us try

Speaker 2 | 48:49 - 48:51
out beauty of NLP.

Speaker 3 | 48:51 - 48:51
That that

Speaker 1 | 48:51 - 48:58
will enable it to be adopted and used, and we're very hopeful about that. Yeah. Yeah.

Speaker 3 | 48:58 - 49:04
Yeah. I mean, we are we are very focused actually on commercialization in the sense that, like, we do we do really believe in the data flywheel app approach

Speaker 2 | 49:04 - 49:04
Yeah.

Speaker 3 | 49:04 - 49:16
Where we put this in the hands of the creators and the users, and then they will teach us when what capability our model should improve, and that's why we are we are actually, you know, like, products in beta.

Speaker 2 | 49:16 - 49:20
Yeah. Focusing on gaming. What what's, like, the adjacent thing to gaming?

Speaker 3 | 49:20 - 49:37
Embody adjacent, basically. So maybe we can we can I'll I'll maybe start with where we see the platform in three years, which is like, okay. The users would tell us what they want to achieve. The end goal could be, hey. I just I wanna make something to teach my kids the value of humility.

Speaker 3 | 49:37 - 49:51
Or it could be, hey. I wanna fine tune my drones to be really good at rescue situations. I could be vacuum robots. I wanna, like, train my manipulation or, like, vacuum robot to be very robust to my office. Right?

Speaker 2 | 49:51 - 49:53
But it's like whatever it is The robust to my office.

Speaker 3 | 49:53 - 50:15
Like, very robustly with in my office. But then it's like whatever end goal that you want, our world model will say, okay, given what you want to achieve, let me generate a distribution of environments such that I can train and evaluate whatever it is you you want. Yeah. Right? Maybe for the purpose of games, it's just the end simulation and that's the end product.

Speaker 3 | 50:15 - 50:24
For certain policies, it's like, I can train it within these environments and then help you see where your policy is failing or not. And then, you know, so I

Speaker 2 | 50:24 - 50:28
think So in that case, much more of a training tool than in other

Speaker 4 | 50:28 - 50:29
Training, evaluation, both. Right?

Speaker 2 | 50:29 - 50:31
Sure. Same same thing. Yeah.

Speaker 3 | 50:31 - 50:37
I think it's just this role model that allows people to train any policy that can act in any multimodal environments.

Speaker 2 | 50:37 - 50:53
Would it be harder to reward hack? Is there an angle here where it is harder to reward hack? Like, it's just I'll just put it generally. Because I think that's a that's obviously a key problem that a lot of people face when when training agents in these environments. And I don't know.

Speaker 2 | 50:53 - 50:54
Can you solve it?

Speaker 1 | 50:54 - 51:13
I think not necessarily. I mean, to the extent that there's a misspecified reward that it seems like it could be hacked in a more symbolic world or in a more pixel based world. I don't know if Sun's got any thoughts, but I don't think that's really being solved.

Speaker 2 | 51:13 - 51:28
The other thing that comes to mind is just you could just build a better Sora as a video generated model. Right? Because then you you would move the diffusion side a bit more further to the right, I think, if I got the directionality correct. And that's it.

Speaker 4 | 51:28 - 51:35
Like It's better on domains. Right? Like, on consistency over an hour, for sure, it exists versus something doesn't. Right?

Speaker 2 | 51:35 - 51:36
So Yeah.

Speaker 3 | 51:37 - 51:39
Is your question more like

Speaker 2 | 51:39 - 51:55
like I'm just riffing on, like, how do you what can you build, you know, with the stuff that you have? I do think that the mind of the academic does go immediately to training and in eval evaluation. But, like, art tends to take an unusual directions, like, you might end up Okay.

Speaker 1 | 51:55 - 52:13
Yeah. But the question is, can you use this piece of software to develop compelling gameplay? And I don't think you can take SOAR and produce compelling gameplay. Right? If you want to have a world that you can wander around in a bit, you're good.

Speaker 1 | 52:13 - 52:28
But what are your abilities to have gameplay mechanics implemented the way you'd like them to be and to have things stay, you know, with the long term history of your gameplay that influences future actions? I think there's just nothing there for that.

Speaker 2 | 52:28 - 52:45
Yeah. I do tend to agree. I I'm just trying to sort of test the boundaries. I would also make the observation that as AAA games industry has developed, the line between what is a movie and what is a game has blurred. And you you you do end up basically producing a two hour movie as part of your game.

Speaker 3 | 52:47 - 53:06
No. Honestly, there there are so many actually applications in adjacent markets that our role model can go into. Yeah. But, yeah, it's it's sort of fun to riff riff on, although on the execution side, we sort of we we need to stay focused with, like, okay, what are the capabilities we wanna unlock over time, and there's a roadmap for that. But, yeah, we're we're just ripping on sort of, like, the possibilities.

Speaker 3 | 53:06 - 53:09
I feel like whether it's endless. Yeah. It's like Classic.

Speaker 2 | 53:09 - 53:21
And then The embedding for a possibility and endless in my mind is very close. Yeah. I do wanna focus on one, like, weird choice. I I don't know if it's weird. Maybe I'm I got something here.

Speaker 2 | 53:21 - 53:34
Audio. Right? You could have just said no audio. And audio in my mind has a lot of recursion, whereas in in video, you can just do raycasting, and that's much computationally much simpler. Audio just seems way harder.

Speaker 2 | 53:35 - 53:49
I don't know if you wanna just comment on just the spatial three d audio problem. Did you really have to do it? I I guess you do to be immersive, but, like, a lot of people do treat it as, like, well, you just stick a TTS model on top of

Speaker 4 | 53:50 - 53:54
Well, there's a lot more to game audio than just speech. Right? It's not just TTS.

Speaker 2 | 53:54 - 54:00
TTS, SFX, PGM. Yeah. Yeah. Spatial, in my mind, echoes Yeah. And reflections.

Speaker 2 | 54:00 - 54:05
And I I don't even know what's what else? I don't know. I don't know what what are the problems in this space.

Speaker 3 | 54:07 - 54:35
Yeah. I think this point, like, the it's sort of a more more pointing to the benefits of using an game engine as a tool that's available to the model. Right? Because, like, part of the spatial audio is from the code that is underlying the simulation. And while we do give our model access to other types of audio models as tools, none of them would be spatial, I think.

Speaker 3 | 54:35 - 55:03
Right. But that's exactly sort of more point to, we're giving our model an abstraction or a suite of tools such that it's able to achieve that. And you can argue that sort of spatial is like a like a emergence out of the the tools that we and abstraction that we provide to the agents. And I think that's the beauty of this this this approach is, like, there's a lot of things kinda like how humanity's built technology, and they're like Lego blocks that built on top of each other. And it's the same thing here.

Speaker 3 | 55:03 - 55:08
Like, there's gonna be things that sort just sort of emerges from being able to put these things together in, like, combinatorially interesting ways.

Speaker 1 | 55:09 - 55:57
Right. This integrated audio model exploits the understanding and semantics of the Moon Lake world. Right? And whereas in general for the Gen AI video models, there's no actual integration across to audio at all, right? That someone might stick some music or stick a soundscape or whatever else on top of their video so it's not a silent video, but they're in no way connected into a consistent world model and there's nothing that's okay, an action is happening in the video, therefore there should be a sound that's coming from this part of the visual field.

Speaker 1 | 55:57 - 55:58
Yeah.

Speaker 4 | 55:58 - 56:02
Is that different than Sohrab two? Does it not have audio? Not to say it's not,

Speaker 2 | 56:02 - 56:12
like, audio. It doesn't? No. I've I've played around with it enough. It just sounds like someone put an Eleven Labs voice on top of it and try to do the lip sync.

Speaker 4 | 56:12 - 56:19
I've seen, okay, generate a dog at the beach and reactions to big wave and move around. Yeah. Yeah. So so

Speaker 2 | 56:19 - 56:26
have the dog the dog move away from camera and see if the the sound goes down. Or it doesn't. Right? Because they don't have special audio.

Speaker 3 | 56:27 - 56:54
We do want to basically, like, we our moral model, like, the one we're training is basically towards the goal of having a combined latent representation across all these different modalities. Right, such that it can, like, reason across these different modalities. So for example, if I close my eyes and I you play a video you play a sound of, like, cars skidding away from me, I almost can, like, visually extrapolate that trajectory in my mind. I think that that type of capability, we want our model to be able to reason. Right?

Speaker 3 | 56:54 - 57:00
And that's the reason that we're sort of taking this multimodal reasoning approach. It's like we want this combined latent space that can

Speaker 2 | 57:01 - 57:12
Yeah. Oh, you said latent space, and we like that here. We have to play the the bell every time that someone says latent space. No. You gotta train daredevil one where you you you it's only audio, but you have to work out where everything is.

Speaker 2 | 57:15 - 57:28
Cool. I I think that that was a that's about it for our Moon Lake coverage. I do think that we have, like, a couple of Chris Madden questions on on IR and just any any other sort of attention topics or n l NLP topics.

Speaker 4 | 57:28 - 57:37
Okay. Go ahead. Well no. I mean, yeah, it's just fun. You know, we talked a bit about how you guys met, but you basically you you are like the godfather of NLP per se.

Speaker 4 | 57:37 - 57:48
Right? You spent the whole career from early embeddings, early early attention. You did twenty fifteen attention for machine translation, everything. You you had information retrieval. So RAG before RAG.

Speaker 4 | 57:48 - 57:56
You know, we just wanna shout that out and admire a lot of that. Right? So what prompted the switch over to world models? How'd how'd all that come about?

Speaker 1 | 57:57 - 58:30
To some answer, it is the enthusiasms and creativity of students. But there's a bit of a history there. Right, so yeah, so clearly most of my career has been doing stuff with language, and you know, how I got into research was thinking, oh, is just so amazing how humans can produce speech and understand each other in real time, and somehow they managed to learn languages from their kids. How could this possibly happen? And so, yes, starting off, was very focused on language.

Speaker 1 | 58:30 - 59:28
But, you know, as it sort of got into the February, I started going I'd been working on question answering and then I started to get interest in visual question answering. And that was an area where it was very noticeable that the visual understanding was bad, right? You know, these were the days when, like, it sort of seemed like there's almost no visual understanding, you're just getting answers that came from priors, so, you know, if you asked how many people are sitting at the table, it would always answer two regardless of how many people you can see in the picture. And, you know, so it seemed like, oh, models actually aren't able to get semantic information out of images. And so I was interested in that problem and tried to work more on that.

Speaker 1 | 59:28 - 59:57
And so then that required knowing more about what's happening in vision and how you can represent visual information. And then things start, you know, there started to be this revolution of doing generative AI images. And then I had students that started looking at that before the year of Moon Lake. I was also working with Demi Gore who founded Pika. And so And Ian, obviously, GANS.

Speaker 1 | 59:57 - 1:00:07
Yeah. Though Ian was never my student, but, yeah. Ian I was very aware for the whole decade there of Ian with GANS. Yeah. And, I mean, Ian was a Stanford undergrad, but Yeah.

Speaker 4 | 1:00:07 - 1:00:10
Richard Duzu dot com, I believe he was your student.

Speaker 1 | 1:00:11 - 1:00:40
Yeah. And, you know, there were links across at that stage as well. So, I mean, there were several papers in that era of doing, I mean, so Andre Kapathi was a PhD student at the same time as Richard, and so there was some joint language vision work in that era as well. You know, it seems kind of ancient by modern standards, but yeah, we're trying to go from sort of textual dependency graphs to visual scenes. At a time,

Speaker 4 | 1:00:40 - 1:00:54
the Glove embeddings really took over a lot of TFIDF, like, hot encoding, all that. The early vision language models we saw were, like, Lava style adapters. Right? It's it's technically still just embedding latent space. Let's add image.

Speaker 4 | 1:00:54 - 1:00:58
Let's, like, mixed modalities. So that that's one of the things you super put out there too. Right?

Speaker 2 | 1:00:58 - 1:01:04
Yeah. Yeah. Yeah. Well, thank you for all of that. Thank you for advancing the world on world modeling.

Speaker 2 | 1:01:04 - 1:01:17
I honestly do think that if people deeply understand everything we just covered, they will see what's coming. And I think you guys have, you know, made some it's a really significant contribution here. What are you hiring for? You know? What what is the Who do people find?

Speaker 2 | 1:01:17 - 1:01:24
You know, we we agreed that the CTA was a hiring call. Yeah. I mean, though we have AGI, you don't need you don't need engineers anymore. Right?

Speaker 3 | 1:01:25 - 1:01:42
Yeah. On the model side, we we are actually striving towards basically a self improving system, but what that means is that we need people to set up the self improving system. So more more specifically, people who have the intersection of knowledge within cogeneration and computer vision and graphics. Right? Yeah.

Speaker 3 | 1:01:42 - 1:01:50
That's that's sort of the core research background that we look for within our team, and and the majority of the team today do have, like, both backgrounds.

Speaker 2 | 1:01:50 - 1:01:58
When you say computer vision and graphics, are they the same thing, or is it computer vision one thing, graphics another thing? I mean, how intertwined are they?

Speaker 1 | 1:01:58 - 1:02:28
They're intertwined, but different. And I think this relates to some of the themes that we've been talking about, that the more explicit underlying world models that are being constructed inside Moon Lake really draw on the computer graphics tradition, and so it's then combining that with the visual understanding of vision.

Speaker 2 | 1:02:29 - 1:02:29
Got

Speaker 3 | 1:02:29 - 1:02:30
it. Yeah. Alright. So I think If

Speaker 2 | 1:02:30 - 1:02:33
you've written a game engine, you're come talk to us.

Speaker 3 | 1:02:33 - 1:02:43
Right? Oh, yeah. Definitely. But I do think that the line is blurred, like, increasingly blurred these days, where it's like, if you have a general understanding of vision and graphics.

Speaker 2 | 1:02:43 - 1:02:58
I think for your standards, is. For me, it feels like vision is is you know, I I'll leave that to the big labs. Graphics, I I I can get that, you know, you would want to do that from more first principles. But vision, there's so many vision models off the shelf that I can take, but probably not good enough for you.

Speaker 3 | 1:02:58 - 1:03:05
I see. I see. If if you're sort of, like, making that distinction, then then maybe we we care a little bit more about having graphics knowledge.

Speaker 2 | 1:03:05 - 1:03:17
Exactly. Yeah. It could be, like you sometimes a hiring call can be as simple as, like, if you know the answer to blah, you should talk to me, you know, like, the the the the sort of core known hard problem in, in your world.

Speaker 3 | 1:03:17 - 1:03:28
Ah, I see. Yeah. In that case, if you yeah. Definitely, if you've written a game engine before, if you've RL ed a variety of coding models on different objectives, like

Speaker 2 | 1:03:28 - 1:03:31
Easy. Many of those. Yeah.

Speaker 3 | 1:03:31 - 1:03:36
If you've done multimodal lane space alignment, I I intentionally included in the

Speaker 2 | 1:03:36 - 1:03:43
lane space again. Our poor editor has to edit thing every time. Yeah. Lane space align honestly, is it that hard?

Speaker 3 | 1:03:43 - 1:03:43
Well

Speaker 2 | 1:03:43 - 1:03:50
I I there's some scripts out there that I've saved for the day I someday someday have to do it, but I don't have to do it. But it's done.

Speaker 3 | 1:03:50 - 1:03:58
I think, yeah, there's there's a there's a versions of that that are done. But I I think we are aligning audio, text, language, and video.

Speaker 2 | 1:03:58 - 1:03:59
Yeah. Yeah. Yeah.

Speaker 3 | 1:03:59 - 1:04:18
And, basically, we have these role models that are able to act as agents to, like, act in these worlds and extract long horizon videos and encoding that back to the models to sort of self improve. So it's an insanely exciting but also technically challenged problem. So people who wanna do their lives best work, you know, one makes a place.

Speaker 4 | 1:04:19 - 1:04:19
How big are you guys?

Speaker 3 | 1:04:19 - 1:04:26
Where are guys based? We're currently based in San Mateo, although we're moving up to SF. We're about 18 folks right now.

Speaker 2 | 1:04:26 - 1:04:31
My ending question was gonna be why what is in the name? What's behind the name? Oh.

Speaker 4 | 1:04:32 - 1:04:34
Very cool graphics and design, by the way.

Speaker 3 | 1:04:35 - 1:04:47
Actually, at the at the time when the when the when we started the company, we were thinking a lot about how do we make a company name that gives people the vibe of, like, OpenAI, but for, like, almost like industrial light and magic vibes.

Speaker 1 | 1:04:47 - 1:04:47
Wow.

Speaker 3 | 1:04:47 - 1:05:07
Because it's like we care about creativity and using that as a funnel to solve AGI. So then we were we brainstormed a lot around, like, DreamWorks. Right? Like, industrial light and magic. And so there's a few few basically space of things that we feel like are very, very semantically close to the company's identity.

Speaker 2 | 1:05:07 - 1:05:08
Yeah.

Speaker 3 | 1:05:08 - 1:05:14
And then it ended up being Moon Lake partly because of the DreamWorks vibe, you know, the DreamWorks

Speaker 2 | 1:05:14 - 1:05:16
Moon Lake. Exactly.

Speaker 3 | 1:05:16 - 1:05:28
Yep. So that was a little bit of that inspiration. And then the moon was sort of like a it basically was, like, about the reflection. The reflection part also implies the self improvement loop. Wow.

Speaker 3 | 1:05:28 - 1:05:29
We sort of,

Speaker 2 | 1:05:29 - 1:05:30
like That's what really believed

Speaker 3 | 1:05:30 - 1:05:35
in, and that's the path towards multimodal general intelligence. So that's that's that's that. I'll leave

Speaker 2 | 1:05:35 - 1:05:37
love a as name. I love a good name. This is great.

Speaker 4 | 1:05:37 - 1:05:38
It's a very good name.

Speaker 2 | 1:05:38 - 1:05:59
It's very good lore. I'm glad I asked the question. I will also say, you know, one of my favorite story books or biographies ever is Creativity Inc with Ed Catmull's story about Pixar and how he, you know, was rejected as a Disney animation artist. So then he went into computing and brute forced his way into back into No. That's that's that's Disney.

Speaker 2 | 1:05:58 - 1:06:00
Yeah. Yeah.

Speaker 3 | 1:06:00 - 1:06:13
And Walt Disney is also, like, one of my favorite founders. He's like his his story like, at the time, you're like, okay. I'm gonna create this, like, immersive park. Like, people can't can't don't even have that technology to create it virtually, but, like, you know what? Let's just build it such that people can

Speaker 2 | 1:06:13 - 1:06:15
So he's the first world modeler? No.

Speaker 3 | 1:06:16 - 1:06:20
I I yeah. I'll tell people that. Like, theme parks are world models too. Yeah.

Speaker 2 | 1:06:20 - 1:06:27
Yeah. Yeah. I mean, you know, it's a small world or it's a like, the Epcot Center with all the little replicas of the countries. Yeah. Those are very interesting.

Speaker 2 | 1:06:28 - 1:06:34
Okay. Well, thank you. We've covered, you know, a huge amount. Thank you for your time, and thank you for inspiring us.

Speaker 1 | 1:06:34 - 1:06:36
Thank you for having us. It's fun chatting.

Speaker 3 | 1:06:36 - 1:06:37
Yeah. It's been a good time.

---

## Mistral: Voxtral TTS, Forge, Leanstral, &amp; what's next for Mistral 4 — w/ Pavan Kumar Reddy &amp; Guillaume Lample

- **发布时间**: 2026/3/30 19:25:21
- **原始链接**: [点击查看](https://www.youtube.com/@LatentSpacePod)

### 📜 内容摘要与转录

Speaker 1 | 00:05 - 00:10
Okay. Welcome to Lanespace. We're here in the studio with trusty cohost, Bibou. Welcome.

Speaker 2 | 00:11 - 00:12
Very excited for this one.

Speaker 1 | 00:12 - 00:22
As well as Guillaume and Pavan from Mistral. Welcome. I'm glad to be here. Thank you for all this. Pavan, you are leading audio research at Mistral, and, Guillaume, you're a chief scientist.

Speaker 1 | 00:22 - 00:26
What are we announcing today where we're coordinating this release with you guys?

Speaker 3 | 00:26 - 00:35
Yeah. So we are releasing Voxtrail TTS. So it's our first audio model that generates speech. It's not our first audio model. We had a couple of releases before.

Speaker 3 | 00:35 - 01:11
We had one in the summer that was Voxtral, our first audio model, but it's it was like a transcription model, ASR. Like, a few months later, we released some update on top of this, supporting more languages, also a lot of table stake features for our customers, context biasing, position, time stamping, and the transcription. We also had some real time model that can transcribe not just at the end of the it was don't need to fill your entire audio file, but that can also come in real time. And here, is a natural extension in the audio, so, basically, speech generation. So, yeah, so we support nine languages, and this is a pretty small model, three d model, so very fast and also status.

Speaker 3 | 01:11 - 01:25
Yeah. Carphone is the same level of the of the best model, but it's much more efficient in terms of cost and also much in terms of cost, it's also much to go. They're only a fraction of the cost of Parham competitors. And we are also releasing the weight of this model that only he faced.

Speaker 1 | 01:25 - 01:27
Yeah. Miami linked?

Speaker 3 | 01:27 - 01:28
Not this time. What yeah.

Speaker 1 | 01:28 - 01:33
What's the decision factor him? It's a good question.

Speaker 3 | 01:33 - 01:35
There will be more w o.

Speaker 1 | 01:36 - 01:39
Yeah. Pavan, any other sort of research notes to add on what you No.

Speaker 4 | 01:39 - 02:12
We maybe we'll dive into it later in the forecast too, but it's a novel architecture that we developed in house. We iterated it on several internal architectures and ended up with a autoregressive flow matching architecture and also have a new in house neural audio codec, which converts this audio into all point by Hertz latent tokens, semantic and acoustic tokens. And yeah, that's the new part about this model. And we're pretty excited that it came out with such good quality. And Guillaume was mentioning, yeah, it's a three d model.

Speaker 4 | 02:12 - 02:24
It's based off of the Minestral model that we actually released just a few months back and insert trunk. And it mainly meant for, like, the TTS stuff, but the innate text capabilities are also there. Yeah.

Speaker 1 | 02:24 - 02:52
So there's a lot to cover. I always I love any anything to do with novel encodings and all those things because I think that's obviously increased a lot of efficiency, but also maybe bugs that sometimes happen. You were previously at Gemini, and you worked on post training for language models. And maybe a lot of people will have less experience with audio models just in general compared to pure language. What did you find that you have to revisit from scratch as you joined Mistral and started doing this?

Speaker 4 | 02:53 - 03:25
At least when it comes to for I think there there are two buckets, I guess, the audio understanding and audio generation. The audio understanding, like the Voxel models that Kim was mentioning that we released earlier, the Voxel chat that we released, think, July, and the follow-up transcription only models family that we released in January. That could be one bucket and the generation is another bucket. I think you can also treat them as a unified set of models. But currently, the approaches are a little different between these two, to your question on how audio is fed to the model.

Speaker 4 | 03:25 - 03:40
In the understanding model, it's very similar to actually Pixtrl model that we also released. Yes, that was amazing. That was the first project I worked on after joining Mistral. It was pretty nice. And Voxel was very similar in spirit, I guess.

Speaker 4 | 03:40 - 03:59
So we feed the audio through an audio encoder similar to images through a vision encoder. And it produces continuous embeddings, which are fed as tokens to the main transformer decoder transformer model. Yeah. And the model output is just fixed. So on the output side, there is nothing that needs to be done in these kinds of models.

Speaker 4 | 03:59 - 04:29
I guess the interesting part about the generation step is the output now has to produce audio. And the approach that we have is this neural audio codec, which converts audio into these latent tokens. There is a lot of existing literature and a lot of models which are based off of this kind of approach. And we took slightly different design decisions around this. But at the end of the day, the neural audio product converts audio into a 12.5 hertz set of latents.

Speaker 4 | 04:29 - 04:52
And each latent has a semantic token and a set of acoustic tokens. And the idea is that you take these discrete tokens and then feed it on the input side. There are several ways to fuse this at each frame, but we just sum the embeddings. So it's like having k different vocabularies and combine all of them because they all correspond to one audio frame on the input side. The output side is the interesting part.

Speaker 4 | 04:52 - 05:09
On the output side, I don't know if it's the most popular, but one popular technique is to have a depth transformer because you have K tokens at each time step. Like with our text, you just have one token at each time step. So you just do predict the token from the vocabulary with just You get probability.

Speaker 1 | 05:09 - 05:11
This is very straightforward test.

Speaker 4 | 05:11 - 05:21
Very straightforward. Yeah. But if you have k tokens, then the main thing would be to predict all of them in parallel. But that doesn't work. At least that doesn't work that well because audio has more entropy.

Speaker 4 | 05:21 - 05:52
And one of the techniques people use is this depth transformer where you almost have a small transformer. Or it can be LSTM RN as well, but people use transformers and you predict the K tokens in autoregressive fashion in that. So you have two autoregressive things going on. So the thing we did differently is instead of having this autoregressive K step prediction, we have a flow matching model. Instead of modeling this as a discrete token set, we train the codec to be both discrete and continuous to have this flexibility.

Speaker 4 | 05:52 - 06:08
So we did try the discrete stuff too, and it works well. But the continuous stuff works just better. So yeah, we took this flow matching. So it's a flow matching head, which takes the latent from the main transformer. And in diffusion, it's denoising, but in this flow matching, it's velocity estimate.

Speaker 4 | 06:08 - 06:20
So you go from this noised all the way to the audio latent, which corresponds to the eighty millisecond audio and then which is sent through the vocoder to get back the eighty millisecond audio frame.

Speaker 1 | 06:20 - 06:26
Yeah. Is this the first application of flow matching in audio? Because usually, I come across this in the image.

Speaker 4 | 06:26 - 06:37
Yeah. Actually, in some sense, there are models, flow matching models in audio. But I think this specific combination, I could be wrong. There could be some work. I haven't much work in this.

Speaker 4 | 06:37 - 06:54
I think it's novel. And a lot of it's just a way bigger community. So I think they pioneer a lot of these diffusion flow matching work. And it's interesting to adopt some of the ideas there into audio. And personally, that's the big part, which is trying out.

Speaker 4 | 06:54 - 07:17
More meta point is unlike text, even in vision, I think this is true, but in audio step literature, there is no winner model yet. There is no, okay, this is the way you do things. It's still evolving. I think people are still iterating and figuring out what's the best overall recipe, I guess. The idea, I'm pretty sure there are models which are also completely end to end, like native audio and native audio.

Speaker 4 | 07:17 - 07:21
But it's still not come to a convergence point where this is the right way to think.

Speaker 2 | 07:21 - 07:36
And that also makes the space pretty exciting to explore. What are some of the ways to look at it? There are ways where you can do diffusion for audio generation. But if you want, like, real time generation, that's a big thing with the approach I'm assuming that you took. Yeah.

Speaker 2 | 07:36 - 07:41
And also, like, how do you go about evaluating different axes of what you care about?

Speaker 4 | 07:41 - 07:54
Yeah. Good point. I think we so you can do just flow matching diffusion for the whole audio. We didn't even go down that path because one of the main applications is voice agents, And we want real time streaming. And that's the use case.

Speaker 4 | 07:54 - 08:26
That's not the only use case, but that's one of the primary use cases we want to get to. So we picked the autoregressive approach for that. And within the autoregressive space, again, can do chunk by chunk, or you can do so we picked the I think at least personally, I prefer the approaches which are the simplest. And so we tried to see, can we just add audio as just another head to our regular transformer decoder model? Because that makes it easier for eventual end to end modeling of audio text native modeling.

Speaker 4 | 08:26 - 08:40
Yeah, and it works pretty well. So I guess we went for that. And we excited a little bit, but the flow matching head itself, we had a discrete diffusion kind of approach, which also works well, but the flow matching worked better.

Speaker 1 | 08:40 - 08:53
I was just curious about how you also think about this overall direction of research. Do you basically, when you work with the audio team, do you set some high level parameters and then let them explore whatever, or how does it work between you guys?

Speaker 3 | 08:53 - 09:11
Another thing is the way it works is that we are are prioritizing together, I think, what are the most important features. There are many things we can do in audio. They are, I think, to try to decide, like, how we should do things. For instance, ultimately, what we want to do is to build this full duplex model, but we are not going to start this start there directly. I think it's some of my project people are doing, but

Speaker 1 | 09:11 - 09:16
Just to confirm, full duplex means it can speak while I'm speaking? Or Yeah.

Speaker 3 | 09:16 - 09:22
Okay. Audio in the audio. Yeah. Yeah. So, ultimately, we're going to get there, but for us, it was we decided to take it, like, step by step.

Speaker 3 | 09:22 - 09:43
So we start with whatever is the most important, I think, also for our customers, which is the transcription is the most popular use case. But then the speech generation, the real time just a bit before that, and then the actually, it could be, like, more like, try combine everything altogether. But but, yeah, we thought it was also important to, like, separate things and optimize each capability one by one before we merge all of that together.

Speaker 1 | 09:43 - 09:45
Then the super omni model. But very

Speaker 3 | 09:45 - 10:23
interesting because as Pavan said, it's when you work on some other domains of just LM and other things, there are many areas where I think it's not as interesting. For instance, many places, it's essentially just around data or, like, creating new environments and a lot of kind of easy things, but things where I think the research is maybe not as interesting where in audio, there are so many ways to actually build this model, some new ways to go around this. Sense I think is really interesting. And what we also tried for speech generation is that we tried multiple approaches. What was interesting is that even though they were extremely different, they ended up big at the end of the day like deep particles, but the flow matching turned out to be quite more natural, so we are happy with this.

Speaker 1 | 10:23 - 10:32
Is there intuition why? Maybe, like, flow matching is just models speech better in some natural fundamental latent dimension?

Speaker 4 | 10:32 - 10:49
No. I think the main thing is even at a particular time step, there is a distribution of things to be predicted. You already know the word that you're speaking. And you have the in text space, let's say the word maps to just a single token for simplicity. In most cases, it does.

Speaker 4 | 10:49 - 11:22
So there is not a lot of so you just pick the word. But within audio, even the same word could even with your own voice could be infected in so many different ways. And I think any approach which models this distribution and flow matching is one of the it's not the only one at all, but it's one which works pretty reasonably well. I think that's better. So, you have to pick across several different the intuition I have is there are some different clusters, each corresponding to some specific way you would inflect, pronounce that thing.

Speaker 4 | 11:22 - 11:32
And you can't predict the mean of it because that corresponds to some blurred out speech or something like that. But you have to pick one and then, like, sharp Conditional inference? Yeah. Exactly.

Speaker 1 | 11:32 - 11:44
Is that all covered under disfluencies, which is, I think, the normal term of art? And disfluencies pauses intonations. By the way, I would like to thank Sofia for setting all this up, including, like, some of these really good notes because

Speaker 4 | 11:44 - 11:44
Yeah.

Speaker 1 | 11:44 - 11:45
I'm less familiar with the audios

Speaker 4 | 11:45 - 11:49
for me. I think distances are definitely one such phenomenon. Differences is more like

Speaker 1 | 11:49 - 11:51
Which is arms, ahs Yeah.

Speaker 4 | 11:51 - 11:57
Arms, ahs, also repeat like usually, like Yeah. Yeah. You do this filler words, you're thinking, so you repeat the word.

Speaker 1 | 11:57 - 12:01
Okay. Whereas intonation is like a diff it's up upspeak on all this. Okay.

Speaker 4 | 12:01 - 12:25
And So I think there is a lot of like entropy and modeling it as a distribution and any technique which helps with it. And the depth transformer is a conditional way of modeling this and transformers are actually really good at it even though that's so many transformers. So I think that worked pretty well too for us too. It's just that the main consideration is when you have a depth transformer, if you have K tokens, you need to do K autoregressive steps. Even though it's a small thing, it's K steps, which is very latency heavy.

Speaker 4 | 12:26 - 12:44
With flow matching, we were able to cut it down significantly. So we are able to do the inference in quad steps or 16 steps and it works pretty well. And there are more normal techniques to bring it down even further to like, in the extreme case, one step. Like we're not doing it yet, but it at least the framework lends itself to more efficient and

Speaker 1 | 12:44 - 12:46
Yes. And the image guys have done

Speaker 3 | 12:46 - 12:46
Yeah.

Speaker 1 | 12:46 - 12:48
Incredible work, guys.

Speaker 4 | 12:48 - 12:51
It now you just send the prompt and you get the image.

Speaker 1 | 12:52 - 13:01
Yeah. Surprisingly, not enough, I think, image model labs use those techniques in production. I think this I feel like it's a lot of research demos, but nothing I can use on my phone today.

Speaker 3 | 13:01 - 13:26
The thing there's a thing that would be interesting here is that since indeed there have been so much work that has been done in the vision community compared to audio on this domain, I think there are so many long inflows here, and there are so many things we can do to actually improve this value even further. So our plan is our first version, but we have so many ways to make this much better and much more efficient, cost efficient. So Yeah. So really, it's not a new field at all, of course, but there are still so many things that can be done with it.

Speaker 1 | 13:26 - 13:35
I should also mention that for those who are newer to flow matching, I think the creator is it this guy's name is Alex? The he's done, I think, in Europe's maybe two in Europe's years ago. There's there's a

Speaker 2 | 13:35 - 13:38
very good workshop. There's one hour on, like, this what full matching is.

Speaker 1 | 13:38 - 13:54
I would recommend people look that up. That's the other thing. Right? The efficiency wise, like, I I imagine, like, the reason it's open weights, the reason you pick 3.6 b backbone, it you are 2.4 b, You are trying to fit to some kind of hardware constraints. You kinda to fit some kind of latency constraints.

Speaker 1 | 13:54 - 13:54
What are they?

Speaker 3 | 13:54 - 14:08
Not necessarily. I think something we care about in our model that they are efficient. So we have a lot of separate model, for instance. So we have this module model that is very small, very efficient. We also have a small OCR model that is very, very good, highly efficient as well.

Speaker 3 | 14:08 - 14:32
And I think an approach that maybe other I think companies are going to take is to have a very general model that will do a bit of everything, that is also going to be expensive. And here, what we want to say is if you care about this specific use case, if can actually use this model, it just does that. It's extremely good that it just so very efficient. That's why we can actually add models audio, but those are that are, like, really good at that and that would be much more cost effective than the general model. That will contain a lot of capabilities.

Speaker 3 | 14:32 - 14:37
You don't really need the so yeah. So we are doing, like, general model, but also, like, more customized model like this.

Speaker 2 | 14:37 - 14:43
How does it compare to other TTS models? It's we are going full open way. We are just dropping it. I think it's really good.

Speaker 4 | 14:43 - 14:51
Yeah. I think it's pretty good. Like, it it's definitely one of the best for sure. I it's probably I I would say it's the best open source model, but

Speaker 2 | 14:51 - 14:57
You're probably deciphering yourselves. Yeah. Why now? How does it fit into broader Mistral vision? How do you see voice agents?

Speaker 2 | 14:57 - 15:06
How do you see voice I think every year I've heard, okay, you're a voice. You're a voice. There's a lot of architectural stuff. There's a lot of end to end latency that you're solving, but where do you see voice heading?

Speaker 3 | 15:06 - 15:21
We had so many customers asking for voice. That's also why we wanted to build it. What's interesting in this domain is that, in a sense, if you take something simple like transcription, it doesn't seem like something that should be very hard to do for a model. It's essentially it's pattern recognition. It's classification.

Speaker 3 | 15:21 - 15:30
This model is very good at CasiFen. Right? And, nonetheless, when you talk to them, it's not there yet. Right? It's not you don't talk to them the same way you talk to a person or something.

Speaker 3 | 15:30 - 15:35
Maybe people don't realize it. It's in English, it's still much better than in any other language. Even compared to French, for instance, if you talk

Speaker 2 | 15:35 - 15:37
to this mother in French, when you see people talking

Speaker 3 | 15:37 - 15:41
to this model, they will talk very slowly. They will articulate as much as they can.

Speaker 2 | 15:41 - 15:42
So it's not natural. Right?

Speaker 3 | 15:42 - 16:18
We are not yet to this and I think, yeah, maybe the next generation will not know this, but, yeah, I think people that are maybe our age will actually always keep this bias speaking very slowly when they talk to this model even if maybe probably in a couple of years or maybe next year, it will not be necessary anymore. But, yeah, but what's interesting is to see that, yeah, even for, like, languages like, yeah, French and Spanish Germans that are not no no resource on religion. You have a lot of audio just there, and still, it's not as good. And I think the con I mean, present for this, I I suppose you say, is not as much energy, as much effort that has been put done in some of the other modalities that for instance, vision or, like, coding. But but, yeah, there is still lot of progress to be done.

Speaker 3 | 16:18 - 16:21
I think it's just a question of doing the work on this, like, clear path, I think, together.

Speaker 4 | 16:21 - 16:44
It's a little fascinating because I worked on Google Assistant, I think, while back at this point, but it's I think it's it's like when you take a step back, it's fascinating. It's not that long ago. It was like four years ago or five years ago, and it's now it's completely audio in, audio out, and the function calling. And the whole thing happens completely end to end and in a very natural Yeah. Natural way.

Speaker 4 | 16:44 - 16:56
And still ways to go. You must telling. Even despite all the previous, it's not like you're speaking to a person when you talk to any of these agents, bots, or voice mode kind of situation. It's still like a gap, think. That's the exciting part.

Speaker 4 | 16:56 - 17:08
And I feel like with even the existing stack, we should be able to get to this very natural speech conversational abilities soon enough, I guess, and we'll also hope hope to get there.

Speaker 3 | 17:08 - 17:24
And it's kind of the next step. Right? Because when you talk to these agents, like, usually people are just writing to them. And sometimes they have this very clear for instance, you are you want to write code, but you are you have a very clear idea of how you want the model to implement what you have in mind. But so here, you are going to spend a lot of time writing.

Speaker 3 | 17:24 - 17:30
So it's not really efficient on what you usually like a natural interface that is just not there yet, but I think it's just going to be the hard place.

Speaker 2 | 17:30 - 17:47
How's it like building, serving, inferencing? Like, we see a lot about it's very easy to take LLMs off the shelf, serve them, fine tuning, deploying. I know you guys have a whole you have Ford. You have a whole stack of customizing, deploying. Is there a lag in getting that, like, distribution channel?

Speaker 2 | 17:47 - 17:56
Are you helping there is so, like, prompting LLMs, you can have them be concise, verbose, all that. They're built on LLM backbones, these models. How do you see all that?

Speaker 3 | 17:56 - 18:05
Yeah. I think this is a lot of what we are doing with our own customers. Very often, they come to us. So it's for different reasons. I think one reason is sometimes they have this lot of privacy concerns.

Speaker 3 | 18:05 - 18:20
They have this data that's it is very sensitive. They don't want the data to leave the company. They want it to stay inside the company. So we have them deploy model in house. So either on a either on premise or on private cloud, so they are not worried that it's given to a third party and that there is some leakage.

Speaker 3 | 18:20 - 18:36
Sometimes they have this kind of many many companies have this different sensitive data. Have, like, sometimes tier one, tier two, tier three data. Tier three can send it to the cloud, tier one, it has to stay there. So then it creates some kind of heterogeneous workflows where it's annoying and you cannot send some data to the cloud. This one, you can't.

Speaker 3 | 18:36 - 19:06
So here, when we actually deploy the model for them, they don't have this consideration. They are, like, not worried that this is going to leak. Everything is much easier, so we help them basically do this. On the so it's one of the value proposition, but but the other is very often when customers use this off the shelf closed model, what's very sad is that they are not leveraging these data that they have been collecting for four years or something for decades. So much data, sometimes it's trillions of tokens of data in a very specific domain, their domain, which is data that you will not find in the public on the public Internet.

Speaker 3 | 19:06 - 19:28
So data on which, like, a closed model, we actually not have access to one which is not going to be really good. So if they are using, like, closed source models, are basically not benefiting from all these insights, all these data they have collected through years. So they can always give it into the context that in France, but it's never as good as if you actually train the model analysis. So so, yes, that's basically what we help them to do. We actually provide them some basically, what we announced at the GTC this week.

Speaker 3 | 19:28 - 19:35
So we provide them with this. It's basically like a platform with a lot of tools to actually help them process data, train on that. Yeah. It's actually the same

Speaker 2 | 19:35 - 19:36
thing that we are using in

Speaker 3 | 19:36 - 19:56
the science team. So it's actually very battle tested infrastructure, like a lot of efficient training code base for cardio pretraining, like a fine tuning, even doing SFT, IRL. So we help them do this using the same tools as what our science team is building is using. So since it's tool that we have been using for two years now, it's really better tested. It's really sophisticated.

Speaker 3 | 19:56 - 20:14
So it's the same thing we are giving to them. Are giving the company the same thing that what our sales team using internally to actually build their own AI. And it makes a really big difference. I think sometimes customers and many people in general don't realize how much better the model becomes when you fine tune it on your own data in Cannabe. Your model is here, and start from there.

Speaker 3 | 20:14 - 20:28
You have a closed source model, which is sorta here. But if you actually fine tune, you can actually really really go much further than this. And then you have a very big advantage. The model is trained on your entire company knowledge, so it knows everything. You don't have to feed, like, 10 k tokens of context at every query.

Speaker 3 | 20:28 - 20:55
So it's it's much easier. It's a bit I think using your closed source model is really sad because it basically puts you are not leveraging all this data, and you are going to be using the same model as all your old competitors when you could actually using everything you have been collected for years, which is really valuable. So, yeah, so we help, basically, customers do this. So we have a lot solution, I mean, for engineer that go into company that basically look at the problem customers are facing. So look at what they're struggling to do, what we should do to solve it.

Speaker 3 | 20:55 - 21:10
So we help them solve them together. So it's I think our approach is a bit different here than some of their companies and competitors. It's we don't just release an endpoint and say, do some stuff on top of that, or we don't just give a checkpoint. We really look very closely with customers. We look at the issues they have.

Speaker 3 | 21:10 - 21:28
We help them solve them. We already make some tailored solution for the clients they are facing. Some example are also going to be sometime with some customers, they really wanted to have a really good model, really performant on some, like, Asian, or rare languages. On the if you take some of the chef models, they they can speak it. They can write in this language, but it's not amazing.

Speaker 3 | 21:28 - 21:41
This language will be, like, maybe 01% of the mixture. So it has been included during training, but very little. So what we did here is, of course, we trained a new model for them, but so this language was 50% of the mix. So it's much much stronger. It knows all the dialects.

Speaker 3 | 21:41 - 21:52
It knows the song. So it's yeah. So it's some example of things we can do. And it's really arbitrarily custom. I think, you know, some of their customers, for instance, they wanted some they wanted some three d model that can do audio with a very good function claim.

Speaker 3 | 21:52 - 22:04
So something you wanted to put in the car. In particular, they wanted this to be offline because in in a car, you don't necessarily have access to Internet. So yeah. So here we can actually build these solutions. There is no, like, model out of the box on this in the Internet.

Speaker 3 | 22:04 - 22:21
You have this very you have this very general model, a generalist, like, reasoning on strong model, but for things like this, they they always want, like, specific solutions. And yeah. On some of the reasons, sometimes they come to us is because, like, they they experiment with some closed source model. They get some prototype. They are happy with what they build.

Speaker 3 | 22:21 - 22:35
They works well. It's happy with the performance, and then they want to go to production, and then they realize, but it's extremely expensive. We cannot push this. It's so then they come back to us on this thing. Can you add help us build the same thing as this, but using something much cheaper on here?

Speaker 3 | 22:35 - 22:44
On here, we can sometimes build something 10 x cheaper by just fine tuning a modeler. And it would be better on prem, on their own server, and also much cheaper as well. So yeah.

Speaker 1 | 22:44 - 22:47
That's the missed draw pitch right there. Take all the money.

Speaker 4 | 22:47 - 22:48
I mean,

Speaker 2 | 22:48 - 22:57
outside of that, you do you do put open wave models. So people can do this themselves. I feel like not enough people go out of their way to They're not going to. They're gonna ask them to do it. They ask

Speaker 3 | 22:57 - 23:23
the expert. Initially, we didn't know. We were not completely sure at the beginning of the company because I think our strategy was not exactly the same as what it is today. But what we underestimated initially is the complexity of deploying this model and connecting them to everything to be sure it has access to the company knowledge on the and it was yeah. And we were seeing customers struggling with this, but it was even that was two years ago, and now things are much more complicated because now you don't just have text on the safety and the simple instruction following.

Speaker 3 | 23:23 - 23:39
Now you have reasoning, like your agents, you have, tools, and you have multimodal audio. So it's much more complicated than before. And even back then, it was hard for customers. So they really need some support, and this is why we're actually providing, like, always some for deposition as well as the the pauses.

Speaker 1 | 23:39 - 23:43
I'm curious. Is there also voice fine tuning that people do?

Speaker 4 | 23:43 - 24:05
So in this forge, we also had unified framework. And the hope is, like, the Voxel's speech to text that we released earlier this year and even the Voxel chat that we released last year. And I think a big people think there's a big rich ecosystem of people fine tuning Whisper. And people want the same thing with Voxel. It's much stronger than Whisper.

Speaker 4 | 24:05 - 24:27
And yeah, the platform offers that kind of fine tuning, which could be any kind of fine tuning. Like for instance, even sometimes people want to support new languages to this, which are three languages which we hope to cover ourselves natively. But if there is a language where you have data and you want to fine tune, I think this is a good use case. The other use case is it's the same language, like even English, but it's in

Speaker 1 | 24:27 - 24:32
a very domain specific way. Yes, terminology, jargon, medical stuff.

Speaker 4 | 24:32 - 24:50
Exactly. And also, there's specific acoustic conditions like there's lot of noise. And the model will do decently in most conditions, but you can always make it better. And those are some of the use cases where you can improve it even further. And that's one good use case for this.

Speaker 4 | 24:50 - 25:11
And for text to speech, we're just releasing it. So we'll have support for that soon, too. I think it's similar use case. It's a little different, the kind of things that you want to extend a text to speech model to, which could be voice personalization, voice adaptation for enterprises. And many enterprises need very specific kind of tone, very specific kind of, like, personality for this kind of voice.

Speaker 4 | 25:11 - 25:14
And all of those are, like, good use cases for fine tuning.

Speaker 1 | 25:14 - 25:20
This one was gonna ask you. We never talked about cloning voice cloning here. How important is it? Right? Like, I can just clone a famous person's voice.

Speaker 1 | 25:20 - 25:21
Okay. But

Speaker 4 | 25:21 - 25:57
The main use case would be, like, for enterprise personalization. Like, enterprises need, like, a lot of customization. You don't want the same voice for all the enterprises. Each enterprise want a customized, specialized, something which is representative both their brand and also their, I guess, safety considerations than the use case. I think the kind of thing that you would deploy as a empathetic assistant in the context of a health care domain would be very different from the kind of thing that would be in a customer support bot and would be different from more conversational aspects.

Speaker 4 | 25:57 - 26:04
I think those are the customizations you would expect from enterprise and that's the main use case, at least from our side.

Speaker 2 | 26:04 - 26:13
My basic example is you don't wanna call to customer services and have the same exact voice. It's gonna be weird. But also on the technical side of this, so there's like a few

Speaker 1 | 26:13 - 26:20
things in Vauxhall that I thought were pretty interesting. He's a big fan of this paper. Oh. He said very good paper. But he said this is the best ASR paper he's ever read.

Speaker 2 | 26:20 - 26:28
Yeah. Yeah. I've hyped up this voice paper enough. We covered it somewhere. But a big thing so Whisper is known for thirty second generation, thirty second processing.

Speaker 2 | 26:28 - 26:45
You extended this to forty minutes. There was a lot of good detail in the paper about how this was done. Even little niches of how the padding is so it's very much needed. You need to have that padding in there. The synthetic data generation around this, I'm wondering if you can share the same about the new speech to text.

Speaker 2 | 26:45 - 26:53
Right? Text to speech. So how do you how do you generate long form coherent? How do you generate how do you do that? And then any gems?

Speaker 2 | 26:53 - 26:54
Is there gonna be a paper?

Speaker 4 | 26:54 - 27:10
Yeah. Yeah. There would be a technical report. Yeah. I think it could have a lot of details, but I think the summary of it actually some of the considerations in this paper were because we started with the whisper encoder as the starting point, and now we have in house encoders like the real time model, for instance, which we released in January.

Speaker 4 | 27:10 - 27:25
We also released a technical report for that real time model as well, which is this dual stream architecture. It's an interesting architecture. You should check it out. And there we have a causal encoder. And I don't think there's any strong multilingual causal encoder out in the community.

Speaker 4 | 27:25 - 27:36
So we thought it's a good contribution. So that's one nice encoder. If the other people want to adapt, that's a good encoder. And we trained it from scratch. I think our pull stack is now mature enough that we're able to train super strong encoders.

Speaker 4 | 27:36 - 27:59
And some of these considerations, like sparring and stuff, is a function of the whisper encoder. And now that we train encoders in house, the design considerations are different. And for the question on text to speech, I think that also leans onto the original autoregressive decoder backbone. I think it's almost identical considerations. I think the long context in it's not even long context.

Speaker 4 | 27:59 - 28:22
So the model processes audio at 12.5 Hertz. So one second maps to like 12.5 tokens. So I think one minute is like seven twenty tokens. You can get like up to ten minutes in eight ks context window and get half an hour in 30 ks context window. And 32 ks context is something that we are very comfortable training on.

Speaker 4 | 28:22 - 28:48
We can extend it even much longer, 128 ks. You can naturally see how it can extend to even hour long generations. Yeah, we need the data recipe and the whole algorithm to work coherently enough through such long context. But the techniques are some way very similar to the text long context modeling. And the key difference is it's just doing flow matching order aggressively instead of text token prediction.

Speaker 1 | 28:48 - 28:52
Okay. I think that was most most of the sort of voice questions that we had, Pat.

Speaker 2 | 28:52 - 28:56
I have a big question on mister Asbo? Mister Asboll.

Speaker 3 | 28:56 - 28:57
Let's go.

Speaker 2 | 28:57 - 29:06
So what is small? How do we define small? What is this? What is this? I remember the days of mister Asboll seven b on my laptop.

Speaker 2 | 29:06 - 29:09
It's not fitting on my laptop. I could run out on the big laptop, but

Speaker 3 | 29:09 - 29:29
It's just a different question of terminology. I care what we do best for is in the offer active parameters, but it's true. I'm really glad you made another name. But, yeah, we could have called it medium, but then I think It's a model that we really a mystery of experts. It's a model that combines different model.

Speaker 3 | 29:29 - 29:48
Before, what the way we are doing this thing is that we had one model, general model for industrial doing instruction following where, like, a separate model that was Devstral. So really good coding specific to code. It was another model for recently Magistral. So these were separate artifacts built by different team at Estral. And now what we are doing is basically merging all of this.

Speaker 3 | 29:49 - 30:15
It was you had PixTravel, the first vision model we had was, like, a separate model. And the way we do things internally is that we are one team focused on one capability, build one model, and then once mature enough, we decide to merge this into the main texture. But here, it was the first time we basically merged all of this into one. There are some other things we did at the last time to merge it. For instance, like more capabilities or function coding, I think, would be it's going to be much much better in this trial, small, proper phone, but much better model on the way we're working on, of course, the ultra version of this.

Speaker 2 | 30:16 - 30:23
And, yeah, key things is is very sparse, six b active, pretty efficient to serve. Two fifty six k context. Yeah.

Speaker 1 | 30:23 - 30:31
I think what's interesting is just this general theory of developing the individual capabilities in different teams and then merging them. Where is this gonna end up?

Speaker 2 | 30:32 - 30:37
Like, we've seen the five things put together in this. Yeah. What are the next five team?

Speaker 1 | 30:37 - 30:47
I think actually OpenAI has gone away from the original four o vision of the omni model. That's with what they were selling all modalities in, all modalities out. But I feel like you might do it. I think there

Speaker 3 | 30:47 - 31:02
are some modalities where it's not completely obvious. For instance, for audio for audio here, if you want to do transcription, I think it makes no sense to use a model as this large. If you just want to trans transcribe tech, it's it would be very inefficient. If you want to do audio, you probably just want to do the one b or three d model. Performance would be essentially the same.

Speaker 3 | 31:02 - 31:26
It's going to be incredibly cheaper. So here, that's why we want to have a separate, but it just does this. Yeah. I think the question is just, yeah, if you are talking to your model by speech you're asking, like, very, very complex questions and how you do this and the other purpose just to cascade things. Do you want to put a DUO in a model that does, a one key around the it's like a not a competitive discussion, I think, unaware if you could bring into the direction, but that's the right possible purpose.

Speaker 3 | 31:26 - 31:51
But, yeah, but I think for us the next capabilities we want to try to integrate into these models while we are going to be, yes, like, more coding, more more reasoning. I think more capabilities that people don't talk too much about, but that's important, I think, our customers in our on different industries, for instance, things are around, like, a little legal, finance, computer aided design, all of these things that is these millions out of the box are harder put at that because people really don't prioritize this. There is

Speaker 2 | 31:51 - 31:52
no, like, too many benchmark

Speaker 3 | 31:52 - 32:03
on that. But it's not hard to make this good on this. It's just hard to do the work, like, sourcing some data processing it, k, including it into the dispersion. So so yeah. But we have other thing that we merge into this.

Speaker 1 | 32:03 - 32:24
I think for voice, yeah, the key thing I think over maybe, like, the last year or so with VO and in Grok Imagine and all these things is joining voice with video. Right? Which people don't understand spatial audio because, like, most TTS is just, oh, I'm speaking to a microphone in perfect studio quality. But when you have video, like, the voice moves around.

Speaker 4 | 32:24 - 32:39
That's true. The conversation is also a little different in the sense that there, it's like a a standalone artifact where you get the whole thing and you consume it. But a conversational setting, it's a you need the extreme low latency. Yeah. Streaming Oh, yeah.

Speaker 4 | 32:39 - 32:41
Would be one of the primary concentrations.

Speaker 1 | 32:41 - 33:02
You can build a giant company just doing that. Right? So you don't need to do the voice But I I was just, you know, on the theme of merging modalities, that is something I am like, wow. Like, I didn't everyone up till, let's say, mid last year was just doing these, like, pipelines of, okay, we'll stitch a TTS model with a voice thing and a lip sync thing and what have you. Nope.

Speaker 1 | 33:02 - 33:03
Just a point

Speaker 3 | 33:03 - 33:04
giant model. Yeah.

Speaker 2 | 33:05 - 33:22
I have a two part question. So one is it's still open. It seems like open source is still very core to what you guys do, and I just have to plug your paper. January 2024, this is the only straw of experts, like, very fundamental research on how to do good MOEs. Paper comes out.

Speaker 2 | 33:22 - 33:25
Very good paper for anyone. Let's just side tangent with No.

Speaker 1 | 33:25 - 33:31
This thing caused We're bringing that. Eight by '22 was, like, the nuclear bomb for open source.

Speaker 3 | 33:31 - 33:32
I think it takes

Speaker 2 | 33:32 - 33:34
seven b more. Seven b more?

Speaker 1 | 33:34 - 33:36
Seven b. Yeah. But this is

Speaker 3 | 33:36 - 33:38
a bigger opportunity. Yeah. Yeah.

Speaker 1 | 33:38 - 33:43
I do remember this. I remember I don't think it was January. Right? It was like New Rips. It was It dropped during New Rips.

Speaker 1 | 33:43 - 33:43
And everyone in New

Speaker 3 | 33:43 - 33:47
Rips was It was December 2023, but I think, yeah, the model was did as well.

Speaker 2 | 33:48 - 33:50
Yeah. It's just a little update probably.

Speaker 1 | 33:50 - 33:52
Yeah. Know. But you have a point to make.

Speaker 2 | 33:52 - 33:58
No. You gotta check that. But then I just wanna hear more broadly on open source for you guys.

Speaker 3 | 33:58 - 33:58
And

Speaker 2 | 33:58 - 34:06
Yeah. When you had asked earlier about what's next, what are the other side tapes working on? You you put out Lean Strawl. This is not as a surprise.

Speaker 1 | 34:06 - 34:09
I was like, I don't this doesn't fit my mental model, miss Strawl.

Speaker 3 | 34:09 - 34:20
Yeah. First, for open source in general, I think it's really something which maybe looks to the DNA of the company. I think we started it around this. We so I we have an open sourcing model since the beginning and even before this. So before this.

Speaker 3 | 34:20 - 34:48
So me and Tim were at Meta. We released LAMR, and I think what was really nice to see that before this, for most researchers, like, universities, it was impossible to work on LLNs. There was no LLN outside. And if you look at many of the techniques that were developed after, for instance, LAMR was open sourced, all these post training approaches, like even DPOD, like, performance optimization, all of these were done by people that had access to this portal, and it would have been impossible to do without this. It's really making sense move faster.

Speaker 3 | 34:48 - 35:06
So we really want to contribute to this OpenTOS ecosystem. I think that's the DeepSQL one also, like, very lot of impact. All these papers that are, I think, in the open source community are really helping the science community as a whole to move faster. So we want to contribute to this ecosystem. That's why we are releasing very detailed technical reports from Magistral and our first reasoning model.

Speaker 3 | 35:06 - 35:33
And a lot of reasons, things that worked, things that did not work as well, I think, helpful. And yeah. So for the audio model, we're also going to share a lot of details, shadow tell them for the real time model on the yeah. So we really want to continue this, basically belong to this community of people who share science. I think we really don't want to be living in a world where the smartest model, the best models are only behind closed doors, only accessible to a few companies that we have the power to decide who can use them or not.

Speaker 3 | 35:33 - 35:46
Think it's a scary future we don't want to live in. We really want this model to be accessible to anyone. We want intelligence to be used and accessible by anyone who can use it. So yeah. So that's why we are pushing at this mission and sourcing model on the yep.

Speaker 3 | 35:46 - 36:02
So not so yeah. Moxtra TTS, so it's open source, not the first model, so not the best. And the yeah. LYNs trial, I think, is also one step into this direction. So it's, yeah, a bit different than what we are usually releasing, but we have a small team internally working on formal proving, formal math.

Speaker 3 | 36:02 - 36:26
So I think a subject we care about in general, and we were working on reasoning. I think we started too early before LM. Doing reasoning without LM is very hard, especially when you work with formal systems because the amount of data you have is negligible. It's a graceful community of people writing, like, formal proofs. But the reason why we like it is because I think there is if you look at what people are doing with reasoning, these are the problems that you can use are usually going to be problems where you can verify the output.

Speaker 3 | 36:26 - 36:49
So for instance, all this AIME problem where the solution is a number between 100, like, a thousand, so you can verify compare this with a reference or it's an expression. You can actually compare the output expression generated by your model with a reference. But there are many most of them have problem and most of the reason in the print, there is no, like, way to easily verify the solution. If the question is shows that f is continuous, cannot compare in the reference. Right?

Speaker 3 | 36:49 - 37:12
If it's a proof that this is true or proves this property, there is no way to you cannot, like, simply verify the correctness of your proof. So it's hard to apply the there is no very fair value here. So what you could provide is, of course, like a judge a l m judge that will look at your proof, but it's very hard and it's very you could do certain reward hacking happening there. So it's difficult. And you could provide, like, a reference proof, but then there are also many ways to prove the same thing.

Speaker 3 | 37:12 - 37:25
So if the model says give a negative reward because it's a different proof, maybe it was still digit proof, just difference. So so it's not going to work well. What's nice with Lean and with formal proving is that you don't have to worry about this. We just They're all

Speaker 2 | 37:25 - 37:31
function as long as it compiles in Lean, it's functionally the same. Exactly. It's like a program if it compiles Yeah. It's correct.

Speaker 3 | 37:31 - 37:33
Yeah. It's very easy, and you can apply this on any kind

Speaker 1 | 37:33 - 37:35
of It's just way too small,

Speaker 2 | 37:35 - 37:37
so no human will actually go and do it. Yeah.

Speaker 3 | 37:37 - 37:53
That that's exactly so only people can do it. It's like a very small community of people doing a PhD on that. So it's super small. And it's sad because it's actually very useful on not just math, but also in software verification. So for instance, software verification today, a tiny market.

Speaker 3 | 37:53 - 38:09
Very few industries work on this, and we need that. It's usually going to be, like, companies, like, building airplanes, aerobatics, like, things where they absolutely want to be Sure. Life depend on this, but it's very rare that people formally verify the correctness of their software. But I think one reason for this is simply that it's just super hard to do.

Speaker 1 | 38:09 - 38:14
Are you thinking of TLA plus? It's the language that some people do for software verification.

Speaker 3 | 38:14 - 38:30
No. I I will add with Coke that people use in France, but but, yeah, it's the reason I think why people don't use it more and why this industry is not as big as it could be is because it's very hard. But now with coding agents that are there, it's going to be very difficult that we are going to see much more of this. So I think, yes, industries there is going to be much larger in

Speaker 2 | 38:30 - 38:32
the future of those that we have these models.

Speaker 3 | 38:32 - 38:39
So, yeah, here, we're also anticipating this a little bit. We wanted to work on that because it's proving like a math theorem or proving like a function. Essentially, it's the same tools.

Speaker 1 | 38:39 - 38:52
Yeah. Yeah. One of my theories is that because the proofs take so long, it's actually just a proxy for long horizon reasoning and coherence and planning, maybe. A lot of people will say, okay. It's for people who like math.

Speaker 1 | 38:52 - 39:02
It's for lean. Okay. It's like a niche math language. Who cares? But, actually, and you use this as part of your data mixture for post training and reasoning, actually, it might spike everywhere else.

Speaker 1 | 39:02 - 39:08
Yeah. And I think that's, like, underexplored or no one's, like, really put out a definitive paper on how this generalizes.

Speaker 3 | 39:08 - 39:18
Yeah. Absolutely. And I think even that's what we are seeing already. For instance, if you do some reasoning and math, then the Americans should do reasoning and code AI will even be yeah. If you just code that to it in the early stage.

Speaker 3 | 39:18 - 39:41
So in debuted, there is some transfer, some sort of an emergence that happens. And I think some it's also interesting. It's not just, I think, the topic in general, but it's there is a lot of connection with this on encoding agents because sometimes the model can see back of theorems that it has to prove. It's very complex, but then it can take the initiative to say, I'm going to prove this three lemma. I'm going to suggest three lemmas, and I'm going to, in parallel, prove each lemma.

Speaker 3 | 39:42 - 39:59
So three of them in parallel with sub agents, I'm also going to prove them in theory unless you use the three lemmas at all. So you can do this sub agent approach. So pretty interesting. You can even if you fail to pull one of the lemma, you can actually maybe you'd succeed to pull the normal lemma too, so you get some possible reward here. So it's a bit less spartan if you just get to zero one for the entire thing.

Speaker 3 | 39:59 - 40:02
So it's pretty interesting. I think we can actually pass up here.

Speaker 2 | 40:03 - 40:09
Yeah. It's also an interesting case just for specialized models in general. Right? Like, the cost thing you show is pretty interesting. Yeah.

Speaker 2 | 40:09 - 40:14
Similar score wise, you're $30.70, 100, $5,300. We have

Speaker 1 | 40:14 - 40:15
to pay

Speaker 4 | 40:15 - 40:15
a small dividend.

Speaker 1 | 40:15 - 40:22
I think cost is a bit unfair. Right? Because this one is at, like, inference cost. It's always there on top with their margins on top of it, but we don't know anything else.

Speaker 2 | 40:22 - 40:23
So we gotta

Speaker 1 | 40:23 - 40:24
figure it out.

Speaker 2 | 40:24 - 40:49
K. I did wanna actually push on that more, not on cost, but you mentioned about, okay, it's a great way to have verifiable long context reasoning. What are other frontiers that I'm sure you guys are working on internally? There's a lot of push of people pushing back on pretraining, scaling RL, pushing compute towards having more than half of your training budget all on RL. Where are you guys seeing the frontier of research in that?

Speaker 2 | 40:49 - 41:00
You mean in Wazelle? Just in foundation model training in the next. One thing that you guys do actually is you do fundamental research from the ground up. Right? So you probably have a really good look at where you can forecast this out.

Speaker 3 | 41:00 - 41:18
Yeah. I think for us, we're still working a lot on the pretraining side. I think we're already very far from the situation as a pretraining. Think ML four pretraining will be, like, big step up compared to everything we have done before, we are pretty excited about this. And I think on the IL side, I think now we have more and more to think about this algorithm that will actually support this very long trajectories.

Speaker 3 | 41:18 - 41:26
I think when it was, for instance, GRP, of course, it doesn't really work with this tiny bit of policy, which was okay initially because you are solving math problem that can be solved in, like,

Speaker 2 | 41:26 - 41:30
a few thousand tokens. So the model can actually generate them pretty quickly.

Speaker 3 | 41:30 - 41:56
So when you do your update, the model is never too far off. Still, it's never too far off. But now when you are moving towards this kind of problems where something takes hours, like six hours to get a reward, then your model is completely useless. You have to actually build new accuracy that are new infrastructure that supports this, but also new algorithms. So now everything we are doing internally, we are trying to build some info that we actually anticipate this what we have in six months when are, which is this extremely in all scenarios on the hard price at the beginning.

Speaker 3 | 41:56 - 42:15
I think when we started Mistral, part of me and maybe also Timothy, we wanted to this very nice environment where people are there as they can do research the like with a lot of resources. So it was nice. I think things changed a lot when, I think, when Churchill PT came out. I think after that, I think it was made of return. These labs were neither the same again.

Speaker 3 | 42:15 - 42:18
But but, yeah, but it was nice, and I think we also want to be part of this culture before.

Speaker 1 | 42:19 - 42:31
Coming to the end, we're just obviously, I think you guys are doing incredible work. You've laid out a very impressive vision for open source and for voice. What are you hiring for? What's the what are you looking for that you're trying to join the company?

Speaker 3 | 42:32 - 42:42
Yeah. So we are hiring a lot of people in our sales team. We are hiring in all our offices. So we have our HQ in France, in Paris. We have a small team in London, like a team in Palo Alto as well.

Speaker 3 | 42:42 - 43:04
Recently, we opened some offices in in Warsaw, in Poland, so one in Zurich. We also have, like, some presence in New York as well, and soon one in San Francisco. So we are a bit if the way, we also, like, hiring people remotely. So we are growing the team, trying to hire, like, very strong people. I think we want to stay so the team is not still a fairly small team, and I think we want to keep it that way because we we find it quite efficient for, like, a small team, very agile.

Speaker 3 | 43:04 - 43:05
So yeah.

Speaker 1 | 43:05 - 43:15
Okay. Let's focus on science and the for deployed. We actually are strong believers in science. We started the our new science pod that focuses specifically on the AfroScience. What areas you think are the most promising?

Speaker 1 | 43:15 - 43:16
What we

Speaker 3 | 43:16 - 43:40
are pretty excited about right now and something we have already started doing, although we'd probably be able to share more about this in a couple of months, is that we are exploring AI for science. And there are a lot of areas where we think that you could get some extremely promising results if you are to apply AI in these domains. There are lot of long inputs. You just have to find these domains where, actually, AI has not been yet applied. And it's usually hard to do because the people working in those domains don't necessarily know the capability of these models.

Speaker 3 | 43:40 - 43:41
They don't know how well

Speaker 1 | 43:41 - 43:44
they are. We just had to pair them with, yeah, exactly. You have research here, matching,

Speaker 3 | 43:44 - 43:56
which is actually hard to do. But this matching, we are doing it naturally with our customers. So we have some company we are very closely with. So for instance, ISM Elementary is one of our partners. So we are doing some research with them.

Speaker 3 | 43:56 - 44:16
And there there are, like, tons of extremely interesting problems, problems in physics, in science, material science that they are essentially the only ones to work on because they are doing something no else no one else is doing. On the yeah. So there are many domains where, yeah, you can actually revolutionize things. It's just you have to think about it on if familiar with what can do well now, how to apply it. So, yeah, it's something we are more modeling with our partners, with our customers.

Speaker 3 | 44:16 - 44:19
So AI for sciences, but they're one big thing.

Speaker 1 | 44:19 - 44:26
Yeah. Okay. And then forward deployed, what makes a good forward deployed engineer? What do they need? Where do people fail?

Speaker 3 | 44:26 - 44:50
I think it's usually you need people that are very familiar with the tech. And not necessarily with a lot of research expertise, but that are actually pretty good at using this model that can actually, like, that know how to do fine tuning, that know how to, like, start some airline pipeline. And it's it's not easy. It's something that most of companies will not be able to do this on their own. So here, I think we need people that are that like to solve problems that are excited about, like, solving some complex, very concrete problem.

Speaker 3 | 44:50 - 45:03
It's applied science, basically. And yep. So I think it's not too different, I think, from the skills you need about in your research because, essentially, you are trying to find solutions to problems that customers have not yet solved. Sometimes it's easy. Sometimes it's area to do the work.

Speaker 3 | 45:03 - 45:14
You have to, like, create synthetic data, find some edge case. So it can be yeah. It depends on the problem, but but, yeah, you have to I think you need also a bit of patience on be creative. I think very similar skill is is urgent.

Speaker 4 | 45:14 - 45:22
The diversity of the work they do, it always appraise me. It's it's it goes all the way from the kind of stuff they encounter in industries. It's just very interesting, I think.

Speaker 1 | 45:22 - 45:25
Any fun, like, success anecdotes? Yeah. It can be, like,

Speaker 3 | 45:25 - 45:34
really training this small model on edge that just do one specific thing. It'd be, like, training some very large model with some specific languages as well, making models very good

Speaker 2 | 45:34 - 45:38
at some to use, like, for instance, computer ID design, these kind of things.

Speaker 1 | 45:39 - 45:41
Is that impairing with vision as well?

Speaker 4 | 45:41 - 45:59
Yeah. And defect detection for chips or, like, in in factories identifying things? Like, the diversity could be anything where you can deploy these foundation models. So Yeah. The work to make it work in that specific setting, basically, whatever it takes to make it, like, add value in that specific workflow.

Speaker 2 | 45:59 - 46:04
Yeah. And it goes across the stack. Right? Like, even just pulling up the website, like, Mitchell's

Speaker 1 | 46:04 - 46:06
is so broad. Pew is so broad.

Speaker 2 | 46:06 - 46:18
We didn't even touch on Mistral Vibe. We have a live coding CLI tool. One thing you guys were actually, like, I think the first two was Mistral agents. You have the agent builder. You can serve it via API and all that.

Speaker 2 | 46:18 - 46:20
I I'm guessing forward deploy people

Speaker 1 | 46:20 - 46:20
Yeah.

Speaker 2 | 46:20 - 46:21
Help build that out

Speaker 3 | 46:21 - 46:49
and stuff. It's also why we are so we are doing many things, but I think that's also part of the value proposition that sometime, you know, customers are always very extremely careful about their data, and they didn't want to they don't like trusting so many partners, trusting one partner for code, giving your data to another third party for, like, audios and another one. So they don't like this. But here, what they really like with our approach is that we can help them on anything so they don't have to send their data to so many clouds. So

Speaker 1 | 46:49 - 46:58
yeah. I think that there can be many orders of magnitude more FTEs than research scientists, and they don't need your full experience, but they're still super variable to to customers.

Speaker 3 | 46:58 - 47:14
In practice, these two teams are still quite intertwined very often. So first of all, they are using the same tools, the same data pipeline and everything. And it's it's very helpful for the science team to get the feedback and the solution team because they can say, look, these customers are trying to do this. This is not working. It can really be sure in the next version.

Speaker 1 | 47:14 - 47:17
Yeah. The business basically are a real world eval.

Speaker 3 | 47:17 - 47:27
Yeah. Yeah. It's a real world eval. It's not something For instance, if you are just working in a lab, it's just ships model, but you don't do this work of preparing the model for customers. You have no idea whether your model is good at this HKs.

Speaker 3 | 47:27 - 47:35
For instance, in a even in a year before this. Right? So Yeah. There is a fairly gap big gap between the the public benchmarks that are fairly, like, academic on the

Speaker 4 | 47:36 - 47:59
The rare cases are just very diverse. And Yeah. In the specific conduct of a customer, you can fine tune and make it, like, first evaluate, create a solid eval benchmark and then measure in the context of their the kind of audios, like for instance, one use case is literally just there'll be a word for kids and they have to just say it out. It's a very specific thing. You're just saying one word and then you have to you'll grade the kid whether they did it right or not.

Speaker 4 | 47:59 - 48:16
It's like RL for kids, I don't know. So, they're very diverse use cases and the idea is that the applied scientist industries will go and make it better. Then from the learnings, we incorporate it into the base model itself. So it's just better out of the box.

Speaker 2 | 48:16 - 48:28
Yeah. It's a good full circle system. The foundation model evals are all just proxies of what you really need. You're never gonna have one that's just, it doesn't make sense for there to be a one word transcription like that. It's not something you wanna fit on.

Speaker 1 | 48:29 - 48:37
Perfect. Everyone should go check out everything that Michelle has to offer and try the TTS model, which we'll link in the show notes. But thank you so much for coming. Thanks. Such a strategy, guys.

---

## Mistral: Voxtral TTS, Forge, Leanstral, & Mistral 4 — w/ Pavan Kumar Reddy & Guillaume Lample

- **发布时间**: 2026/3/30 00:00:00
- **原始链接**: [点击查看](https://youtube.com/watch?v=SUjA25ijcNs)

### 📜 内容摘要与转录

When customers use this offtheshelf close model, what's very sad is that they are not leveraging, you know, these data that they have been collecting for for years or sometime for decades. So much data, sometimes it's trillions of tokens of data in a very specific domain, their domain, which is data that you will not find in the in the public on the public internet. So data on which like the closed model we actually have access. So if they're using like closed source models are basically not benefiting from all this insights, all these data they have collected through years. Okay, welcome to Lin Space. We're here in the studio with our trusty co-host uh Bibu. Welcome. >> Excited for this one. >> As well as Guiam and Pavan from Mistral. Welcome. >> Glad to be here. >> Thank you for uh Pavan, you are leading audio research at uh Mistral and uh Guiam, your chief scientist. Uh what are we announcing today where we're sort of coordinating this this release uh with you guys? Yeah. So we are releasing uh Voxal TTS. So it's our first uh audio model that generates speech. Uh it's not our first audio model. We had a couple of releases before. We had one uh in the summer that was a box our first audio model. But it's it was like a transcription mod ASR like a few months later we released some update on top of this supporting more languages also a lot of table ST features for customers like context biasing theization time stamping and the transcription. We also had some real time model that can transcribe not just at the end of the you don't need to fill your entire audio file but can also come in real time and here this is kind of the natural extension uh in the audio. basically speech generation. So, so yeah, so we support nine languages uh and this is pretty small model 3D model. So very fast very fast and also state of the eco performance at the same level at the at the base model but it's uh much more efficient in terms of cost and also uh much in terms of cost much to go only a fraction of the cost of our competitors and we are also releasing the way that this model is yeah >> yeah mate linked >> not this time yeah what's the decision factor >> it's a good question there'll be more yeah provide any other sort of research notes to add on what? >> No, we uh maybe we'll dive into it later in the forecast too, but it's a novel architecture that we developed in house. Uh we iterated uh on several internal architectures and ended up with a auto reggressive flow matching architecture uh and also have a uh new uh in-house uh neural audio codec uh which uh converts this uh audio into all point by herz uh latent tokens, semantic and acoustic tokens. And yeah, that's uh that's the new part about this model and we're pretty excited that it's uh uh it came out uh with such good quality and like G was mentioning yeah it's a 3B model. Uh it's based off of the ministral model that we actually released just a few months back and instruct trunk and mainly meant for like the TTS stuff but they need text capabilities are also there uh in >> so there's a lot to cover. I always I I love any anything to do with novel encodings and all all those things uh because I think that's obviously it creates a lot of efficiency but also maybe bugs uh that sometimes happen. You were previously at Gemini and you worked on post training for language models and maybe like a lot of people will have less experience with audio models just in general uh compared to uh pure language. uh what did you find that you have to sort of revisit from scratch as you joined MRA and started doing this >> at least when it comes to for I think the there are two buckets I guess the audio understanding and audio generation the audio understanding like the walk through models that was mentioning that we released earlier the the walkrough chat that we released uh I think July last year and the follow-up transcription only uh models family that we released in January that would be one bucket I guess on generation is another bucket. I think uh you can also treat them as a unified uh set of models but currently uh the approaches are a little different between these two to your question on um how audio is like fed to the model in the understanding model it's very similar to actually pixel models that we also released I guess yeah it was pretty I that was the first project I worked on after joined mist it was pretty pretty nice and voxil was uh very similar in spirit I guess so we feed uh audio through an audio encoder similar to uh images through a vision encoder and it produces continuous uh embeddings uh and which are fed as tokens to the main transformer decoder transformer model. Yeah. And the model output is just texted. So on the output side there is nothing uh that needs to be done in these kinds of models. I guess the interesting part about the generation step is the output now has to produce audio and the approach that we have is this uh neural audio codec which uh converts audio into these uh latent tokens. there is uh a lot of uh existing literature and a lot of models uh which uh are based off of this kind of approach and we took a slightly uh different I guess design decisions around this but at the end of the day the neural audio product converts audio into a 12.5 Hz uh set of latent and each latent is has a semantic token and uh a set of acoustic tokens and the idea is that you take these discrete tokens and and feed it on the input side. There's several ways to fuse this at each frame, but we just sum the embeddings. So, it's it's kind of like having k different vocabularies and kind of combine all of them because they all correspond to one audio frame on the input side. The output side is the interesting part on the output side. The it's not the I don't know if it's the most popular, but one popular technique is to have a depth transformer because you have k tokens at each time step like with uh text you just have one token at each time step. So you just do like uh predict the token from the vocabulary with yeah with just you get probabilities. This a very straightforward tip. >> Very straightforward. Yeah. But if you have K tokens, then the main thing would be to predict all of them in parallel. But that doesn't work. Uh at least that doesn't work that well because audio has more entropy. And the one of the techniques people use is this depth transformer where you uh you almost have a small transformer or it can be LSTMRN as well but people use transformers and you predict the K tokens in auto reggressive fashion in that. So you have two auto reggressive things going on. So the thing we did differently is instead of having this auto reggressive kstep prediction we have a flow matching model instead of modeling this as a discrete token set we we train the codec to be both discrete and continuous to have this flexibility. So we did try the discrete stuff too and it works well but the continuous stuff works just better. So yeah we took this flow matching. So the it's a flow matching head which takes the latent from the main transformer and kind of like in diffusion it's dino noising but in this flow matching it's a velocity estimate. So you kind of uh uh go from this noised uh latent all the way to the audio latent which corresponds to 80 mcond audio and then which is sent uh through the voder to get back the 80 mcond audio frame. >> Yeah. Is this the first application of flow matching in audio? Because uh usually I come I come across this in the image. >> Yeah, actually in some sense there are models uh flow matching models in audio but I think this this specific combination >> I I I could be wrong. There could be some work. I haven't seen I haven't seen much work in this. So I I think it's it's novel and a lot of u it's just a way bigger community right. So they I think they pioneer a lot of these diffusion flow matching work and it's interesting to adopt some of the ideas there into audio and yeah and personally that's the the part which is trying trying out one of and more meta point is unlike text even in vision I think this is true but in audio is that there is no uh winner model yet there is no okay this is the way you do things it's uh it's still evolving I think people are still iterating and figuring out like what's the uh best overall recipe I guess the the idea I mean pretty sure uh there are models which are also completely end to end like NATO audio and native audio but it's still not like uh come to a convergence point where this this right way to think that also makes the space pretty exciting to explore what are some of the ways to look at it like there are ways where you can do diffusion for audio generation but if you want like real time generation that's a big thing with the approach I'm assuming that you took Yeah. >> And also like how do you go about evaluating different axes of what you care about, right? So yeah, >> good point. I think we uh so you can do just flow matching diffusion for the whole audio. We didn't even go down that path because one of the main applications is uh voice agents and we want realtime streaming and that's the use case. That's not the only use case but that's one of the primary use cases we want to get to. So we picked the auto reggressive uh approach for that and within the auto reggressive space again you can do chunk by chunk or you can do uh so we pick the I think at least personally prefer the approaches which are the simplest I guess and so we try to see can we just add audio as just another head to our regular uh transformer decoder model because that kind of makes it easier for eventual end to end modeling of audio text native modeling. Yeah. And it works pretty well. So I guess we kind of uh went with that and we tried it a little bit with the flow matching head itself. Like we had a discrete diffusion kind of approach which also works well but the flow matching worked quite >> I was just curious about how you also think about uh this overall directional research like do you basically when you work with the audio team do you set uh some highle parameters and then let them explore whatever or how does it work between you guys? No, I think the the way it works is that we are we are prioritizing together I think what are the most important features. There are many many things we can do in audio. I think we try to decide like how we should do things. For instance, ultimately what we want to do is to build this full duplex model. But we are not going to start this start there directly. I think it's some project people are doing but >> just to confirm full duplex means it can speak while I'm speaking or okay audio. >> Yeah. Yeah. So ultimately we're going to get there but for us it was I mean we decided to take it like a step by step. So we start with whatever is the most important I think also for customers which is the transcription is the most popular use case then the speech generation the real time just a bit before that and then actually to be like more try combine everything all together but uh but yeah we thought it was also important to like separate things and like optimize each capability one by one before we all of that together. then the the the super omni model >> but very interesting because as pav said it's a when you work on some other domains of this and everything there are many areas where I think it's not as interesting for instance many places it's essentially just around data or like creating new environments and a lot of kind of easy things but um things where I think the research is maybe not as interesting where in audio there are so many ways to to actually build this model so many ways to go around it that the sense I think is really interesting And what we also tried for speed generation is that we tried multiple approaches. What was interesting is that even though they were extremely different, they ended up big at the end of the day like particles, but the matching turned out to be quite more natural. So we are happy with this. >> Is there intuition why uh maybe like flow matching is just models speech better in some natural fundamental latent dimension? No, I think the main main thing is like uh even at a particular time step there is a distribution of things uh to be predicted like the way you in so you already know the word that you're speaking and yeah the in text space let's say the word maps to just a single token for simplicity in most cases it does so there is uh not a lot of like so you just pick the word but with within audio even the same word could even with your own voice could be inflicted in so many different ways and I think uh uh any approach which like models this distribution and well and flow matching is one one of the it's not the only one at all but it's it's a one which works pretty reasonably well I think does better so you have to pick across several different like uh the the intuition I have is it's it's there are some several different clusters each corresponding to some specific way you would inflect pronounce that thing and you can't predict the mean of it because that corresponds some blurred out speech or something like that, but you have to uh pick one and then like sharp >> conditional inference. >> Yeah, exactly. >> Is that all covered under disluencies, which is I think the the normal term of art and discuencies, pauses, intonations. By the way, I have to thank Sophia for setting all this up, including like some of these really good notes because >> yeah, >> I'm less familiar with the audio. >> No, no, I think discies are definitely one such phenomen >> which is arms. Yeah, also repeat like if you're like like uh you do this filler words, you're thinking so you repeat the word. >> Okay. Whereas inonation is like a is up uh up speak and all this. Okay. >> Yeah. So I think there is a lot of like entropy and modeling it as a distribution and uh any technique which helps with it and the depth transformer is a conditional way of modeling this and transformers actually good at it even though that's a mini transformer. So I think that worked pretty well too for us too. It's just that the main consideration is when you have a depth transformer, if you have K tokens, you need to do K autogressive steps. So even though it's a small thing, it's like K steps, which is very latency heavy. With flow matching, we were able to cut it down significantly. So we are able to do the inference in quad steps or 16 steps and it works pretty well. And there are more normal techniques to bring it down even further to like in the extreme case one step. like we're not doing it yet, but it at least the framework lends itself to uh more efficient and >> yes and the image guys have done yeah incredible work as now you just send the prompt and you get an image. >> Yeah, surprisingly not enough I think image model labs use those techniques in production. I think it's it's I feel like it's a lot of research demos but nothing >> nothing I can use on my phone today. The thing the other thing that would be interesting here is that uh since I mean indeed there has been so much that has been done in the vision community compared to this I think there are so many long infos here and there are so many things we can do to actually improve this even further. So I know it's our first version but we have like so many ways to make this much better and much more efficient cost efficient so yeah so really it's not a new field at all of course but there are still so many things that can be done with it. I should also mention uh for those who are newer to flow matching. I think uh the creator is the guy's name is Alex the he's done I think a new Europe's uh maybe two Europe ago there was there's a there's a very good workshop there's like one hour on like this what matching is I I would recommend people look that up that's the other thing right the efficiency wise like I I imagine like the reason it's open weights uh the reason you pick 3.6b backbone uh it 3.4b 4B uh you are trying to fit to some kind of hardware constraints. You're kind of to fit some kind of latency constraints. What what are they? >> Not necessarily. I think uh something we care about in our model that they are efficient. So we have like a lot of separate model for instance um so we have this red is very small very efficient. We also have like a small OCR model that is really very good really efficient as well. And uh I think an approach that maybe other I think companies are going to take is to have like a very general model that will do a bit of everything. But that is also going to be expensive. And here what you want to say is if you care about this specific use case you can actually use this model. It just does that. It's extremely good at it but so very efficient. That's why we can actually models a but like OCR that are like really really good at that and that will be much more cost effective than than the general models that will contain a lot of capabilities. You don't really need the test. So so yeah. So, we're doing like general model, but also like more customized model like this. >> How does it compare to other TTS models? It's, you know, we're going full open wave. We're just dropping it like >> Oh, I think it's pretty good. >> Yeah, I think it's pretty good. Like, it it's definitely one of the best for sure. It's probably I I would say it's the best open source model, right? Yeah. Why now? How does it fit into broader mist vision? How do you see voice agents? How do you see voice? Like I I think every year I've heard okay you're a voice you're a voice there's a lot of architectural stuff there's a lot of ant latency that you're solving but where do you see voice heading we had so many customers asking for for voice that's also why we wanted to to build it uh what's kind of interesting in this domain is that in a sense if you take something simple like transcription it doesn't seem like something that should be very hard to do for a model it's essentially it's pattern recognition it's classification this are very good at classifying right nonetheless when you talk to them. I mean it's it's not there yet, right? It's not you don't talk to them the same way you talk to a person on something maybe people don't realize it in English it's still much better than in any other language even compared to French for instance if you talk to this in French I mean when you see people talking to this they will talk very slow they will articulate as much as they can so it's not natural right we are not yet to this uh I think yeah maybe the next generation will not know this but yeah I think people that are maybe our age will actually always keep this bias speaking very slowly when they talk to this model even if maybe probably in a couple of years there may be an So it would not be necessary anymore. But yeah, but what's interesting is to see that um even for like languages like French and Spanish, German that are not no resource on release, you have a lot of audio with this there and still it's it's not as good. So and I think a consequ I mean reason for this I suppose there is not as much energy as much effort that has been put in some other modities like that for some vision or like coding but but there's still a lot of progress to be done. I think it's just a question of doing the work and it's a you like a clear path I think to to get there. >> It's a little fascinating because I worked on Google Assistant. I I think while back at this point, but it's I think um it's it's kind of like when you take a step back, it's fascinating. It's not that long ago. It was like 4 years ago or 5 years ago and it's like now it's a completely audio in audio out and the function calling and the whole thing happens completely end to end and in a very natural natural way and still ways to go like you was telling >> even despite all the previous it's not like you're speaking to a person uh when you talk to any of these uh uh uh agents bots or voice mode kind of situation it's still still like a gap I take that's the great part and I I feel like with even the existing stack we should be able to get to this uh uh very natural uh speech uh conversational abilities uh soon enough I guess and uh we'll also hope hope to get there and it's kind of the next step right because when you talk to these agents like usually people are just writing to them and sometimes they have like this very clear for instance you you want to write code but you you have like a very clear idea of how you want the model to implement what you have in mind but uh so here you are having to spend like a lot of time writing so it's not really efficient on like audio is really like a natural interface that is just not there yet but I think it's just going to be the right place. How's it like building, serving, inferencing? Like we see a lot about it's very easy to take LLMs off the shelf, serve them. Uh fine-tuning, deploying uh I know you guys have a whole like you have forge, you have a whole stack of customizing, deploying. Is there a lag in getting that like distribution channel? Are you are you helping there? Is there is so like prompting LLMs, you can have them be concise, verbose, all that. Uh they're built on LM backbones, these models. So, but you know, how do you see all that? Yeah, I mean I think this is a lot of what we're doing with our own customers. I mean very often they come to us. So it's for different reasons. I think one reason is sometimes they have this lot of privacy concerns. They have this data that it is very sensitive. They don't want the data to leave the company. They want it to stay inside the company. So we help them deploy model inhouse. So either on either on premise or on private cloud. So they are not worried that it's given to a third party and that there's some leakage. Sometimes they have this kind of uh many many companies have this different you know sensitivity of data they have like sometimes ch one ch two ch three you can send it to the cloud ch it has to stay there so then it creates some kind of heterogeneous workflows where it's kind of annoying I mean you cannot send some data to the cloud this one you can so so here when we actually deploy the model for them they don't have this consideration they are like not worried that you know this is going to leak everything is much easier so we help them basically do this on the so it's one of the value proposition but Um but the other is very often I mean when customers use this offtheshelf close model what's very sad is that they are not leveraging you know this data that they have been collecting for for years or sometime for decades so much data sometime it's trillions of tokens of data in a very specific domain their domain which is data that you will not find in the in the public on the public internet so data on which like the closed model we actually not have access to one which is not going to be really good. So if they're using like closed source models are basically not benefiting from all these insights all these data they have collected three years they can always give it into context that inference but is it's never as good as if you actually train the model this so so yes that's basically what we help them to do we actually provide them some some mal approach is basically what we announced at GTC this week so we provide them with this it's basically like a platform with a lot of tools uh to actually help them process data train on that yeah it's actually the same thing that we are using in the science team so it's actually very battle tested infrastructure like a lot of efficient training codebase for like a continu pre-training like a fine tuning even doing SFT IRL uh so we help them do this using the same tools as what our team is building is using so since it's tools that we've been using for like two years now it's really pated it's really like sophisticated so it's the same thing we are giving to them we're giving the company the same thing that what our still using internally to actually build their own AI and it makes a really big difference I think sometime customers and many people in general don't realize how much better the model becomes when you fine it on your own data. You can have like a your model is here and you start from there. You have like a close source model which is sort of here. But if you actually fine tune you can actually really really go much further than this and then you have like a very big advantage. The model is trained on your entire company knowledge. So it knows everything. You don't have to feed like 10k tokens of context at every query. So it's it's much easier. It's a bit I think using a closed source model it's really sad because it basically puts you are not leveraging all this data and you are going to be using the same model as all your old competitors when you using I mean everything you've been collected for years which is really valuable so so yeah so we help basically customers do this we we have a lot of solution um I mean deployed for engineers that go in the company that basically look at the problem customers are facing look at what they're struggling to do what we should do to solve it so we help them solve them together. So it's a I think our approach is a bit different here than some other companies and competitors. It's we don't just release an end point and say some stuff on top of that or we don't just give a checkpoint. We we really look very closely with customers. We look at the issues they have. We had them solve them. We really make some tailor solution for for the problem they're facing. some example are also going to be sometime where some customers they really wanted to have a really good model really performant on some like Asian languages on the if you take some of the shift model they can speak it they can write in this language but it's it's not amazing this language will be like maybe 01% of the mixture so it it has it has been included during training but very very little so what we did here is that we train a new model for them but this language was 50% of the mix so it's much much stronger it knows of the dialects it knows the long. So it's a Yeah. So it's some example of things we can do and it's it's really arbitrarily custom. I think some of their customers for instance they wanted some they wanted some 3D model that can do audio with like very good at functioning. So something you wanted to put in the car in particular they wanted this to be offline because in a car you don't necessarily have access to internet. So so yeah so here we can actually build the solutions. There is no like model out of the box on this in the internet. You have this very you have this very general model generalist like reasoning on strong model but for things like this they always want like specific solutions and yeah on some of the reasons sometimes they come to us is because um you know like they they experiment with some closed source model they get some prototype they are happy with what they build it works well they're happy with the performance and then they want to go to production and then they but it's extremely expensive you cannot push this it's a so then they come back to us and they say can you add help us build the same thing as this but using something much cheaper on here. On here we can sometime build something 10x cheaper by just fine tuning a model and it will be better on prem on their own server and also much cheaper as well. Yeah, >> that's the misdrop pitch right there. >> Take all the money. >> And I mean outside of that, you do we do put open wave models so people can do this themselves. Feel like not enough people go out of their way. >> They're not going to they're going to ask them to do it. That's the experiitary was not exactly the same as what it is today. But what we underestimated initially is the complexity of deploying this model on like connecting them to everything to be sure it has access to the company knowledge on and it was yeah we were seeing customers struggling with this but it was even that was two years ago and now things are much more complicated because now you don't you don't just have you know text on SFT on like a simple instruction following now you have reasoning like agents you have like tools you have like a multimodel audio so it's much more complicated than before and even back then it was hard for customers so they really need support and this is why we're actually providing like always some 4D position as well as the policies. >> I'm curious is is there also uh voice finetuning that people do? So in this in this forge we we also have it's a unified uh framework uh and the the hope is like the walkers uh speech to text uh that we released earlier this year and uh even the walker chat that we released last year and I think uh a big people I think there's a big uh uh rich ecosystem of uh people finding whisper and people want the same thing with walker it's much stronger than than whisper and yeah the uh the platform offers that kind of fine-tuning. Uh yeah, which could be any kind of finetuning like for instance even sometimes people want to support new languages to this which are uh tail languages which we hope to cover um our natively but if there is a language where you have data and you want to fine-tune I think this is a good use case or the other use case is you it's the same language like even English uh but it's in a very domain specific way >> yeah terminology jargon medical stuff >> exactly and also the specific uh acoustic conditions like uh there's a lot of noise or the and the model will do uh decently in most conditions but you can always make it better and that those are some of the use cases where you can uh improve it even further and u that's one good use case for this and for u uh text to speech we're just releasing it so we'll we'll have support for that soon too I think it's similar use case it's little different the kind of things that you want to extend a text to speech model to which could be like voice personal ization, voice adaptation for enterprises and many enterprises need like very specific kind of tone, very specific kind of like personality for this kind of voice and all of those are like good good use cases for finding. That's what I was going to ask you. You know, we never talked about cloning, voice cloning here. How how important is it? Right? Like I can clone a famous person's voice. Okay. But >> the main use case would be like for enterprise personalization. Like enterprises need like lot of customization. You don't want the same voice for like all the enterprises. Each enterprise uh want a customized specialized uh something which is representative of both their brand and also their uh I guess safety considerations and the use case like I think the kind of thing that you would deploy as a empathetic assistant in the context of a healthcare domain would be very different from the kind of thing that would be in a customer support bot uh and would be different from uh like more conversational aspects. So I think those are the customizations you would expect from an enterprise and that's the main use case at least from from us right >> my my basic example is you don't want to call two customer services and have the same exact voice you know it's just it's going to be weird but also um on the technical side of this so there's like a few things in Voxrol that I thought were pretty interesting um he's a big fan of this paper he said very good he said this is the best ASR paper he's ever written >> yeah I've hyped up this paper enough we covered it somewhere but uh a big thing so Whisper is known for 30 secondond generation uh 30 secondond processing you extended this to 40 minutes there was a lot of good detail in the paper about how this was done even little niches of how the padding is so like it it's very much needed you need to have that padding in there the synthetic data generation around this I'm wondering if you can share the same about the new speech to text right uh text to speech so how do you how do you generate long form coherent how do you generate you know how do you do that and and any gems. Is there going to be a paper? >> Yeah. Yeah, there would be a technical report. Yeah, I think it will have a lot of details. Uh but uh I think the summary of it actually some of the considerations in this paper were because we started with the whisper encoder as the starting point and now we have in-house encoders like the real time model for instance which we released in January. We also released a technical report uh for that real-time model as well which is this dual stream architecture. It's an interesting architecture. Uh you should check it out. And there we have a causal encoder and I don't think there's any strong multilingual causal encoder uh out in the community. So we thought it's a good contribution. So that's that's one nice encoder. If other people want to adapt that's that's a good encoder and we train it from scratch. I think our pull stack is now mature enough that we're able to train super strong encoders and some of these considerations like sparing and stuff is a function of the whisper encoder. And now that we uh train uh encoders in house, the design concentrations are different. And for the question on like uh text to speech, I think that's also like leans on to the original auto reggressive decoder uh backbone. I think uh it's almost identical considerations. I think the long context in uh it's not even long. So the model processes audio at 12.5 hertz. So 1 second maps to like pulp point by tokens. So I think 1 minute is like 720 tokens. So you can get like up to 10 minutes in like 8K context window and get half an hour in 30k context window. So that's uh >> and 32k context is something that's we are very comfortable training on. We can extend it to even much longer 128k. So you can naturally see how it can extend to even hourong generations. Yeah we need the like data recipe and the whole algorithm to uh work coherently enough through such long long context but the techniques are some some way uh very um similar to the text long context modeling uh and the key difference is it's just doing flow matching autogressively instead of like uh uh text open prediction >> okay I think that was most most of the the the sort of voice questions that we had but um I have a I have a big question on Mr. M small. >> Let's go. >> Um, so what is small? How do we define small? What is this? What is this? I remember the days of ML 7B on my laptop. It's not fitting on my laptop. I could I could run it on a big laptop, but >> it's just a different question of terminology. I suppose give it another name. But uh yeah, we could have called it medium but then I think this I suppose but yeah it's a model that we released minister of experts uh it's a model that combines different uh model before the way we were doing is that we had one model general model for doing instruction following where like a separate model that was deflated coding specified specific to code we had another model for reasoning magistral So this were separate artifacts built by different team at what we are doing is basically merging all of this it was pal the first vision model we had was like a separate model on the way we would kind of do things internally that we have like one team focus on one capability build one model and then when it's mature enough we decide to merge this into the main texture so so here was the first time we basically merge all of this into into one there are some other things we didn't have time to merge in time for instance more capabilities or like function coding I think we are it's going to much much better in small proper phone but uh but so it's a test model we're working on a larger version of this >> and yeah I mean key things is it's very sparse 6B active so you know pretty efficient to serve uh 256k context um yeah >> I think what what's interesting is just this general theory of like developing individual capabilities in different teams and then merging them where is this going to end up >> like we the five things put together in this. What are the next five >> T? I think actually OpenAI has like kind of gone away from the original 40 vision of the omni model. That's with what they were selling, right? All modalities in, all modalities out. Uh but I feel like you might do it. >> I mean, I think there are some modities where it's not completely obvious. For instance, for for audio for audio here, if you want to to do transcription, I think it makes no sense to use a model this large. If you just want to transcribe tech, it's it would be very inefficient. like if you want to do audio you probably just want to do the one be a 3D model performance would be essentially the same it's going to be incredibly cheaper uh so here that's why we want to have like a separate but that just does this yeah I think the question is just yeah if you are talking to your model by speech and you're asking like a very very complex questions and how you do this on the other just to cascade things do you want to put a do in a model that has like a one key around it's like a not a competitive discussion I think unaware if into the direction but possible. Uh but yeah, but I think for for us the next capabilities we want to try to to integrate into these models right now are going to be yes like more cooling more reasoning but also I think more capabilities that people don't talk too much about but that are important I think for customers in on different industries for instance things are like a legal finance computer design all of these things that is this out of the box are never to put at that because people really don't prioritize this is not like too benchmark on that but it's not hard to make this blue could just have to do the work exourcing some data processing it including some expertion so yeah but we have other thing to emerge into this uh I I I think for for voice yeah the yeah the key thing I think over maybe like the last year or so with vo and gro imagine and all these things it's uh joining voice with video right which people don't understand spatial audio because like most TTS is just like oh I'm speaking to a microphone in perfect studio audio quality but when you have video like the voice moves around. >> That's true. The consideration is also a little different in the sense that uh uh there it's like a uh a standalone artifact where you get the whole whole thing and you consume it. But in the conversational setting it's a you need the extreme low latency >> streaming uh would be one of the primary concentrations. >> You can build a giant company just doing that right. Oh, you don't need to do the voice. But I was just, you know, on the theme of merging modalities. That is something I I'm like, wow. Like I didn't Everyone up till let's say mid last year was just doing these like pipelines of like, okay, we'll stitch a DTS model with a voice thing and a lip sync thing and what have you. >> Nope. Just a giant model. >> Yeah. >> I have like a two-part question. So one is, you know, it's still open. It seems like open source is still very core to what you guys do. And you know I just have to plug your paper. So uh Jan 2024 this is the next straw of experts like very fundamental research on how to do goodes paper comes out very good paper for anyone but you know that's that's just side tangent with >> this thing this thing cost >> we bring back we bring I mean 8 by 22 was like the nuclear bomb for open source like I think it takes 7 more. Yeah. Yeah. This is a bigger 7. Yeah. Yeah. I I don't remember this. I I remember I don't think it was January, right? It was like new. Uh it was it dropped during Europe and everyone in Europe was December of 23, but I think Yeah. was wrong. I think there was a bit. >> It's just a little update probably. Yeah. No, but you have a point to make. >> No, I mean you got to check that. But then I mean I just want to hear more broadly on open source for you guys. And when you had asked earlier about what's next, what are the other, you know, side tubes working on, you you put out lean straw. >> Um, this one is a surprise. I was like, I don't this doesn't fit my mental model. M. >> Yeah. I mean, um, I mean, first for open source in general, I think it's really something which belongs to the journey of the company. I think we started it around this. We uh, so we have been open sourcing with us since the beginning and even before this. So before this. So me and Tim were at meta we released LMR and I think what was really nice to see that before this for most researchers like universities it was impossible to to work on lens there was no outside and if you look at many of the techniques that were developed after for instance TAM was open source like all these post training approaches like even DPOD like preference optimization all of these were done by people that had access to this pel and it would have been impossible to do without this so it's really making sense move faster so we really want contribute to this open ecosystem. I think like the deepse also like very lot of impact all these papers that are I think in the open source community are really helping the science community as a whole to move faster. So we want contribute to this ecosystem. That's why we are releasing very detailed techical reports. So mistral our first reasoning model and I mean ablation lot of results things that worked things that did not work as well start I think helpful uh and yeah so for the audio model also to share a lot of details share a lot of them for the real time model and yeah so we really want to continue this basically belong to this community of people who share science. Uh I think we really don't want to be living in a world where the the the smartest model the best models are only behind you know like closed doors only accessible to like a few companies that we you know have the power to decide who can use them or not. I think it's kind of a scary feature we don't want to live in. We really want this model to be accessible to to anyone but you want intelligence to be used and accessible by anyone that can use it. So yeah so that's why we are pushing this mission source model. Yeah. not so yeah vart so it's open source not the first model so not the last on the yeah lin trial I think is also one step into this direction so it's kind of yeah a bit different than what we are usually releasing but we have a small team internally working on formal proving formal math it's I think a subject we care about in general and we were working on reasoning I think we started too early before doing reasoning without LMD is very hard especially when you work with formal systems because uh the amount of data you have is negligible a grace small community of people writing like formal proofs. But the reason why we like it is because I think there is if you look at what people are doing with reasoning is there I mean the problems that you can use are usually going to be problems where you can verify the output. So for instance all this aime problem where the solution is a number between one and like a thousand. So you can verify compare this with a reference uh or it's an expression you can actually compare the output expression your model with a reference. But there are many most of the math problem and most of the reason problem there is no like way to easily verify the solution. If the question is show that f is continuous cannot compare in the reference right if it's like prove that this is true or prove this property there is no way to you cannot like simply verify the correctness of your proof. So it's hard to apply the there is no verifiable reward here. So what you could provide is of course like a judge and judge that will look at your proof but it's very hard and it's very you could do some reward hacking happening there. So it's difficult uh you could provide like a reference proof but then there are also many ways to prove the same thing. So if the model says give negative reward because it's a different proof but maybe it was still digit proof just different so it's not going to work well. So um what's nice with lin and with formal probing is that you don't have to worry about this whatsoever. We just >> they're all function as long as it compiles in lean is functionally the same. Right. >> Exactly. It's like a program if it compiles it's correct. >> It's very easy and you can apply this on any kind of was way too small. So like no human will actually go and do it. >> Yeah, that's kind of exactly it's a the only people can do it. It's like a very small community of people doing a PhD on that. So it's super small and it's kind of sad because it's actually very useful on not just Matt but also in software verification. So for instance software verification today it's a tiny market. uh very very few industries work on this and we need that it's usually going to be like companies like building airplanes robotics like things where they absolutely want to be sure I mean like life depend on this but it's very it's very rare that people formally verify the correctness of their software but I think one reason for this is simply that it's just super hard to do >> are you think of TA plus it's the language that some people do for software verification >> no games with that people use in France but yeah But yeah, it's um the reason I think why people don't use it more and why this industry is not as big as P is because it's very hard. But now with coding agents that are there, it's going to be very different that we're going to see much more of this. So I think yes, industries there is going to be much larger in the future that we mod. So so yeah, here also anticipating this a little bit. We wanted to work on that because it's a proving like a ming. So essentially the same tools. Yeah. >> Yeah. Yeah. One of my theories is that um you know because the proofs take so long, it's actually just a proxy for long horizon reasoning and um coherence and planning. Maybe a lot of people will say like okay it's for people who like math it's it's for lean okay it's like a niche math language who cares but actually and you use this as part of your data mixture for post training and reasoning actually it might spike everywhere else and and like I think that's underexplored or like no one's like really put out a definitive paper on how this generalizes >> yeah absolutely and I think even uh that's kind of what we are seeing already for instance if you do some prisoning on math as then the Americans would do well I just got that in the in the stage. So there is some transfer some sort of emergence that happens and I think some it's also interesting. It's not just I think the topic in general but it's there is a lot of connection with this on including agents because sometimes the model can see like a theoreance that it has to prove it's very complex then it can take the initiative to say I'm going to prove this three lema. I'm going to like suggest three limmer and I'm going to in parallel prove each lema. So three of them in parallel with subgents but I'm also going to prove them in theory as the three leas. So you can do this subgent are also pretty interesting. You can even if you fail to pull one of the lema you can actually maybe you succeed to pull the one lema too. So you get some reward here. So it's a bit less spar than if you just get a z one for the entire thing. So it's pretty interesting. I think we can actually stop here. Yeah, it's also an interesting case just for specialized models in general, right? Like the cost thing you show is pretty interesting like um similar score-wise. You're, you know, 30, 70, 150, 300 bucks. >> I think cost is a bit unfair, right? Because this one is at like inference cost. This one is their on top with their margins on top of it. But, you know, we don't know anything else. So, figure it out, >> right? >> Um I I did want to actually push on that more. um not on cost but you you mention about okay it's a great way to have verifiable long context reasoning uh what are other frontiers that you know I'm sure you guys are working on internally there's a lot of push of people pushing back on pre-training um scaling RL pushing compute towards having more than half of your training budget all on RL uh where are you guys seeing the frontier of research in that >> you mean >> just in foundation model training in the next you One thing that you guys do actually is you you do fundamental research from the ground up, right? So you probably have a really good look at where you can forecast this out. >> Yeah, I think for us uh we are still working a lot on the pre-training side. We are very very far from this sort of situation on the pre-training. I think ML4 preing will be like big step compared to everything we have done before. So we are pretty excited about this and I think on the side I think now we have more and more to think about this algorithm that will actually support this very long trajectories. I think uh when it was for instance GRPO for doesn't really work with this tiny bit of policy which was okay initially because you are solving math problem that can be solved like a few thousand tokens so the model can actually generate them pretty quickly so when you do your update the model is never too far off it's never too far off but now when you are moving towards this kind of problems where sometime takes hours like six hours to get the reward then your model is p so you have to be new infrastructure that supports this but also new algorithm so now everything we're doing internally we're way to build some infra that we actually anticipate is what we have in like a 6 month which is this extreme you know scenarios on the P game. I think when we started MSL part of me and maybe also team we wanted to you know recreate this very nice environments where people are there they can do research they like with like a lot of resources so so it was nice I think things changed a lot when I think when when church came out I think after that everything was very this was the same again but but yeah but it was nice and I think we also want to part of the script we had before >> coming to the end we're just obviously I think you guys are doing incredible work. Uh you've laid out a really impressive uh vision for open source and for voice. Um what are you hiring for? What's the uh next like you know what are you looking for that you're trying to join the company? >> Yeah so we are having a lot of people in our sense team we are hiring uh in all our offices. So we have like our HQ is in France in Paris we have like a a small team in London like a team in PaloA as well. Recently we opened some offices uh in uh in Verso in Poland so one in Zurich um we serve some presence in New York as well and soon one in San Francisco. So we are a bit also like hiring people remotely so we're growing the team trying to hire like very strong people. Uh I think we want to stay the team is not still a fairly small team but I think we want to keep it that way because we we find it quite efficient like a small team very agile. So yeah, >> okay, let's let's focus on science and the forward deploy. Um we actually are strong believers in science. We started the our new science pod that focuses specifically on the afro science. Uh what areas do you think are the most promising? >> What we are pretty excited about right now and something we have already started doing probably be able to share more about this in a couple of months is that we are exploring AI for science and there are a lot of areas where we think that you could get some extremely promising results. uh if you are to apply AI in these domains uh there are a lot of long inputs you just have to find these domains where actually AI has not been yet applied and it's usually hard to do because the people working in those domains don't necessarily know the capability of this models they don't know how well I would just have to pair them with yeah exactly matching which is actually hard to do but this matching we are kind of doing it naturally with our customers so we have uh some company work very closely with so for instance is not one of our partners so we are doing some research with them And there they have like tons of extremely interesting problems problems in physics in science material science that they essentially the only ones to to to work on because they are doing something no one else is doing and yeah so there are many domains where AI can actually revolutionize things just you have to to think about it and be familiar with what can do to apply it so so yeah it's something we are more doing with our partners with our customers so AI for science is one big thing >> yeah uh okay and then forward deployed um what makes a good for deployed engineer what do they need where do people fail >> I think it's um um usually you need people that are very familiar with the tech not necessary uh with lot of research expertise but that are actually pretty good at using this model that can actually like you know that know how to do finetuning that know how to like start some aerial pipeline uh and it's u it's not easy it's something that most majority of companies would not be able to do this on their own so here I think we need people that that are you know that like to solve problems that I set about actually some complex very concrete problem. It's applied science basically and uh yeah so I think it's not too different I think from the skills you need in your research because essentially you are trying to find solutions to problems that in customers have not yet solved sometime it's easy sometimes you're here to do the work you have to like create synthetic data like find some edge case so it can be yeah depend on the problem but uh but yeah you have to I think you need also a bit of patience on the be creative uh I think very similar skill as >> the diversity of the work they do it always surprises me. It's kind of it's it goes all the way from the kind of stuff they encounter in industries. It's just very interesting I think. Uh >> any any fun like success anecdotes? I mean yeah it can be like really training this small model on edge that just do one specific thing like training some very large model good at some specific languages as well making models really good at some to use like for instance computer ID design these kind of things is that impairing with vision as well yeah >> defect detection uh for for like uh chips or like in in factories identifying things like it the diversity could be anything where you can deploy these foundation models the the work uh to make it work in that specific setting. Basically, whatever it takes to make it like add value uh in that specific workflow. >> Yeah. And it goes kind of across the stack, right? Like even just pulling up the website like you >> is so compute is so broad. >> Uh we didn't even touch on mistrol vibe. You have a live coding CLI tool. One thing you guys were actually like I think the first two was agents. >> Mral agents. You had the agent builder. you can serve it via API and all that like and you know I'm I'm guessing forward deploy people will help build that out and stuff. It's also why we are so we are doing many things but I think that's also part of the value proposition that sometime customers are always very extremely careful about their data and they don't want to they don't like you know trusting so many partners trusting one partner for code giving your data to another third party for like audio and another one they they don't like this here what they really like with our approach that we can help them on anything >> so they don't have to like send the data to so many clouds so yeah >> I think that there can be many orders are magnitude more FTEEs than research scientists and like they don't need your full experience but they're still super valuable to to customers in practice these two teams are still quite intertwined I mean very often so first of all they're using the same tools the same data pipeline and everything uh and it's um it's very helpful for the sense team to get the feedback and the solution team because they can say look these customers are trying to do this this is not working can we be sure in the next version >> yeah this is basically a real world event it's a real But it's not something for instance if you're just working in a lab that just ships model but you don't do this work of preparing the model for customers you have no idea whether your model is good at this edge case like for instance in even in this right there is a very big gap between the public benchmarks that are very like academic on the the real cases >> the real cases are just very diverse and uh in the specific context of a customer you can fine-tune and make it like uh first like evaluate create Okay, solid eval benchmark and then measure in the context of their the kind of audio like for instance one use case is literally just there word for kids and they have to just say it out. It's a very specific thing. You're just saying one word and then you have to like you you'll grade the kid uh whether they did it right or not. It's like RL for but uh so there are very diverse use cases and the idea is that the the applied scientist engineers will go and make it better and then uh from the learnings we incorporate it into the uh base model itself. So it's uh it it's just better out of the box. >> Yeah, it it's a good full circle system, you know, like the the foundation model evals are all just proxies of what you really need. You're never going to have one that's just it doesn't make sense for there to be, you know, a oneword transcription like that. It's it's not something you want to fit on. >> Perfect. Well, everyone should go check out everything that Michelle has to offer and try the TTS model, which we'll link in the show notes. But thank you so much for coming. Thank you. Such a pleasure having us.

---

