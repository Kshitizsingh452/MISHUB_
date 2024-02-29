# PCOS Checker with FastAPI

## Introduction

This project uses FastAPI to create a web application that checks the PCOS disease based on the images it contains. If the images are deemed "healthy" according to predefined criteria, the website is considered healthy; otherwise, it is marked as unhealthy.

## Installation

To run this application on your localhost, follow the steps below:

1. Clone the repository:

   ```sh
   git clone https://github.com/Kshitizsingh452/MISHUB_.git
   cd website
   cd front
   npm i
   npm start
   ```

   ```
   for backend
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --host 0.0.0.0 --port $PORT
   ```
   

## overview
<img width="739" alt="Screenshot 2024-02-29 at 10 46 17 AM" src="https://github.com/Kshitizsingh452/MISHUB_/assets/74282676/ae252995-a7f9-4b9c-989b-74c3a55fbe9b">
<img width="739" alt="Screenshot 2024-02-29 at 10 46 35 AM" src="https://github.com/Kshitizsingh452/MISHUB_/assets/74282676/8990ea21-9b49-4924-bbd6-38de8c671778">
<img width="739" alt="Screenshot 2024-02-29 at 10 46 47 AM" src="https://github.com/Kshitizsingh452/MISHUB_/assets/74282676/c4a085d7-a5c7-4e68-bf74-8ca0d5368959">
<img width="739" alt="Screenshot 2024-02-29 at 10 46 58 AM" src="https://github.com/Kshitizsingh452/MISHUB_/assets/74282676/173b9f5a-21f6-4f65-9258-ecfeb7af3095">

## Usage

After completing the installation steps, you can access the web application at `http://localhost:$PORT`. The application will automatically check the health of the website based on its images and provide the result.

## Configuration

The default configuration uses the predefined criteria for determining the health of a website based on its images. You can modify the criteria by editing the `config.json` file.

## Contributing

If you would like to contribute to this project, please create a pull request and we will review it.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

We would like to thank FastAPI for providing a fast and easy-to-use framework for creating web applications.
