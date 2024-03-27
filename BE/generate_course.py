import pymongo
from faker import Faker
import random

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://dat981dat:~SHPnG_EgWr3_za@cluster0.zxwedw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["test"]  # Change "your_database_name" to your actual database name
collection = db["courses"]

# Function to generate course data
def generate_course():
    fake = Faker()
    title = fake.catch_phrase()
    description = fake.text(max_nb_chars=255)
    people_attend = random.randint(1, 100)
    documentation = fake.text(max_nb_chars=255)
    images_url = fake.image_url()

    return {
        "title": title,
        "description": description,
        "peopleAttend": people_attend,
        "documentation": documentation,
        "imagesURL": images_url,
        "createdAt": fake.date_time_this_decade(),
    }

# Generate and insert course data into MongoDB
def insert_courses(num_courses):
    courses = [generate_course() for _ in range(num_courses)]
    result = collection.insert_many(courses)
    print(f"{len(result.inserted_ids)} courses inserted.")

# Main function
def main():
    num_courses = 50  # Change to the desired number of courses
    insert_courses(num_courses)

if __name__ == "__main__":
    main()
