'''
sudo pip3 install adafruit-circuitpython-ads1x15
sudo apt-get install python3-smbus
for i2c
sudo raspi-config
To check if your ADS1115 is detected, run the following command:
i2cdetect -y 1


'''
import time
import math
import board
import busio
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in import AnalogIn

class WindSensor:
    def __init__(self, out_channel, tmp_channel):
        self.wind_speed = 0
        self.temperature = 0

        # Create the I2C bus
        i2c = busio.I2C(board.SCL, board.SDA)

        # Create the ADC object using the I2C bus
        ads = ADS.ADS1115(i2c)

        # Create single-ended input on the specified channels
        self.out_chan = AnalogIn(ads, out_channel)
        self.tmp_chan = AnalogIn(ads, tmp_channel)

    def read_wind_speed(self):
        try:
            wind_ad_units = self.out_chan.value
            # Adjust the calculation for 16-bit ADC (0-65535)
            self.wind_speed = math.pow((wind_ad_units - 8192.0) / 2654.0, 3.36814)
        except Exception as e:
            print(f"Error reading wind speed: {e}")
            self.wind_speed = None
        return self.wind_speed

    def read_temperature(self):
        try:
            temp_raw_ad = self.tmp_chan.value
            # Adjust the voltage calculation for 16-bit ADC
            voltage = (temp_raw_ad * 3.3) / 65535.0
            self.temperature = ((voltage - 0.400) / 0.0195)
        except Exception as e:
            print(f"Error reading temperature: {e}")
            self.temperature = None
        return self.temperature

    def get_data(self):
        return {
            "wind_speed": self.read_wind_speed(),
            "temperature": self.read_temperature()
        }

# Usage
sensor = WindSensor(out_channel=ADS.P0, tmp_channel=ADS.P1)

try:
    while True:
        data = sensor.get_data()
        if data['wind_speed'] is not None:
            print(f"Wind Speed: {data['wind_speed']:.2f} MPH")
        if data['temperature'] is not None:
            print(f"Temperature: {data['temperature']:.2f} °C")
        time.sleep(1)
except KeyboardInterrupt:
    print("Measurement stopped by user")
