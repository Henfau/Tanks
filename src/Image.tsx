function Image(props: { url: string }) {
  return props.url == "fin" ? (
    <>
      <p>Wow, you reached the end!</p>
      <p>You won the war of attrition</p>
    </>
  ) : (
    <a href={props.url} target="_blank">
      <img src={props.url} className="logo" alt="A tank" />
    </a>
  );
}

export default Image;
