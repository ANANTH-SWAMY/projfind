from flask import Flask, render_template, request, session, redirect, flash, url_for, abort
from flask_cors import CORS, cross_origin
from jinja2 import FileSystemLoader

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
@app.route("/home")
@app.route("/index.html")
def home():
    return render_template("index.html")


@app.errorhandler(404)
def error_404(error):
    return render_template(''), 404

@app.errorhandler(500)
def error_500(error):
    return render_template(''), 500     
#Add required routes here:


if __name__ == "__main__":
    app.run('0.0.0.0')

