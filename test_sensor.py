import time
import sys
import qwiic_bme68x

def run_example():
    print("\nSparkFun BME688 Sensor Test")

    # Initialize the sensor
    sensor = qwiic_bme68x.QwiicBme68x()

    # Check if connected
    if sensor.connected == False:
        print("The Qwiic BME68x device isn't connected to the system. Please check your connection", \
            file=sys.stderr)
        return

    # Initialize the sensor settings
    sensor.begin()

    print("Sensor connected! Reading data...")
    print("-" * 40)

    while True:
        # Read data from the sensor
        sensor.get_data()

        if sensor.data.status == qwiic_bme68x.QwiicBme68x.STATUS_NEW_DATA:
            print(f"Temperature: {sensor.data.temperature:.2f} deg C")
            print(f"Humidity:    {sensor.data.humidity:.2f} %RH")
            print(f"Pressure:    {sensor.data.pressure:.2f} Pa")
            # Gas resistance in Ohms (Higher = cleaner air, usually)
            print(f"Gas Res:     {sensor.data.gas_resistance:.2f} Ohms") 
            print("-" * 20)

        # Wait 1 second before next read
        time.sleep(1)

if __name__ == '__main__':
    try:
        run_example()
    except (KeyboardInterrupt, SystemExit) as exErr:
        print("\nEnding Example")
        sys.exit(0)
