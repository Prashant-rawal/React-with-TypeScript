# **Unions in typeScript**

Check this out:

```ts
const [requestStatus, setrequestStatus] = useState<
  "loading" | "error" | "success"
>("loading");

const getPosts = () => {
  setrequestStatus("loading");
  fetchPosts(count)
    .then(setQuotes)
    .then(() => {
      setrequestStatus("success");
    })
    .catch(() => setrequestStatus("error"));
};
```
