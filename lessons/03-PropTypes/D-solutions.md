## **SOLUTIONS**

You can switch the file type in your editor or you from the command line. Whatever makes you happy.

```sh
git mv src/components/controls.jsx src/components/controls.tsx
```

And now, TypeScript is angry with us. Luckily, we've seen this error before, so we shouldn't be too surprised.

Our props are missing type information. That's information that we're more than happy to provide.

Let's start by creating a type with the `name` and then we'll figure out what to do with that event handler.

```tsx
type ControlPanelProps = {
  name: string;
  onChange: any;
};

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  // …
};
```

That'll work, but using `any` is missing the point. We're doing all of this work for the reassurances that TypeScript gives us. It doesn't make sense to opt out so soon.

The only thing we're doing with our `onChange` handler is we're passing it to the `<input />` element. So, it just needs to be the same type the input field.

If we hover of the `onChange` property on the `<input />` element, we see something interesting.

Let's break down that's happening:

- `React.InputHTMLAttributes<HTMLInputElement>` is the `<input />` element. We're getting that information from React's own type definitions.
- `.onChange?` is an optional property that `<input />` elements take, but we knew that already. That `?` means it's an optional prop.
- `React.ChangeEventHandler<HTMLInputElement> | undefined` is the type it's expecting.
  - The `| undefined` means that it _could_ be `undefined`, which meanes sense since it's optional.
- This means, that the type is `React.ChangeEventHandler<HTMLInputElement>`.

```tsx
type ControlPanelProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
```

We can shorted this a bit if we want.

```tsx
import { ChangeEventHandler } from "react";

type ControlPanelProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  // …
};

export default ControlPanel;
```

## Adding an another prop to `NameBadge`

Adding another prop is fairly straight-forward:

```tsx
type NameBadgeProps = {
  name: string;
  greeting: string;
};

const NameBadge = ({ name, greeting }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
```

And we can update `Application` accordingly:

```tsx
import NameBadge from "./name-badge";

const Application = () => (
  <main className="application">
    <NameBadge name={"Prashant"} greeting="ola" />
  </main>
);

export default Application;
```

## Making props option

It would be cool if it would default to "hello" and then could omit `greeting` if we didn't want to customize it. We can assign it a sensible default.

```tsx
const NameBadge = ({ name, greeting = "Yo" }: NameBadgeProps) => {
  // …
};
```

But, we still get yelled at if we try to remove the property in `src/components/application.tsx`.

I will say: That is a pretty helpful error message. Even better, the fix is simple. A few seconds ago, I casually mentioned that React used a `?` to denote that a property was optional. We can do the same thing.

```tsx
type NameBadgeProps = {
  name: string;
  greeting?: string;
};
```
