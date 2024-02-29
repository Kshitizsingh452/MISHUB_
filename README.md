PCOS Checker with FastAPI
Introduction
This project uses FastAPI to create a web application that checks the PCOS disease  based on the images it contains. If the images are deemed "healthy" according to predefined criteria, the website is considered healthy; otherwise, it is marked as unhealthy.

Installation
To run this application on your localhost, follow the steps below:

Clone the repository:


git clone https://github.com/Kshitizsingh452/MISHUB_.git
cd website

Run the frontend:
npm start
Run the backend:
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port $PORT
Usage
After completing the installation steps, you can access the web application at http://localhost:$PORT. The application will automatically check the health of the website based on its images and provide the result.

Configuration
The default configuration uses the predefined criteria for determining the health of a website based on its images. You can modify the criteria by editing the config.json file.

Contributing
If you would like to contribute to this project, please create a pull request and we will review it.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
We would like to thank FastAPI for providing a fast and easy-to-use framework for creating web applications.
