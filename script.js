document.getElementById('generateBtn').addEventListener('click', async function() {
    const prompt = document.getElementById('promptInput').value;
    
    if (prompt.trim() === "") {
        alert("Please enter a prompt");
        return;
    }

    try {
        // Send the text input to the backend for 3D image generation
        const response = await fetch('https://your-api-endpoint.com/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();
        const imageUrl = data.image_url;

        // Display the generated image
        const generatedImage = document.getElementById('generatedImage');
        generatedImage.src = imageUrl;
        generatedImage.style.display = 'block';
    } catch (error) {
        console.error("Error generating image:", error);
        alert("Something went wrong while generating the image.");
    }
});
