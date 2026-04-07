# AI Builder: Aaron Levie (@levie)

> 共收集 28 条动态内容。

---

### [2026/4/7 02:49:28](https://x.com/levie/status/2041347596342460439)

When you have agents going out and doing work for you, the work just moved up a layer of abstraction.

Now the work is figuring out what to tell the agent to do, ensuring you give it proper instructions, getting needed context to the agent to do its tasks, intervening when it goes off task, reviewing the final work, and incorporating the output into something else. Any one of these components being off and poof you will have useless work product.

Even as agents can complete longer horizon tasks, these steps don’t go away. In fact the longer the task the more the planning and review stages will necessarily take up. You are now the editor. A manager. A producer. The taste matters, understanding the craft of what you’re doing matters, and the skills ultimately matter.

AI Agents haven’t changed any of this. We’re going to automate away the annoying parts of work and keep the more enjoyable parts. But the work is still there, just different.

📈 **互动**: ❤️ 112 | 🔁 16 | 💬 20

---

### [2026/4/6 01:40:52](https://x.com/levie/status/2040967947275948357)

There are far more categories where AI agents making things more efficient will induce demand for that skill than spaces where agents eliminate the work. This is why the AI jobs predictions will not play out as advertised. 

AI making it easy to produce more code will mean we start to apply code to far more parts of our businesses. We will build automation and software for things that wouldn’t have made sense before. Marketing automation, client onboarding, modernizing old systems, doing far more research on existing data, and more. More engineers.

Far more software will mean vastly more security risks. This will mean far more people thinking through system security, compliance, and governance. This used to be primarily manual and only large companies could afford this work. AI will make it so more companies care about this (and maybe can do something about it), causing more security roles.

AI will also lower the cost of a bunch of previously relatively niche or harder to access categories of work. Companies will now be doing 10X more with video and graphics, and will need people to manage that work. More media. We’re going to have a near unlimited set of legal challenges in a world of AI as AI helps write even more bespoke and complicated legal docs. More lawyers. 

Then there’s the impact of AI efficiency on non-office worker jobs. Talked to a customer that said they’re going to make scheduling medical appointments and getting referrals so efficient the next problem will be there will be no booking time slots available. More healthcare. Many industries will have this same dynamic play out.

The examples are endless once you start to think through second order effects of agents making work more efficient.

📈 **互动**: ❤️ 169 | 🔁 29 | 💬 30

---

### [2026/4/5 04:40:38](https://x.com/levie/status/2040650799550722243)

One of the core things we’re going to have to contend with in AI is that even the most advanced models in the word can’t have all the relevant knowledge needed to be useful, because everyone has different use-cases and ways they’ve designed their workflows. 

Perhaps most importantly, as you get into the enterprise, everyone has entirely different access levels to corporate knowledge and information. Continual learning at the model layer, even at a single enterprise level, is near impossible because every user knows and has access to something different than another user.  

This isn’t like coding where by and large most developers can access all the relevant stuff to their job. On a single banking team, bankers have entirely different sets of documents they’re ever allowed to see. Sanitizing this is hard and having the model keep secrets is impossible.

This is why the context layer is going to always be the core part of the AI stack for applied use cases to turn general models turn into useful agents. Can’t fight the physics on this one.

📈 **互动**: ❤️ 99 | 🔁 12 | 💬 21

---

### [2026/4/4 20:35:52](https://x.com/levie/status/2040528801386361128)

As AI models get better at handling tools, and as context windows get bigger without as much rot, you can start to design agents more similar to how people work instead of having to mitigate the model limitations with weird hacks.

For instance, even a year ago, if you were to build an agent to process large amounts of documents, the state of the art was to do embeddings on the data, then do a similarity search and pull out the chunks of content that matched (as well as surrounding chunks). This was necessary because context windows could only accurately handle a small amount of information at a time.

This worked surprisingly well given the constraints (at least assuming you were working with authoritative data only), but had a lot of tricky limitations because it’s not how humans work.

