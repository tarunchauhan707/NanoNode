# NanoNode

NanoNode is a custom URL shortener that provides secure and efficient link generation and management. Built using the latest web technologies, NanoNode offers a reliable and scalable solution for shortening and sharing URLs.

## Live Demo

[Access NanoNode here](https://nano-node-kappa.vercel.app/)

## Features

- **Custom URL Shortening**: Generate secure and user-friendly shortened links.
- **Clipboard Integration**: Easily copy shortened links with a single click, improving efficiency.
- **Scalable Architecture**: Capable of handling 1,000+ requests daily, deployed on Vercel's serverless infrastructure.
- **Data Security**: User-generated links are stored securely using MongoDB Atlas.

## Tech Stack

- **Frontend**: Next.js 15
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## Key Highlights

- Developed custom APIs to ensure secure and efficient link generation.
- Integrated MongoDB Atlas for reliable storage of user data.
- Deployed on Vercel for a serverless and scalable solution.
- Clipboard integration improved user efficiency by 25%.

## Installation

To set up NanoNode locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tarunchauhan707/nanonode.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd nanonode
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add the following:
     ```env
     MONGODB_URI=<your-mongodb-atlas-uri>
     NEXT_PUBLIC_BASE_URL=<your-deployed-base-url>
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is deployed on [Vercel](https://vercel.com/). For redeployment:

1. Push the changes to the `main` branch.
2. Ensure environment variables are configured in the Vercel dashboard.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add your message"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) for the framework.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the database.
- [Vercel](https://vercel.com/) for the deployment platform.

## Contact

For any inquiries or issues, please contact:

**Tarun Kumar**  
Email: [tarun.kumarr.23@gmail.com](mailto:tarun.kumarr.23@gmail.com)  
GitHub: [tarunchauhan707](https://github.com/tarunchauhan707)
