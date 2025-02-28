import time
import board
import adafruit_dht
import csv
from datetime import datetime

# Initialize the DHT11 sensor on GPIO pin 4
dht_device = adafruit_dht.DHT11(board.D4)

def get_csv_filename():
    return f"temperature_humidity_log_{datetime.now().strftime('%Y-%m-%d')}.csv"

def create_csv_file(filename):
    try:
        with open(filename, 'x', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["Timestamp", "Temperature (C)", "Temperature (F)", "Humidity (%)"])
    except FileExistsError:
        pass

while True:
    try:
        # Get current CSV filename
        csv_file = get_csv_filename()

        # Create CSV file if it doesn't exist
        create_csv_file(csv_file)

        # Read temperature and humidity
        temperature_c = dht_device.temperature
        temperature_f = temperature_c * (9 / 5) + 32
        humidity = dht_device.humidity

        # Get current timestamp
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Print the values
        print(f"{timestamp} - Temp: {temperature_c:.1f}°C / {temperature_f:.1f}°F  Humidity: {humidity}%")

        # Write data to CSV file
        with open(csv_file, 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([timestamp, f"{temperature_c:.1f}", f"{temperature_f:.1f}", humidity])

        # Wait for 5 minutes (300 seconds)
        time.sleep(300)

    except RuntimeError as error:
        # Errors happen fairly often, DHT's are hard to read, just keep going
        print(error.args[0])
        time.sleep(2.0)
