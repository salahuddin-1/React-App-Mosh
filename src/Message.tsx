function Message() {
  const message = "Hello World";
  const value = true;

  if (value) {
    return <h1>{message}</h1>;
  } else {
    return null;
  }
}

export default Message;
