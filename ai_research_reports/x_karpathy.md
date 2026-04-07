# AI Builder: Andrej Karpathy (@karpathy)

> 共收集 18 条动态内容。

---

### [2026/4/5 14:58:44](https://x.com/karpathy/status/2040806346556428585)

Surprised with how good the comments on github gists are. A lot more helpful, insightful, constructive, a lot less AI... Is it the user community? The markdown format? The (lack of) incentives?

Suddenly feeling like I should gist more.
@github consider competing with X (?)

📈 **互动**: ❤️ 479 | 🔁 15 | 💬 69

---

### [2026/4/4 23:28:36](https://x.com/karpathy/status/2040572272944324650)

Farzapedia, personal wikipedia of Farza, good example following my Wiki LLM tweet.

I really like this approach to personalization in a number of ways, compared to "status quo" of an AI that allegedly gets better the more you use it or something:

1. Explicit. The memory artifact is explicit and navigable (the wiki), you can see exactly what the AI does and does not know and you can inspect and manage this artifact, even if you don't do the direct text writing (the LLM does). The knowledge of you is not implicit and unknown, it's explicit and viewable.
2. Yours. Your data is yours, on your local computer, it's not in some particular AI provider's system without the ability to extract it. You're in control of your information. 
3. File over app. The memory here is a simple collection of files in universal formats (images, markdown). This means the data is interoperable: you can use a very large collection of tools/CLIs or whatever you want over this information because it's just files. The agents can apply the entire Unix toolkit over them. They can natively read and understand them. Any kind of data can be imported into files as input, and any kind of interface can be used to view them as the output. E.g. you can use Obsidian to view them or vibe code something of your own. Search "File over app" for an article on this philosophy.
4. BYOAI. You can use whatever AI you want to "plug into" this information - Claude, Codex, OpenCode, whatever. You can even think about taking an open source AI and finetuning it on your wiki - in principle, this AI could "know" you in its weights, not just attend over your data.

So this approach to personalization puts *you* in full control. The data is yours. In Universal formats. Explicit and inspectable. Use whatever AI you want over it, keep the AI companies on their toes! :)

Certainly this is not the simplest way to get an AI to know you - it does require you to manage file directories and so on, but agents also make it quite simple and they can help you a lot. I imagine a number of products might come out to make this all easier, but imo "agent proficiency" is a CORE SKILL of the 21st century. These are extremely powerful tools - they speak English and they do all the computer stuff for you. Try this opportunity to play with one.

📈 **互动**: ❤️ 4186 | 🔁 392 | 💬 189

---

### [2026/4/4 21:57:57](https://x.com/karpathy/status/2040549459193704852)

Something I've been thinking about - I am bullish on people (empowered by AI) increasing the visibility, legibility and accountability of their governments.

Historically, it is the governments that act to make society legible (e.g. "Seeing like a state" is the common reference), but with AI, society can dramatically improve its ability to do this in reverse. Government accountability has not been constrained by access (the various branches of government publish an enormous amount of data), it has been constrained by intelligence - the ability to process a lot of raw data, combine it with domain expertise and derive insights. As an example, the 4000-page omnibus bill is "transparent" in principle and in a legal sense, but certainly not in a practical sense for most people. There's a lot more like it: laws, spending bills, federal budgets, freedom of information act responses, lobbying disclosures... Only a few highly trained professionals (investigative journalists) could historically process this information. This bottleneck might dissolve - not only are the professionals further empowered, but a lot more people can participate.

Some examples to be precise: Detailed accounting of spending and budgets, diff tracking of legislation, individual voting trends w.r.t. stated positions or speeches, lobbying and influence (e.g. graph of lobbyist -> firm -> client -> legislator -> committee -> vote -> regulation), procurement and contracting, regulatory capture warning lights, judicial and legal patterns, campaign finance... Local governments might be even more interesting because the governed population is smaller so there is less national coverage: city council meetings, decisions around zoning, policing, schools, utilities...

Certainly, the same tools can easily cut the other way and it's worth being very mindful of that, but I lean optimistic overall that added participation, transparency and accountability will improve democratic, free societies.

(the quoted tweet is half-ish related, but inspired me to post some recent thoughts)

