import streamlit as st
import joblib
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load the saved model files
vectorizer = joblib.load('vectorizer.pkl')
freelancer_vectors = joblib.load('freelancer_vectors.pkl')
job_vectors = joblib.load('job_vectors.pkl')

# Dummy data for freelancers and jobs
freelancers_df = pd.DataFrame({
    'freelancer_id': [1, 2, 3, 4, 5],
    'name': ['John Doe', 'Jane Smith', 'David Brown', 'Emily White', 'Michael Green'],
    'skills': ['Python|Machine Learning|Data Science',
               'Web Development|HTML|CSS|JavaScript',
               'Graphic Design|Adobe Photoshop|Illustrator',
               'Python|Data Analysis|Pandas',
               'Content Writing|SEO|Copywriting'],
    'location': ['USA', 'UK', 'Canada', 'India', 'Australia'],
    'hourly_rate': [40, 35, 50, 30, 25],
    'experience': [3, 2, 5, 4, 3],
    'availability': ['Yes', 'No', 'Yes', 'Yes', 'No']
})

jobs_df = pd.DataFrame({
    'job_id': [101, 102, 103, 104, 105],
    'title': ['Data Scientist', 'Frontend Developer', 'Graphic Designer', 'Data Analyst', 'Content Writer'],
    'required_skills': ['Python|Machine Learning',
                        'Web Development|JavaScript|HTML',
                        'Graphic Design|Illustrator|Photoshop',
                        'Python|Data Analysis',
                        'Content Writing|SEO'],
    'location': ['USA', 'Remote', 'Canada', 'India', 'Remote'],
    'budget': [50, 40, 45, 30, 20],
    'experience_required': [3, 2, 4, 3, 1]
})


# Function to filter freelancers
def search_freelancers(skills=None, location=None, max_hourly_rate=None, min_experience=None, availability=None):
    filtered_freelancers = freelancers_df.copy()

    if skills:
        filtered_freelancers = filtered_freelancers[
            filtered_freelancers['skills'].str.contains(skills, case=False, na=False)]
    if location:
        filtered_freelancers = filtered_freelancers[filtered_freelancers['location'].str.contains(location, case=False)]
    if max_hourly_rate:
        filtered_freelancers = filtered_freelancers[filtered_freelancers['hourly_rate'] <= max_hourly_rate]
    if min_experience:
        filtered_freelancers = filtered_freelancers[filtered_freelancers['experience'] >= min_experience]
    if availability:
        filtered_freelancers = filtered_freelancers[
            filtered_freelancers['availability'].str.contains(availability, case=False)]

    return filtered_freelancers


# Function to filter jobs
def search_jobs(skills=None, location=None, max_budget=None, min_experience_required=None):
    filtered_jobs = jobs_df.copy()

    if skills:
        filtered_jobs = filtered_jobs[filtered_jobs['required_skills'].str.contains(skills, case=False, na=False)]
    if location:
        filtered_jobs = filtered_jobs[filtered_jobs['location'].str.contains(location, case=False)]
    if max_budget:
        filtered_jobs = filtered_jobs[filtered_jobs['budget'] <= max_budget]
    if min_experience_required:
        filtered_jobs = filtered_jobs[filtered_jobs['experience_required'] >= min_experience_required]

    return filtered_jobs


# Streamlit App
st.title('Freelancer & Job Search Portal')

# Search Freelancers
st.sidebar.header('Search Freelancers')
skills = st.sidebar.multiselect('Select Skills',
                                ['Python', 'Machine Learning', 'Data Science', 'Web Development', 'HTML', 'CSS',
                                 'JavaScript', 'Graphic Design', 'Adobe Photoshop', 'Illustrator', 'Content Writing',
                                 'SEO'])
location = st.sidebar.selectbox('Select Location', ['Any', 'USA', 'UK', 'Canada', 'India', 'Australia'])
max_hourly_rate = st.sidebar.slider('Max Hourly Rate', min_value=0, max_value=100, value=50)
min_experience = st.sidebar.slider('Min Experience (years)', min_value=0, max_value=10, value=3)
availability = st.sidebar.radio('Availability', ('Any', 'Yes', 'No'))

if st.sidebar.button('Search Freelancers'):
    results = search_freelancers(
        skills="|".join(skills) if skills else None,
        location=None if location == 'Any' else location,
        max_hourly_rate=max_hourly_rate,
        min_experience=min_experience,
        availability=None if availability == 'Any' else availability
    )
    st.write("## Search Results for Freelancers")
    st.dataframe(results)

# Search Jobs
st.sidebar.header('Search Jobs')
job_skills = st.sidebar.multiselect('Select Required Skills',
                                    ['Python', 'Machine Learning', 'Data Science', 'Web Development', 'HTML', 'CSS',
                                     'JavaScript', 'Graphic Design', 'Illustrator', 'Content Writing', 'SEO'])
job_location = st.sidebar.selectbox('Select Job Location', ['Any', 'USA', 'Remote', 'Canada', 'India'])
max_budget = st.sidebar.slider('Max Job Budget', min_value=0, max_value=100, value=50)
min_experience_required = st.sidebar.slider('Min Experience Required (years)', min_value=0, max_value=10, value=3)

if st.sidebar.button('Search Jobs'):
    job_results = search_jobs(
        skills="|".join(job_skills) if job_skills else None,
        location=None if job_location == 'Any' else job_location,
        max_budget=max_budget,
        min_experience_required=min_experience_required
    )
    st.write("## Search Results for Jobs")
    st.dataframe(job_results)