For instance, what do you do if the chunks you sent to the model were the most relevant semantically, but actually rendered irrelevant by some other part of the document. For instance, if at the top of the document it says “do not use this” but on page 3 there is information that’s relevant, that data will be sent to the model as the top hit. Similarly, chunked data is difficult when you need various parts of a document or many documents to be understood for answering a problem. 

Today, increasingly, you can begin to have agents effectively use tools and work with information far more similar to how people work. This unlocks a qualitatively different set of use-cases and capability level that agents can now handle. 

As we were designing the Box Agent, these improvements allowed us to rethink our entire architecture for AI. The agent can now search data similar to how a user searches, but with the benefit of being able to expand their queries, do semantic search, and process results nearly instantly. Then the agent can either read many documents at a time or at least much larger amounts of context. Again, much more similar to people, but now at hyperspeed. 

Importantly, beyond tool calling and context windows, the reasoning of models has also gone up enormously. This means the agent can also know when it needs to search for information again when it didn’t find something it was looking for or if something feels off. 

As model progress continues on the dimensions of context accuracy, tool calling, advanced reasoning, and coding, agents are going to become insanely powerful.

📈 **互动**: ❤️ 98 | 🔁 12 | 💬 15

---

### [2026/4/4 03:05:27](https://x.com/levie/status/2040264454982480138)

“There is a limit on human cognition. Even if you're not reviewing everything they're doing, how much you can hold in your head at one time.”

There’s a reason that at a certain scale, teams of people have a manager, and then there are managers of many teams, and so on. Companies don’t inherently love being inefficient. It’s because eventually you run into the limits of how much context you can hold on to produce useful work, so you have to delegate parts to someone else who can track their sub-context.

In a world where agents don’t need to be prompted or have their work reviewed, or where the agent can know perfectly when to escalate when something is going wrong, then agents can completely break free of these context limits of humans. 

But for now, agents are generally only as effective as the context they’re provided, the tools they have access to, the human’s ability to keep them on track or review their work, and incorporate that work into a broader system. 

For now, that will continue to take real (mental) work from the people managing agents. This is also generally why the jobs arguments from those who think people go away will be wrong.

📈 **互动**: ❤️ 127 | 🔁 16 | 💬 19

---

### [2026/4/3 05:03:35](https://x.com/levie/status/2039931799414194621)

One of the biggest lessons thus far in building AI agents is you have to be brutally unsentimental in your architecture. 

The models get better and better at handling things you previously built scaffolding for, you need to ruthlessly jettison your prior tech to get those new performance gains. 

The rough loop of building AI agents looks something like:

1. Build a bunch of systems around the LLM to ensure that the agent can solve specific tasks very well

2. The model capabilities dramatically improve, rendering many of those systems redundant or even harmful

3. Remove prior scaffolding to get the new performance gains from the agent

4. New capabilities emerge in the models that let you solve a new set of much harder problems

5. Go back to step 1 

For instance, in our new Box Agent, from the moment we designed the original architecture to the ultimate release, we had to evolve multiple components of agent harness simply because some parts were creating unnecessary constraints for the agents as models improved. 

The models continued to get insanely good at more complex reasoning, improvements in using search and other tools, writing code on the fly for new capabilities, improving context window performance for accuracy, and more. 

Many of the mitigations we put in place for the Box Agent (like to appropriately find data that users were looking for, or ways of chunking text to deal with context window limitations), eventually meat we got lower quality results or meant we were overfitting for specific use-cases, as soon as the models got better.

The main lesson is always make sure you’re taking advantage of the frontier capabilities and don’t become nostalgic around the tech you’ve already built.

📈 **互动**: ❤️ 139 | 🔁 16 | 💬 28

---

### [2026/4/2 15:11:02](https://x.com/levie/status/2039722279014432932)

Introducing the new Box Agent. The Box Agent works across your entire Box file system, maintaining all your security and access controls, and is hyper tuned for working with enterprise content.

