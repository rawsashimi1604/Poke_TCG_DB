import os 
import timeit

# Make sure you are in the current directory...
start = timeit.default_timer()
print("Started seeding database...")

os.system("node type.js");
os.system("node rarity.js");
os.system("node supertype.js");
os.system("node set.js");
os.system("node card.js");

print("Finished seeding database...")
stop = timeit.default_timer()

print(f"Execution Time: {stop - start} secs");