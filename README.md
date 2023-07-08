# Getting Started with my UI Components Library

This is a UI component library/toolkit built using [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://storybook.js.org/). It contains various reusable components that adhere to the given requirements.

## Getting Started

To use this UI component library in your project, follow these steps:

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) installed on your machine. You can check if you have it installed by running the following command in your terminal:

```bash
node -v
```

If you don't have Node.js installed, you can download it from [here](https://nodejs.org/en/download/).

### Installation

1. Clone the repo to your local machine:

````bash
git clone https://github.com/yifanlicode/my-components
```bash

2. Change directory to the project folder:

```bash
cd my-components
````

3.Install the dependencies:

```bash
npm install
```

### Development

To run the app in the development mode, run the following command:

```bash
npm start
```

### Building

To build the app for production, run the following command:

```bash
npm run build
```

### Testing

To launch the test runner in the interactive watch mode, run the following command:

```bash
npm test
```

This will execute the test cases for each component and display the test results.

## Introduction to Component Library

### Components Structure

Each component folder within the project follows a specific structure:

```bash
ComponentName
├── ComponentName.js
├── ComponentName.test.js
├── ComponentName.stories.js
├── index.js
└── styles.js
```

### Useage Example

To use a component in your project, import the component from the library:

```bash
import { Button } from 'my-components';
```

Then, use the component in your project:

```bash
<Button>Click Me</Button>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
