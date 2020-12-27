from flask import Flask, request, jsonify, render_template


import pickle
import json
import numpy as np
import os

__data_columns = ["gender", "married", "dependents", "education", "self_employed", "applicantincome",
                  "coapplicantincome", "loanamount", "loan_amount_term", "credit_history", "property_area"]

__model = None


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns

    path = os.path.dirname(__file__)
    artifacts = os.path.join(path, "artifacts"),



    # with open(artifacts[0] + "/columns.json", "r") as f:
    #     __data_columns = json.load(f)['data_columns']
    #     print("data columns", __data_columns)

    global __model
    if __model is None:
        with open(artifacts[0] + "/loan_prediction_model.pickle", 'rb') as f:
            __model = pickle.load(f)
        print("loading saved artifacts...done")


# def get_data_columns():
#     return __data_columns


load_saved_artifacts()


# if __name__ == '__main__':
# load_saved_artifacts()


def predict_loan_status_func(gender, married, dependents, edu, emp, applicant_income, co_income, loan_amount,
                             loan_term, credit_hist, property_area):
    x = np.zeros(len(__data_columns))
    x[0] = gender
    x[1] = married
    x[2] = dependents
    x[3] = edu
    x[4] = emp
    x[5] = applicant_income
    x[6] = co_income
    x[7] = loan_amount
    x[8] = loan_term
    x[9] = credit_hist
    x[10] = property_area
    return __model.predict([x])[0]


# print("The result is: ")
# print(predict_loan_status_func(0, 0, 0, 0, 0, 4547, 0.0, 1150000.0, 360.0, 1.0, 1))

    
app = Flask(__name__, static_url_path="/client", static_folder='../client', template_folder="../client")


@app.route('/hello')
def hello():
    return "Hi Checking!!"


@app.route('/', methods=["GET"])
def index():
    if request.method == "GET":
        return render_template("app.html")


@app.route('/predict_status', methods=['POST'])
def predict_status():

    applicant_income = int(request.form['applicant_income'])
    co_income = float(request.form['co_income'])
    loan_amount = float(request.form['loan_amount'])
    gender = int(request.form['gender'])
    married = int(request.form['married'])
    dependents = int(request.form['dependents'])
    edu = int(request.form['edu'])
    emp = int(request.form['emp'])
    loan_term = float(request.form['loan_term'])
    credit_hist = float(request.form['credit_hist'])
    property_area = request.form['property_area']



    response3 = predict_loan_status_func(gender, married, dependents, edu, emp, applicant_income, co_income,
                                         loan_amount, loan_term, credit_hist, property_area)


    resultk = str(response3)
    result = jsonify({'loan_status': resultk})
    return result

    print("I am after result")


if __name__ == "__main__":
    print("Starting Python Flask Server For Loan Status Prediction...")
    load_saved_artifacts()
    app.run()
    load_saved_artifacts()


