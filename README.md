# Landing-page Velvet Roses | Slash ft. Myles Kennedy and The Conspirators Brazil Cover

This project uses an alternative and cost-effective approach for managing subscribers and data, utilizing Google Sheets as a database and the Google API to integrate a subscription form. With this solution, it's possible to store data at no additional cost, leveraging Google's free resources, making it ideal for those who want to save on database infrastructure.

## Features
- **Subscriber Registration**: Allows users to input their data through a simple form.
  ![Example Image](https://i.imgur.com/Zm59zKE.png)
  ![Example Image](https://i.imgur.com/1CdA7yv.png)
- **Automatic Date and Time Stamp**: When new data is entered, a date and time stamp is automatically generated in Google Sheets.
  ![Example Image](https://i.imgur.com/iGdfav7.png)
- **Subscriber Count**: Each new registration increments the number of active subscribers.
- **Responsive Interface**: The frontend was built using Ionic, ensuring a smooth experience on mobile devices.

## Technologies Used

- **Next.js**: React framework for building web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing to the code.
- **Tailwind CSS**: A CSS framework for styling components.
- **PostCSS**: Tool for transforming CSS.
- **ESLint**: Linting tool for maintaining code quality.

## Project Structure

The main project structure is as follows:

- **app/**: Contains the main components of the application.
- **components/**: Includes reusable UI components.
- **lib/**: Contains helper libraries and utilities.
- **pages/**: Defines the routes of the application.
- **public/**: Public assets like images and icons.

## Installation and Usage

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:Caarlos7x/velvetroses-frontend.git
   cd velvetroses-frontend


2. **Install the dependencies**:
```
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Start the development server**:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

4. **Access the application**:

Open http://localhost:3000 in your browser to see the result.

## Contribution
Contributions are welcome! Feel free to open issues and pull requests to suggest improvements or fix bugs.

## License
This project is licensed under the MIT license. See the LICENSE file for more details.
