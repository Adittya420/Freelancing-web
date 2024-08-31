import pandas as pd

# Mock Freelancer Data
freelancers_data = {
    'freelancer_id': [1, 2, 3, 4, 5],
    'name': ['John', 'Emily', 'Steve', 'Laura', 'Sophia'],
    'skills': [
        'Python|Machine Learning|Data Science',
        'Web Development|HTML|CSS|JavaScript',
        'Graphic Design|Adobe Photoshop|Illustrator',
        'Python|Data Analysis|Pandas',
        'Content Writing|SEO|Copywriting'
    ],
    'hourly_rate': [50, 35, 45, 55, 25],
    'experience': [3, 2, 5, 4, 3],
    'location': ['USA', 'India', 'UK', 'Canada', 'India']
}

freelancers_df = pd.DataFrame(freelancers_data)

# Mock Job Postings Data
jobs_data = {
    'job_id': [101, 102, 103, 104, 105],
    'job_title': ['Data Scientist', 'Web Developer', 'Graphic Designer', 'Data Analyst', 'Content Writer'],
    'required_skills': [
        'Python|Machine Learning',
        'Web Development|JavaScript',
        'Graphic Design|Illustrator',
        'Data Analysis|Python',
        'Content Writing|SEO'
    ],
    'budget': [1000, 700, 600, 800, 500],
    'location': ['USA', 'India', 'UK', 'Canada', 'India']
}

jobs_df = pd.DataFrame(jobs_data)
def skill_demand_insights():
    # Flatten skills in job postings
    skills = jobs_df['required_skills'].str.split('|').explode().value_counts()
    return skills

def location_based_demand():
    # Group job demand based on location
    location_demand = jobs_df.groupby('location')['job_id'].count().reset_index()
    location_demand.columns = ['location', 'job_count']
    return location_demand

def pricing_insights():
    # Analyze pricing trends by skill (simple aggregation)
    avg_rate = freelancers_df.groupby('location')['hourly_rate'].mean().reset_index()
    avg_rate.columns = ['location', 'avg_hourly_rate']
    return avg_rate
import streamlit as st

# Display Insights using Streamlit
st.title("Freelancer Marketplace - AI-Enabled Insights")

# Skill Demand Insights
st.header("Skill Demand Insights")
skills_demand = skill_demand_insights()
st.bar_chart(skills_demand)

# Location-Based Job Demand Insights
st.header("Job Demand by Location")
location_demand = location_based_demand()
st.write(location_demand)
st.bar_chart(location_demand.set_index('location'))

# Pricing Strategy Insights
st.header("Pricing Strategy Insights")
pricing_data = pricing_insights()
st.write(pricing_data)
st.bar_chart(pricing_data.set_index('location'))

# Conclusion Section
st.header("Conclusion")
st.write("""
These insights can help freelancers and employers understand current trends in the marketplace, 
allowing for better decision-making when it comes to pricing, skill acquisition, and job targeting.
""")
