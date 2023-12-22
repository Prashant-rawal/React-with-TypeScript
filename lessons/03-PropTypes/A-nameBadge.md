# TypeScript without TypeScript

<br>

**Alternative title**: Using TypeScript with Intellisense.

We're going to start off in [this codeSandbox repository](https://codesandbox.io/p/sandbox/namebadge-tp47tn?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqaoksbe0006356lwehtcfji%2522%252C%2522sizes%2522%253A%255B72.97723292469352%252C27.022767075306476%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqaoksbd0002356lm7a4aaqi%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqaoksbd0003356lvmzz5ay6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqaoksbd0005356l6tg7ebcq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50.77354018530489%252C49.22645981469511%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqaoksbd0002356lm7a4aaqi%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqaoksbd0001356liuqlefa3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpublic%252Findex.html%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clqaoksbd0002356lm7a4aaqi%2522%252C%2522activeTabId%2522%253A%2522clqaoksbd0001356liuqlefa3%2522%257D%252C%2522clqaoksbd0005356l6tg7ebcq%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqaoksbd0004356liahlr3lc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clqaoksbd0005356l6tg7ebcq%2522%252C%2522activeTabId%2522%253A%2522clqaoksbd0004356liahlr3lc%2522%257D%252C%2522clqaoksbd0003356lvmzz5ay6%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqaoksbd0003356lvmzz5ay6%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) for the time being.

Alright, let's start simple here and play a fun game: Is the component below written in JavaScript or TypeScript?

```tsx
const NameBadge = () => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">Prashant Rawal</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
```

The correct answer is "yes." If we're being pedantic, since the file ends in `.tsx`, it's _technically_ TypeScript, but if I changed the file extension to `.jsx`, it would be perfectly fine. (Franky, other than all the `className` attributes, it could just be HTML with a little tweaking. There isn't really much going on with this component.)

This is one of the core principles that I want us to remember during our time together: Generally speaking, **TypeScript tries its best to get our of your way**. It will do it's best to figure out what's going on. You only need to step in when it can't figure it out on your behalf.

But, you will notice that Visual Studio Code's Intellisense is trying its best to figure out the types for you. If you hover over `NameBadge`, you'll see the following:

```ts
const NameBadge: () => JSX.Element;
```

This makes sense. Functions are valid React components these days and since we're returning JSX, it deduced that the return type of this function is a `JSX.element`.

For fun, let's add a simple little function at the bottom of the file just to confirm our suspicions.

```ts
const four = () => 2 + 2;
```

If you hover this function, you'll see:

```ts
const four: () => number;
```

We didn't have to give the function a return type. TypeScript figured it out. It analyzed the function and saw that there is only one kind of value that is ever coming out of the function—a number. So, it went ahead and typed it for us.

If we add some chaos to the equation, you'll see that TypeScript respects the confusion that you caused.

```diff
 const NameBadge = () => {
+  if (Math.round(Math.random())) return null;
   return (
```

Now, TypeScript tells us that this function will give us either a `JSX.Element` _or_ it's going to give us `null` depending on which way the winds blow.

```ts
const NameBadge: () => JSX.Element | null;
```
