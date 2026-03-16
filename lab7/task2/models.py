class Vehicle:
    
    def __init__(self, make: str, model: str, year: int):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of the {self.year} {self.make} is starting."

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"


class Car(Vehicle):
    
    def __init__(self, make, model, year, fuel_type):
        super().__init__(make, model, year)
        self.fuel_type = fuel_type

    def start_engine(self):
        return f"The {self.model} purrs quietly on {self.fuel_type}."


class Truck(Vehicle):
    
    def __init__(self, make, model, year, towing_capacity):
        super().__init__(make, model, year)
        self.towing_capacity = towing_capacity

    def start_engine(self):
        return f"The {self.make} truck roars to life with {self.towing_capacity}kg capacity!"