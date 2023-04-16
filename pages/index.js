import AppLayout from "../component/AppLayout";
import { Input } from "antd";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const Home = () => {
  const [model, setModel] = useState("gpt-3.5-turbo");
  const [answer, setAnswer] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  async function ask(content, model) {
    const res = await openai.createChatCompletion({
      model: model,
      messages: [{ role: "user", content: content }],
    });

    setAnswer(res.data.choices[0].message?.content);
  }

  const onSearch = (value) => {
    ask(value, model);
  };

  return (
    <AppLayout version="3.5-turbo">
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        allowClear
        enterButton="Search"
        size="large"
        style={{ margin: "20px 0" }}
      ></Input.Search>
      <Input.TextArea
        rows={20}
        placeholder="Responses from GPT will be displayed here."
        readOnly
        value={answer}
      ></Input.TextArea>
    </AppLayout>
  );
};

export default Home;
