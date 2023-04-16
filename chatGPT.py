import openai
import os

openai.api_key = "OPENAI_API_KEY"
model_name = "gpt-3.5-turbo"
# model_name = "gpt-4"

req = "question"

resp = openai.ChatCompletion.create(
    model=model_name,
    messages=[
        {"role": "user", "content": req}
    ]
)

print(resp.choices[0]["message"]["content"].strip())