📈 **互动**: ❤️ 3029 | 🔁 364 | 💬 249

---

### [2026/4/4 16:45:23](https://x.com/karpathy/status/2040470801506541998)

Wow, this tweet went very viral!

I wanted share a possibly slightly improved version of the tweet in an "idea file". The idea of the idea file is that in this era of LLM agents, there is less of a point/need of sharing the specific code/app, you just share the idea, then the other person's agent customizes & builds it for your specific needs.

So here's the idea in a gist format: https://t.co/NlAfEJjtJV

You can give this to your agent and it can build you your own LLM wiki and guide you on how to use it etc. It's intentionally kept a little bit abstract/vague because there are so many directions to take this in. And ofc, people can adjust the idea or contribute their own in the Discussion which is cool.

📈 **互动**: ❤️ 17282 | 🔁 1659 | 💬 621

---

### [2026/4/2 20:54:29](https://x.com/karpathy/status/2039808711452246261)

Oh and in the natural extrapolation, you could imagine that every question to a frontier grade LLM spawns a team of LLMs to automate the whole thing: iteratively construct an entire ephemeral wiki, lint it, loop a few times, then write a full report. Way beyond a `.decode()`.

📈 **互动**: ❤️ 935 | 🔁 35 | 💬 48

---

### [2026/4/2 20:42:21](https://x.com/karpathy/status/2039805659525644595)

LLM Knowledge Bases

Something I'm finding very useful recently: using LLMs to build personal knowledge bases for various topics of research interest. In this way, a large fraction of my recent token throughput is going less into manipulating code, and more into manipulating knowledge (stored as markdown and images). The latest LLMs are quite good at it. So:

Data ingest:
I index source documents (articles, papers, repos, datasets, images, etc.) into a raw/ directory, then I use an LLM to incrementally "compile" a wiki, which is just a collection of .md files in a directory structure. The wiki includes summaries of all the data in raw/, backlinks, and then it categorizes data into concepts, writes articles for them, and links them all. To convert web articles into .md files I like to use the Obsidian Web Clipper extension, and then I also use a hotkey to download all the related images to local so that my LLM can easily reference them.

IDE:
I use Obsidian as the IDE "frontend" where I can view the raw data, the the compiled wiki, and the derived visualizations. Important to note that the LLM writes and maintains all of the data of the wiki, I rarely touch it directly. I've played with a few Obsidian plugins to render and view data in other ways (e.g. Marp for slides).

Q&A:
Where things get interesting is that once your wiki is big enough (e.g. mine on some recent research is ~100 articles and ~400K words), you can ask your LLM agent all kinds of complex questions against the wiki, and it will go off, research the answers, etc. I thought I had to reach for fancy RAG, but the LLM has been pretty good about auto-maintaining index files and brief summaries of all the documents and it reads all the important related data fairly easily at this ~small scale.

Output:
Instead of getting answers in text/terminal, I like to have it render markdown files for me, or slide shows (Marp format), or matplotlib images, all of which I then view again in Obsidian. You can imagine many other visual output formats depending on the query. Often, I end up "filing" the outputs back into the wiki to enhance it for further queries. So my own explorations and queries always "add up" in the knowledge base.

Linting:
I've run some LLM "health checks" over the wiki to e.g. find inconsistent data, impute missing data (with web searchers), find interesting connections for new article candidates, etc., to incrementally clean up the wiki and enhance its overall data integrity. The LLMs are quite good at suggesting further questions to ask and look into.

Extra tools:
I find myself developing additional tools to process the data, e.g. I vibe coded a small and naive search engine over the wiki, which I both use directly (in a web ui), but more often I want to hand it off to an LLM via CLI as a tool for larger queries. 

Further explorations:
As the repo grows, the natural desire is to also think about synthetic data generation + finetuning to have your LLM "know" the data in its weights instead of just context windows.

TLDR: raw data from a given number of sources is collected, then compiled by an LLM into a .md wiki, then operated on by various CLIs by the LLM to do Q&A and to incrementally enhance the wiki, and all of it viewable in Obsidian. You rarely ever write or edit the wiki manually, it's the domain of the LLM. I think there is room here for an incredible new product instead of a hacky collection of scripts.

