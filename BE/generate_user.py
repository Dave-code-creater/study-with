import pymongo
from faker import Faker
from hashlib import sha256

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://dat981dat:~SHPnG_EgWr3_za@cluster0.zxwedw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["65e7524f24754937097b0ab5"]  # Change "your_database_name" to your actual database name
collection = db["users"]

# Function to generate hashed password
def hash_password(password):
    return sha256(password.encode()).hexdigest()

# Function to generate user data
def generate_user():
    fake = Faker()
    name = fake.name()
    email = fake.email()
    password = fake.password(length=12)  # Adjust length as needed
    hashed_password = hash_password(password)

    return {
        "name": name,
        "email": email,
        "password": hashed_password,
        "role": "user",
        "imageURL": '<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>',
        "achievement": "Beginner",
        "createdAt": fake.date_time_this_decade(),
    }

# Generate and insert user data into MongoDB
def insert_users(num_users):
    users = [generate_user() for _ in range(num_users)]
    result = collection.insert_many(users)
    print(f"{len(result.inserted_ids)} users inserted.")

# Main function
def main():
    num_users = 100  # Change to the desired number of users
    insert_users(num_users)

if __name__ == "__main__":
    main()
