import RPi.GPIO as GPIO
import time
import csv
from datetime import datetime

# GPIO pin configuration
POWER_PIN = 12  # GPIO pin that provides power to the rain sensor
DO_PIN = 7      # GPIO pin connected to the DO pin of the rain sensor

# CSV file configuration
CSV_FILE = f"rain_log_{datetime.now().strftime('%Y-%m-%d')}.csv"

def setup():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(POWER_PIN, GPIO.OUT)
    GPIO.setup(DO_PIN, GPIO.IN)

def read_rain_sensor():
    GPIO.output(POWER_PIN, GPIO.HIGH)
    time.sleep(0.01)
    rain_state = GPIO.input(DO_PIN)
    GPIO.output(POWER_PIN, GPIO.LOW)
    return "Detected" if rain_state == GPIO.LOW else "Not Detected"

def log_rain_data():
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    rain_status = read_rain_sensor()

    with open(CSV_FILE, 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        if csvfile.tell() == 0:
            writer.writerow(["Timestamp", "Rain Status"])
        writer.writerow([timestamp, rain_status])

    print(f"{timestamp} - Rain: {rain_status}")

def main():
    setup()
    try:
        while True:
            log_rain_data()
            time.sleep(300)  # Wait for 5 minutes before next reading
    except KeyboardInterrupt:
        GPIO.cleanup()

if __name__ == "__main__":
    main()