📈 **互动**: ❤️ 18265 | 🔁 1950 | 💬 1027

---

### [2026/3/31 05:23:32](https://x.com/karpathy/status/2038849654423798197)

New supply chain attack this time for npm axios, the most popular HTTP client library with 300M weekly downloads.

Scanning my system I found a use imported from googleworkspace/cli from a few days ago when I was experimenting with gmail/gcal cli. The installed version (luckily) resolved to an unaffected 1.13.5, but the project dependency is not pinned, meaning that if I did this earlier today the code would have resolved to latest and I'd be pwned.

It's possible to personally defend against these to some extent with local settings e.g. release-age constraints, or containers or etc, but I think ultimately the defaults of package management projects (pip, npm etc) have to change so that a single infection (usually luckily fairly temporary in nature due to security scanning) does not spread through users at random and at scale via unpinned dependencies.

More comprehensive article:
https://t.co/EJAZbqAPIQ

📈 **互动**: ❤️ 3447 | 🔁 381 | 💬 225

---

### [2026/3/28 15:56:10](https://x.com/karpathy/status/2037921699824607591)

- Drafted a blog post
- Used an LLM to meticulously improve the argument over 4 hours.
- Wow, feeling great, it’s so convincing!
- Fun idea let’s ask it to argue the opposite. 
- LLM demolishes the entire argument and convinces me that the opposite is in fact true.
- lol

The LLMs may elicit an opinion when asked but are extremely competent in arguing almost any direction. This is actually super useful as a tool for forming your own opinions, just make sure to ask different directions and be careful with the sycophancy.

📈 **互动**: ❤️ 23516 | 🔁 1786 | 💬 1337

---

### [2026/3/26 16:10:52](https://x.com/karpathy/status/2037200624450936940)

When I built menugen ~1 year ago, I observed that the hardest part by far was not the code itself, it was the plethora of services you have to assemble like IKEA furniture to make it real, the DevOps: services, payments, auth, database, security, domain names, etc...

I am really looking forward to a day where I could simply tell my agent: "build menugen" (referencing the post) and it would just work. The whole thing up to the deployed web page. The agent would have to browse a number of services, read the docs, get all the api keys, make everything work, debug it in dev, and deploy to prod. This is the actually hard part, not the code itself. Or rather, the better way to think about it is that the entire DevOps lifecycle has to become code, in addition to the necessary sensors/actuators of the CLIs/APIs with agent-native ergonomics. And there should be no need to visit web pages, click buttons, or anything like that for the human. 

It's easy to state, it's now just barely technically possible and expected to work maybe, but it definitely requires from-scratch re-design, work and thought. Very exciting direction!

📈 **互动**: ❤️ 3859 | 🔁 322 | 💬 373

---

### [2026/3/25 16:22:08](https://x.com/karpathy/status/2036841069636370467)