This means you can now ask questions from all your enterprise content, search for files that were impossible to find before, deploy an agent on specific tasks on subsets of documents, analyze complex data sets, and generate or edit documents and spreadsheets via the agent.

You can have the Box Agent search across your Box account to prepare for a sales meeting, analyze customer sentiment reports, process a large set of contracts for legal risk, provide insights into product development, leverage existing knowledge to answer RFPs, and thousands of other use-cases.

90% of enterprise data is unstructured data. This means most enterprise knowledge is sitting in inside of research reports, marketing assets, presentations, roadmap files, contracts, HR documents, and more. This is the critical context that agents need to be able to answer questions about a business, automate workflows, or serve up to other agents.

We’ve been grinding on this for a quite a bit, and due to recent AI model advancements we’re now ready to release it to customers. Previous model generations had a difficult time knowing when to give up or keep going on a search, when to browse for files vs. use queries, how to rank files appropriately to know which version of content to use, how to handle large amounts of context to comb through, and more.

Due to recent breakthroughs from models like GPT-5.4, Opus 4.6, and Gemini 3, we’ve seen major gains in tool calling, code execution, advanced reasoning, and more. Combined with an agent harness tuned to Box context, now it’s finally possible to have an agent that can work across your file system on long running tasks and actually deliver high quality results.

Best of all, because the Box Agent works with any leading AI model, you’ll quickly get the gains coming out of the major labs as major new models are released. Further, openness at Box is key, so you’ll be able to call up the Box Agent from Box’s APIs and MCP server, so you can interact with Box intelligently from any other AI system. We know work happens everywhere, and we want to ensure you can access to the content you need from those places.

The new Box Agent is available starting today, rolling out now for Enterprise Plus and Enterprise Advanced customers.

📈 **互动**: ❤️ 82 | 🔁 7 | 💬 23

---

### [2026/4/1 18:47:56](https://x.com/levie/status/2039414479084278239)

My team is going to kill me for sharing this, but it's April 1st so why not. Coming very soon. https://t.co/zKY9KacBIb https://t.co/H6flCdU61B

📈 **互动**: ❤️ 197 | 🔁 8 | 💬 19

---

### [2026/4/1 05:41:20](https://x.com/levie/status/2039216522028257549)

The ultimate rate limiter on productivity gains from agents will be on critical stuff like security, compliance, governance, the ability to review the work of the agent, ensure that it’s compatible with regulations, and so on. 

We’ve been living in a little bit of la-la land around how much software enterprises are going to ultimately want to vibe code themselves. The last 48 hours represents a good example of why you won’t take on every risk of every piece of technology in your enterprise. 

There’s no free lunch with AI productivity. Companies will have the build up the systems, processes, and controls for ensuring that agents can’t run around and do anything they want on any data at any time.

📈 **互动**: ❤️ 96 | 🔁 19 | 💬 25

---

### [2026/3/31 19:39:33](https://x.com/levie/status/2039065077870157987)

Agents that can code will equally be able to use tools exceedingly well. This allows you to start to automate tasks across a workflow that requires both a component of non-deterministic intelligence but also deterministic system interaction. 

An example would be using something like Codex to automate a workflow connecting data from Box to multiple other systems. The coding agent can interact with systems like an engineer via CLI/MCP/APIs, or write code on the fly when new problems are encountered in a workflow. 

This will also be one of the reasons you’ll see more technical and engineering roles start to help automate work in non-engineering domains. Marketing, finance, supply chain, pharma research, and other areas where there’s a large amount of data and systems to talk to all have these properties.

📈 **互动**: ❤️ 97 | 🔁 12 | 💬 22

---

### [2026/3/31 03:12:23](https://x.com/levie/status/2038816649927913834)

There is a huge opportunity for resourceful and entrepreneurial talent within organizations to go in and reimagine workflows for a world of agents. 

