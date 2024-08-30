import streamlit as st
import pandas as pd
import pickle
from sklearn.metrics.pairwise import cosine_similarity

# Load the datasets
freelancers_df = pd.read_csv('freelancers.csv')
jobs_df = pd.read_csv('jobs.csv')

# Load the pre-trained model and similarity matrix
with open('tfidf_vectorizer.pkl', 'rb') as f:
    tfidf_vectorizer = pickle.load(f)

with open('similarity_matrix.pkl', 'rb') as f:
    similarity_matrix = pickle.load(f)


# Function to recommend jobs for a freelancer based on their profile
def recommend_jobs_for_freelancer(freelancer_id, top_n=5):
    freelancer_idx = freelancers_df[freelancers_df['freelancer_id'] == freelancer_id].index[0]
    similarity_scores = similarity_matrix[freelancer_idx]
    top_job_indices = similarity_scores.argsort()[-top_n:][::-1]  # Get top N jobs
    recommended_jobs = jobs_df.iloc[top_job_indices]
    return recommended_jobs[['job_id', 'required_skills', 'job_description']]


# Function to recommend freelancers for a job based on job requirements
def recommend_freelancers_for_job(job_id, top_n=5):
    job_idx = jobs_df[jobs_df['job_id'] == job_id].index[0]
    similarity_scores = similarity_matrix[:, job_idx]
    top_freelancer_indices = similarity_scores.argsort()[-top_n:][::-1]  # Get top N freelancers
    recommended_freelancers = freelancers_df.iloc[top_freelancer_indices]
    return recommended_freelancers[['freelancer_id', 'name', 'skills', 'experience']]


# Streamlit app layout
st.title("Freelancer-Job AI Recommendation")

st.sidebar.title("Options")
option = st.sidebar.selectbox("Choose an action:", ("Recommend Jobs for Freelancer", "Recommend Freelancers for Job"))

if option == "Recommend Jobs for Freelancer":
    freelancer_id = st.number_input("Enter Freelancer ID", min_value=1, max_value=len(freelancers_df), value=1)
    top_n = st.slider("Number of job recommendations", min_value=1, max_value=10, value=5)

    if st.button("Get Job Recommendations"):
        recommendations = recommend_jobs_for_freelancer(freelancer_id, top_n)
        if recommendations.empty:
            st.write(f"No jobs found for Freelancer ID {freelancer_id}.")
        else:
            st.write(recommendations)

elif option == "Recommend Freelancers for Job":
    job_id = st.number_input("Enter Job ID", min_value=101, max_value=105, value=101)
    top_n = st.slider("Number of freelancer recommendations", min_value=1, max_value=10, value=5)

    if st.button("Get Freelancer Recommendations"):
        recommendations = recommend_freelancers_for_job(job_id, top_n)
        if recommendations.empty:
            st.write(f"No freelancers found for Job ID {job_id}.")
        else:
            st.write(recommendations)
