## **Type the Children**

<br>
I don't want to ruin the surprise for you, but if this workshop was solely about just strings and numbers, we'd be spending very little time together. Things can get a little bit tricky when we want to use TypeScript to specify non-primitive types—namely other React components.

It's due time that we got our first taste of that right now.

Let's start with [a super contrived example](https://codesandbox.io/p/sandbox/typing-children-forked-tsrhmd?file=%2Fsrc%2Fcomponents%2Fapplication.tsx%3A35%2C22&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqge2a010006356k4okhio4e%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqge2a010002356kej7p616s%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqge2a010003356kdydl61z6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqge2a010005356kkk848w7b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqge2a010002356kej7p616s%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqge2a000001356k6s3ab6dr%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clqgede4h0002356kglkpi6ei%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A35%252C%2522startColumn%2522%253A22%252C%2522endLineNumber%2522%253A35%252C%2522endColumn%2522%253A22%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcomponents%252Fapplication.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clqge2a010002356kej7p616s%2522%252C%2522activeTabId%2522%253A%2522clqgede4h0002356kglkpi6ei%2522%257D%252C%2522clqge2a010005356kkk848w7b%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqge2a010004356k8lvwvv9w%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clqge2a010005356kkk848w7b%2522%252C%2522activeTabId%2522%253A%2522clqge2a010004356k8lvwvv9w%2522%257D%252C%2522clqge2a010003356kdydl61z6%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqge2a010003356kdydl61z6%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D). As it stands right now, `children` has the type of `any`, which is basically an opt-out of every that TypeScript has to offer you. This isn't great.

<br>

What should you noticed about this example?

- `Box` renders `children`.
- It can render more than one child.
- That child can be another React component.
- That child can be a standard HTML element.

But, what can we use to specify that a given prop should be another React component?

<br>

Off the top of my head, here are some things that you could try.

- `JSX.Element`
- `JSX.Element[]`
- `JSX.Element | JSX.Element[]`
- `React.ReactNode`
- `React.ReactChildren`
- `React.ReactChild[]`

```tsx
type BoxProps = { children: any /* 👈 Get rid of this! */ };

const Box = ({ children }: BoxProps) => {
  return (
    <section
      className="m-4"
      style={{ padding: "1em", border: "5px solid purple" }}
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
```

<br>
