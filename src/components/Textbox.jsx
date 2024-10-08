import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import generateResponse from "../generateResponse.mjs";

const Textbox = ({ addChat }) => {
  const [query, setQuery] = React.useState("");

  const changeColor = () => {
    const textField = document.getElementsByClassName("text-field")[0];
    if (textField.style.border != "3px solid var(--primary)") {
      textField.style.border = "3px solid var(--primary)";
    } else {
      textField.style.border = "3px solid #212121";
    }
  };

  const submitQuery = async () => {
    if (query && query != "") {
      const textbox = document.getElementById("textbox");

      textbox.style.height = "32px";
      addChat({ text: textbox.value, query: true });
      const response = await generateResponse(textbox.value);
      addChat({ text: response, query: false });

      document.getElementById("textbox").value = "";
      document.getElementsByClassName("go")[0].style.color = "#424242";
      setQuery("");
    }
  };

  const textChange = (e) => {
    const textbox = document.getElementById("textbox");
    const queryText = textbox.value;
    setQuery(queryText);

    const goButton = document.getElementsByClassName("go")[0];
    if (queryText == "") {
      goButton.style.color = "#212121";
    } else {
      goButton.style.color = "var(--primary)";
    }

    textbox.style.height =
      query.length > 20 ? `${textbox.scrollHeight}px` : "32px";

    if (e.key == "Enter" && !e.shiftKey) {
      submitQuery();
    }
  };

  return (
    <div className="text-field">
      <textarea
        name="query"
        id="textbox"
        placeholder="Message Chatbot"
        onFocus={changeColor}
        onBlur={changeColor}
        onKeyDown={textChange}
      />
      <button className="go" onClick={submitQuery}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default Textbox;