The way you automate work with agents requires real work. It means setting up unstructured data in a way agents can easily access, learning the workflow and processes and creating skills or plans for agents to leverage, connecting disparate systems together, and likely changing the process itself to support getting the agents the need to do much of the work. Then you have to design where humans will play a role to oversee the workflows, how you validate the work, and so on.

Most of the gains you see from coding don’t take this level of effort because the agent knows more, it gets context more easily, and the users are technically. But for the rest of knowledge work there’s no way around this; there’s really no way to shortcut any of this work. It has to be done by a person or people on the team.

You will see a huge growth of roles within enterprises, and people that specialize in this will be hugely valuable in the economy. Great way for early career folks to make a huge dent quickly as well.

📈 **互动**: ❤️ 245 | 🔁 31 | 💬 38

---

### [2026/3/30 04:09:13](https://x.com/levie/status/2038468564500537416)

It’s wild to think about what types of infrastructure and services must change in a world where agents can process information a hundred or a thousand times faster than humans.

Even the tools that were built for machine speed before, generally were still in service of end-users making a request somewhere in the system. Agents running 24/7 and in parallel modify these requirements meaningfully. Here are just a few examples:

* Sandboxes. Agents need sandboxes to operate in that have to be insanely low latency because they can boot up these environments for coding at any moment.

* Search (both publicly and within an enterprise). Agents can parallelize searches hundreds or thousands of times so they need to be able to work with fast indexes of information. 

* Payments. Agents can now pay in micro transactions, and aren’t bothered by the friction of paying $0.01 for a resource that a human would be. 

* File systems. Agents need to be able to work with files at a scale that humans never had to worry about. You’ll have all new complexity around version control, permissions, and having agents reading/writing from data at insane speeds.

And there are tons more. We’re going from a word where software was built for people to a world where it’s built for agents. Lots of changes downstream as a result.

📈 **互动**: ❤️ 132 | 🔁 19 | 💬 28

---

### [2026/3/29 14:34:11](https://x.com/levie/status/2038263457125142742)

The thing that most people miss initially with agents is that the scope of what we will produce will go up commensurate with what the tools can now automate, which basically means we’ll working the same or even more.

Everyone thinks that we will use AI to do what we already do but cheaper and faster, which would lead to fewer people or getting more time back. In fact it will just mean we’re doing more things.

Once we figured out that we can automate a particular task, you then expand the size of work to do many more of those or other tasks in a project. The result is that you’re actually combining many other previously hard to combine tasks into a single workflow, causing even more work. 

The software project scope now multiplies because you know you can build far more. The customer insights project now balloons because you know you can reasonably aggregate far more data. The marketing campaign has even more creative production because it’s cheaper and easier. 

This is going to happen in almost every field of work.

📈 **互动**: ❤️ 330 | 🔁 36 | 💬 88

---

### [2026/3/28 16:22:25](https://x.com/levie/status/2037928306977509601)

https://t.co/5zTvYqHztE

📈 **互动**: ❤️ 377 | 🔁 58 | 💬 23

---

### [2026/3/28 04:13:03](https://x.com/levie/status/2037744753073385518)

The big gap in most enterprises being able to automate work is being able to get right context to the agents.

We experience a huge benefit in coding in tech because the problem is generally far simpler than other areas of knowledge work. The codebase contains a bunch of necessary context, access controls and permissions are generally not a major concern, the users are technical enough to supply the context, and the final output is generally quickly verifiable. 

Most knowledge work doesn’t look like this. The data is sitting in legacy silos that don’t easily connect to agents, the access controls are all out of whack (people have either too much or too little access), the information isn’t agent-ready, and more. 

This is the big context gap for any type of agentic workflows in most organizations right. The platforms that make solving this easy, and the companies that retool their workflows to enable this, will be the winners in a world of agents.

📈 **互动**: ❤️ 118 | 🔁 17 | 💬 28

---

### [2026/3/27 04:16:19](https://x.com/levie/status/2037383187245273477)

