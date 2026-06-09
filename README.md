# Insurance Premium Prediction System

## Overview

An end-to-end Machine Learning web application that predicts insurance premium categories based on user demographics and lifestyle factors. The project integrates a Scikit-Learn model with a FastAPI backend and an HTML/CSS/JavaScript frontend for real-time predictions.

## Features

* Predict insurance premium categories in real time
* FastAPI REST API for model inference
* Pydantic-based input validation
* Feature engineering using BMI, age group, lifestyle risk, and city tier
* Responsive frontend built with HTML, CSS, and JavaScript
* JSON-based frontend-backend communication

## Tech Stack

* Python
* Scikit-Learn
* FastAPI
* Pydantic
* Pandas
* HTML
* CSS
* JavaScript

## Project Structure

```text
insurance-premium-predictor/
│
├── app.py
├── model.pkl
├── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## API Endpoint

### Predict Premium Category

**POST** `/predict`

Sample Request:

```json
{
  "age": 30,
  "weight": 70,
  "height": 1.75,
  "income_lpa": 10,
  "smoker": false,
  "city": "Mumbai",
  "occupation": "private_job"
}
```

Sample Response:

```json
{
  "predicted_category": "Low"
}
```

## How to Run

### Backend

```bash
source venv/bin/activate
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

## Future Improvements

* Docker containerization
* AWS deployment
* User authentication
* Database integration
* Advanced UI/UX improvements

## Author

Amir
