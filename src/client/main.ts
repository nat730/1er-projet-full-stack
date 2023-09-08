    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const Button = document.getElementById('Button') as HTMLButtonElement;
    const resultElement = document.getElementById('result') as HTMLParagraphElement;

    Button.addEventListener('click', async () => {
        const name = nameInput.value;
        const response = await fetch(`/hello/${name}`);
        const data = await response.text();
        resultElement.textContent = data;
    });