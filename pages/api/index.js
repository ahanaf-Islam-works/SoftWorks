const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body.content);
    const title = req.body.title;

    // Create a filename with the current timestamp
    const timestamp = new Date().getTime();
    const filename = `${title}.md`;

    // Define the path to the "posts" directory
    const postsDirectory = path.join(process.cwd(), 'posts');

    // Create the "posts" directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory);
    }

    // Write the markdown content to a new file in the "posts" directory
    const content = req.body.content;
    const filePath = path.join(postsDirectory, filename);
    fs.writeFileSync(filePath, content);

    // Send a successful response with status code 200
    res.status(200).json({ message: 'Post request processed successfully' });
  } else {
    // Send an error response with status code 405 (Method Not Allowed)
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