Box just launched its plugin within Codex, which means you can take any content within Box and automate workflows around it using the power of a coding agent. 

Here's a quick example of processing earnings call documents to extract structured data at scale, which you could then instantly pipe into any other system.

Coding agents are going to be the backbone of automating a large portion of knowledge work tasks, and enterprise content will often have the critical context necessary for that automation. This will be true in financial services, legal, healthcare, government, and any other industry that heavily deals with unstructured data.

Excited to work with OpenAI to deliver more and more seamless experiences around connecting content to agents.

📈 **互动**: ❤️ 57 | 🔁 6 | 💬 10

---

### [2026/3/26 16:11:29](https://x.com/levie/status/2037200776389681499)

We dramatically underestimate how much change management it is going to take to automate most knowledge worker tasks.

Between data being in legacy environments or systems or without good APIs, context missing for doing the task, teams that are less technical, and other factors, there’s still a lot of work to drive real AI transformation in an enterprise. 

This is actually great news if you’re building right now because the opportunity is to build the software bridges to make this easier, or to build new services firms to help with this change management. Opportunity is all around for those looking.

📈 **互动**: ❤️ 823 | 🔁 77 | 💬 93

---

### [2026/3/25 15:46:49](https://x.com/levie/status/2036832183131033977)

Jevons paradox is happening in real time. Companies, especially outside of tech, are realizing that they can now afford to take on software projects that they wouldn’t have been able to tackle before because now AI lets them do so. 

We’re going to start to use software for all new things in the economy because it’s incrementally cheaper to produce. Marketing teams at big companies will have engineers helping to automate workflows. Engineers in life sciences and healthcare will automate research. Small businesses will hire engineers for the first to build better digital experiences.

And as long as AI agents still require a human who understands what to prompt, how to review when an agent goes off the rails, how it guide back, how to maintain the system that was built, how to fix the ongoing bugs, and more, we will still have humans managing these agents.

This is why all the advice you get of not going into engineering is wrong. The world is going to increasingly be made up of software, and the people that understand it best will be in a strong economic position. This will happen in other roles as well where output goes up and demand increases.

📈 **互动**: ❤️ 3113 | 🔁 441 | 💬 167

---

### [2026/3/24 16:23:23](https://x.com/levie/status/2036478998667207012)

“We’ve also been moving off legacy systems with poor, slow, outdated, and inconsistent APIs.”

If you’re building software that can’t work fully headlessly in a way that agents want to use, you’re not prepared for what the future of software is going to look like. 

Agents will use software 100X more than people, and people will more and more interact with their data and workflows via agents across many different platforms.

This is the real risk but also opportunity for platforms right now. Software doesn’t go away, but it becomes the guardrails and business logic for what agents are able to operate on. But if you can’t connect to wherever the agents want to do that work, you’re DOA.

📈 **互动**: ❤️ 361 | 🔁 31 | 💬 52

---

### [2026/3/24 03:56:01](https://x.com/levie/status/2036290915950797314)

Computer use and the ability to write and run code on the fly are the ultimate primitives for agents to be able to take on more and more tasks in knowledge work. 

Most work requires hopping between multiple applications, and working with broad sets of data, in a workflow, and agents will need to be able to traverse these systems to be able to effectively automate any real work in the enterprise. 

Now we will have agents that are the equivalent of having an expert programmer (or any number of them) that can write code or use any API to automate whatever work you’re doing. Agents will have access to either a user’s computer and resources, or their own sandbox to operate in, and be able to pull together the tools necessary to perform the task at hand. This opens up the broadest set of agentic use-cases.

To be sure, there are going to be various hurdles around security, permissions and access controls, identity challenges, and more. 

For instance, should the agent always act on behalf of the user, or should they have their own identity and limited set of access rights? How do you triage security events when historically volume of activity on a system is no longer a reliable signal of a security issue? How do you ensure the agent isn’t going rogue or getting prompt injected to do something risky? All problems that need to get figured out.

