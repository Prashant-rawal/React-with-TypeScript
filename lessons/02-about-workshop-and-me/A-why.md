## Who is this for?

This workshop is for anyone who is interested in learning how to use TypeScript with React.

There is **no expectation** that you're familiar with TypeScript. That said, we're not going to be covering the basics of TypeScript directly.

And, I'm going to argue that's totally okay. Instead, we'll be learning it within the context of building simple components in React. You might even want to dig deeper into TypeScript after seeing some of the more advanced bits in practice first. That's how it worked for me at least.

If you _are_ already super comfortable with TypeScript, I have a suspicion that you'll pick up a few tips and tricks along the way—and there are plenty of React-specific pieces that I suspect you're get a lot of value from. Additionally, I also hope that it will reinforce the fundamentals for you.

## Why should I take this workshop?

I think I took my first run at TypeScript like two years ago. I definitely saw the value, but it also had a learning curve that was slowing me down a bit. I tried it—and Flow—for a spin a few more times over the years.

At first, there was a copy of copy and pasting, flailing wildly and pulling your hair and a liberal use of the `any` type.

One of the points that I'm going to try to make in this workshop is that the developer exeperience is just _that_ much better. I totally get that when you're first diving in, it can be overwhelming, but the very first time that you are in the middle of a reasonably-sized reactor and as soon as you appease the compiler, it just works—you'll be sold.

As soon as the compiler catches a silly little mistake that might have slipped by your teammates and your tests—you'll be sold. Most of the time when it seems like TypeScript is being pendantic, it's usually just trying to save you from yourself. It's like pair programming with someone who doesn't talk too much.

But, here are the quick soundbyte versions that you'll probably find in every other blog post on the Internet.

- **Type checking at _compile time_** is way better than things crashing or—worse—behaving unexpectedly at run time.
- You get a **better development experience** (read: autocomplete and/or Intellisense) because autocomplete knows more about what you’re intending on doing.
- **Large codebases stay more maintainable** because you’re able to put guardrails on how your code can be used. It's easy to make some quip about your teammates, but we all know that the real culprit is that one last commit you tried to squeeze in at the end of day.
  - But also, the upside of having a compiler that can constantly scan an increasingly growing codebase at lightning speed can't be understated.

## What's about to go down?

We're going to spend a little bit starting with the _very basics_ of using TypeScript and React together. Part of this is in case this is your first experience with TypeScript. Part of this is because I want to lay down a decently solid foundation and make sure we're all on the same page. But, part of this is because I want to establish this **core principle**.

> Sometimes the best way to figure out how to use TypeScript in a React application is to use the tooling while you're building our your React application.

Theory is great and you should totally learn the fundamentals but there is nothing like using the thing you're building to learn more about the tools you're buidling with and I want to argue that _in this particular case_ the tooling is _particularly_ great way to learn about how to use TypeScript in React.

But, by the end things are going to escalate to implementing some very advanced patterns that typically leave our friends who didn't make the investment getting the fundamentals to want to throw in the towel. We're going to stop short of the _really academic_ stuff that is probably only useful to people building _super generalized_ libraries that are intended for a wide-range of use cases. (Types for libraries like [Styled Components](https://github.com/DefinitelyTyped/DefinitelyTyped), design systems like [Material U](https://github.com/mui/material-ui), and [React's own types](https://github.com/DefinitelyTyped/DefinitelyTyped) come to mind.) In practice, I've needed some of these patterns far less often than a lot of blog posts would seem to suggest.

Here is the high level:

- Things are going to start fairly simply for those of us who have used React before. We'll be passing props into components and setting some state.
- By the end of our time together we'll be dynamically typing extending the built-in types for DOM elements that we know and—sometimes—love. adding type safety—and more importatly, autocomplete—to higher-order components, and creating type guards that prevent our components from ending up in unexpected states.

## Getting set up

You don't need a lot to get rocking and/or rolling with this workshop. In fact, most of the examples and exercises have here and i will demonstarte with code.

But, let's assume that you also want to work on some of this stuff locally as well. In that case, you're going to want to have the following installed:

- [NodeJS](https://nodejs.org/). This workshop was tested using the latest LTS release of Node at the time (e.g. 18.12.1), but it honestly shouldn't matter much.
- You're going to need an editor of some kind. I **highly recommend** using [Visual Studio Code](https://code.visualstudio.com/). But, you likely already have opinions on this topic—but that's going to be what I'm using.

## My set up

In case you're morbidly curious about what I'm using as we spend the next several hours together, here is a quick rundown of my setup.

- **Font**: [Dank mono](https://github.com/tonsky/FiraCode). It's basically a version of mono  but with fancy ligatures. Why? Because it looked nice when I saw in like 2015 and I'm _very_ lazy.

- **Theme**: [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)

- **Plugins**: I don't install a lot of plugins, but here are some of the ones that I like:  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Who am I?

Hello! My name is [Prashant Rawal](https://stevekinney.net/) and I am a Team Lead at [Tridhya Tech](https://www.tridhyatech.com/). we help in End-to-end Digital Transformation Enabled for Enterprises.

In the past, I was the Scientist B at [ISRO](https://www.isro.gov.in/) and was the Senior software Engineer at [tecxar pvt ltd](https://tecxar.io/).before that i have worked in various other service based companies too like [Intuz](https://www.intuz.com/)
and [riviatechke](https://riviatechs.com/)

I live in Ahmedabad, gujrat. If you are so inclined to find me on the Internet, you may do so at the following locations:

- [Github](https://github.com/IAmCuriousDeveloper)
- [Instagram](https://instagram.com/leaderwithoutatitle?igshid=MTNiYzNiMzkwZA==)

Alright, with all of that out of the way, **let's get started**