(I cycle through all LLMs over time and all of them seem to do this so it's not any particular implementation but something deeper, e.g. maybe during training, a lot of the information in the context window is relevant to the task, so the LLMs develop a bias to use what is given, then at test time overfit to anything that happens to RAG its way there via a memory feature (?))

📈 **互动**: ❤️ 1241 | 🔁 30 | 💬 103

---

### [2026/3/25 16:05:14](https://x.com/karpathy/status/2036836816654147718)

One common issue with personalization in all LLMs is how distracting memory seems to be for the models. A single question from 2 months ago about some topic can keep coming up as some kind of a deep interest of mine with undue mentions in perpetuity. Some kind of trying too hard.

📈 **互动**: ❤️ 16377 | 🔁 812 | 💬 1423

---

### [2026/3/24 16:56:24](https://x.com/karpathy/status/2036487306585268612)

Software horror: litellm PyPI supply chain attack. 

Simple `pip install litellm` was enough to exfiltrate SSH keys, AWS/GCP/Azure creds, Kubernetes configs, git credentials, env vars (all your API keys), shell history, crypto wallets, SSL private keys, CI/CD secrets, database passwords.

LiteLLM itself has 97 million downloads per month which is already terrible, but much worse, the contagion spreads to any project that depends on litellm. For example, if you did `pip install dspy` (which depended on litellm>=1.64.0), you'd also be pwnd. Same for any other large project that depended on litellm.

Afaict the poisoned version was up for only less than ~1 hour. The attack had a bug which led to its discovery - Callum McMahon was using an MCP plugin inside Cursor that pulled in litellm as a transitive dependency. When litellm 1.82.8 installed, their machine ran out of RAM and crashed. So if the attacker didn't vibe code this attack it could have been undetected for many days or weeks.

Supply chain attacks like this are basically the scariest thing imaginable in modern software. Every time you install any depedency you could be pulling in a poisoned package anywhere deep inside its entire depedency tree. This is especially risky with large projects that might have lots and lots of dependencies. The credentials that do get stolen in each attack can then be used to take over more accounts and compromise more packages.

Classical software engineering would have you believe that dependencies are good (we're building pyramids from bricks), but imo this has to be re-evaluated, and it's why I've been so growingly averse to them, preferring to use LLMs to "yoink" functionality when it's simple enough and possible.

📈 **互动**: ❤️ 21171 | 🔁 4006 | 💬 1004

---

### [2026/3/21 00:55:37](https://x.com/karpathy/status/2035158351357911527)

Thank you Sarah, my pleasure to come on the pod! And happy to do some more Q&amp;A in the replies. https://t.co/uIeUtFxDkm

📈 **互动**: ❤️ 2028 | 🔁 164 | 💬 139

---

### [2026/3/20 06:01:55](https://x.com/karpathy/status/2034873049753997619)

Andy Weir showing some of the spreadsheets underlying the calculations in the book
https://t.co/3CyprVTzXX
i mean, it's not quality scifi if it doesn't come with a supplementary whitepaper https://t.co/MsDnEoNBA7

📈 **互动**: ❤️ 132 | 🔁 10 | 💬 14

---

### [2026/3/20 05:32:41](https://x.com/karpathy/status/2034865693544604001)

Had to go see Project Hail Mary right away (it's based on the book of Andy Weir, of also The Martian fame). Both very pleased and relieved to say that 1) the movie sticks very close to the book in both content and tone and 2) is really well executed.

The book is one of my favorites when it comes to alien portrayals because a lot of thought was clearly given to the scientific details of an alternate biochemistry, evolutionary history, sensorium, psychology, language, tech tree, etc. It's different enough that it is highly creative and plausible, but also similar enough that you get a compelling story and one of the best bromances in fiction. Not to mention the other (single-cellular) aliens. I can count fictional portrayals of aliens of this depth on one hand. A lot of these aspects are briefly featured - if you read the book you'll spot them but if you haven't, the movie can't spend the time to do them justice.

I'll say that the movie inches a little too much into the superhero movie tropes with the pacing, the quips, the Bathos and such for my taste, and we get a little bit less the grand of Interstellar and a little bit less of the science of The Martian, but I think it's ok considering the tone of the original content. And it does really well where it counts - on Rocky and the bromance. Thank you to the film crew for the gem!

📈 **互动**: ❤️ 1835 | 🔁 76 | 💬 113

---

### [2026/3/18 18:01:37](https://x.com/karpathy/status/2034329390377762848)

Ugh X breaks time links, it’s at 26:17

📈 **互动**: ❤️ 231 | 🔁 3 | 💬 15

---

### [2026/3/18 17:47:57](https://x.com/karpathy/status/2034325950310355072)

(link to blast from the past)
https://t.co/gAP4YPV5uR

📈 **互动**: ❤️ 473 | 🔁 27 | 💬 5

---

### [2026/3/18 17:45:51](https://x.com/karpathy/status/2034325423358955981)

The signature is alluding to NVIDIA GTC 2015, where Jensen excitedly told an audience of, at the time, mostly gamers and scientific computing professionals that Deep Learning is The Next Big Thing, citing among other examples my PhD thesis (one of the first image captioning systems that coupled image recognition ConvNet to an autoregressive RNN language model, trained end to end). This was back when most people were still unaware and somewhat skeptical but of course - Jensen was 1000% correct, highly prescient and locked in very early.

📈 **互动**: ❤️ 1025 | 🔁 45 | 💬 22

---