Then, there’s also lots of work needed to ensure software is setup to enable to agents to operate with their tools in a headless fashion. This will be an uncomfortable reality for some incumbents, and equally a welcome one for tools that historically have operated seamlessly via APIs, and have business models to support this.

Lots of change coming in the world of work agents, and it’s going to get pretty wild.

📈 **互动**: ❤️ 105 | 🔁 8 | 💬 35

---

### [2026/3/22 16:55:39](https://x.com/levie/status/2035762343502836020)

We are so unbelievably early with agents right now. The majority of companies aren’t even using coding agents at scale, let alone for the rest of knowledge work. We’re still mostly in the chatbot era of work for most of AI right now. 

Diffusion of tech takes time, even in the most breakneck of markets, because there are major workflows that need to be reinvented, any regulated or large business has huge governance processes for deploying new tech or agents, data needs to get into well-organized environments, and there’s technical literacy that needs to be established. All things that get solved, but takes time nonetheless.

A point of comparison for technology diffusion: in 2010, a time by which every person in silicon valley knew that cloud was the future, AWS revenue was $500 million, Azure had only launched that year, and GCP was called Google App Engine. By 2025, these 3 platforms generated around $225 billion in revenue. And that’s only about 60% of the cloud market.

So from the moment the tech industry saw the future of cloud to today, the market is nearly 1,000 times bigger. And it’s still growing at an insane rate. 

The same will happen for agents. Coding agents are like the early days of cloud computing when developers got on board for initial use cases. Then came the bigger workloads. This gives you a sense for how early we actually are in this transformation.

📈 **互动**: ❤️ 524 | 🔁 61 | 💬 76

---

### [2026/3/21 01:48:44](https://x.com/levie/status/2035171720945115469)

It is quite ridiculous how agile you have to be with your AI agent stack right now. Whatever you spent 6 months perfecting 12 months ago probably is already out of date and you’re better off doing a reset than trying to resuscitate it architecturally.

And what’s interesting is that for every jump in progress that eliminates one part of the stack, generally a new capability becomes possible that you need to build new scaffolding for. 

For instance, probably lots of RAG pipelines have had to adjust because of context windows have improved dramatically and you can now just using agentic search due to improve tool use. But that same improved tool use means you probably need to be supporting code execution with sandboxes so the agent can handle more complex work.

So one capability gets bitter lessened, and a new one opens up altogether. This is the cycle we’re going to be in for years. If you don’t have the speed and agility to deal with it, probably going to be in a tough spot.

📈 **互动**: ❤️ 230 | 🔁 20 | 💬 29

---

### [2026/3/20 03:23:52](https://x.com/levie/status/2034833274506281061)

Without getting into the specific numbers, this underlying concept and trend is going to be very real. For any worker who is able to wield AI agents effectively in an organization, their compute budgets are just going to monotonically go up over time. 

This will of course start in engineering, where we already know developers can run multiple agents in parallel, or have projects going over night. But this eventually hit the rest of knowledge work as well. Lawyers that can create and review more drafts, marketed that can build more campaigns and test more ideals in parallel, sales reps that can reach out to more customers and process more leads. 

Many of these activities will essentially be token-dependent in how much work a single person can do. These aren’t chatbot workflows answering a simple question, but agents that are running and processing through incredible amounts of data at scale, and generating all new forms of information.

Companies will have to figure out how they budget for this, and it likely won’t be an IT budget item over time, but ultimately owned and allocated by the business. Maybe the CFO is ultimately the head of AI :-).

📈 **互动**: ❤️ 261 | 🔁 25 | 💬 46

---

### [2026/3/19 04:16:47](https://x.com/levie/status/2034484203522261293)

Had meetings and a dinner with 20+ enterprise AI and IT leaders today. Lots of interesting conversations around the state of AI in large enterprises, especially regulated businesses. 

Here are some of general trends:

