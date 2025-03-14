document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    document.getElementById('output').innerText += `Vous: ${input}\n`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    const botResponse = data.choices[0].message.content;
    document.getElementById('output').innerText += `Bot: ${botResponse}\n`;
    document.getElementById('input').value = '';
});