* Agents are clearly the big thing. Enterprises moving from talking about chatbots to agents, though we’re still very early. Coding is still the dominant agentic use-case being adopted thus far, with other categories of across knowledge work starting to emerge. Lots of agentic work moving from pilots and PoCs into production, and some enterprises had lots of active live use-cases.

* Agentic use-cases span every part of a business, from back office operations to client facing experiences from sales to customer onboarding workflows. General feeling is that agentic workflows will hit every part of an organization, often with biggest focus on delivering better for customers, getting better insights and intelligence from data and documents, speeding up high ROI workflows with agents, and so on. Very limited discussion on pure cost cutting.

* Data and AI governance still remain core challenges. Getting data and content into a spot that agents can securely and easily operate on remains a huge task for more organizations. Years of data management fragmentation that wasn’t a problem now is an issue for enterprises looking to adopt agents. And governing what agents can do with data in a workflow still a major topic.

* Identity emerging as a big topic. Can the agent have access to everything you have? In a world of dozens of agents working on behalf, potentially too much data exposure and scope for the agents. How do we manage agents with partitioned level of access to your information?

* Lots of emerging questions on how we will budget for tokens across use-cases and teams. Companies don’t want to constrain use-cases, but equally need to be mindful of ultimate token budgets. This is going to become a bigger part of OpEx over time, and probably won’t make sense to be considered an IT budget anymore. Likely needs to be factored into the rest of operating expenses.

* Interoperability is key. Every enterprise is deploying multiple AI systems right now, and it’s unlikely that there’s going to be a single platform to rule them all. Customers are getting savvier on how to handle agent interoperability, and this will be one of the biggest drivers of an AI stack going forward. 

Lots more takeaways than just this, but needless to say the momentum is building but equally enterprises are acutely aware of the change management and work ahead. Lots of opportunity right now.

📈 **互动**: ❤️ 319 | 🔁 28 | 💬 46

---

### [2026/3/18 14:58:29](https://x.com/levie/status/2034283304401113453)

Agents will outnumber human users on the web by orders of magnitude. Just like people, they will need a way to pay for services they use. 

They may run into propriety health or finance data they need to pay for when doing a deep research task, or make a tool call to a bespoke web API for some functionality.

But unlike people, agents experience no friction when making a payment, so they can pay for things in much smaller units and increments than people will. An agent may need to call an API that they only need to use on a one-time basis or pay for information that they need without signing up for a subscription. 

This means all forms of revenue streams can emerge for technology and information providers that wouldn’t have been possible before. To make this all work, we need will need new infra and tools for agents to do this, and it’s cool to see MPP from stripe and tempo.

📈 **互动**: ❤️ 234 | 🔁 27 | 💬 34

---

### [2026/3/17 21:45:04](https://x.com/levie/status/2034023235654980049)

The official Box CLI is here. Now you can use Box via Claude Code, Codex, Perplexity Computer, OpenClaw &amp; more as a full cloud file system for agents.  Available to all users, including free users with 10GB of free storage.

npm install --global @box/cli https://t.co/0od3wPpBHo

📈 **互动**: ❤️ 513 | 🔁 29 | 💬 55

---

### [2026/3/17 03:36:36](https://x.com/levie/status/2033749314997280850)

One of the hardest jobs in the world right now must be figuring out what colleges should be teaching. The world is yelling at you from every angle that every single job is going to change forever, and you need to prepare all of your students for this. 

So what do you do?

My https://t.co/64q7ukiU6v

📈 **互动**: ❤️ 135 | 🔁 13 | 💬 32

---

### [2026/3/16 00:01:07](https://x.com/levie/status/2033332698404851860)

“AI exposed jobs may increase hiring and attract higher wages. It all depends on a) elasticity of consumer demand and b) number of AI exposed tasks in a job.”

This is a key point. We’re going to see lots of AI automation emerge that has the opposite effect that we expect, https://t.co/QyADpyEA6r

📈 **互动**: ❤️ 223 | 🔁 35 | 💬 43

---

